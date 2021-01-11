import React, {Component} from 'react';
import GamePanel from './GamePanel';
import Mosquito from './Mosquito';

class Game extends Component {
    render() {
        return (
            <div>
                <Mosquito
                  difficulty = {this.props.difficulty}
                  onClickMosquito = {this.props.onClickMosquito}
                />

                <GamePanel
                    lives = {this.props.lives}
                />

            </div>
        )
    }
}
export default Game;