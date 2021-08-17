import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/logo.png'
          alt='An image showing Victor'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Victor</h1>
      <p>
        This is a blog I developed using Next.js
      </p>
    </section>
  );
}

export default Hero;
