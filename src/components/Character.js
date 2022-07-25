// Write your Character component here
import React from 'react';
import styled from "styled-components";


const StyledBackground = styled.div`
padding: 5px;
background-color: rgb(201, 76, 76, .3);
margin-left:400px;
margin-right:400px;
`

const StyledContainer = styled.div`
display: flex; 
justify-content: space-between;
padding: 5px;
border: 1px solid black;
`

const StyledYear = styled.div`
color: ${pr => pr.theme.primaryColor};
font-size: 20px;
padding-top: 5px;
`

const StyledCharacter = styled.div`
color: ${pr => pr.theme.secondaryColor};
font-weight: bold;
font-size: 25px;
`


export default function Character({name, year}){
return (
    <StyledBackground className = "background">

    <StyledContainer >
    <StyledCharacter className = 'character' > 
        {name}
    </StyledCharacter>

    <StyledYear className = 'birth'>
        {year}
    </StyledYear>
    </StyledContainer>

    </StyledBackground>
    )
  }