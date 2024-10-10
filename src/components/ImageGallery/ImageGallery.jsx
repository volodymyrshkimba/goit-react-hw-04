import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
