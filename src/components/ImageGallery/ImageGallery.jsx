import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onOpenModal={onOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
