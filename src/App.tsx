import './App.css';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormsPage } from './pages/FormsPage';

function App() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    return (
        <>
            <Button onClick={() => changeLanguage('en')}>EN</Button>
            <Button onClick={() => changeLanguage('ru')}>RU</Button>
            <div className="Wrap">
                <FormsPage />
            </div>
        </>
    );
}

export default App;
