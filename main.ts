const axios = require("axios");
require("dotenv").config();

const globalOptions = {
  token: null,
};
const SPOTIFY_TOKEN_ENDPOINT: string = process.env.SPOTIFY_TOKEN_ENDPOINT as string;
const SPOTIFY_CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID as string;
const SPOTIFY_CLIENT_SECRET: string = process.env.SPOTIFY_CLIENT_SECRET as string;

const grabToken = async (endpoint: string, clientId: string, clientSecret: string): Promise<string> => {
  // I was going to make a decorator for this but I think it might be better to allow each function to granularly handle errors
  try {
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

    // we only care about the access_token
    return token.data.access_token;
  } catch (error: any) {
    throw new Error(`An error has occurred during ${grabToken.name}: ${error}`);
  }
};

const x = grabToken(SPOTIFY_TOKEN_ENDPOINT, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET)
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
