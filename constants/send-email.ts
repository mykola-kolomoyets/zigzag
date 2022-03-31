const nodemailer = require('nodemailer');

export const sender = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'mykola.kolomoiets@gmail.com',
    pass: 'Nikolak05092001'
  }
});

export const sendTo = (text: string, field: string[][]) => ({
  from: 'mykola.kolomoiets@gmail.com',
  to: 'kolomoyets473@gmail.com',
  subject: 'ZIGZAG WINNER!!!',
  text: `${text}: ${JSON.stringify(field)}`
});

export const sendMail = (text: string, field: string[][]) => {
  sender.sendMail(sendTo(text, field), () => {});
}