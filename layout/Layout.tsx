import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Toaster } from 'sonner';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className=" mx-auto justify-center px-4 place-items-center grid">
        {children}
        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
