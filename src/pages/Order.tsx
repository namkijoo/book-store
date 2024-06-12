import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Order = () => {
  const location = useLocation();
  const ordeDataFromCart = location.state;
  return <OrderStyle>order</OrderStyle>;
};

const OrderStyle = styled.div``;
export default Order;
