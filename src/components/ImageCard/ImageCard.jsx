const ImageCard = ({ image }) => {
  return <img src={image.urls.small} alt={image.alt_description} />;
};

export default ImageCard;
