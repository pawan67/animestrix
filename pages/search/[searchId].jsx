import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import MainLayout from "../../components/layout/MainLayout";
import Card from "../../components/small-components/Card";
import Loading from "../../components/small-components/Loading";
import { getAnimeSearch, getPopularAnime } from "../../src/handlers";

function SearchPage() {
  const router = useRouter();
  const { searchId } = router.query;
  if (!searchId) {
    return (
      <MainLayout>
        <Loading />
      </MainLayout>
    );
  }

  

  const { data, isLoading, isError, error } = useQuery("searchedAnime", () =>
    getAnimeSearch(searchId)
  );
  return (
    <MainLayout>
      {isLoading && <Loading />}
      {isError && <div>Something went wrong</div>}

      {data && (
        <>
          <div className=" ">
            <h1 className=" text-2xl font-bold">Searched Results</h1>
          </div>
          <div className=" mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-[1fr] 2xl:grid-cols-7">
            {data &&
              data.map((anime) => <Card key={anime.animeId} data={anime} />)}
          </div>
        </>
      )}
    </MainLayout>
  );
}

export default SearchPage;
