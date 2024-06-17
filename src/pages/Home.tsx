import Title from "@/components/common/Title";
import { useEffect } from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeStyle>
      <h1>Home</h1>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.primary};
`;

export default Home;
