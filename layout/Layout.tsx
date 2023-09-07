import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-auto max-w-4xl justify-center px-4 ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
