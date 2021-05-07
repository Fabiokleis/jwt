const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');

const userController = {

    register: async (req, res) => {
       
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });

        try{
            const savedUser = await user.save();
            res.status(200).send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
    },

    login: async (req, res) => {
        const email = req.body.email;
        const passwd = req.body.password;

        try{
            const queryUser = await User.findOne({email});
            if(!queryUser){
                return res.status(400).send("email or password incorrect!");
            }
            const hashReturn = bcrypt.compareSync(passwd, queryUser.password)
            if(!hashReturn){
                return res.status(400).send("email or password incorrect!!");
            }
            res.status(200).send("logged");
        }catch(err){
            console.log(err);
            res.status(400).send(err.message);
        }
           },
    deleteUser: async (req, res) => {
        const id = req.body.id;
        try{
            const deletedUser = await User.findByIdAndDelete(id);
            res.status(200).send(deletedUser);
        }catch(err){
            res.status(404).send(err);
        }
    },

}
module.exports = userController;
