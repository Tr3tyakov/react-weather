import React from 'react';

function TimeDate({ fetch }) {
  const timeZone = -(fetch.city.timezone / 60);
  const myDate = new Date();
  const myNewDate = new Date(myDate.getTime() + 60000 * (myDate.getTimezoneOffset() - timeZone));
  return (
    <p>
      {myNewDate.toLocaleString('en', {
        hour: 'numeric',
        minute: 'numeric',
      })}
    </p>
  );
}

export default TimeDate;
