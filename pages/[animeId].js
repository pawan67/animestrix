import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import AnimeDetails from "../components/anime-details/AnimeDetails";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/small-components/Loading";
import { getAnimeDetails } from "../src/handlers";

function AnimeDetailsPage() {
  const router = useRouter();
  const { animeId } = router.query;
  if (!animeId) {
    return (
      <MainLayout>
        <Loading />
      </MainLayout>
    );
  }

  const { data, isLoading, isError, error } = useQuery("animeDetails", () =>
    getAnimeDetails(animeId)
  );

  console.log(data);
  return (
    <MainLayout>
      {isLoading && <Loading />}
      {isError && <div>Something went wrong</div>}

      {data && <AnimeDetails data={data} />}
    </MainLayout>
  );
}

export default AnimeDetailsPage;
