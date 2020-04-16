import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    title: Yup.string()
        .required('Required'),
    content: Yup.string()
        .required('Required'),
});