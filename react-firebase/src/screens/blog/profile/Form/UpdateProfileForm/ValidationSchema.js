import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    nickName: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email()
        .required('Required'),
    State: Yup.string()
        .required('Required'),
    phoneNumber: Yup.number()
        .required('Required'),
    intro: Yup.string()
        .required('Required'),

});