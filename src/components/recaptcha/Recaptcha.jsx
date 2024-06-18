import styles from './Recaptcha.module.css';
import image from '../../assets/img/recaptcha.svg';

function Recaptcha({ display }) {
    return (
        <div className={
            display === "hidden" ?
                styles.hidden :
                styles.recaptcha}
        >
            <div className={styles.recaptcha}>
                <div className={styles.recaptchaSection}>
                    <div className={styles.recaptchaSectionCheckbox}>
                        <input
                            className={styles.recaptchaCheckbox}
                            type="checkbox"
                            name=""
                            id=""
                        />
                        <span className={styles.recaptchaCheckboxText}>
                            I am human
                        </span>
                    </div>
                    <div className={styles.recaptchaSectionLogo}>
                        <img
                            className={styles.recaptchaImage}
                            src={image}
                            alt=""
                        />
                        <span className={styles.recaptchaText}>
                            Privacy-terms
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recaptcha