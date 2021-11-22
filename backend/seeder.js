import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import places from './data/data.js';
import Place from './models/placeModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Place.deleteMany();
    await Place.insertMany(places);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Place.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
