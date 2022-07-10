import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Pages(props) {
    const {Page, totalPages, onClickLeft, onClickRight} = props
  return (
    <div className='container-pages'>
        <button onClick={onClickLeft}><div><AiOutlineArrowRight/></div></button>
        <div>{Page} de {totalPages}</div>
        <button onClick={onClickRight}><div><AiOutlineArrowLeft/></div></button>
    </div>
  )
}

export default Pages
