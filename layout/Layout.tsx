import dynamic from "next/dynamic";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
const Toaster = dynamic(() => import("sonner").then((mod) => mod.Toaster), { ssr: false });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main id="main-content" className=" mx-auto justify-center px-4 place-items-center grid">
        {children}
      </main>
      <Toaster position="bottom-left" />
      <Footer />
    </>
  );
};

export default Layout;
