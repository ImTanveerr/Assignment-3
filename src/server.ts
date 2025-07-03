/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = 5000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/libraryDB';

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error('Connection failed:', err));*/




  import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const port = 5000;

async function main() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('MongoDB connected');

        app.listen(port, () => {
            console.log(`Server is listening to port ${port}`);
        });
    } catch (error) {
        console.log('Error in main function in server.ts', error);
    }
}

main();