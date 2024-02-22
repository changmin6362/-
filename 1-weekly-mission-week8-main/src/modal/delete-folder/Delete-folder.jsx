import styles from "./Delete-folder.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const DeleteFolder = ({ folderName, handleMouseClick }) => {
  return (
    <div className={cx("container")}>
      <form className={cx("box")}>
        <img src={"/images/_close.svg"} onClick={handleMouseClick} />
        <p className={cx("label")}>폴더 삭제</p>
        <p className={cx("props")}>{folderName}</p>
        <button className={cx("button")}>삭제하기</button>
      </form>
    </div>
  );
};
