import React from 'react';



class StatePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    getUsers = () => {
        this.setState({
            users: ["Maksata", "Aikol", "Bekzat"]
        })
    }


    render() {
        return(
            <div>
                <button onClick={this.getUsers}>get users</button>
            <ul>
                {
                    this.state.users.map(users=>{                        return <li>{users} </li>
                    })
                }
            </ul>
            </div>
        )
    }
}

export default StatePage;