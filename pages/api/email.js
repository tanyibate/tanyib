const nodemailer = require("nodemailer");

export default async (req, res) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const { email, firstName, lastName, query } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    await transporter
      .sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      })
      .then(() => {
        res.json({
          message: "Email succesfuly sent",
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "unable to send email",
        });
      });
  } catch (err) {
    res.status(500).json({
      message: "unable to send email",
    });
  }
};
