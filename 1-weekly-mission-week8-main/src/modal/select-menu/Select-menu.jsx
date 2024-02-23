import { useState } from "react";
import styles from "./Select-menu.scss";
import { DeleteLink } from "modal/delete-link";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export function SelectMenu({ url, mouseClick }) {
  const [isEnable, setEnable] = useState(false);
  const handleMouseClick = (event) => {
    event.preventDefault();
    setEnable(!isEnable);
  };
  return (
    <div>
      <div className={"containerBackground"} onClick={mouseClick} />
      <div className={cx("menuContainer")} onClick={mouseClick}>
        <div className={cx("element-delete")} onClick={handleMouseClick}>
          삭제하기
        </div>
        <div className={cx("element-add")}>폴더에 추가하기</div>
        {isEnable && (
          <DeleteLink url={url} handleMouseClick={handleMouseClick} />
        )}
      </div>
    </div>
  );
}
