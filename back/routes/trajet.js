const express = require("express");
const router = express.Router();
const controllers = require('../controllers/trajet');
// const isAuth = require('../middleware/passport');




//@Methode POST
//@desc POST trajet
//@Path:http://localhost:5000/api/trajet
router.post("/",controllers.postTrajet);


//@Methode GET
//@desc GET all trajets
//@Path:http://localhost:5000/api/trajet
router.get("/",controllers.getAll);



//@Methode GET
//@desc GET one trajet by id
//@Path:http://localhost:5000/api/trajet/:id
//@Params id
router.get("/:id",controllers.getOneById);


//@Methode DELETE
//@desc DELETE ONE trajet by id
//@Path:http://localhost:5000/api/trajet/:id
//@Params id
router.delete("/:id",controllers.delete);


//@Methode PUT
//@desc update one trajet by id
//@Path:http://localhost:5000/api/trajet/:id
//@Params id Body
router.put("/:id",controllers.update);



module.exports = router;