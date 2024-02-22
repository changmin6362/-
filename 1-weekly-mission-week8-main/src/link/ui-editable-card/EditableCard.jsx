import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";
import { SelectMenu } from "modal/select-menu";

const cx = classNames.bind(styles);

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const [isEnable, setEnable] = useState(false);

  const handleMouseClick = (event) => {
    event.preventDefault();
    setEnable(!isEnable);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <button
          className={cx("star")}
          onClick={(event) => event.preventDefault()}
        >
          <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>
        <button className={cx("kebab")} onClick={handleMouseClick}>
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </button>
        {isEnable && <SelectMenu onclick={(e) => e.preventDefault()} />}
      </Card>
    </a>
  );
};

//버튼 누르면 api 페이지로 이동해버림
