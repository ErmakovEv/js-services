'use server';
import connectMongoDB from '../utils/mongodb';
import StockModel from '../models/Stock';
import Car from '../types/Car';

export async function getMarks() {
  await connectMongoDB();
  const marks = await StockModel.aggregate([{ $group: { _id: '$mark', count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);
  return marks;
}

export async function getModels(mark: string) {
  await connectMongoDB();
  const models = await StockModel.aggregate([
    { $match: { mark } },
    { $group: { _id: '$model', count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  return models;
}

export async function getCars(
  mark: string,
  models: string[],
  page: number = 1,
  limit: number = 10
): Promise<{ cars: Car[]; total: number }> {
  await connectMongoDB();
  const query: any = {};
  if (mark) query['mark'] = mark;
  if (models.length > 0) query['model'] = { $in: models };

  const cars = await StockModel.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean()
    .exec();

  const total = await StockModel.countDocuments(query);

  const formattedCars: Car[] = cars.map((car) => ({
    _id: car._id ? car._id.toString() : '',
    mark: car.mark || '',
    model: car.model || '',
    engine: {
      power: car.engine?.power || 0,
      volume: car.engine?.volume || 0,
      transmission: car.engine?.transmission || '',
      fuel: car.engine?.fuel || '',
    },
    drive: car.drive || '',
    equipmentName: car.equipmentName || '',
    price: car.price || 0,
    createdAt: car.createdAt?.toISOString() || '',
  }));

  return { cars: formattedCars, total };
}
