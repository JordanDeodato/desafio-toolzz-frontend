import styles from './Button.module.css';
import image from '../../assets/img/login.svg';

function Button() {
    return (
        <div className={styles.loginSection}>
            <button
                className={styles.loginBtn}
                type="submit"
            >
                <img src={image} alt="" />
                <p className={styles.loginText}>
                    Entrar
                </p>
            </button>
        </div>
    );
}

export default Button;