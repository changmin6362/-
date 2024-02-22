import ReactDOM from "react-dom/client";
import { isVisible } from "@testing-library/user-event/dist/utils";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { DeleteFolder } from "modal/delete-folder";
const cx = classNames.bind(styles);

export const IconAndTextButton = ({ iconSource, text }) => {
  const [isEnable, setEnable] = useState(false);

  const handleMouseClick = () => {
    if (text === "삭제") {
      setEnable(!isEnable);
    }
  };

  return (
    <div>
      <button className={cx("container")} onClick={handleMouseClick}>
        <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
        <span className={cx("text")}>{text}</span>
      </button>
      {isEnable && ReactDOM.createPortal(<DeleteFolder />, document.body)}
    </div>
  );
};
