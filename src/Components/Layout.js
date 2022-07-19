import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 0 0.938rem;
  @media screen and (min-width: 1280px) {
    min-width: 1040px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 930px;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

function Layout({ children }) {
  return (
    <Container>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </Container>
  );
}

export default Layout;
