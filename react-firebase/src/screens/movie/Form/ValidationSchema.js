import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

});
