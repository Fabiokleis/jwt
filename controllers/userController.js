const User = require('../models/userModel.js');

const userController = {

    register: async (req, res) => {
       
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        try{
            const savedUser = await user.save();
            res.status(200).send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
    },

    login: async (req, res) => {
        res.send("hello and sign in");
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
