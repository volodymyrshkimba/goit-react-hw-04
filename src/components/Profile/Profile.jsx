import clsx from "clsx";
import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={clsx(css.card)}>
      <div className={clsx(css.info)}>
        <img className={clsx(css.img)} src={image} alt="User avatar" />
        <p className={clsx(css.name)}>{name}</p>
        <p className={clsx(css.tag)}>@{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>

      <ul className={clsx(css.list)}>
        <li className={clsx(css.item)}>
          <span className={clsx(css.statName)}>Followers</span>
          <span className={clsx(css.statValue)}>{followers}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.statName)}>Views</span>
          <span className={clsx(css.statValue)}>{views}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.statName)}>Likes</span>
          <span className={clsx(css.statValue)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
