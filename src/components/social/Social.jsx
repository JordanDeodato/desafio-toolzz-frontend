import SocialBanner from "./SocialBanner";
import styles from './Social.module.css';
import tz from '../../assets/img/tz.svg';
import tzDark from '../../assets/img/tz-dark.svg';
import fb from '../../assets/img/fb.svg';
import fbDark from '../../assets/img/fb-dark.svg';
import apple from '../../assets/img/apple.svg';
import appleDark from '../../assets/img/apple-dark.svg';
import tw from '../../assets/img/tw.svg';
import twDark from '../../assets/img/tw-dark.svg';

function Social({ theme }) {
    return (
        <div className={styles.social}>
            <SocialBanner theme={theme} image={theme === 'dark' ? tzDark : tz} />
            <SocialBanner theme={theme} image={theme === 'dark' ? fbDark : fb} />
            <SocialBanner theme={theme} image={theme === 'dark' ? appleDark : apple} />
            <SocialBanner theme={theme} image={theme === 'dark' ? twDark : tw} />
        </div>
    );
}

export default Social;