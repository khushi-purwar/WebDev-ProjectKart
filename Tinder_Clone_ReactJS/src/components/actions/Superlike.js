  
import React from 'react';

const SuperLike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_SUPERLIKED_USERS')}
  >
    <img src="images/misc/superlike.png" alt="Superlike User" />
  </button>
);

export default SuperLike;