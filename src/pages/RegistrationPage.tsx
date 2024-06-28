// src/pages/RegistrationPage.tsx
import React from 'react';
import RegistrationForm from '../components/RegistrationPage/RegistrationForm';
import Header from '~/components/Header';

const RegistrationPage: React.FC = () => {
    return (
        <div>
            <Header />
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;
