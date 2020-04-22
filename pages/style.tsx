import styled from 'styled-components';

const GoogleRecaptchaSection = styled.section`
    font-family: Roboto, sans-serif;
    margin: 0 auto;
    max-width: 1024px;
    padding: 30px;
    width: 100%;
`;

const SectionTitle = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
`;

const SectionForm = styled.form`
    margin: 20px auto;
    text-align: center;
    width: 480px;
`;

const FormFieldset = styled.fieldset`
    border: none;
    display: inline-block;
    padding: 0;
    width: auto;
`;

const FieldsetButton = styled.button`
    background: #000;
    border: none;
    box-shadow: none;
    color: #FFF;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    outline: none;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    width: 120px;

    &:disabled {
        cursor: initial;
        opacity: .4;
    }
`;

export {
    GoogleRecaptchaSection,
    SectionTitle,
    SectionForm,
    FormFieldset,
    FieldsetButton
};