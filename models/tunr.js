const { Schema, model} = require("mongoose");

const tunrSchema = new Schema(
    {
      title: String,
      artist: String,
      time: String
        
    },
    { timestamps: true }
);


const Tunr = model("tunr", tunrSchema);

module.exports = Tunr;