import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormStyled } from '../common/FormStyled/Form.styled';
import { TextProject } from '../../other/strings';
import {
    Button,
    Divider,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export const QuestionForm = () => {
    const {
        register,
        watch,
        control,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: 'onBlur' });

    const { t } = useTranslation();

    const onSubmit = (data: object) => {
        alert(JSON.stringify(data));
    };
    const isTravel = watch('travel') !== 'yes';

    console.log('errors.fullName', errors);

    return (
        <div>
            <h1>{t('questionForm.library')}</h1>
            <FormStyled>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <TextField
                            label={t('questionForm.fullName')}
                            {...register('fullName', {
                                required: 'Обязательное поле',
                                minLength: {
                                    value: 5,
                                    message: 'Минимум 5 символов',
                                },
                                pattern: {
                                    value: /[!А-яё]/,
                                    message: 'Используйте кирилицу',
                                },
                            })}
                            error={Boolean(errors.fullName)}
                            helperText={String(errors?.fullName?.message || '')}
                        />
                        <TextField
                            label={t('questionForm.city')}
                            {...register('city', {
                                required: TextProject.required,
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символа',
                                },
                            })}
                            error={Boolean(errors.city)}
                            helperText={String(errors?.city?.message || '')}
                        />
                        <Divider />
                        <FormLabel>{t('questionForm.gender')}</FormLabel>
                        <Controller
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label={t('questionForm.male')}
                                    />

                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label={t('questionForm.female')}
                                    />
                                </RadioGroup>
                            )}
                            name="gender"
                            control={control}
                        />
                        <Divider />
                        <FormLabel>{t('questionForm.youTravelling')}</FormLabel>
                        <Controller
                            render={({ field }) => (
                                <RadioGroup {...field} row>
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio />}
                                        label={t('questionForm.yes')}
                                    />
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio />}
                                        label={t('questionForm.no')}
                                    />
                                    <FormControlLabel
                                        value="rarely"
                                        control={<Radio />}
                                        label={t('questionForm.rarely')}
                                    />
                                </RadioGroup>
                            )}
                            name="travel"
                            control={control}
                        />
                        {isTravel && (
                            <TextField
                                label={t('questionForm.cause')}
                                multiline
                                rows={3}
                                {...register('cause')}
                            />
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={!isValid}
                        >
                            {t('questionForm.send')}
                        </Button>
                    </Stack>
                </form>
            </FormStyled>
        </div>
    );
};
