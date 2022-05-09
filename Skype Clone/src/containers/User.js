import React, { Component } from 'react';
import './User.css'



export default class Users extends Component {    
    render() {
        const {handleUserClick} = this.props;
        const {name, profile_pic, status, user_id} = this.props.user;
        return <div className="User" onClick={() => handleUserClick(user_id)}>
            <img src={profile_pic} alt={name}  className="UserPic"></img>
            <div className='UserDetail'>
                <p className="UserName">{name}</p>
                <p className="UserStatus">{status}</p>
            </div>

        </div>
    }

}




