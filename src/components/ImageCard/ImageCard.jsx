import css from "./ImageCard.module.css";

const ImageCard = ({ image, onOpenModal }) => {
  const handleClick = () => {
    onOpenModal({
      regular: image.urls.regular,
      alt: image.alt_description,
      likes: image.likes,
      description: image.description,
      user: image.user.username,
    });
  };
  return (
    <div className={css.item}>
      <img
        className={css.img}
        onClick={handleClick}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
