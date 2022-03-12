// const moment = require("moment");

// console.log("today", moment().format("YYYY-MM-DD"));
// console.log("today+7", moment().add(1, "week").format("YYYY-MM-DD"));

const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bba43be6bfd4a3",
    pass: "f591e53dceebd3",
  },
});

const send = async (option) => {
  transport.sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "ss333567@gmail.com",
  to: "ss333567@gmail.com",
  subject: "테스트 메일입니다....",
  text: "미친거 아닌가요.. ㅠㅠ 정말쩌네요",
};

send(email_data);
