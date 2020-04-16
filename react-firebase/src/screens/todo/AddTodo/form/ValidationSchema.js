import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    todo: Yup.string()
        .required('Required'),
});