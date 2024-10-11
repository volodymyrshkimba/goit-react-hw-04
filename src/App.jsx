import { useEffect, useState } from "react";

import { Toaster } from "react-hot-toast";

import { requestPhotoByKey } from "./services/api.js";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [keyWord, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalImageInfo, setModalImageInfo] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onOpenModal = (imgInfo) => {
    setModalImageInfo(imgInfo);
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

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
        setLoading(true);
        const response = await requestPhotoByKey(keyWord, page);

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
      {(images.length > 0 && (
        <ImageGallery onOpenModal={onOpenModal} images={images} />
      )) ||
        (error && <ErrorMessage />)}
      {loading && <Loader />}
      {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <Toaster />
      <ImageModal
        modalIsOpen={modalIsOpen}
        modalImageInfo={modalImageInfo}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
