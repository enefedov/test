import * as Yup from 'yup'

const initialValues = {
    taskName: '',
    name: '',
    status: false,
}

const shape = {
    taskName: Yup
        .string()
        .required(),
    name: Yup
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