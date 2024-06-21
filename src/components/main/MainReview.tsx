import { BookReviewItem as IBookReviewItem } from "@/models/book.model";
import styled from "styled-components";
import BookReviewItem from "../book/BookReviewItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  reviews: IBookReviewItem[];
}

function MainReview({ reviews }: Props) {
  const sliderSetting = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    gap: 16,
  };
  return (
    <MainReviewStyle>
      <Slider {...sliderSetting}>
        {reviews.map((review) => (
          <BookReviewItem key={review.id} review={review} />
        ))}
      </Slider>
    </MainReviewStyle>
  );
}

const MainReviewStyle = styled.div``;

export default MainReview;
