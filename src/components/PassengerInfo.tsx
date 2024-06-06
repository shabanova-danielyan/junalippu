import React from 'react';

const PassengerInfo: React.FC = () => {
  return (
    <div>
      {/* input */}
      <form>
        <h2>Log in</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Log in</button>
        <p>Do you have an account? If not, <a href="#">Create</a></p>
        <button type="button">Cancel</button>
        <button type="button">Back</button>
      </form>
    </div>
  );
}

export default PassengerInfo;
