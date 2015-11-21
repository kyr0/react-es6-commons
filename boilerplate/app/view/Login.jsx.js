import React from 'react';

import PageLayout from './login/PageLayout.js';
import LoginForm from './login/LoginForm.js';

export default function(state, classes, i18n) {

    return (
        <PageLayout>
            <LoginForm />
        </PageLayout>
    )
};