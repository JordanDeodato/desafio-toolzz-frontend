import styles from './Social.module.css';

function SocialBanner({ theme, image }) {
    return (
        <div className={
            theme === 'dark' ?
                styles.socialCardDark :
                styles.socialCard}
        >
            <div className={styles.socialContainer}>
                <img src={image} alt="image-social-media" />
            </div>
        </div>
    );
}

export default SocialBanner;