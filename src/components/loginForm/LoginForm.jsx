import Logo from "../logo/Logo";
import Social from "../social/Social";
import Form from "../form/Form";
import backIcon from '../../assets/img/back-black.svg';
import backDarkIcon from '../../assets/img/back-dark.svg';
import styles from './LoginForm.module.css';

function LoginForm({ logo, theme }) {

    return (
        <section className={styles.container}>
            <div className={
                theme === 'dark' ?
                    styles.headerDark :
                    styles.header}
            >
                <img src={
                    theme === 'dark' ?
                        backDarkIcon :
                        backIcon
                }
                    alt=''
                />
                <span className={
                    theme === 'dark' ?
                        styles.createAccountResponsiveDark :
                        styles.createAccountResponsive}
                >
                    Criar conta
                </span>
            </div>
            <div className={styles.logo}>
                <Logo image={logo} />
                <div className={styles.createAccount}>
                    <p className={styles.createAccountBtn}>
                        Criar conta
                    </p>
                </div>
            </div>
            <div className={styles.welcome}>
                <h1 className={
                    theme === 'dark' ?
                        styles.welcomeTextTitleDark :
                        styles.welcomeTextTitle}
                >
                    Boas-vindas!
                </h1>
                <p className={
                    theme === 'dark' ?
                        styles.welcomeTextParagraphDark :
                        styles.welcomeTextParagraph}
                >
                    Entre utilizando uma das opções abaixo
                </p>
            </div>
            <Social theme={theme} />
            <div className={styles.option}>
                <span className={
                    theme === 'dark' ?
                        styles.lineDark :
                        styles.line
                    }
                ></span>
                <p className={
                    theme === 'dark' ?
                        styles.optionTextDark :
                        styles.optionText}
                >
                    ou
                </p>
                <span className={
                    theme === 'dark' ?
                        styles.lineDark :
                        styles.line}
                ></span>
            </div>
            <Form theme={theme} />
        </section>
    );
}

export default LoginForm;