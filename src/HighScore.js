import React, {Component} from "react";

class HighScore extends Component {
    
    render(){
        if(this.props.overTen){
            return(
            <h3>You Beat the high score
                <button onClick={this.props.onReset}>Reset</button>
            </h3>
            );
        }
        else{
            return null;
        }
        //toda renderização do react tem que retornar algo ou haverão erros
        //caso não haja nada a ser retornado pode se usar o 'null'
    }
}

export default HighScore;