import React from 'react'
import styled from 'styled-components'


const MainPage = styled.div`
display: grid;
// background-color: red;
grid-template-columns: 1fr 1fr 1fr;  
// border: 1px solid black;
`
const CentralGrid = styled.div`
background-color: lightblue;
// border: 1px solid black;
color: white;
`
const Top = styled.div`
background-color: red;
// border: 1px solid black;
color: white;
height: 15vh;
`
const Center = styled.div`
background-color: orange;
// border: 1px solid black;
color: white;
height: 50vh;
`
const Bottom = styled.div`
background-color: lightblue;
// border: 1px solid black;
color: white;
height: 35vh;
`

function main(props) {
  return (
    
<MainPage>
    <div>Oi</div>

        <CentralGrid>
            
        
            <Top>Astromatch
                <button onClick={props.stayHome}>Deu Match</button>
            </Top>
            

            <Center>Olha aqui!</Center>

         
            <Bottom><button>Não quero</button><button>Quero</button></Bottom>

            
        </CentralGrid>   
    <div>Oi</div>    
</MainPage>
  );
}

export default main;
