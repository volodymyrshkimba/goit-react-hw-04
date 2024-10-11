import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.btn} type="button" onClick={onLoadMore}>
      <p>Load More</p>
    </button>
  );
};

export default LoadMoreBtn;
