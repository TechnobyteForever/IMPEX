const express = require('express')
const app = express()
const port = 1606

app.listen(() => {
    console.log(`Listening on ${port}`);

})





const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
// Create a new client instance
const allSessionsObject = {};

const client = new Client({
    puppeteer: {
        headless: false
    },
    authStrategy: new LocalAuth({
        clientId: 'YOUR_CLIENT_ID'
    })
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// client.on('message_create', message => {
//     console.log(message.body);
// });

// client.on('message_create', message => {
//     if (message.body === '!ping') {
//         // send back "pong" to the chat the message was sent in
//         client.sendMessage(message.from, 'pong');
//     }
// });

client.on('message_create', async (message) => {
    if (message.body.startsWith('!')) {
        const command = message.body.slice(1).split(' ')[0];
        const args = message.body.slice(1).split(' ').slice(1);

        switch (command) {
            case 'ping':
                await message.reply('pong');
                break;
            case 'hello':
                await message.reply('Hello! How can I help you?');
                break;
            case 'info':
                await message.reply(`Your number is: ${message.from}\nYou sent: ${args.join(' ')}`);
                break;
            default:
                await message.reply('Unrecognized command. Try !ping, !hello, or !info.');
        }
    }
});

// async function sendMessageToContact(number, message) {
//     const chatId = number.includes('@c.us') ? number : `${number}@c.us`;
//     await client.sendMessage(chatId, message);
// }

// client.on('message', async (message) => {
//     if (message.body === '!send') {
//         await sendMessageToContact('1234567890@c.us', 'Hello from the bot!');
//         message.reply('Message sent to the specified contact.');
//     }
// });

/// video, image, document

// const fs = require('fs');
// const { MessageMedia } = require('whatsapp-web.js');

// client.on('message', async (message) => {
//     if (message.body === '!image') {
//         const media = MessageMedia.fromFilePath('./image.jpg');
//         await message.reply(media);
//     }
// });

/// document

// client.on('message', async (message) => {
//     if (message.body === '!document') {
//         const media = MessageMedia.fromFilePath('./document.pdf');
//         await message.reply(media, undefined, { caption: 'Here is the requested document' });
//     }
// });

client.initialize();