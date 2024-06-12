import mongoose from 'mongoose';

const connectMongoDB = async () => {
  const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : '';

  try {
    await mongoose.connect(uri, {
      dbName: 'hrTest',
    });
    console.log('Connect to DB');
  } catch (error) {
    console.error("Don't connect to DB", error);
  }
};

export default connectMongoDB;
