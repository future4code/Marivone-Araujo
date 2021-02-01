import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const MainIMG = styled.img`
margin-top: -140px;
width: 100%;
`

function HomePage() {
  return (
    <div>
      <Header />

      <MainIMG src = "https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245_1280.jpg"/>
      

      HomePage
    </div>
  );
}

export default HomePage;

