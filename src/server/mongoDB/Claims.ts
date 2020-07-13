import mongoose from "mongoose";
const Schema = mongoose.Schema;

const claimShema = new Schema({
    login: String,
    description: String,
    value: String
});

mongoose.connect("mongodb://localhost:27017/claims", { useNewUrlParser: true, useUnifiedTopology: true });

export const Claim = mongoose.model("Claim", claimShema);