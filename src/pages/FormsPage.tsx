import React from 'react';
import { Stack, Typography } from '@mui/material';
import { FormikForm } from '../components/Formik/Formik';
import { QuestionForm } from '../components/QuestionForm/QuestionForm';
import { useTranslation } from 'react-i18next';

export const FormsPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Typography textOverflow="ellipsis" variant="h2">
                {t('workingWithForms')}
            </Typography>
            <Stack direction="row" justifyContent="space-evenly" spacing={2}>
                <FormikForm />
                <QuestionForm />
            </Stack>
        </>
    );
};
