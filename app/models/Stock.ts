import mongoose, { Schema, model } from 'mongoose';

// Определение вложенной схемы для поля engine
const engineSchema = new Schema({
  power: Number,
  volume: Number,
  transmission: String,
  fuel: String,
});

// Определение основной схемы данных для коллекции stock
const stockSchema = new Schema({
  mark: String,
  model: String,
  engine: engineSchema, // Используем вложенную схему для поля engine
  drive: String,
  equipmentName: String,
  price: Number,
  createdAt: Date,
});

// Создание модели данных и связывание с коллекцией MongoDB
const StockModel = mongoose.models.Stock || model('Stock', stockSchema, 'stock');

export default StockModel;
