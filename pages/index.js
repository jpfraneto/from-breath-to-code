import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>From Breath To Code</title>
        <meta
          name='description'
          content='This is where we learn how to use our bodies in our advantage'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <p className={styles.fromWord}>FROM</p>
          <p className={styles.breathWord}>BREATH</p>
          <p className={styles.toWord}>TO</p>
          <p className={styles.codeWord}>CODE</p>
        </div>
        <p>If you perfect how you breathe, you'll evolve as a programmer.</p>
        <div className={styles.actionableBtnsContainer}>
          <a
            className={styles.practiceBtn}
            target='_blank'
            href='https://www.youtube.com/channel/UCXKsf2muz5SnNgewXrS0dFQ'
            rel='noopener noreferrer'
          >
            Breathe
          </a>
          <Link href='/more'>
            <a className={styles.learnMoreBtn}>Learn More...</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
