const axios = require("axios");
require("dotenv").config();

const SPOTIFY_TOKEN_ENDPOINT: string = process.env
  .SPOTIFY_TOKEN_ENDPOINT as string;
const SPOTIFY_CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID as string;
const SPOTIFY_CLIENT_SECRET: string = process.env
  .SPOTIFY_CLIENT_SECRET as string;

const grabToken = async (
  endpoint: string,
  clientId: string,
  clientSecret: string
): Promise<Object> => {
  const token = await axios.post(
    endpoint,
    {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return token.data.access_token; // we only care about the access_token
};

grabToken(SPOTIFY_TOKEN_ENDPOINT, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
