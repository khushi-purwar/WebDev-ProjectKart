import React from "react";

function ContactItem({ contact, onDelete, onEdit }) {
  const { _id, name, email, phone, type } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => onEdit(contact)}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </p>
    </div>
  );
}
export default ContactItem;
