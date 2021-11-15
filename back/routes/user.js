const express = require("express");
const router = express.Router();
const controllers = require('../controllers/user');
const {loginRules,registerRules,validation} = require('../middleware/validator');
const isAuth = require('../middleware/passport');


//test
// router.get("/",(req,res)=>{
//     res.send("hheloo");
// });


// register
router.post("/register", registerRules(),validation,controllers.register);

// login 
router.post("/login", loginRules(),validation,controllers.login);

// current
router.get("/current",isAuth(),controllers.current);

//@Methode PUT
//@desc update one contact by id
//@Path:http://localhost:5000/api/contact/:id
//@Params id Body
router.put("/:id",controllers.update);

//@Methode GET
//@desc GET all trajets
//@Path:http://localhost:5000/api/trajet
router.get("/",controllers.getAll);


router.delete("/:id",controllers.delete);


//@Methode GET
//@desc GET one contact by id
//@Path:http://localhost:5000/api/contact/:id
//@Params id
router.get("/:id",controllers.getOneById);

module.exports = router;