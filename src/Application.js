import React, {Component} from 'react';
import HighScore from  './HighScore';
import './css/style.css'

class Application extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            overTen: false
        }

    }

    handleClick = (e) =>{
        this.setState({count: this.state.count + 1});
    }
    componentDidUpdate(props, state){
        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){     
            this.setState({overTen: true});

            
        }   
        else{} if(this.state.overTen && !state.overTen){
            console.log(this.state.overTen);
            console.log(state.overTen);
        }                                                                                    
    }
    //quando ele refaz o loop por causa do setState ele não vai 
    //setar o valor do count denovo então os valores do state.count
    //Continuam inalterados, impedindo do loop continuar alterando infinitamente o valor logico de overTen.
    //Detalhe que toda vez ao clicar no botão o loop sera refeito e o valor logico de overTen sera atualizado para impedir adicionamos 
    //o a logica de que o valor só sera alterado se o mesmo  
    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        });
    }

        render(){
            let {count} = this.state;

            return(
                <div>
                    <h1>You hit the button {count} times</h1>
                    <HighScore
                    overTen = {this.state.overTen}
                    onReset = {this.resetCount}
                    />
                    <span>
                        <button onClick={this.handleClick}>Click Me</button>
                    </span>
                </div>
            );// quando a função tem especificado que ele recebe um (e) não precisa repetir no agente do evento explicitamente
              // colocando apenas o this.nomeFunc ao invés de (e) => this.nomeFunc(e), pois ja está definido preciamente que ela 
              //recebera o parametro evento
        }

}

export default Application;