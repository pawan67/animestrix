import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import AnimeDetails from "../components/anime-details/AnimeDetails";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/small-components/Loading";
import { getAnimeDetails } from "../src/handlers";

export const getServerSideProps = async (context) => {
  const { animeId } = context.query;

  const res = await fetch(
    `https://webdis-x51w.onrender.com/anime-details/${animeId}`
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function AnimeDetailsPage({ data }) {
  const router = useRouter();
  // const { animeId } = router.query;

  // get the anime id from the url with javascript
  // const animeId = window.location.pathname.split("/")[1];

  // const { data, isLoading, isError, error } = useQuery("animeDetails", () =>
  //   getAnimeDetails(animeId)
  // );

  console.log(data);
  return (
    <>
      <Head>
        <title>{data?.animeTitle + " - Animestrix "}</title>
        <meta name="description" content={data?.synopsis} />
        <meta name="keywords" content={data?.genres} />
        <meta name="author" content="consumet" />

        <meta property="og:title" content={data?.animeTitle} />
        <meta property="og:description" content={data?.synopsis} />
        <meta property="og:image" content={data?.animeImg} />
      </Head>
      <MainLayout useHead={false}>
        {/* {isLoading && <Loading />}
      {isError && <div>Something went wrong</div>} */}

        {data && <AnimeDetails data={data} />}
      </MainLayout>
    </>
  );
}

export default AnimeDetailsPage;
