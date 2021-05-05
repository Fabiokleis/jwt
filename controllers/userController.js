const userController = {

    register: async (req, res) => {
        res.send("hello new user");
    },

    login: async (req, res) => {
        res.send("hello and sign in");
    }

}
module.exports = userController;
