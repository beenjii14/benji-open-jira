import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/pages/home.module.scss';

interface IProps {
  title: string;
}

const Home: NextPage = ({ title }: IProps) => {
  return (
    <div data-testid="home-test-id" className={styles.container}>
      <Head>
        <title>BenjiOpenJira</title>
        <meta name="description" content="BenjiOpenJira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = _context => {
  return {
    props: { title: 'BenjiOpenJira' },
  };
};

export default Home;
