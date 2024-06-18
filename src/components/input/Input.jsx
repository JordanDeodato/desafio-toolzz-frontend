import styles from './Input.module.css';

function Input({ name, label, url, alt, type, placeholder, handleChange, theme }) {
    return (
        <div className={styles.inputSection}>
            <div className={styles.inputContainer}>
                <label className={
                    theme === 'dark' ?
                        styles.labelDark :
                        styles.label}
                >
                    {label}
                </label>
                <img src={url} alt={alt} />
                <input
                    name={name}
                    className={
                        theme === 'dark' ?
                            styles.inputDark :
                            styles.input}
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e)
                    }
                />
            </div>
        </div>
    );
}

export default Input;