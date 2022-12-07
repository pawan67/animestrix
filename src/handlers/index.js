import axios from "axios";

export const getPopularAnime = async () => {
  const { data } = await axios.get("https://gogoanime.consumet.org/popular");

  return data;
};

export const getAnimeSearch = async (search) => {
  const { data } = await axios.get(
    `https://gogoanime.consumet.org/search?keyw=${search}`
  );
  return data;
};

export const getTopAiringAnime = async () => {
  const { data } = await axios.get("https://gogoanime.consumet.org/top-airing");
  return data;
};

export const getAnimeDetails = async (anime) => {
  const { data } = await axios.get(
    `https://gogoanime.consumet.org/anime-details/${anime}`
  );
  return data;
};

export const getStreamLink = async (episodeId) => {
  const { data } = await axios.get(
    `https://gogoanime.consumet.org/vidcdn/watch/${episodeId}`
  );
  return data;
};
