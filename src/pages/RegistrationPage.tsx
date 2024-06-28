// src/pages/RegistrationPage.tsx
import React from 'react';
import RegistrationHeader from '../components/RegistrationPage/RegistrationHeader';
import RegistrationForm from '../components/RegistrationPage/RegistrationForm';

const RegistrationPage: React.FC = () => {
    return (
        <div>
            <RegistrationHeader />
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;
