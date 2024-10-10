import axios from "axios";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";

import { useEffect, useState } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {(images.length > 0 && <ImageGallery images={images} />) ||
        (error && <ErrorMessage />)}
      {loading && <Loader />}
      {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <Toaster />
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default App;
