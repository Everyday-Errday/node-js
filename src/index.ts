import * as schedule from "node-schedule";

const job = schedule.scheduleJob('10 * * * * *', function(fireDate: Date){
  console.log('10따리' + fireDate);
});

const job1 = schedule.scheduleJob('20 * * * * *', function(fireDate: Date){
  console.log('20따리' + fireDate);
});

const job2 = schedule.scheduleJob('30 * * * * *', function(fireDate: Date){
  console.log('30따리' + fireDate);
});

const job3 = schedule.scheduleJob('40 * * * * *', function(fireDate: Date){
  console.log('40따리' + fireDate);
});

const job4 = schedule.scheduleJob('50 * * * * *', function(fireDate: Date){
  console.log('50따리' + fireDate);
});

const job5 = schedule.scheduleJob('0 * * * * *', function(fireDate: Date){
  console.log('50따리' + fireDate);
});