import mongoose from 'mongoose';

const connection = async () => {
  const URL = `mongodb+srv://admin:admin@curd-app.macgqd1.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('database connected successfully');
  } catch (error) {
    console.log('error while connecting with database', error);
  }
};
export default connection;
