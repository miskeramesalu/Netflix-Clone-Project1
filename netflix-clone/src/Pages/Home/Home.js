import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>

    </>
  )
}

export default Home

            // Summary
// In the Home.js what I was learned
// *renders(Header,Footer,banner,Rowlists)
// *export(available for import to other parts of application)
// *< >...</> empty fragmet to remove unnecessary HTML Elements meaning