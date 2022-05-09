import React, { useEffect } from "react";
import { connect } from "react-redux";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import FilterContacts from "../contacts/FilterContacts";
import { getContacts } from "../../store/actions/contacts";
import { loadUser } from "../../store/actions/auth";

function Home(props) {
  useEffect(() => {
    props.loadUser();
    props.getContacts();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <ContactForm />
      <div>
        <FilterContacts />
        <Contacts />
      </div>
    </div>
  );
}

export default connect(null, { loadUser, getContacts })(Home);
