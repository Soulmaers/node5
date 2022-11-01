import express from 'express';
import { PORT } from './config.js'
import { router as books } from './routes/books.js'
import { router as user } from './routes/user.js'
import { router as main } from './routes/index.js'
import { router as api } from './routes/api.js'
import { logger } from './middleware/logger.js'
import { error as error404 } from './middleware/error.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/load', express.static(__dirname + '/load'))

app.use(logger);

app.use('/', main);
app.use('/api/books', books);
app.use('/api/user', user);
app.use('/api', api);

app.use(error404);

app.listen(PORT);