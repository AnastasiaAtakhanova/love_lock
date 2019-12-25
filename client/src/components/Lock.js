import React, {Component} from 'react';
import '../style/auth.css';
import {sendLockData} from "../api/SendLockData";

class Lock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username
          };
    }
    clickHandler() {
        // const username = this.state.username;
        const person = document.getElementById("person").value;
        const design = document.getElementById("design").value;
        const size = document.getElementById("size").value;
        const message = document.getElementById("message").value;
        sendLockData(person, design, size, message);
        console.log(person, design, size, message);
    }
    render() {
        return (
            <div className="answer_container">
                <div class="l-Title">
                    <p>Выбери дизайн замочка</p>
                </div>
                <div>
                <table>
                    <tr>
                        <td>
                            <img className="image" src={require('../style/img/замок.png')}/>
                            <p>Красный</p>
                            <input type="radio" value="red" name = "design" id="design"></input>
                        </td>
                        <td>
                            <img className="image" src={require('../style/img/замок2.png')}/>
                            <p>Синий</p>
                            <input type="radio" value="blue" name = "design" id="design"></input>
                        </td>
                        <td>
                            <img className="image" src={require('../style/img/замок3.png')}/>
                            <p>Желтый</p>
                            <input type="radio" value="yellow" name = "design" id="design"></input>
                        </td>
                    </tr>
                </table>
                </div>
                <div class="l-Title">
                    <p>Выбери размер замочка</p>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>
                                <label>
                                    <p>Маленький</p>
                                    <input type="radio" value="little" name = "size" id="size"></input>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <p>Средний</p>
                                    <input type="radio" value= "middle" name = "size" id="size"></input>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <p>Большой</p>
                                    <input type="radio" value="big" name = "size" id="size"></input>
                                </label>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="l-Title">
                    <p>Введи имя человека, вместе с которым вы хотите повесить замочек</p>
                </div>
                <p>
                <input type="text" class="form-control" id="person"></input>
                </p>
                <div class="l-Title">
                    <p>Оставь сообщение</p>
                </div>
                <p>
                <input type="text" class="form-control" id="message"></input>
                </p>
                <button class="button2" onClick={this.clickHandler}>Продолжить</button>
            </div>
        );
    }    

}
export default Lock;
