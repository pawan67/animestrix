import { useRouter } from "next/router";
import React from "react";

function SearchInput({ isLandingPage = false }) {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // without react router
    window.location.href = `/search/${search}`;
    // router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={` ${
        isLandingPage
          ? "bg-secondary w-[400px]"
          : "bg-primary-light sm:w-[350px]"
      } w-full  h-10`}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={` ${
          isLandingPage ? "text-black" : "text-white"
        } w-full outline-none p-3 px-5 h-full bg-transparent`}
        placeholder="search anime"
      />
    </form>
  );
}

export default SearchInput;
