import { Button } from "@material-ui/core";
import react from "react";
import styled from "styled-components"

const BoxPostPage = styled.div`
border: 1px solid black;
margin: 20px;
width: 300px;
height: 150px;
text-align: center;
` 

const BoxWritePost = styled.div`
border: 1px solid black;
margin: 20px;
width: 300px;
height: 200px;
text-align: center;
` 

function PostPage() {
  return (
    <div>

      <BoxPostPage>

        <div>Nome do Usuário</div>
        <hr/>
        <div>Texto do post</div>
        <hr/>        
          <div>
          <button>0</button><button> Comentários</button>
          </div>

      </BoxPostPage>

      
      < BoxWritePost>     
          <p><textarea id ="post" rows="4" cols="30" placeholder="Escreva seu comentário"/>
          <button>Comentar</button></p>
      </BoxWritePost>

      <BoxPostPage>
        <div>Nome do Usuário</div>
        <hr/>
          <div>Texto do Comentário</div>
        <hr/>        
          <button>0</button>

      </BoxPostPage>
      
    
    </div>
  );
}

export default PostPage;
