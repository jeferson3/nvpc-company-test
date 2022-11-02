import axios from 'axios';
import { API_URL } from "../Environment";

export const Api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: "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",
  },
  
});
