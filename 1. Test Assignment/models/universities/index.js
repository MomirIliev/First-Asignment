const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: String,
  adress: String, 
  
  faculties: [String],
});

const University = mongoose.model("accounts", universitySchema);

const create = async (acc) => {
  const account = new University(acc);
  return account.save();
};

const getAll = async () => {
  return await University.find({});
};

const update = async (id, newData) => {
  return await Account.updateOne({ _id: id }, newData);
};

const remove = async (id) => {
  return await Account.deleteOne({ _id: id });
};

module.exports = {
  create,
  update,
  remove,
  getAll,

};
