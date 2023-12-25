import ResponsiveAppBar from './navbar'
import Footer from './footer'
import CategoryCard from './CategoryCard'
import GeneralCard from './GeneralCard'

 
export default function Layout({ children }) {
  return (
    <>
      <ResponsiveAppBar />
      <GeneralCard/>
      <CategoryCard/>
      <main>{children}</main>
      <Footer />
    </>
  )
}