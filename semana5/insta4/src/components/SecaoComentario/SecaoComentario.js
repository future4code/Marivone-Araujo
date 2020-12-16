import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentInput: ""	
	}

	onChangeComentario = (e) => {
		console.log(this.state.comentInput)
		
		this.setState({
			comentInput: e.target.value	
			
		})
	}


	render() {
		return (<div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentInput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	)
	}
}
