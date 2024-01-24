"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// call api and return data
export const fetchAnime = async (page: number) => {
  const limit = 8;
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime/?page=${page}&limit=${limit}&order=popularity`
  );

  const data = await response.json();
  let dataValues = data.data;

  // if (!response.ok) throw new Error(data.message);

  if (dataValues.length <= 0) throw new Error("No data to be shown");

  return dataValues.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
