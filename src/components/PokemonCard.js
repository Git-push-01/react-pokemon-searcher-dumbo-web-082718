import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    isClicked: true
  };

  showHp = () => {
    return this.props.poke.stats.map(poke => {
      if (poke.name === "hp") {
        return poke.value;
      }
    });
  };

  clickHandler = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };
  pokeImg = () => {
    if (this.state.isClicked) {
      return this.props.poke.sprites.front;
    } else {
      return this.props.poke.sprites.back;
    }
  };

  render() {
    return (
      <Card>
        <div onClick={this.clickHandler}>
          <div className="image">
            <img src={this.pokeImg()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.showHp()}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
