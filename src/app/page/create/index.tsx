import React from 'react';
import {useFormik, FormikContext} from 'formik';
import {initialValues, validationSchema} from './helpers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Example {
    taskName: string;
    name: string;
    status: boolean;
}

const Create = () => {
    const onSubmit = (value: any) => console.log(value);
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {setChecked(!checked); formik.setFieldValue('status', !checked)};
    const formik = useFormik<Example>({onSubmit, initialValues, validationSchema})

    return (
        <div>
            
            <FormikContext.Provider value={formik}>
                <form id="example" onSubmit={formik.handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '500px',
                    width: '100%',
                    margin: '15% auto',
                }}>
                <TextField
                name='taskName' 
                label="Задача" 
                variant="outlined" 
                onChange={(e) => formik.setFieldValue('taskName', e.target.value)}
                style={{marginBottom: '15px'}}/>
                <TextField
                    name='taskName' 
                    label="Исполнитель" 
                    variant="outlined" 
                    onChange={(e) => formik.setFieldValue('name', e.target.value)}
                    style={{marginBottom: '15px'}}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        name="status"
                        color="primary"
                    />
                    }
                    label="Выполнено"
                />
                <Button variant="contained" color="primary" type="submit" style={{height: '50px'}}>
                    Добавить
                </Button>
                </form>
            </FormikContext.Provider>


        </div>
    )
}

export default Create;