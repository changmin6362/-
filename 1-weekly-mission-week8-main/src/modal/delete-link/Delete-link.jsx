import styles from "./Delete-link.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const DeleteLink = ({ url, handleMouseClick }) => {
  return (
    <div className={cx("container")} onClick={handleMouseClick}>
      <form className={cx("box")}>
        <img src={"/images/_close.svg"} onClick={handleMouseClick} />
        <p className={cx("label")}>링크 삭제</p>
        <p className={cx("props")}>{url}</p>
        <button className={cx("button")}>삭제하기</button>
      </form>
    </div>
  );
};
