import GoogleRecaptcha from '../components/google-recaptcha';

import {
    GoogleRecaptchaSection,
    SectionTitle,
    SectionForm,
    FormFieldset,
    FieldsetLabel,
    FieldsetInput,
    FieldsetButton
} from './style';

const Home = () => (
    <GoogleRecaptchaSection>
        <SectionTitle>Google Recaptcha</SectionTitle>

        <SectionForm id="main__form" onSubmit={formSubmit}>
            <FormFieldset>
                <FieldsetLabel>Type your name:</FieldsetLabel>

                <FieldsetInput name="name" />
            </FormFieldset>

            <GoogleRecaptcha />

            <FormFieldset>
                <FieldsetButton type="submit" disabled>Confirm</FieldsetButton>
            </FormFieldset>
        </SectionForm>
    </GoogleRecaptchaSection>
)

const formSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
}

export default Home