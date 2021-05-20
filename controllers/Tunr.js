const router = require("express").Router();

const { Router } = require("express")

const Tunr = require ("../models/tunr")

const tunrSeed = [
  {
    title: "What I Need",
    artist: "Haley Kiyoko",
    time: "5:29"
  },
  {
    title: "Don't Tempt Me",
    artist: "MiC LOWRY",
    time: "3:27"
  },
  {
    title: "Ridin Solo (Arvfz Remix)",
    artist: "Njomza",
    time: "3:02"
  },
];



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

