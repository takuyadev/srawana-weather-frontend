// Node Modules
import styled from "styled-components";

// Styled Components
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3{
    margin: 0;
    color: ${props => props.theme.colors.gray["800"]}
  }
  & a {
    font-weight:bold;
    text-decoration: none;
    color ${props => props.theme.colors.primary["500"]}
  }
`;

function HeadingSection({ heading, link, href }) {
  return (
    <HeadingContainer>
      <h3>{heading}</h3>
      <a href={href}>{link}</a>
    </HeadingContainer>
  );
}

HeadingSection.defaultProps = {
  heading: "Average Weekly Temperature",
  link: "Tokyo, Japan",
  href: "google.ca"
};

export default HeadingSection;
