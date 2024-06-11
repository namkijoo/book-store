import styled from "styled-components";
import Title from "../components/common/Title";

function Cart() {
  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <h1>Cart</h1>
      </CartStyle>
    </>
  );
}

const CartStyle = styled.div``;
export default Cart;
