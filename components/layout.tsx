import { Footer } from './Footer';
import { Navbar } from './Navbar';
import Meta from './Meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className="mx-4 lg:mx-8">
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
