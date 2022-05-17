import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addContact,
  updateContact,
  clearSelected
} from "../../store/actions/contacts";

const initState = {
  name: "",
  email: "",
  phone: "",
  type: "personal"
};

function ContactForm(props) {
  const { selected, addContact, updateContact, clearSelected } = props;
  const [contact, setContact] = useState(initState);

  useEffect(() => {
    if (selected._id) {
      setContact(selected);
    } else {
      setContact(initState);
    }
  }, [selected]);

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contact._id) {
      updateContact(contact);
      clearSelected();
    } else {
      addContact(contact);
    }
    setContact(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">
        {contact._id ? "Update Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional{" "}
      <div>
        <input
          type="submit"
          value={contact._id ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
        {contact._id && (
          <input
            type="button"
            value="Clear"
            className="btn btn-light btn-block"
            onClick={clearSelected}
          />
        )}
      </div>
    </form>
  );
}
const mapStatesToProps = state => {
  return { selected: state.contacts.selected };
};
export default connect(mapStatesToProps, {
  addContact,
  updateContact,
  clearSelected
})(ContactForm);
