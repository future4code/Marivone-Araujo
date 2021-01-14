import axios from 'axios';
import React from 'react';

export class ActivityPage extends React.Component{
state = {
    activity: "",
	accessibility: 0,
	type: "",
	participants: 0,
	price: 0,
    link: "",
   
}      

// displayLink = () =>{
//     if (this.setState.link !== ""){
//         <a href={this.state.link} target="_blank">Saiba Mais!</a>   
//     } else{
//         <p></p>
//     }
// }


    getActivity =()=>{
        axios.get ('https://www.boredapi.com/api/activity/')
        .then((res) =>{
            console.log(res.data)     
            this.setState({
                activity: res.data.activity,
	            participants: res.data.participants,
                accessibility: res.data.accessibility,
                price: res.data.price,
	            link: res.data.link
            })       
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    
    render(){
        console.log(this.state)
                
        return(
            <div>
            <h2> Saia da rotina! </h2>
            <button onClick={this.getActivity}> Escolha uma atividade:</button>

            <h3>Mãos à obra!</h3>

            <p>Atividade: {this.state.activity}</p>
            <p>Número de participantes: {this.state.participants}</p>
            <p>Acessibilidade: {this.state.accessibility}</p>
            <p>Preço: {this.state.price}</p>
            <a href={this.state.link} target="_blank">Leia mais!</a>
            {/* {this.displayLink()} */}
            </div>
        )
    }
}