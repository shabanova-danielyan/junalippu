import React from 'react';

const PassengerInfo: React.FC = () => {
    return (
        <div>
            {/* form for log in */}
            <form>
                <h2>Login or Register</h2>
                <label htmlFor="email">Email address:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <button type="submit">Log in</button>
                <button type="button">Create Account</button>
            </form>
        </div>
    );
}

export default PassengerInfo;
