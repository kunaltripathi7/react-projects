import axios from "axios";
import { randomNumber } from "../Utils";

export async function fetchGamesDb(size) {
  try {
    // console.log(process.env.RAWG_API_KEY); // temporary access api error -> fix by pasting the link in browser
    const res = await axios.get(
      "https://api.rawg.io/api/games?key=bbcaac6f50e842038402a5fed8a429f4",
      {
        params: {
          pageSize: size,
        },
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    const random = randomNumber(0, res.data.results.length - size);
    const data = res.data.results.slice(random, random + size);
    return data;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export async function fetchGamesInfo(id) {
  try {
    // console.log(process.env.RAWG_API_KEY); // temporary access api error -> fix by pasting the link in browser
    const res = await axios.get(
      `https://api.rawg.io/api/games/${id}?&key=bbcaac6f50e842038402a5fed8a429f4`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export async function searchGames(query) {
  try {
    // console.log(process.env.RAWG_API_KEY); // temporary access api error -> fix by pasting the link in browser
    const res = await axios.get(
      `https://api.rawg.io/api/games?page_size=50&search=${query}&key=bbcaac6f50e842038402a5fed8a429f4`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
  return null;
}
