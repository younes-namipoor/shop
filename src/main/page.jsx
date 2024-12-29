import React from 'react'
import InfoPro from '@/components/infoPro/page'
import Note from '@/components/note/page'
import Ovr from '@/components/ovr/page'
import Product from '@/components/Product/page'
import ProInfo from '@/components/proInfo/page'
import CardSec from '@/components/CardSec/page'
import Search from '@/components/Search/page'
import Footer from '@/components/footer/page'
export default function MainSec() {
  return (
    <div>
        <InfoPro />
        <Note />
        <Ovr />
        <Product />
        <ProInfo />
        <CardSec />
        <Search />
        <Footer />
    </div>
  )
}
