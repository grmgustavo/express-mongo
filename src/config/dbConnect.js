import mongoose from "mongoose";

//mongoose.connect("mongodb+srv://root:123@cluster0.fphtd89.mongodb.net/alura-node");
mongoose.connect('mongodb://localhost:27017/aluranode')

const db = mongoose.connection;

export default db;
