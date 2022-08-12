import styled from "styled-components";

const InputField = styled.input`
  padding: 1em 1em;
  width: 100%;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.colors.gray["100"]};

  &::placeholder {
    color: ${props => props.theme.colors.gray["600"]};
    font-family: "Poppins";
  }

  & {
    color: ${props => props.theme.colors.gray["800"]};
  }
`;

function TextField({ handleOnChange, placeholder }) {
  return <InputField onChange={handleOnChange} placeholder={placeholder} />;
}

export default TextField;
