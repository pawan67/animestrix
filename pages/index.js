import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import LandingPage from "../components/LandingPage";

import styles from "../styles/Home.module.css";

import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div>
      <Head>
        <title>Animestrix - Minimal anime streaming site</title>
        <meta
          name="title"
          content="Animestrix - Minimal anime streaming site"
        />
        <meta
          name="description"
          content="Animestrix is the website to watch popular anime with English subtitles and dub for free online. With an easy to use design, there is no need to download the video to watch it. All users have to do is pick the episode or the series that you want to watch, sit back and enjoy. Animestrix  has all of the action filled anime you want to watch with a wide variety of genres to choose from. If you're looking for something new and exciting that you've never seen before, use the search box on top of the page to find exactly what you're looking for.

"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://animestrix.vercel.app/" />
        <meta
          property="og:title"
          content="Animestrix - Minimal anime streaming site"
        />
        <meta
          property="og:description"
          content="Animestrix is the website to watch popular anime with English subtitles and dub for free online. With an easy to use design, there is no need to download the video to watch it. All users have to do is pick the episode or the series that you want to watch, sit back and enjoy. Animestrix  has all of the action filled anime you want to watch with a wide variety of genres to choose from. If you're looking for something new and exciting that you've never seen before, use the search box on top of the page to find exactly what you're looking for.

"
        />
        <meta property="og:image" content="https://i.imgur.com/xO0ViM0.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://animestrix.vercel.app/" />
        <meta
          property="twitter:title"
          content="Animestrix - Minimal anime streaming site"
        />
        <meta
          property="twitter:description"
          content="Animestrix is the website to watch popular anime with English subtitles and dub for free online. With an easy to use design, there is no need to download the video to watch it. All users have to do is pick the episode or the series that you want to watch, sit back and enjoy. Animestrix  has all of the action filled anime you want to watch with a wide variety of genres to choose from. If you're looking for something new and exciting that you've never seen before, use the search box on top of the page to find exactly what you're looking for.

"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/xO0ViM0.png"
        />
      </Head>
      <LandingPage />
    </div>
  );
}
