import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const MainLayout = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Top = styled.div`
background-color: white;
// border: 1px solid black;
color: white;
height: 15vh;
place-items: center;
`
const BackButton = styled.img`
margin-top: 2%;
width: 75px;
height: 65px;
:hover{
  cursor: pointer;
  
}
`
const Logo1 = styled.img`
width: 70%;
margin-left: 40px;
// margin-bottom: 40px;

`
const Center = styled.div`
color: black;
height: 200vh;
`
const IMG = styled.img`
width: 10vh;
height: 10vh;
border-radius: 100%;
`

const CentralLine = styled.div`
border: 2px dotted black;

`
const MiniGrid = styled.div`
border-bottom: 2px dotted black;
text-align: center;
padding: 10px;
`
const CleanMatches = styled.div`
margin-top: 200px;
margin-left: 70px;

`


function Match(props) {
    const [match, setMatch] = useState([])
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    
    const getAllMatches = () =>{
        axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/matches`)
        .then (response => setMatch(response.data.matches))
        .catch(error => console.log(error))  
      }

      useEffect(() =>{
        getAllMatches()
      }, [])    

            
      const clearAllMatches = () =>{        
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/clear`)

      .then((res) => {
        console.log(res)
        // alert ("Sem matches!")
        getAllMatches()
        handleClose()
               
      })
      .catch((err) =>{
        console.log(err)
        alert ("Aconteceu um probleminha..." + err)
      })
    }
    
  return (
<MainLayout>
    <oi></oi>
    
    <CentralLine>
        <Top>
            <BackButton src="https://static.vecteezy.com/system/resources/previews/001/186/864/non_2x/heart-arrow-png.png" onClick={props.changeToMatch} />

            <Logo1 src='https://i.imgur.com/wWt4yEh.jpg'/>

        </Top>

        <Center> 

        {match.map((matching) =>{
            return( 
                <MiniGrid><IMG src={matching.photo}/>
                
                <strong>{matching.name}</strong></MiniGrid> 
            ) 
        })}
        
        </Center>     
    </CentralLine>

      <CleanMatches><Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Limpar matches
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Tem certeza que deseja limpar seus matches?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você está prestes a limpar todos os seus matches:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ai, não!
          </Button>
          <Button  onClick={handleClose} onClick = {clearAllMatches} color="primary" autoFocus>
            Eu quero, sim!
          </Button>
        </DialogActions>
      </Dialog></CleanMatches>

</MainLayout>
  );
}

export default Match;
