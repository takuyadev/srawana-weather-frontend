import styled from "styled-components";

const InputField = styled.input`
  padding: 0.5em 1em;
  width: 100%;
`;

function TextField({handleOnChange}) {
  return <InputField onChange={handleOnChange}/>;
}


export default TextField;