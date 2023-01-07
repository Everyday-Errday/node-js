import * as schedule from "node-schedule";
import * as express from 'express';

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.get('/items', (req, res) => {
  res.send("hi");
});

const job = schedule.scheduleJob('10 * * * * *', (fireDate: Date) => {
  console.log('10따리' + fireDate);
});

const job1 = schedule.scheduleJob('20 * * * * *', (fireDate: Date) => {
  console.log('20따리' + fireDate);
});

const job2 = schedule.scheduleJob('30 * * * * *', (fireDate: Date) => {
  console.log('30따리' + fireDate);
});

const job3 = schedule.scheduleJob('40 * * * * *', (fireDate: Date) => {
  console.log('40따리' + fireDate);
});

const job4 = schedule.scheduleJob('50 * * * * *', (fireDate: Date) => {
  console.log('50따리' + fireDate);
});

const job5 = schedule.scheduleJob('0 * * * * *', (fireDate: Date) => {
  console.log('50따리' + fireDate);
}); 