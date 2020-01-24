import nodemailer from "nodemailer";
//@ts-ignore
import sgTransport from "nodemailer-sendgrid-transport";
import config from "../config";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import Mail from "nodemailer/lib/mailer";

const createTransporter = (): Mail => {
  return nodemailer.createTransport(sgTransport({
    auth: {
      "api_key": config.sendGridAPIKey
    }
  }));
};

exports.handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({message: `Method ${event.httpMethod} is not allowed. The only allowed method for this function is 'POST'`})
    }
  }
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: "A body is required to be present in the request"})
    }
  }
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
