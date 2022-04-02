import mongoose from 'mongoose';


const connectDB = (url: string | undefined) => {
  if (!url) return mongoose.connect(process.env.MONGO_URI!);
  return mongoose.connect(url);
};

export default connectDB;