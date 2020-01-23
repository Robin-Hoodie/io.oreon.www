/* eslint-disable */
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const config = require('./config');

const createTransporter = async () => {
  console.log("Sendgrid API KEY " + config.sendGridAPIKey);
  return nodemailer.createTransport(sgTransport({
    auth: {
      "api_key": config.sendGridAPIKey
    }
  }));
};

//TODO: TS with Netlify Lambda
//TODO: lint this
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({message: `Method ${event.httpMethod} is not allowed. The only allowed method for this function is 'POST'`})
    }
    throw "NOT ALLOWED" //Replace this by proper disallowed http response
  }
  console.log(event.body);
  console.log(`Received event w/ body ${JSON.stringify(event.body)}`);
  const { message, fromEmail, name } = JSON.parse(event.body);
  const transporter = await createTransporter();
  console.log(`Received message from ${name} with email ${fromEmail}`);
  console.log(`Message was:\n${message}`);
  try {
    await transporter.sendMail({
      from: "Oreon Website <website@oreon.io>",
      to: config.toEmail,
      subject: `Oreon Website: An inquiry from ${name}`,
      text: `${message}\nReply to ${fromEmail}`,
      html: `${message}<br>Reply to <strong>${fromEmail}</strong>`
    });
    return {
      statusCode: 200,
      body: JSON.stringify({message: `Sent an email to ${config.toEmail}`})
    }
  } catch(e) {
      return {
        statusCode: 500,
        body: JSON.stringify({message: e})
      }
  }
};
