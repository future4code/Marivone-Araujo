import React from 'react';
import axios from 'axios';


export class SpaceXPage extends React.Component{
state = {
    launches: []
}

    componentDidMount=()=>{
        this.getPastLaunches()

    }

    getPastLaunches = () =>{
        axios.get ('https://api.spacexdata.com/v4/launches/past')
        .then((res) => {
          this.setState({launches: res.data})
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    render() {
        return (
          <div className="App">
            <h1>Leia sobre os lançamentos da SpaceX:</h1>
            {this.state.launches.map((launch) => {
              return (
                <div  key={launch.id}>
                  
                  <hr></hr>
                  <h2>{launch.name}</h2>
                  <p>{launch.details}</p>
                  <a href={launch.links.article} target="_blank">Leia mais!</a>
             
                  
                </div>
              )
            })}
          </div>
        );
      }
    }