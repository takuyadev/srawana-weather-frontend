import styled from "styled-components";

const Button = styled.button `
    padding: 0.5em 1em;
    background: #2222FF;
    border:none;
    border-radius: 8px;
    font-weight: bold;
    color: white;
    cursor:pointer;
`

function PrimaryButton({children, type, handleOnClick}){
    return ( 
        <Button type={type} onClick={handleOnClick}>
            {children}
        </Button>
    )
}

PrimaryButton.defaultProps = {
    children: "Text",
    type: "default",
}

export { PrimaryButton }