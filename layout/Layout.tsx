import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className=" mx-auto max-w-4xl justify-center px-4 place-items-center grid">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
