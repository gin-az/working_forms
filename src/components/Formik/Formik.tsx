import { Button, Stack, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import { FormStyled } from '../common/FormStyled/Form.styled';
import * as yup from 'yup';
import { TextProject } from '../../other/strings';
import { useTranslation } from 'react-i18next';

export const FormikForm: FC = () => {
    const { t } = useTranslation();

    const validationSchema = yup.object().shape({
        firstName: yup.string().required(TextProject.required),
        lastName: yup.string().required(TextProject.required),
        password: yup
            .string()
            .min(8, 'Длина пароля должна быть более 8 символов')
            .max(32, 'Длина пароля не должна быть более 35 символов')
            .required(TextProject.required),
        email: yup
            .string()
            .email(TextProject.invalidEmail)
            .max(255)
            .required(TextProject.required),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Пароли не идентичны!'),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validateOnBlur // валидация будет выполняться во время перехода к другому полю
                onSubmit={(values) => {
                    console.log('123', values);
                }} // валидация во время отправки
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched, // было ли взаимодействие с полем ранее
                    handleChange,
                    handleBlur, // уходим с поля
                    isValid, // валидна форма?
                    handleSubmit,
                    dirty, // изменялись ли значения в форме
                }) => (
                    <>
                        <h1>{t('regForm.library')}</h1>
                        <FormStyled>
                            <Form>
                                <Stack spacing={2}>
                                    <TextField
                                        label={t('regForm.firstName')}
                                        name="firstName"
                                        value={values.firstName}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(
                                            touched.firstName &&
                                                errors.firstName
                                        )}
                                        helperText={
                                            touched.firstName &&
                                            errors.firstName &&
                                            TextProject.required
                                        }
                                    />
                                    <TextField
                                        name="lastName"
                                        label={t('regForm.lastName')}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        error={Boolean(
                                            touched.lastName && errors.lastName
                                        )}
                                        helperText={
                                            touched.lastName &&
                                            errors.lastName &&
                                            TextProject.required
                                        }
                                    />
                                    <TextField
                                        label={t('regForm.e-mail')}
                                        name="email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(
                                            touched.email && errors.email
                                        )}
                                        helperText={
                                            touched.email && errors.email
                                        }
                                    />
                                    <TextField
                                        label={t('regForm.password')}
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(
                                            touched.password && errors.password
                                        )}
                                        helperText={
                                            touched.password && errors.password
                                        }
                                    />
                                    <TextField
                                        label={t('regForm.confirmPassword')}
                                        name="confirmPassword"
                                        type="password"
                                        value={values.confirmPassword}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(
                                            touched.confirmPassword &&
                                                errors.confirmPassword
                                        )}
                                        helperText={
                                            touched.confirmPassword &&
                                            errors.confirmPassword
                                        }
                                    />
                                    <Button
                                        disabled={!isValid || !dirty}
                                        type="submit"
                                        onClick={() => handleSubmit}
                                        variant="contained"
                                    >
                                        {t('regForm.registration')}
                                    </Button>
                                </Stack>
                            </Form>
                        </FormStyled>
                    </>
                )}
            </Formik>
        </div>
    );
};
