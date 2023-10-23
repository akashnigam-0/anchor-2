let nodemailer = require('nodemailer');

// Function to send OTP via email
function sendOTP(email, otp) {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '0akashnigam@gmail.com',
            pass: '123123'
        }
    });

    // Define the email options
    const mailOptions = {
        from: '0akashnigam@gmail.com',
        to: email,
        subject: 'One-Time Password (OTP)',
        text: `Your OTP is: ${otp}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending OTP:', error);
        } else {
            console.log('OTP sent successfully:', info.response);
        }
    });
}
exports.sendOTP = sendOTP;
