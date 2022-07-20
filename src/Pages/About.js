import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.aboutBgColor};
  width: 100%;
  padding-top: 3.125rem;
  @media screen and (max-width: 767px) {
    margin-top: 7rem;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    width: 1070px;
    margin-left: 3.75rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 960px;
    width: 100%;
    margin-left: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Img = styled.img`
  padding: 0 0.938rem;
  width: 505px;
  height: auto;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 450px;
    width: 100%;
    margin-left: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  padding: 5rem 0.938rem;
`;

function About() {
  return (
    <Container>
      <Header />
      <Main>
        <MainWrapper>
          <Img src="img/pic.png" alt=""></Img>
          <InfoContainer>정보들</InfoContainer>
        </MainWrapper>
      </Main>
      <Footer />
    </Container>
  );
}

export default About;
