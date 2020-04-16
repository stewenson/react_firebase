import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    email: Yup.string()
        .email()
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
