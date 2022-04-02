import mongoose from 'mongoose';

export const connectionString = 'mongodb+srv://kolomoyets:Nikolak05092001@project-zigzag.ybvor.mongodb.net/zigzag?retryWrites=true&w=majority';

const connectDB = (url: string | undefined) => {
  if (!url) return mongoose.connect(connectionString);
  return mongoose.connect(url);
};

export default connectDB;