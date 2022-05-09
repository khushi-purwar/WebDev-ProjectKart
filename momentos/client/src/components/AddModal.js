import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';

const AddModal = (props) => {
    return (

        <form className="modal" onSubmit={props.submitMemory} >
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={props.titleVal} onChange={props.titleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" value={props.descValue} onChange={props.descChange} />
            </div>
            <button className="submit-memory"><FaPaperPlane >Add</FaPaperPlane></button>
            <h1 className="close-modal" onClick={props.hideModal}>X</h1>
        </form>

    )
}

export default AddModal;
