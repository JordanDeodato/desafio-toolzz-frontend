import styles from './Banner.module.css'
import backIcon from '../../assets/img/back.svg';
import previous from '../../assets/img/previous.svg';
import next from '../../assets/img/next.svg';

function Banner({ iconMode, changeMode }) {
    const title = "Plataforma de cursos completa";
    const textContent = "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum";

    return (
        <div className={styles.hiddenXs}>
            <section className={styles.nav}>
                <img
                    src={backIcon}
                    alt=''
                    className={styles.back}
                />
                <img
                    src={iconMode}
                    alt=''
                    onClick={changeMode}
                />
            </section>
            <section className={styles.textContent}>
                <button className={styles.textContentBtn}>
                    Cursos
                </button>
                <h1 className={styles.textContentTitle}>
                    {title}
                </h1>
                <p className={styles.textContentText}>
                    {textContent}
                </p>
                <div className={styles.navBottom}>
                    <div className={styles.steps}>
                        <div className={styles.stepActive}></div>
                        <div className={styles.stepInactive}></div>
                        <div className={styles.stepInactive}></div>
                    </div>
                    <div className={styles.navBottomNavs}>
                        <div className={styles.previous}>
                            <img src={previous} alt='' />
                        </div>
                        <div className={styles.next}>
                            <img src={next} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Banner;