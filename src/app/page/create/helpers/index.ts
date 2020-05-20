import * as Yup from 'yup'

const initialValues = {
    user: '',
    title: '',
    status: false,
}

const shape = {
    user: Yup
        .string()
        .required(),
    title: Yup
        .string()
        .required(),
    status: Yup
        .boolean(),
}

const validationSchema = Yup.object().shape(shape);

export {
    initialValues,
    validationSchema
}