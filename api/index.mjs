/** Vercel serverless entry — tüm istekler buraya rewrite edilir. */
import { handleRequest } from "../viewer/app.mjs";

export default function handler(req, res) {
  return handleRequest(req, res);
}
