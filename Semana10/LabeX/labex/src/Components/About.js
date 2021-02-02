import React from 'react'
import styled from 'styled-components'

const Central = styled.div` 
width: 100%;
height: 700px;;
margin-top: -136px;
background-image: url('http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/06/europe_s_rockets/19421217-6-eng-GB/Europe_s_rockets.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;
display: grid;
grid-template-rows: 1fr 1fr;
`
const Quote = styled.div`
margin-left: 20px;
`

const Line = styled.div`
font-family: monospace;
font-size: 26px;
margin-left: 240px;
padding: 20px;
text-shadow: 1px 1px 5px blue;
`

const Author = styled.div`
font-family: monospace;
font-size: 20px;
margin-left: 630px;
text-shadow: 1px 1px 5px blue;
`
const GridAbout = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 2fr;
margin-top: -90px;
margin-left: 30%;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const H1 = styled.h1`
font-family: monospace;
`
const Line2 = styled.div`
font-family: monospace;
font-size: 24px;
margin-left: 850px;
`
const Author2 = styled.div`
font-family: monospace;
font-size: 20px;
margin-left: 1030px;
padding: 15px;

`
const Author2Detail = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 10px;
margin-left:-60px;
`

function About() {
  return (
    <div>

      <Central>

        <Quote>
            <Line><i>"Nunca se fez nada grande sem uma esperança exagerada",</i></Line>
            
            <Author>Jules Verne</Author>
        </Quote>

        <div>
            <div></div>
            <GridAbout>

              <div></div>
              <div></div>
              <div></div>
              <H1>Sobre a LabeX</H1>
              <div></div>

            </GridAbout>
              <div>
                <Line2><i>"O que eu mais vou lembrar sobre o voo é que foi divertido. Na verdade, foi a coisa mais divertida que vivenciei em minha vida!",</i></Line2>
        
                <Author2>Sally K. Ride, <Author2Detail>primeira mulher a orbitar a Terra numa nave espacial.</Author2Detail></Author2>
              </div>

        </div>
            

      </Central>
      
    </div>
  );
}

export default About;
