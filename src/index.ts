import routes from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.SERVER_PORT, async () => {
    console.log('Server ready!');
    mongoose.set('useCreateIndex', true)
    await mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database ready!');

    console.log(`Listening on port ${process.env.SERVER_PORT}`);
});