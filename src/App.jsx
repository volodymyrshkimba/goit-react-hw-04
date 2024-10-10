import axios from "axios";

import { useEffect, useState } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [keyWord, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const onSearch = (userWord) => {
    setKeyword(userWord);
    setError(false);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!keyWord) return;
    const request = async () => {
      try {
        const axiosParams = {
          params: {
            page: page,
            per_page: 5,
            query: keyWord,
            client_id: "_cEZO8aU1C92VerVD8fgjS-e5kaWbfs7zX1oTmKEH-E",
          },

          baseURL: "https://api.unsplash.com/",
        };
        setLoading(true);
        const response = await axios.get("/search/photos", axiosParams);

        setTotalPages(response.data.total_pages);

        setImages((prevImages) => {
          if (page === 1) {
            return response.data.results;
          }
          return [...prevImages, ...response.data.results];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    request();
  }, [keyWord, page]);
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {(images.length > 0 && <ImageGallery images={images} />) ||
        (error && <ErrorMessage />)}
      {loading && <Loader />}
      {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
}

export default App;
