import styles from "./Select-menu.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export function SelectMenu() {
  return (
    <div className={cx("menuContainer")}>
      <div className={cx("element-delete")}>삭제하기</div>
      <div className={cx("element-add")}>폴더에 추가하기</div>
    </div>
  );
}
