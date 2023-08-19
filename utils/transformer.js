import { encode, decode } from "js-base64";

export const encodeData = (obj) => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64) => JSON.parse(decode(base64));

export const urlShortener = async (url) => {

  let request = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
  let response = await request.json();
  console.log(response)
  let shortened = response.result.full_short_link;
  return shortened
}
