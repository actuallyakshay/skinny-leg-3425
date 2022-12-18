const mongoose = require("mongoose");

module.exports = connect = async () => {
  return await mongoose.connect(
    `mongodb+srv://actuallyakshay:akshay@cluster0.eifrxaw.mongodb.net/Pharmaeasy?retryWrites=true&w=majority`
  );
};
