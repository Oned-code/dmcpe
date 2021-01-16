import * as functions from 'firebase-functions';
import * as  express from 'express';
import * as dotenv from 'dotenv';

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

app.get('/sendAdmin', (req, res) => {
    // This is the bookingObj
    // id: any;
    // name: string;
    // startDate: Date;
    // endDate: Date;
    // resource: Resource;
    // material: boolean;
    // materialDescription: string;
    const id = req.query.id;
    const name = req.query.name;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const resource = req.query.resource;
    const material = req.query.material;
    const materialDescription = req.query.materialDescription;

    const body = {
        from: 'info@dmcpe.co.za',
        to: 'wandile.chamane@gmail.com',
        subject: 'Booking Successful',
        html: '' +
            '<a href="https://dmcpe-mifc.firebaseapp.com">' +
            '<img src="https://dmcpe-mifc.firebaseapp.com/assets/imgs/logo.png" alt="DMCPE">' +
            '</a>' +
            '<h2>Hello Admin - Booking Confirmation below</h2><br>' +
            '<p>This is to confirm the booking placed on ' + Date.now() + '</p>' +
            '<h3>Booking Details Below</h3>' +
            '<ul>' +
            '<li>' +
            'Boooking ID: ' + id +
            '</li>' +
            '<li>' +
            'Boooking Name: ' + name +
            '</li>' +
            '<li>' +
            'Start Date: ' + startDate +
            '</li>' +
            '<li>' +
            'End Date: ' + endDate +
            '</li>' +
            '<li>' +
            'Resource: ' + resource +
            '</li>' +
            '<li>' +
            'material: ' + material +
            '</li>' +
            '<li>' +
            'materialDescription: ' + materialDescription +
            '</li>' +
            '</ul>' +
            '<h4>For more information pleasee visit the link below</h4>' +
            '<a href="https://dmcpe-mifc.firebaseapp.com/admin">' +
            'booking info' +
            '</a>'
    };

    const transporter =  nm.createTransport({
        service: 'gmail',
        auth: {
            user: 'wandile.chamane@gmail.com',
            pass : 'BonganiZulu123@'
        }
    });

    transporter.verify((error: any, success: any) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });

    res.send(transporter.sendMail(body, (err: any, result: any) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(result);
        console.log('email sent');
        return true;
    }));
});


app.get('/contact-us', (req, res) => {
    const body = {
        from: 'wandile.chamane@gmail.com',
        to: 'wandile.chamane@gmail.com',
        subject: 'booking',
        html: '<h2>The html content</h2><br>',
    };

    const transporter =  nm.createTransport({
        service: 'gmail',
        auth: {
            user: 'wandile.chamane@gmail.com',
            pass : 'BonganiZulu123@'
        }
    });

    transporter.verify((error: any, success: any) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });

    res.send(transporter.sendMail(body, (err: any, result: any) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(result);
        console.log('email sent');
        return true;
    }));
});

exports.bigben = functions.https.onRequest(app);
