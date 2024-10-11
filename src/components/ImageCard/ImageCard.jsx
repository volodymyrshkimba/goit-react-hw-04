const ImageCard = ({ image, onOpenModal }) => {
  const handleClick = () => {
    console.log(image);

    onOpenModal({
      regular: image.urls.regular,
      alt: image.alt_description,
      likes: image.likes,
      description: image.description,
      user: image.user.username,
    });
  };
  return (
    <img
      onClick={handleClick}
      src={image.urls.small}
      alt={image.alt_description}
    />
  );
};

export default ImageCard;
