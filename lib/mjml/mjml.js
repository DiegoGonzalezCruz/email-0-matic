const { default: axios } = require("axios");

const baseUrl = "https://api.mjml.io/v1";

const renderHtml = (mjml) =>
  axios.post(
    baseUrl + "/render",
    { mjml },
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${publicKey}:${secretKey}`
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
    }
  );

// MJML.io API credentials
const appId = "2b64851b-1e9d-4df9-ba9f-4679291bf059";
const publicKey = "18ad3d82-a666-44c7-a345-f32ef7e84b13";
const secretKey = "af7b3a7f-190e-4059-b1b6-995211def55d";
