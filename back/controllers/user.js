const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require ('bcrypt');


module.exports = {

    register : async(req,res) => {
        const{name,lastName,email,password,phone} = req.body;
        try{
            const newUser = new User({name,lastName,email,password,phone});
            // check if the email exist 
            const searchedUser = await User.findOne({email});
            if(searchedUser) return res.status(400).send({msg:"email already exist"});
            // hash password 
            const salt = 10;
            const genSalt = await bcrypt.genSalt(salt);
            const hashedPassword = await bcrypt.hash(password,genSalt);
            newUser.password = hashedPassword;
            
            const newUserToken = await newUser.save();
            const payload = {
                _id:newUserToken._id,
                name:newUserToken.name,
            };
            const token = await jwt.sign(payload,process.env.SecretOrKey,{expiresIn:3600});
            res.status(200).send({user:newUserToken,msg:"user is saved",token:`Bearer ${token}`});
        }catch(error){
            res.status(500).send("can not save the user");
        }
    },

    login: async(req,res) =>{
        const {email,password} = req.body;
        try{
            const searchedUser = await User.findOne({email});
            if(!searchedUser) return res.status(400).send({msg:"bad Credential"});
            const  match = await bcrypt.compare(password,searchedUser.password);
            if(!match) return res.status(400).send({msg:"bad Credential"});
            const payload = {
                _id:searchedUser._id,
                name:searchedUser.name,
            };
            const token = await jwt.sign(payload,process.env.SecretOrKey);
            res.status(200).send({user:searchedUser,msg:"success",token:`Bearer ${token}`});
        }catch(error){
            console.log(error)
            res.status(500).send({msg:"can not get the user"});
        }
    },
    
    current :async(req,res) =>{
        res.status(200).send({user:req.user});
    },

    update : async(req,res) => {
        try{
          const result= await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
          res.send("user updated")
        }catch(error){
            res.status(400).send({message:"No user with this id"})
        }
    },
    getAll : async(req,res)=>{
        try{
            const result = await User.find()
            res.send({response:result,message:"Geting Users successful"})
        }catch(error){
            res.status(400).send({message:"Can not get Users"})
        }
    },
    delete: async (req, res) => {
        try {
          const result = await User.findByIdAndDelete({ _id: req.params.id });
          res.send("user deleted");
        } catch (error) {
          res.send({ msg: "cannot delete user" });
        }
    },
    getOneById : async(req,res)=>{
        try{
            const result = await  User.findOne({_id:req.params.id})
            res.send({response:result,message:"Geting user successful"})
        }catch(error){
            res.status(400).send({message:"There is no user"})
        }
    },


}