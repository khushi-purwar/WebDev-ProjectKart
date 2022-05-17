import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postMemory, getMemory, deleteMemory } from '../actions';
import Todo from './Todo';
import Modal from './Modal';
import AddModal from './AddModal';
import { FaPlusCircle } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Dashboard extends Component {

    state = {
        memoryValue: '',
        memoryDescValue: '',
        show: false
    }

    componentDidMount() {
        this.props.getMemory();
    }

    showModal = () => {
        this.setState({ show: true });
        console.log(this.showModal);
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    memoryChangeHandler = (e) => {
        this.setState({ memoryValue: e.target.value });
    }
    memoryDescHandler = (e) => {
        this.setState({ memoryDescValue: e.target.value });
    }
    memoryDeleteHandler = (id) => {
        this.props.deleteMemory(id);
    }


    memorySubmitHandler = (e) => {
        e.preventDefault();
        const newMemory = {
            title: this.state.memoryValue,
            story: this.state.memoryDescValue
        }
        this.props.postMemory(newMemory);
        this.hideModal();
        this.setState({ memoryValue: '', memoryDescValue: '' });

    }
    render() {
        const showHideModal = this.state.show;
        return (
            <div className="dashboard">
                <h1 className="dashboard-title">Your Daily Memories</h1>
                <div className="add-daily-container">
                    <FaPlusCircle className="add-daily" onClick={this.showModal}>Add Daily Memory</FaPlusCircle>
                </div>
                <div className="memory-container">
                    <VerticalTimeline>
                        {this.props.memories.map(memory => <VerticalTimelineElement key={memory._id}
                            className="vertical-timeline-element--work"
                            date={memory.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}> <Todo key={memory._id} postTitle={memory.postTitle} date={memory.date} postStory={memory.postStory} delete={this.memoryDeleteHandler.bind(this, memory._id)} /> </VerticalTimelineElement>)}
                    </VerticalTimeline>
                </div>
                {showHideModal && (
                    <Modal>
                        <AddModal className="modal" titleVal={this.state.memoryValue} descValue={this.state.memoryDescValue} hideModal={this.hideModal} submitMemory={this.memorySubmitHandler} titleChange={this.memoryChangeHandler} descChange={this.memoryDescHandler} />
                    </Modal>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = {
    postMemory,
    getMemory,
    deleteMemory
};

const mapStateToProps = (state) => ({
    memories: state.memories
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);