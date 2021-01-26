import React from 'react'
import styled from 'styled-components'

const MainLayout = styled.div`
border: 1px solid black;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Top = styled.div`
background-color: red;
// border: 1px solid black;
color: white;
height: 15vh;
`
const Center = styled.div`
background-color: black;
// border: 1px solid black;
color: white;
height: 74vh;
`
const Bottom = styled.div`
background-color: lightgreen;
// border: 1px solid black;
color: white;
height: 10vh;
`


function match(props) {
  return (
<MainLayout>
    <oi>Oi</oi>
    <div>
        <Top>
            <button onClick={props.changeToMatch}>Voltar</button>
        </Top>

        <Center>Seus Matches</Center>
        
        <Bottom>
            <button>Limpar swipes e matches</button>
        </Bottom>
        
    </div>
    <oi>Oi</oi>
</MainLayout>
  );
}

export default match;
