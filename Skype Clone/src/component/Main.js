import React, { Component } from 'react';
import './Main.css';
import Empty from "./Empty";
import ChatWindow from "./ChatWindow"
import { connect} from "react-redux"

class Mains extends Component {    

    render() {
    	const { userReducer, activeUserIdReducer} = this.props;
    	const renderMainContent = () => {
    		if (!activeUserIdReducer) {
    			return <Empty user={userReducer} activeUserId={activeUserIdReducer} />
    		} else return <ChatWindow user={userReducer} activeUserId={activeUserIdReducer} />
    	}     

        return <div className="Main">
        	{renderMainContent()}            
            
        </div>


    };
    
};
const  mapStateToProps = state => {
    return {
		userReducer: state.userReducer,
		activeUserIdReducer: state.activeUserIdReducer
    }
}
const Main = connect(mapStateToProps)(Mains)
export default Main
