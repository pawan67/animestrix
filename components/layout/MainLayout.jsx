import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <div className="  bg-background">
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
      <Header />
      <div className=" flex ">
        <div className="  z-10 w-full   px-5 sm:px-10 min-h-[90vh]  mt-[103px] md:mt-28 ">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
