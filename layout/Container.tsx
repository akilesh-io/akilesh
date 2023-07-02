import { Footer } from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/legacy/image';
import { Navbar } from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { PageType } from '@/lib/types';
//import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

export function Container(props) {
  const { children, ...customMeta } = props;

  return (
    <div className={`bg-white dark:bg-dark min-h-screen`}>
      <Navbar />
      <main
        className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative pt-24`}
      >
        <div className="z-10">
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </main>
    </div>
  );
}
