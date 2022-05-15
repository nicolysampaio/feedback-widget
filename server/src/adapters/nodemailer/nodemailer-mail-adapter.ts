import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3c9d43e8bab498",
    pass: "09f8ba20fd9164"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <equipe@feedget.com>',
      to: 'Nicoly Sampaio <nicoly.sampaioluz@gmail.com>',
      subject,
      html: body,
    })
  }
}