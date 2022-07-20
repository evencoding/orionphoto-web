import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 3.5rem;
  padding: 2rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Name = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: ${(props) => props.theme.activeColor};
`;
const Contact = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 13px;
  font-weight: 600;
`;
const Admin = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.activeColor};
`;

function Footer() {
  return (
    <FooterContainer>
      <Name>Orion Photo</Name>
      <Contact>
        <span>Contact: 080-8722-1566</span>
      </Contact>
      <Admin>관리자</Admin>
    </FooterContainer>
  );
}

export default Footer;
