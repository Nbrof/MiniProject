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


 //Index route  
  router.get("/", async (Req, res) => {
    try {
      const songs = await Tunr.find({});
      res.json(songs);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Create route 
  router.post("/", async (req, res) => {
    try {
      const newSongs = await Tunr.create(req.body);
      res.json(newSongs);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  //Update route
  router.put("/:id", async (req, res) => {
    try {
      const updatedSongs = await Tunr.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedSongs);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Delete route
  router.delete("/:id", async (req, res) => {
    try {
      const deletedSongs = await Tunr.findByIdAndRemove(req.params.id);
      res.json(deletedSongs);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  module.exports = router
