import Modal from "react-modal";
import { FaRegUserCircle } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(11, 10, 10, 0.91)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
  },
};

const ImageModal = ({ modalIsOpen, modalImageInfo, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <img src={modalImageInfo.regular} alt={modalImageInfo.alt} />
      <ul className={css.info}>
        <li>
          <FaRegUserCircle />
          <p>{modalImageInfo.user || "without username"}</p>
        </li>
        <li>
          <TbFileDescription />
          <p>{modalImageInfo.description || "'without description'"}</p>
        </li>
        <li>
          <AiOutlineLike />
          <p>{modalImageInfo.likes}</p>
        </li>
      </ul>
    </Modal>
  );
};

export default ImageModal;
