import React, { useState, useEffect } from 'react';
import Input from '../input/Input';
import Recaptcha from '../recaptcha/Recaptcha';
import KeepConnected from '../keepConnected/KeepConnected';
import Button from '../button/Button';
import userIcon from '../../assets/img/user.svg';
import passwordIcon from '../../assets/img/password.svg';
import styles from './Form.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form({ theme }) {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState({});
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", formData);

            if (response.data.status) {
                navigate("/dashboard");
            }

        } catch (error) {
            if (error.response.data.errors) {
                const responseError = error.response.data.errors;
                setValidationErrors(responseError);
            } else {
                setValidationErrors({ unauthorized: "Usuário ou senha incorretos." });
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.formContainer}>
            <form method="POST" onSubmit={handleSubmit}>
                <Input
                    name="user"
                    label="Usuário"
                    url={userIcon}
                    alt="Ícone de usuário"
                    type="text"
                    placeholder="aluno290_1u"
                    handleChange={handleChange}
                    theme={theme}
                    isMobile={isMobile}
                />
                {
                    validationErrors.user &&
                    <span className={styles.errorMessage}>
                        {validationErrors.user[0]}
                    </span>
                }
                <Input
                    name="password"
                    label="Senha"
                    url={passwordIcon}
                    alt="Ícone de senha"
                    type="password"
                    placeholder="********"
                    handleChange={handleChange}
                    theme={theme}
                    isMobile={isMobile}
                />
                {
                    validationErrors.password &&
                    <span className={styles.errorMessage}>
                        {validationErrors.password[0]}
                    </span>
                }
                {
                    validationErrors.unauthorized &&
                    <span className={styles.errorMessage}>
                        {validationErrors.unauthorized}
                    </span>
                }
                {!isMobile && <KeepConnected theme={theme} />}
                <Recaptcha />
                <Button />
                {isMobile && <KeepConnected theme={theme} />}
                <div className={styles.forgotPassword}>
                    <p className={
                        theme === 'dark' &&
                            isMobile ?
                            styles.forgotPasswordTextDark :
                            styles.forgotPasswordText}
                    >
                        Esqueceu sua senha?
                    </p>
                    <span className={
                        theme === 'dark' &&
                            isMobile ?
                            styles.recoverPasswordDark :
                            styles.recoverPassword}
                    >
                        Recuperar senha
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Form;