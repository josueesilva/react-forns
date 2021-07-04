import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome:'josue',
            texto:'eita to aprendendo',
            isGoing: true,
            sabor:'coco'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        this.setState({[name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value});
    }

    handleSubmit(event){

        Object.keys(this.state).map((key, index)=> alert('A propriedade ' + key + ' foi preenchida com ' + this.state[key]));

        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Nome:
                    <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Texto:
                    <textarea name="texto" value={this.state.texto} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Estão indo:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Sabores:
                    <select name="sabor" value={this.state.sabor} onChange={this.handleChange}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        );
    }

}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
);