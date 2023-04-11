"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios");
require("dotenv").config();
const SPOTIFY_TOKEN_ENDPOINT = process.env
    .SPOTIFY_TOKEN_ENDPOINT;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env
    .SPOTIFY_CLIENT_SECRET;
const grabToken = (endpoint, clientId, clientSecret) => __awaiter(void 0, void 0, void 0, function* () {
    const token = axios.post(endpoint, {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
    }, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    console.log(token.status);
});
grabToken(SPOTIFY_TOKEN_ENDPOINT, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
