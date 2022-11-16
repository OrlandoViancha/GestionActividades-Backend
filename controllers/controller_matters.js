const Matter = require("../models/matter");

const getMatters = async (req, res, next) => {
  try {
    const result = await Matter.find({});

    res.send({ result: result });
  } catch (error) {
    res.sendStatus(500);
  }
};

const getMatter = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Matter.find({ _id: id });

    res.send({ result: result });
  } catch (error) {
    res.sendStatus(500);
  }
};

const addMatter = async (req, res, next) => {
  try {
    const matter = new Matter(req.body);

    const result = await matter.save();

    res.sendStatus(200);
  } catch (error) {

    res.sendStatus(500);
  }
};


module.exports = { getMatters, getMatter,addMatter };
