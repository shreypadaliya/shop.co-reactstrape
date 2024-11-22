import React from 'react'
import { Container } from "reactstrap";
import Sidebarfilter from '../../components/category-page/Sidebarfilter';
import Paginateproduct from './Paginateproduct';

const Casualmain = () => {
  return (
    <section className='casual-section'>
        <Container>
            <div className='casual-section-wraper'>
                <div className='casual-section-left'>
                <Sidebarfilter/>
                </div>
                <div className='casual-section-right'>
                    <Paginateproduct/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Casualmain
