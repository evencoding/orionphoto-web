import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  padding: 0 1rem;
  margin-top: 2.2rem;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1280px) {
    width: 1070px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 960px;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 9rem;
  }
`;
const MainWrapper = styled.div`
  display: grid;
  grid-column-gap: 1.625rem;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    Img:not(:last-child) {
      margin-bottom: 2.2rem;
    }
  }
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <MainWrapper>
          <Img src="img/pic.png" alt="" />
          <Img src="img/pic.png" alt="" />
          <Img src="img/pic.png" alt="" />
        </MainWrapper>
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;
