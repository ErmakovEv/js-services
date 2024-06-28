import mongoose, { Schema, model } from 'mongoose';

const engineSchema = new Schema({
  power: Number,
  volume: Number,
  transmission: String,
  fuel: String,
});

const stockSchema = new Schema({
  mark: String,
  model: String,
  engine: engineSchema,
  drive: String,
  equipmentName: String,
  price: Number,
  createdAt: Date,
});

const StockModel = mongoose.models.Stock || model('Stock', stockSchema, 'stock');

export default StockModel;

//test
