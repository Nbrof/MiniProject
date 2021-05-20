const { Schema, model} = require("mongoose");

const tunrSchema = new Schema(
    {
      title: {type: String, required: true},
      artist: {type: String, required: true},
      time: {type: String, required: true}
        
    },
    { timestamps: true }
);


const Tunr = model("tunr", tunrSchema);

module.exports = Tunr;