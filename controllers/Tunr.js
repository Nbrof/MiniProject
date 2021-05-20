const router = require("express").Router();

const { Router } = require("express")

const Tunr = require ("../modelsTunr")

const tunrSeed = [




]



//Seed Route

router.get("/seed", async (req, res) => {
    try {
      await Tunr.remove({});
      await Tunr.create(tunrSeed);
      const tunrs = await Tunr.find({});
      res.json(tunrs);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  
  router.get("/", async (Req, res) => {
    try {
      const foods = await Food.find({});
      res.json(foods);
    } catch (error) {
      res.status(400).json(error);
    }
  });

