// import * as functions from 'firebase-functions';
import * as  express from 'express';
import * as dotenv from 'dotenv';
const  cors = require('cors');

const nodemailer = require('nodemailer');

dotenv.config({path: __dirname + '/.env'});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();
const nm = nodemailer;

app.use(cors());

app.post('/sendAdmin', (req, res) => {
    // This is the bookingObj
    // id: any;
    // name: string;
    // startDate: Date;
    // endDate: Date;
    // resource: Resource;
    // material: boolean;
    // materialDescription: string;
    // const id = req.body.id;
    const name = req.body.name;
    const date = req.body.consultationDate;
    const captureDate = req.body.capturedDate;
    const material = req.body.material;
    const materialDescription = req.body.materialDescription;
    const clientEmail = req.body.clientEmail;
    const city = req.body.city;
    const address = req.body.streetAddress;
    const clientNumber = req.body.contactNumber;
    const clientName = req.body.clientName;

    const files = [];
    for (const i of req.body.clientFiles) {
        files.push({
            filename: 'attachment' + req.body.clientFiles.indexOf(i),
            path: i
        });
    }
    console.log(files);
    console.log(req.body);

    const body = {
        from: 'info@dmcpe.online',
        to: 'makizakn@gmail.com, dwaneabongile5@gmail.com',
        bcc: 'wandile.business@gmail.com',
        subject: 'Booking Successful',
        attachments : files,
        html: '' +
            '<a href="https://dmcpe-mifc.firebaseapp.com">' +
            '<img src="https://dmcpe-mifc.firebaseapp.com/assets/imgs/logo.png" alt="DMCPE">' +
            '</a>' +
            '<h2>Hello Admin - Booking Confirmation below</h2><br>' +
            '<p>This is to confirm the booking placed on ' + captureDate.split('T')[0]  + '</p>' +
            '<h3>Details Below</h3>' +
            '<ul>' +
            '<li>' +
            'Service Name: ' + name +
            '</li>' +
            '<li>' +
            'City: ' + city +
            '</li>' +
            '<li>' +
            'Address: ' + address +
            '</li>' +
            '<li>' +
            'Consultation Date: ' + date.split('T')[0] +
            '</li>' +
            '<li>' +
            'Material required: ' + material +
            '</li>' +
            '<li>' +
            'Material Description: ' + materialDescription +
            '</li>' +
            '<li>' +
            'Client Name: ' + clientName +
            '</li>' +
            '<li>' +
            'Client Email: ' + clientEmail +
            '</li>' +
            '<li>' +
            'Client Number: ' + clientNumber +
            '</li>' +
            '</ul>' +
            '<p style="margin: 20px auto;">2020 © DM CPE </p>'
    };
    const bodyCustomer = {
        from: 'info@dmcpe.online',
        to: req.body.clientEmail,
        subject: 'Booking Successful',
        attachments : files,
        html: '' +
            '<a href="https://dmcpe-mifc.firebaseapp.com">' +
            '<img src="https://dmcpe-mifc.firebaseapp.com/assets/imgs/logo.png" alt="DM CPE">' +
            '</a>' +
            '<h2>Hello ' + clientName + ' - Booking Confirmation below</h2><br>' +
            '<p>This is to confirm the consultation booking placed on ' + captureDate.split('T')[0]  + '</p>' +
            '<h3>Details Below</h3>' +
            '<ul>' +
            '<li>' +
            'Service Name: ' + name +
            '</li>' +
            '<li>' +
            'City: ' + city +
            '</li>' +
            '<li>' +
            'Address: ' + address +
            '</li>' +
            '<li>' +
            'Consultation Date: ' + date.split('T')[0] +
            '</li>' +
            '<li>' +
            'Material required: ' + material +
            '</li>' +
            '<li>' +
            'Material Description: ' + materialDescription +
            '</li>' +
            '<li>' +
            'Your Name: ' + clientName +
            '</li>' +
            '<li>' +
            'Your Email: ' + clientEmail +
            '</li>' +
            '<li>' +
            'Your Number: ' + clientNumber +
            '</li>' +
            '</ul>' +
            '<p style="margin: 20px auto">2020 © DM CPE </p>'
    };

    const transporter1 =  nm.createTransport({
        pool: true,
        host: 'nedra.aserv.co.za',
        port: 465,
        secure: true, // use TLS
        auth: {
            user: 'info@dmcpe.online',
            pass: 'AdminAccount'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    const transporter2 =  nm.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'dmcpenoreplyworker@gmail.com',
            pass: 'dmcpeadmin'
        }
    });

    res.send(transporter2.sendMail(body, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(result);
        console.log('email sent');
        return true;
    }));

    res.send(transporter2.sendMail(bodyCustomer, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(result);
        console.log('email sent');
        return true;
    }));

    transporter1.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server 1 is ready to take our messages');
        }
    });


    // res.send(transporter1.sendMail(body, (err: any, result: any) => {
    //     if (err) {
    //         console.log(err);
    //         return false;
    //     }
    //     console.log(result);
    //     console.log('email sent');
    //     return true;
    // }).then(() => {}));
    //
    // res.send(transporter2.sendMail(bodyCustomer, (err: any, result: any) => {
    //     if (err) {
    //         console.log(err);
    //         return false;
    //     }
    //     console.log(result);
    //     console.log('email sent');
    //     return true;
    // }));
});


app.get('/contact-us', (req, res) => {
    const captureDate = req.body.capturedDate;
    const clientEmail = req.body.clientEmail;
    const city = req.body.city;
    const address = req.body.streetAddress;
    const clientNumber = req.body.contactNumber;
    const clientName = req.body.clientName;

    const body = {
        from: 'wandile.chamane@gmail.com',
        to: 'makizakn@gmail.com',
        cc: 'dwaneabongile5@gmail.com',
        subject: 'booking',
        html: '' +
            '<a href="https://dmcpe-mifc.firebaseapp.com">' +
            '<img src="https://dmcpe-mifc.firebaseapp.com/assets/imgs/logo.png" alt="DM CPE">' +
            '</a>' +
            '<h2>Hello ' + clientName + ' - Booking Confirmation below</h2><br>' +
            '<p> This is to place a request for contact placed on ' + captureDate.split('T')[0]  + '</p>' +
            '<h3>Details Below</h3>' +
            '<ul>' +
            '<li>' +
            'Client Name: ' + clientName +
            '</li>' +
            '<li>' +
            'Client City: ' + city +
            '</li>' +
            '<li>' +
            'Client Address: ' + address +
            '</li>' +
            '<li>' +
            'Date of call back Request: ' + captureDate.split('T')[0] +
            '</li>' +
            '<li>' +
            'Client Email: ' + clientEmail +
            '</li>' +
            '<li>' +
            'Client Number: ' + clientNumber +
            '</li>' +
            '</ul>' +
            '<p style="margin: 20px auto">2020 © DM CPE </p>'
    };

    const transporter =  nm.createTransport({
        service: 'gmail',
        auth: {
            user: 'wandile.chamane@gmail.com',
            pass : 'BonganiZulu123@'
        }
    });

    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });

    res.send(transporter.sendMail(body, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(result);
        console.log('email sent');
        return true;
    }));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App listening on PORT', port);
});

// exports.bigben = functions.https.onRequest(app);
