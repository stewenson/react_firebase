import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    nickName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email()
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password_confirm: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
