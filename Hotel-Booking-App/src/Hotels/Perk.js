import React from "react";

const Perk = (props) => {
  if (props.hasPerk) {
    return <span className="hotel__perks">{props.perk}</span>;
  } else {
    return null;
  }
};

export default Perk;
