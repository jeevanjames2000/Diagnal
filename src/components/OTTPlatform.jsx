import React, { useState, useEffect, lazy, Suspense } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { throttle } from "lodash";
const Navbar = lazy(() => import("../utils/Navbar"));
const ContentList = lazy(() => import("../utils/Content"));
const OTTPlatform = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { data, title, loading } = useFetchData(page);

  useEffect(() => {
    if (query === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, data]);

  // Note: this scroll had a bug taking time thats why leaved it when we scroll the movies
  //  untill page2 its coming fine for page3
  //   height of the screen is not triggering the api call need to check that
  // when we scroll upside its working fine again page3 also loading

  const handleScroll = throttle(() => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100;
    if (bottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);
  const handleSearchClick = () => {
    setShowSearch((prev) => !prev);
  };
  return (
    <div style={{ padding: "10px", overflow: "hidden" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar
          showSearch={showSearch}
          query={query}
          setQuery={setQuery}
          handleSearchClick={handleSearchClick}
          title={title}
        />
      </Suspense>
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          marginTop: "2rem",
          zIndex: -1,
        }}
      >
        <Suspense fallback={<div>Loading Content...</div>}>
          <ContentList filteredData={filteredData} />
        </Suspense>
        {loading && (
          <div style={{ textAlign: "center", color: "#fff" }}>Loading...</div>
        )}
      </div>
    </div>
  );
};
export default OTTPlatform;
