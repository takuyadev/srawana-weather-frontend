import styled from "styled-components";

const StyledButton = styled.button`
    padding: 0.5em 1em;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
`;

const StyledPrimaryButton = styled(StyledButton)`
    background ${props => props.theme.colors.primary["500"]};
    color: ${props => props.theme.colors.gray["0"]};
`;

const StyledSecondaryButton = styled(StyledButton)`
    background ${props => props.theme.colors.gray["100"]};
    color: ${props => props.theme.colors.gray["500"]};;
`;

// Primary Button

function PrimaryButton({ children, type, handleOnClick }) {
  return (
    <StyledPrimaryButton type={type} onClick={handleOnClick}>
      {children}
    </StyledPrimaryButton>
  );
}

PrimaryButton.defaultProps = {
  children: "Text",
  type: "default"
};

// Secondary Button
function SecondaryButton({ children, type, handleOnClick }) {
  return (
    <StyledSecondaryButton type={type} onClick={handleOnClick}>
      {children}
    </StyledSecondaryButton>
  );
}

export { PrimaryButton, SecondaryButton };
