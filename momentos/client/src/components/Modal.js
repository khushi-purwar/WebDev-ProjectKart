import React, { Component } from 'react'
import Portal from './Portal';


export default class Modal extends Component {
    render() {
        return (
            <Portal>
                <div className="modal-wrapper">
                    {this.props.children}
                </div>
            </Portal>
        )
    }
}
