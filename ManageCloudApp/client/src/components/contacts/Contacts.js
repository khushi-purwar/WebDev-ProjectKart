import React from "react";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  getContacts,
  deleteContact,
  setSelected
} from "../../store/actions/contacts";

function Contacts(props) {
  const { contacts, deleteContact, setSelected } = props;

  const onDelete = id => {
    deleteContact(id);
  };

  const onEdit = contact => {
    setSelected(contact);
  };

  return (
    <React.Fragment>
      <TransitionGroup>
        {contacts.filtered !== null
          ? contacts.filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem
                  contact={contact}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              </CSSTransition>
            ))
          : contacts.contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem
                  contact={contact}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              </CSSTransition>
            ))}
        {contacts.length === 0 ? <p>Please add a contact</p> : null}
      </TransitionGroup>
    </React.Fragment>
  );
}
const mapStatesToProps = state => {
  return { contacts: state.contacts };
};

export default connect(mapStatesToProps, {
  getContacts,
  deleteContact,
  setSelected
})(Contacts);
