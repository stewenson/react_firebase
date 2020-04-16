import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    author: Yup.string()
        .required('Required'),
    comment: Yup.string()
        .required('Required'),
});