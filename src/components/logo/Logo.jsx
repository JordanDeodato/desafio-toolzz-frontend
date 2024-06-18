import styles from './Logo.module.css';

function Logo({ image }) {
    return (
        <div>
            <img
                src={image}
                alt="logo-image"
                className={styles.logoImage}
            />
        </div>
    );
}

export default Logo;