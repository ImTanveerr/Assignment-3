import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const port = 5000;

async function main() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log('MongoDB is connected');

    app.listen(port, () => {
      console.log(`Server started successfully and running on port ${port}`);
    });
  } catch (error) {
    console.log('Error: Something went wrong', error);
  }
}

main();
