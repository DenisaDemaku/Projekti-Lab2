import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  title: String,
  description: String,
  imageCDN: String,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
});

export const BrandModel = mongoose.model('brands', BrandSchema );