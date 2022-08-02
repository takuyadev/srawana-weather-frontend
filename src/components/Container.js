import styled from "styled-components";

const ContainerDiv = styled.div `
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 16px;
`
function Container({children}){
    return(
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}

export default Container;