import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { TextButtons } from "../../components/anime-details/AnimeDetails";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MainLayout from "../../components/layout/MainLayout";
import VideoPlayer from "../../components/Player/VideoPlayer";
import { getStreamLink } from "../../src/handlers";
import { HiOutlineDownload } from "react-icons/hi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FcVlc } from "react-icons/fc";
import Loading from "../../components/small-components/Loading";
function StreamingPage() {
  const router = useRouter();
  // const { episodeId } = router.query;

  // get the search id from the url with javascript

  const episodeId = window.location.pathname.split("/")[2];

  // if (!episodeId) {
  //   return <MainLayout>loading...</MainLayout>;
  // }

  const { data, isLoading, isError, error } = useQuery("details", () =>
    getStreamLink(episodeId)
  );

  console.log(data);

  const handleExternalPlayer = () => {
    window.open(data?.Referer, "_blank");
  };

  const handleVLCPlayer = () => {
    window.open(
      `intent:${data?.sources[0].file}#Intent;scheme=vlc;package=org.videolan.vlc;end`,
      "_blank"
    );
  };
  const handleMxPlayer = () => {
    //
    window.open(
      `intent:${data?.sources[0].file}#Intent;scheme=mxplayer;package=com.mxtech.videoplayer.ad;end`,
      "_blank"
    );
  };
  return (
    <MainLayout>
      {isLoading && <Loading />}
      {data && (
        <div className=" lg:flex lg:space-x-4">
          <div className=" w-full max-w-screen-xl">
            <VideoPlayer videoSource={data?.sources[0].file} />
            <div className=" mt-5">
              <h3 className=" capitalize ">{episodeId}</h3>
            </div>
          </div>

          <div className=" mt-5 lg:mt-0 space-y-4">
            <PrimaryButton
              icon={<HiOutlineDownload />}
              sub="Download option available"
              onClick={handleExternalPlayer}
            >
              Open video in External player (Browser)
            </PrimaryButton>

            <PrimaryButton
              icon={<BsFillPlayCircleFill />}
              onClick={handleMxPlayer}
              sub="Android"
            >
              Open in MX Player
            </PrimaryButton>
            <PrimaryButton
              sub="Android"
              icon={<FcVlc />}
              onClick={handleVLCPlayer}
            >
              Open in VLC
            </PrimaryButton>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default StreamingPage;
