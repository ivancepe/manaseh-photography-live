// netlify/functions/send-email.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL;

  try {
    // Forward the request directly to the Google Apps Script
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: event.body, // Pass the original request body through
    });

    // Get the response from Google Apps Script
    const result = await response.json();

    // Check if Google Apps Script returned an error
    if (!response.ok || result.message.startsWith("Error:")) {
        throw new Error(result.message || 'Google Apps Script returned an error.');
    }

    // Return the success response from Google Apps Script to the front-end
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };

  } catch (error) {
    console.error('Error proxying to Google Apps Script:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong. Please try again later.' }),
    };
  }
};