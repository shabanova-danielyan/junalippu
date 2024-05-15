import React from 'react';

const RegistrationPage: React.FC = () => {
    return (
        <div>
            {/* Форма регистрации */}
            <form>
                <h2>Registration</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" />
                <label htmlFor="email">Email address:</label>
                <input type="email" id="email" />
                <label htmlFor="mobile">Mobile number:</label>
                <input type="text" id="mobile" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
