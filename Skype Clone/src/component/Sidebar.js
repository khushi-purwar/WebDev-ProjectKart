import React, { Component } from "react";
import User from "../containers/User";
import './Sidebar.css';
import {setActiveUserId} from "../actions/index"
import { connect } from "react-redux";
import _ from "lodash"

class Sidebars extends Component {

    render() {
        const { contacts, handleUserClick} = this.props;                   
        return <aside className="Sidebar">
            {_.values(contacts).map(contact => <User user={contact} 
                                                     key={contact.user_id} 
                                                     handleUserClick={handleUserClick} />)}
        </aside>
    }
}

const  mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        handleUserClick: (user_id) => {
            dispatch(setActiveUserId(user_id));
        }
    });
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebars);
export default Sidebar;