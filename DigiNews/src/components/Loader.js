import React, { Component } from 'react'
import Loading from './earth .gif'
export class loader extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Loading} alt='loading'/>
            </div>
        )
    }
}

export default loader
