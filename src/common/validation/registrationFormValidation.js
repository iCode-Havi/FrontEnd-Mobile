import * as yup from 'yup';
import requiredFields from '../strings/strings.form';

const validationSchemaForRegistrationForm = yup.object().shape({
    firstName: yup.string().required(requiredFields.firstNameRequired),
    lastName: yup.string().required(requiredFields.lastNameRequired),
    nic: yup.string().required(requiredFields.nicRequired),
    email: yup.string().email().required(requiredFields.emailRequired),
    password: yup.string().required(requiredFields.passwordRequired),
    confirmPassword: yup.string()
        .required(requiredFields.confirmPasswordRequired)
        .test('password-match', 'Passwords do not match.', function (value) {
            return this.parent.password === value;
        }),
    contact1: yup.string().required(requiredFields.contact1Required),
    contact2: yup.string().required(requiredFields.contact2Required),
    location: yup.string().required(requiredFields.locationRequired),
    holderName: yup.string().required(requiredFields.holderNameRequired),
    bank: yup.string().required(requiredFields.bankRequired),
    branch: yup.string().required(requiredFields.branchRequired)
});

export default validationSchemaForRegistrationForm;
