const Trajet = require("../models/trajet");


module.exports = {

    postTrajet : async(req,res)=>{
        try{
            const newTrajet = new Trajet({...req.body});
            if(!req.body.depart || !req.body.arrive || !req.body.date_dep || !req.body.nombredepassage || 
                !req.body.prix || !req.body.modelvoiture || !req.body.couleurvoiture){
                res.status(400).send({message:"bad credential"});
                return;
            }
            const response =  await newTrajet.save();
            res.send({response:response,message:"tarjet added"})
        }catch(error){
            console.log(error);
            res.status(500).send({message:"Can not save"});
        }
    },

    getAll : async(req,res)=>{
        try{
            const result = await Trajet.find()
            res.send({response:result,message:"Geting trajets successful"})
        }catch(error){
            res.status(400).send({message:"Can not get trajets"})
        }
    },

    getOneById : async(req,res)=>{
        try{
            const result = await Trajet.findOne({_id:req.params.id})
            res.send({response:result,message:"Geting trajet successful"})
        }catch(error){
            res.status(400).send({message:"There is no trajet"})
        }
    },

    delete : async(req,res)=>{
         
        try{
            const result = await Trajet.deleteOne({_id : req.params.id});
            console.log(result);
            result.deletedCount? res.send("trajet deleted successful"):res.send("There is no trajet with this id"); 
        }catch(error){
            res.send({message:"There is no trajet"})
        }
    },

    update : async(req,res) => {
        try{
            const result = await Trajet.updateOne({_id:req.params.id},{$set:{...req.body}});
            result.modifiedCount?res.send({message:"trajet updated"}):res.send({message:"trajet already updated"});
        }catch(error){
            res.status(400).send({message:"No trajet with this id"})
        }
    }
}