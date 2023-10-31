
const university = require("../models/universities");
const config = require("../pkg/config");

const getAll = async (req, res) => {
  try {
    const data = await university.getAll(req.auth.id);
    return res.status(200).send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};


const create = async (req, res) => {
  try {
    const newPost = await university.create(data);
    return res.status(200).send(newPost);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const update = async (req, res) => {
  try {
  
    await university.update(req.params.id, data);
    return res.status(204).send("Update successful");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const remove = async (req, res) => {
  try {
    await university.remove(req.params.id);
    return res.status(200).send("Deleted successful");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};

module.exports = {

};
