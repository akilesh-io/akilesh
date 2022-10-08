import { Footer } from './Footer';
import { Navbar } from './Navbar';
import Meta from './Meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <Meta />
        <Navbar />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
