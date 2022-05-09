import React, { useRef } from "react";
import { connect } from "react-redux";
import { filterContacts } from "../../store/actions/contacts";

function FilterContacts({ filterContacts }) {
  const text = useRef("");

  const handleChange = e => {
    e.preventDefault();
    filterContacts(text.current.value);
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter contacts..."
        onChange={handleChange}
      />
    </form>
  );
}
export default connect(null, { filterContacts })(FilterContacts);
