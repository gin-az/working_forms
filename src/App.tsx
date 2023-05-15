import './App.css';
import { FormikForm } from './components/Formik/Formik';
import { QuestionForm } from './components/QuestionForm/QuestionForm';
import { Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    return (
        <>
            <Button onClick={() => changeLanguage('en')}>EN</Button>
            <Button onClick={() => changeLanguage('ru')}>RU</Button>
            <div className="App">
                <header className="App-header">
                    <Typography textOverflow="ellipsis" variant="h2">
                        {t('workingWithForms')}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        spacing={2}
                    >
                        <FormikForm />
                        <QuestionForm />
                    </Stack>
                </header>
            </div>
        </>
    );
}

export default App;
