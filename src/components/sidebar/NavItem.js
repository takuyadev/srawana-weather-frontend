import styled from "styled-components";

const FlexContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1em;
  color: ${props => props.theme.colors.gray["600"]};
  font-size: ${props => props.theme.fontSize["s"]};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary["500"]};
  }

  & svg {
    transform: translateY(-1px);
  }
`;

function NavItem({ href, icon, text }) {
  return (
    <FlexContainer>
      <NavLink href={href}>
        {icon && icon} {text}
      </NavLink>
    </FlexContainer>
  );
}

NavItem.defaultProps = {
    text: "Default"
}

export default NavItem;
