import styled from "styled-components";

const StyledBanner = styled.div`
  position: relative;
  display: flex;
  height: 230px;
  left: 0px;
  top: 56px;
  background-image: url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop");
`;

export default function Banner() {
  return <StyledBanner />;
}
