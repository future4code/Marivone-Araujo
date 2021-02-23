import React from "react";
import styled from "styled-components"
// import { useProtectedPage } from "../hooks/useProtectedPage";

 
const ComentPostCard = styled.div`
border: 1px solid black;
margin: 20px;
width: 300px;
height: 150px;
text-align: center;
` 

function ComentCard() {
//   useProtectedPage()

  return (
      
      <ComentPostCard>
        <div>Nome do Usuário</div>
        <hr/>
        <div>Texto do post</div>
        <hr/>
          <div>
          0 <button> Comentários</button>
          </div>

      </ComentPostCard>
    
  );
}

export default ComentCard;
