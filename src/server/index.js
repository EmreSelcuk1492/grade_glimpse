const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.post('/api/instagram-auth', async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "Code is missing from the request body." });
    }

    try {
        const response = await axios.post('https://api.instagram.com/oauth/access_token', {
            client_id: '763568429111393',
            client_secret: '5555489d0eb050ec821fd3abea397da4',
            grant_type: 'authorization_code', // Fixed the grant_type value
            redirect_uri: 'https://grade-glimpse-git-main-emreselcuk1492.vercel.app/',
            code: code
        });

        // Here you'd typically do something with the received data, like save it in a database
        // For this example, we'll just send it back to the client
        return res.json(response.data);
    } catch (error) {
        console.error("Error fetching the access token:", error.response.data);
        return res.status(500).json({ error: "Failed to fetch the access token." });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
