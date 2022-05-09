import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (<li><a className="google-login" href="/auth/google">Login With Google</a></li>
                );
            default:
                return (<Fragment>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/explore'>Explore</Link></li>
                    <li><a className="google-logout" href="/api/logout">Logout</a></li>
                </Fragment>
                );

        }
    }
    render() {
        return (
            <div className="nav-container">
                <Link to="/" className="logo">Daily Memory</Link>
                <ul className="nav-links">{this.renderContent()}</ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(Navbar);