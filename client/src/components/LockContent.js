//Карточка для 1 замка

import React, { Component } from 'react';

class LockContent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.size = props.size;
    this.state.color = "Цвет замка ";
    this.state.name = "С кем повесили замочек ";
    this.state.text = "Сообщение ";
  }

  render() {
    let cardContent = (
        <div id="l-Text" class="l-Text">
            <p>{this.state.size}</p>
            <p>{this.state.color}</p>
            <p>{this.state.name}</p>
            <p>{this.state.text}</p>
      </div>
    );

    return (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                  {cardContent}
                  <a href="#" onClick={(e) => {}} className="btn btn-danger">Удалить</a>
                </div>
            </div>
    );
  }
}

export default LockContent;