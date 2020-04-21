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
    margin: 10px 0;
    padding: 0;
    width: auto;
`;

const FieldsetLabel = styled.label`
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
`;

const FieldsetInput = styled.input`
    background: transparent;
    border: 1px solid #000;
    font-size: 18px;
    outline: none;
    padding: 5px;
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
    FieldsetLabel,
    FieldsetInput,
    FieldsetButton
};