import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-screen-md justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative pt-24">
        <Navbar />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
