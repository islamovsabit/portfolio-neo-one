



// export default async function telegram(req, res) {
//     if (req.method === 'POST') {
//         try {
//             const { user_name, user_email, user_message, bot_token, channel_id } = req.body;

//             // Construct the message
//             const message = `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${user_message}`;

//             // Send the message to the Telegram channel
//             const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${channel_id}&text=${message}`;
//             const response = await fetch(url, { method: 'POST' });

//             if (response.ok) {
//                 res.status(200).json({ success: true });
//             } else {
//                 res.status(500).json({ error: 'Failed to send message' });
//             }
//         } catch (error) {
//             res.status(500).json({ error: 'An error occurred' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// };