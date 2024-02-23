import styles from "./Edit.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Edit() {
  return (
    <div className={cx("background")}>
      <div className={cx("modal")}>
        <img className={cx("closeImg")} src="images/close.png" alt="close" />
        <h2 className={cx("header")}>폴더 이름 변경</h2>
        <form className={cx("form")}>
          <input className={cx("input")} placeholder="유용한 팁"></input>
          <button className={cx("button")}>변경하기</button>
        </form>
      </div>
    </div>
  );
}
