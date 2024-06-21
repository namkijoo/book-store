import { Banner as IBanner } from "@/models/banner.model";
import styled from "styled-components";
import BannerItem from "./BannerItem";
import { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface Props {
  banners: IBanner[];
}

function Banner({ banners }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformValue = useMemo(() => {
    return currentIndex * -100;
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex === banners.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <BannerWrapper>
      <BannerContainer $transformValue={transformValue}>
        {banners.map((item, index) => (
          <BannerItem key={item.id} banner={item} />
        ))}
      </BannerContainer>

      <BannerButton>
        <button className="prev" onClick={handlePrev}>
          <FaAngleLeft />
        </button>
        <button className="next" onClick={handleNext}>
          <FaAngleRight />
        </button>
      </BannerButton>

      <BannerIndicator>
        {banners.map((banner, index) => (
          <span
            className={index === currentIndex ? "active" : ""}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </BannerIndicator>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

interface BannerContainerProps {
  $transformValue: number;
}

const BannerContainer = styled.div<BannerContainerProps>`
  display: flex;
  transform: translateX(${(props) => props.$transformValue}%);
  transition: transform 0.5s ease-in-out;
`;

const BannerButton = styled.div`
  button {
    border: 0;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 500px;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg {
      fill: #fff;
    }

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

const BannerIndicator = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: #fff;
    margin: 0 8px;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.color.primary};
    }
  }
`;

export default Banner;
