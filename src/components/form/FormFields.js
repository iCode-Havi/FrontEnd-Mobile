import React from 'react';
import FormField from './FormField';

const FormFields = ({handleChange, handleBlur, values, errors, touched, fields}) => {
    return fields.map((field, i) => {
        return (
            <FormField
                key={i}
                placeholder={field.placeholder}
                onChangeText={handleChange(field.name)}
                onBlur={handleBlur(field.name)}
                value={values[field.name]}
                error={touched[field.name] && errors[field.name]}
                style={field.style}
            />
        );
    });
};

export default FormFields;
