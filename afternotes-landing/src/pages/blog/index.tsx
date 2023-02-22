import Layout from '@/components/Layout';
import React, { useState } from 'react';
import styles from './Blog.module.css';
const Blog = () => {
  const [modal, setModal] = useState(false);
  return (
    <Layout title="Blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Blog</h2>
          <div role="search" className={styles.search}>
            <input type="search" placeholder="Buscar" />
          </div>
        </div>

        <section className={styles.section}>
          <article>
            <picture>
              <img src="/banner.jpg" alt="" />
            </picture>
            <div className={styles.content}>

            <p>Category</p>
            <h2>Simon Lizotte Take a Big Advance in The Last Tournament</h2>
            <p className={styles.description}>Back in 2019, Gucci Brought video games to its app with a new section called Gucci Arcade, inpired by creative.</p>
            <div>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Albert Orion</h3>
              <p> <time dateTime='2022-06-21'>Jun 21, 2022</time> </p>
            </div>

            </div>
          </article>
          <article>
            <picture>
              <img src="/banner.jpg" alt="" />
            </picture>
            <div className={styles.content}>

            <p>Category</p>
            <h2>Simon Lizotte Take a Big Advance in The Last Tournament</h2>
            <p>Back in 2019, Gucci Brought video games to its app with a new section called Gucci Arcade, inpired by creative.</p>
            <div>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Albert Orion</h3>
              <p> <time dateTime='2022-06-21'>Jun 21, 2022</time> </p>
            </div>

            </div>
          </article>
          <article>
            <picture>
              <img src="/banner.jpg" alt="" />
            </picture>
            <div className={styles.content}>

            <p>Category</p>
            <h2>Simon Lizotte Take a Big Advance in The Last Tournament</h2>
            <p>Back in 2019, Gucci Brought video games to its app with a new section called Gucci Arcade, inpired by creative.</p>
            <div>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Albert Orion</h3>
              <p> <time dateTime='2022-06-21'>Jun 21, 2022</time> </p>
            </div>

            </div>
          </article>
          <article>
            <picture>
              <img src="/banner.jpg" alt="" />
            </picture>
            <div className={styles.content}>

            <p>Category</p>
            <h2>Simon Lizotte Take a Big Advance in The Last Tournament</h2>
            <p>Back in 2019, Gucci Brought video games to its app with a new section called Gucci Arcade, inpired by creative.</p>
            <div>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Albert Orion</h3>
              <p> <time dateTime='2022-06-21'>Jun 21, 2022</time> </p>
            </div>

            </div>
          </article>
          <article>
            <picture>
              <img src="/banner.jpg" alt="" />
            </picture>
            <div className={styles.content}>

            <p>Category</p>
            <h2>Simon Lizotte Take a Big Advance in The Last Tournament</h2>
            <p>Back in 2019, Gucci Brought video games to its app with a new section called Gucci Arcade, inpired by creative.</p>
            <div>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Albert Orion</h3>
              <p> <time dateTime='2022-06-21'>Jun 21, 2022</time> </p>
            </div>

            </div>
          </article>
          <article>
            <picture>
              <img src="/banner.jpg" alt="" />
            </picture>
            <div className={styles.content}>

            <p>Category</p>
            <h2>Simon Lizotte Take a Big Advance in The Last Tournament</h2>
            <p>Back in 2019, Gucci Brought video games to its app with a new section called Gucci Arcade, inpired by creative.</p>
            <div>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Albert Orion</h3>
              <p> <time dateTime='2022-06-21'>Jun 21, 2022</time> </p>
            </div>

            </div>
          </article>
          <article>
            <picture>
              <img src="/banner.jpg" alt="" />
            </picture>
            <div className={styles.content}>

            <p>Category</p>
            <h2>Simon Lizotte Take a Big Advance in The Last Tournament</h2>
            <p className={styles.description}>Back in 2019, Gucci Brought video games to its app with a new section called Gucci Arcade, inpired by creative.</p>
            <div>
              <picture>
                <img src="" alt="" />
              </picture>
              <h3>Albert Orion</h3>
              <p> <time dateTime='2022-06-21'>Jun 21, 2022</time> </p>
            </div>

            </div>
          </article>
          
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
