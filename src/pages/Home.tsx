import Title from "@/components/common/Title";
import Banner from "@/components/common/banner/Banner";
import MainBest from "@/components/main/MainBest";
import MainNewBooks from "@/components/main/MainNewBooks";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { banners } from "@/mock/banner";
import { bestBooks } from "@/mock/books";
import { useEffect } from "react";
import styled from "styled-components";

function Home() {
  const { reviews, newBooks, bestBooks, banners } = useMain();
  const { isMobile } = useMediaQuery();
  return (
    <HomeStyle>
      <Banner banners={banners} />

      <section className="sec">
        <Title size="large">베스트 셀러</Title>
        <MainBest books={bestBooks} />
      </section>

      <section className="sec">
        <Title size="large">신간 안내</Title>
        <MainNewBooks books={newBooks} />
      </section>

      <section className="sec">
        <Title size="large">리뷰</Title>
        <MainReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 0 24px 0;
  .slick-track {
    padding: 12px 0;
  }

  .slick-slide > div {
    margin: 0 12px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }
`;

export default Home;
