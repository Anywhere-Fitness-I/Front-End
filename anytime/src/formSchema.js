import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('Please enter your first name')
        .trim(),
    lastName: yup
        .string()
        .required('Please enter your last name')
        .trim(),
    email: yup
        .string()
        .email('Enter a valid email address')
        .required('Please enter your email')
        .trim(),
    password: yup
        .string()
        .required('Please enter a password')
        .trim()
        .min(8, 'Password is not strong enough'),
    confirmPassword: yup
        .string()
        .required('Please confirm your password'),
        // .test('passwords-match', "Passwords do not match", function(value){
        //     return this.parent.password == value;
        // }),
    role: yup
        .string()
        .required()
})
export default formSchema;