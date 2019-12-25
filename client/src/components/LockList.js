import React, {Component} from 'react';
import {getUserData} from "../api/UserData";

class LockList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: []
          };
    }

    reloadUserData = () => {
        getUserData("ann").then((data) => {
            this.setState({'data': data});
        });
    };


    render() {
        this.reloadUserData();
        const smth = this.state.data;
        return (
            <div>
                <label><b>{String(smth)}</b></label>
            </div>
        );
    }
}

export default LockList;
