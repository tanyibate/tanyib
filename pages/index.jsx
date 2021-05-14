import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.landing}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className={styles.landing_content}>
          <div className="flex items-center flex-wrap justify-center">
            <h1 className={`font-bold text-2xl p-1 ${styles.landing_text}`}>
              Let's get your idea the moon!
            </h1>
            <div className={styles.welcome_image_container}>
              <img
                src="/assets/moon.png"
                alt=""
                className="absolute top-0 left-0 h-full w-full"
              />
              <img src="/assets/rocket.png" alt="" className={styles.rocket} />
            </div>
          </div>
          <button>Get in Touch</button>
        </div>
        <div className={styles.landing_links}>
          <img
            src="/assets/instagram.png"
            alt=""
            className={`${styles.link} shadow-lg`}
          />
          <img
            src="/assets/linkedin.png"
            alt=""
            className={`${styles.link} shadow-lg`}
          />
          <img
            src="/assets/twitter.png"
            alt=""
            className={`${styles.link} shadow-lg`}
          />
        </div>
      </div>
      <div className={styles.about_me}>
        <div>
        <h1 className={`font-bold text-2xl p-1 ${styles.landing_text}`}>Bate Tanyi</h1>
        <p>
          
        </p>

        </div>
        <div></div>
      </div>
    </div>
  );
}
