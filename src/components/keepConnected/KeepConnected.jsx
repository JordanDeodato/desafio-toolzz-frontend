import styles from './KeepConnected.module.css';

function KeepConnected({ theme }) {
    return (
        <div className={styles.keepConnected}>
            <div className={styles.keepConnectedSection}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                />
                <span className={
                    theme === 'dark' ?
                        styles.keepConnectedTextDark :
                        styles.keepConnectedText}
                >
                    Manter conectado
                </span>
            </div>
        </div>
    );
}

export default KeepConnected;