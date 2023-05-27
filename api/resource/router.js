// `/api/resources` router buraya
const router = require("express").Router();
const resourceModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const allResources = await resourceModel.getAll();
    res.json(allResources);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let resource = {
      resource_name: req.body.resource_name,
      resource_description: req.body.resource_description,
    };
    const insertedResource = await resourceModel.create(resource);
    res.status(201).json(insertedResource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
