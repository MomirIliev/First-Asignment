const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({

  name: String, 
  adress: String, 
  university:  {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "University",
  },
  title: String,
  content: String,
});

const Post = mongoose.model("faculty", facultySchema, "faculties");

const getAll = async (account_id) => {
  return await Post.find({ account_id });
};

const create = async (data) => {
  const post = new Post(data);
  return await post.save();
};

const update = async (id, data) => {
  return await Post.updateOne({ _id: id }, data);
};
const remove = async (id) => {
  return await Post.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
