import GlobalStyle from "../styles";
import Navbar from "../components/Navbar";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledHeadline>Quiz App</StyledHeadline>
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

const StyledHeadline = styled.h1`
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  background-color: grey;
  padding: 0;
  margin: 0;
`;
