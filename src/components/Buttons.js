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

function PrimaryButton({children, handleOnClick}){
    return ( 
        <Button onClick={handleOnClick}>
            {children}
        </Button>
    )
}

PrimaryButton.defaultProps = {
    children: "Text",
    handleOnClick: ()=>console.log("clicked!")
}

export { PrimaryButton }