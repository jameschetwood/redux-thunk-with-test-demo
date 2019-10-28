import React from "react";

const People = ({ people }) => {
  if (people.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {people.map(item => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  );
};

export default People;
