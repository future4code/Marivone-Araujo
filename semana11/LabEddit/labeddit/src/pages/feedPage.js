import react from "react";
import styled from "styled-components"

const BoxWrite = styled.div`
border: 1px solid black;
margin: 20px;
width: 300px;
height: 200px;
text-align: center;
` 
const BoxPost = styled.div`
border: 1px solid black;
margin: 20px;
width: 300px;
height: 150px;
text-align: center;
` 

function FeedPage() {
  return (
    <div>

      < BoxWrite>
        <div>Nome do Usuário</div>

        <p><label for="post">Escreva seu post:</label>
        <textarea id ="post" rows="4" cols="30"/></p>
          <button>Postar</button>
      </BoxWrite>


      <BoxPost>

        <div>Nome do Usuário</div>
        <hr/>
        <div>Texto do post</div>
        <hr/>
        
          <div>
            <button>0</button>

          <button> Comentários</button>
          </div>

      </BoxPost>

      
      <BoxPost>

        <div>Nome do Usuário</div>

        <hr/>

        <div>Texto do post</div>
        <hr/>
        
          <div>
          0 <button> Comentários</button>
          </div>

      </BoxPost>
    
    
    </div>
  );
}

export default FeedPage;
