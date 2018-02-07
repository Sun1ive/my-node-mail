const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.adm.tools',
  port: 465,
  secure: true,
  auth: {
    user: 'dev@indresser.com',
    pass: '0yE98NOhsx4A',
  },
});

exports.mail = async ctx => {
  try {
    console.log(ctx.request.body);
    const { name ,mail, phone } = ctx.request.body;
    const mailBody = {
      from: '"Sunlive test 👻" <dev@indresser.com>',
      to: 'sunliveua@gmail.com',
      subject: 'Hello ✔',
      html: `
      <h1>Пользователь ${name}</h1>
      <p>${mail}</p>
      <p>${phone}</p>
      `,
    };
    await transporter.sendMail(mailBody);

    ctx.status = 200;
    ctx.body = { message: 'Mail has been sent' };
  } catch (error) {
    ctx.throw(403, error);
  }
};
