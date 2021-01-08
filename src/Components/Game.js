import React, {Component} from 'react';
import GamePanel from './GamePanel';
import Mosquito from './Mosquito';

class Game extends Component {
    render() {
        return (
            <div>
                <Mosquito
                  difficulty = {this.props.difficulty}
                />

                <GamePanel/>

            </div>
        )
    }
}
export default Game;