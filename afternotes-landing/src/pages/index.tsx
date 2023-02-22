import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout title="Inicio">
      <section className={styles.banner}>
        <div className={styles.container}>
          <h2>Boost youur productivity with one tool</h2>
          <p>Plan, Organize, Collaborate, in every platform, for free.</p>
          <button>Download</button>
        </div>
        <picture className={styles.picture}>
          <Image
            src="/banner1.png"
            objectFit="contain"
            width={1000}
            height={1200}
            style={{ fill: 'fill' }}
            alt="Banner image"
          />
        </picture>

        <p className={styles.copy}>
          With Afternotes, you can everything in a collaborative space
        </p>

        <div className={styles.container_options}>
          <div className={styles.banner_options}>
            <div>
              <h3>
                <i className="bx bx-notepad"></i> Notes, Documents
              </h3>
              <p>
                Pretium, diam bec enm, sed, Tempor, a, arcu risus ac pulivrnia
                alque
              </p>
            </div>
            <div className={styles.bars}>
              <h3>
                <i className="bx bx-calendar"></i> Tasks, Calendars
              </h3>
              <p>
                Pretium, diam bec enm, sed, Tempor, a, arcu risus ac pulivrnia
                alque
              </p>
            </div>
            <div>
              <h3>
                <i className="bx bx-grid"></i> Sheets, Databases
              </h3>
              <p>
                Pretium, diam bec enm, sed, Tempor, a, arcu risus ac pulivrnia
                alque
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section_folders}>
        <img src="/folders.png" alt="" />
        <div>
          <h2>Organize your files in folders, keep then in track with tags</h2>
          <p>
            Tempor, sagtits congue vitae Num mauris reaque una anim, purus, Dui
            elt sen a nisi, vitae
          </p>
        </div>
      </section>

      <section className={styles.get}>
        <div>
          <h2>
            Get Afternotes for free, <br />
            Boost your productivity today
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            sapiente dolorem delectus, maiores dignissimos vel aliquam dicta
            sint a ullam qui sit saepe iste facilis nulla molestias nemo dolore
            magnam?
          </p>
          <button>Sign Up</button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
