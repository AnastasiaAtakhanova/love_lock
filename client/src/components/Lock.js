import React, {Component} from 'react';
import '../style/auth.css';

class Lock extends Component {

    constructor(props) {
        super(props);
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
                            <label>
                                <img src="../style/img/замок.png" alt="" width="60px" height="60px"></img>
                                <p>Красный</p>
                                <input type="radio" name="status2" id = "color"></input>
                            </label>
                        </td>
                        <td>
                            <label>
                                <img src="../style/img/замок2.png" alt="" width="70px" height="60px"></img>
                                <p>Синий</p>
                                <input type="radio" name="status2" id = "color"></input>
                            </label>
                        </td>
                        <td>
                            <label>
                                <img src="./img/замок3.png" alt="" width="70px" height="60px"></img>
                                <p>Желтый</p>
                                <input type="radio" name="status2" id = "color"></input>
                            </label>
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
                                    <img src="./img/замок.png" alt="" width="40px"></img>
                                    <p>Маленький</p>
                                    <input type="radio" name="status" id = "size"></input>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <img src="./img/замок.png" alt="" width="60px"></img>
                                    <p>Средний</p>
                                    <input type="radio" name="status" id = "size"></input>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <img src="./img/замок.png" alt="" width="80px"></img>
                                    <p>Большой</p>
                                    <input type="radio" name="status"></input>
                                </label>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="l-Title">
                    <p>Введите имя человека, вместе с которым Вы хотите повесить замочек</p>
                </div>
                <p>
                <input type="text" class="form-control" id="person"></input>
                </p>
                <div class="l-Title">
                    <p>Введите сообщение</p>
                </div>
                <p>
                <input type="text" class="form-control" id="person"></input>
                </p>
                <div class="btn">
                    <form>
                        <button class="button2">Продолжить</button>
                    </form>
                </div>
            </div>
        );
    }    

}
export default Lock;
