import { MdReportGmailerrorred } from "react-icons/md";

import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorWrapper}>
      <MdReportGmailerrorred size={30} />
      <p>Something went wrong, please try again later!</p>
    </div>
  );
};

export default ErrorMessage;
