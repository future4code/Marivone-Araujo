import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import lupa from './Imgs/lupa.png'

const MainIMG = styled.img`
margin-top: -140px;
width: 100%;
`

const SearchTrip = styled.input`
background-image: url('https://i.imgur.com/m5OPwOk.png');
background-position: 99%;
background-repeat: no-repeat;
background-size:3.5%;
width: 800px;
height: 25px;
margin-left: 18%;
margin-top: 30px;
margin-bottom: 30px;
border-top: none;
border-left: none;
border-right: none;
:hover{
  cursor: pointer;

}
`
const GridTrips = styled.div`
background-color: yellow;
/* display: grid; */
/* grid-template-columns: 1fr, 1fr, 1fr; */
/* grid-template-rows: 1fr, 1fr, 1fr; */
`

const CardGrid = styled.div`
background-color: red;
border: 1px solid black;
width: 400px;
height: 300px;
margin: 30px;
`

const ButtonDetails = styled.button`
border: none;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
} 
`

function HomePage() {
  return (
    <div>
      <Header />

      <MainIMG src = "https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245_1280.jpg"/>

      <SearchTrip type="text" placeholder= "Busque aqui pelas melhores viagens espaciais!"/>

      <GridTrips>
      <CardGrid>
        <div>IMG</div>
        <div>name:</div>
        <div>planet:</div>
	      <div>date:</div>
        <div>Description:</div>
        <ButtonDetails><strong>+Detalhes</strong></ButtonDetails>
      </CardGrid>
      
      </GridTrips>
      
    </div>
  );
}

export default HomePage;

