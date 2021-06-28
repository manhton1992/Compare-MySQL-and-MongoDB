import mongoose from 'mongoose';

const {
  MONGO_INITDB_USERNAME,
  MONGO_INITDB_PASSWORD,
  MONGO_INITDB_PORT,
  MONGO_INITDB_DATABASE
} = process.env;

const MONGO_HOSTNAME = 'localhost';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_INITDB_PORT}/${MONGO_INITDB_DATABASE}?authSource=admin`;

export const db_connect = mongoose.connect(url, options).then( function() {
  console.log('MongoDB is connected');
})
  .catch( function(err: any) {
  console.log(err);
});
