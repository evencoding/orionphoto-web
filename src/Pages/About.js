import styled from "styled-components";

const Main = styled.main`
  background-color: ${(props) => props.theme.aboutBgColor};
  width: 100%;
  height: 100px;
`;

function About() {
  return <Main></Main>;
}

export default About;
