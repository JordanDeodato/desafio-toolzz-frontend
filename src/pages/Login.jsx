import Banner from '../components/banner/Banner';
import LoginForm from '../components/loginForm/LoginForm';
import { createContext, useState } from 'react';
import darkMode from '../assets/img/dark-mode.svg';
import lightMode from '../assets/img/light-mode.svg';
import logoLight from "../assets/img/logo.svg";
import logoDark from "../assets/img/logo-light.svg";
import './Login.css';


export const ThemeContext = createContext(null);

function Login() {
    const [theme, setTheme] = useState("light");
    const [iconMode, setIcon] = useState(darkMode);
    const [logo, setLogo] = useState(logoLight);

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        setIcon((curr) => (curr === darkMode ? lightMode : darkMode));
        setLogo((curr) => (curr === logoLight ? logoDark : logoLight));
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                className="login"
                id={theme}
            >
                <Banner
                    iconMode={iconMode}
                    changeMode={toggleTheme}
                />
                <LoginForm
                    logo={logo}
                    theme={theme}
                />
            </div>
        </ThemeContext.Provider>
    );
}

export default Login;