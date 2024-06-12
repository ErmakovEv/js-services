import connectMongoDB from '../../utils/mongodb';
import StockModel from '../../models/Stock';
import { NextResponse } from 'next/server';

/*
For testing DB
*/

export async function GET() {
  try {
    // Подключаемся к базе данных
    await connectMongoDB();

    // Получаем данные из коллекции stock
    const stocks = await StockModel.aggregate([{ $sort: { createdAt: -1 } }]);

    // Возвращаем успешный ответ с данными
    return NextResponse.json(stocks, { status: 200 });
  } catch (error) {
    // Логируем ошибку в консоль для отладки
    console.error('Error fetching data:', error);

    // Возвращаем ответ с ошибкой
    return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
  }
}
