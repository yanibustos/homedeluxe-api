const User = require("../models/User");

const pagesController = { 
  userProfile: async (req, res) =>  
  {
    try {
      const { id } = req.params;
      const user = await User.findById(id)
      if (!user) res.status(404).json({ msg: "User not found" });
      return res.json({ user });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
   }
}


module.exports = pagesController;
