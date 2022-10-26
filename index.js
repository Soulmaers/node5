import express from 'express';
import { PORT } from './config.js'
import { router as books } from './routes/books.js'
import { router as user } from './routes/user.js'
import { logger } from './middleware/logger.js'
import { error as error404 } from './middleware/error.js'

const app = express();

app.use(logger);

app.use('/api/books', books);
app.use('/api/user', user);

app.use(error404);

app.listen(PORT);