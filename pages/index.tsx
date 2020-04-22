import GoogleRecaptcha from '../components/google-recaptcha';

import {
    GoogleRecaptchaSection,
    SectionTitle,
    SectionForm,
    FormFieldset,
    FieldsetButton
} from './style';
import { useState } from 'react';

const Home = () => {
    const [showButton, handleShowButton] = useState(false);

    return (
        <GoogleRecaptchaSection>
            <SectionTitle>Google Recaptcha</SectionTitle>

            <SectionForm id="main__form" onSubmit={formSubmit}>
                <GoogleRecaptcha
                    showButton={handleShowButton}
                />

                <FormFieldset>
                    {!showButton && <FieldsetButton type="submit" disabled>Confirm</FieldsetButton>}

                    {showButton && <FieldsetButton type="submit">Confirm</FieldsetButton>}
                </FormFieldset>
            </SectionForm>
        </GoogleRecaptchaSection>
    );
}

const formSubmit = event => {
    event.preventDefault();

    alert('Sent!');
}

export default Home