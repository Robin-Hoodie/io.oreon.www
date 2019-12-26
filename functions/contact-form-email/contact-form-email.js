/* eslint-disable */
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const config = require('../config');

const createTransporter = async () => {
  console.log("Sendgrid API KEY " + config.sendgridApiKey);
  return nodemailer.createTransport(sgTransport({
    auth: {
      "api_key": config.SENGRID_API_KEY
    }
  }));
};

exports.handler = async (event, context, callback) => {
  console.log(`Received event ${event}`);

  // const { message, email, name } = event.body;
  // const transporter = await createTransporter();
  // console.log(`Received message from ${name} with email ${email}`);
  // console.log("Message was: \n", message);
  // try {
  //   await transporter.sendMail({
  //     from: "Oreon Website <website@oreon.io>",
  //     to: "robin@oreon.io",
  //     subject: `Oreon Website: An inquiry from ${name}`,
  //     text: `${message}\nReply to ${email}`,
  //     html: `${message}<br>Reply to <strong>${email}</strong>`
  //   });
  //   return {
  //     statusCode: 200
  //   }
  // } catch(e) {
  //     return {
  //       statusCode: 500,
  //       body: e.toString()
  //     }
  // }
};
