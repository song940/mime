const fs 	  = require('fs');
const Message = require('..');

// const message = new Message();

// message.from = 'hi@lsong.org';

// message.on('headers', function(headers){
//   console.log(headers);
// });

// message.on('body', function(msg){
//   console.log(msg);
// });

// message.on('end', function(msg){
//   console.log(msg);
// });


var message = new Message({
  from : 'test@lsong.org',
  to   : [ 'Liu song <hi@lsong.org>', 'hello@lsong.org' ],
  cc   : 'cc@lsong.org',
  subject: 'Hello world',
});
//
fs.createReadStream('./docs/smtp-qq.txt').pipe(message);
// const message = Message.parse(fs.readFileSync('./docs/smtp-qq.txt', 'utf8'));
console.log(message);

