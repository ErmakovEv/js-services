import connectMongoDB from '../../utils/mongodb';
import StockModel from '../../models/Stock';
import { NextResponse } from 'next/server';

// For testing DB

export async function GET() {
  try {
    await connectMongoDB();

    const stocks = await StockModel.aggregate([{ $sort: { createdAt: -1 } }]);

    return NextResponse.json(stocks, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
  }
}
