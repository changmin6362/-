import styles from "./Delete-folder.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const DeleteFolder = ({ selectedFolderId }) => {
  return (
    <div className={cx("container")}>
      <form>
        <p className={cx("label")}>폴더 삭제</p>
        <p className={cx("props")}>{selectedFolderId}</p>
        <button className={cx("button")}>삭제하기</button>
      </form>
    </div>
  );
};
