import express from 'express';
import indexRouter from './routes/index.js';
import newRouter from './routes/new.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use("/new", newRouter);
app.set('view engine', 'ejs');

app.listen(3001, (err) => {
  if (err) throw err;
  console.log(`Server running on port 3001`);
});