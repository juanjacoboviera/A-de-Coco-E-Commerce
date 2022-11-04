import React from 'react'
// import img1 from '../assets/1.1.webp'
// import img2 from '../assets/1.2.webp'

const ProductModal = ({open, setOpenModal}) => {
    if(!open) return null;
    // "/banner1.jpg"
  return (
    <div onClick={() => setOpenModal(false)} className='modal__overlay'>
        <div onClick={(e) =>{
            e.stopPropagation()
        }} className="modal__container">
            <div className="modal__left">
                <div className="thumbnails__container">
                    <img className='thumbnail' src='/1.1.webp' alt="" width='100px' height='110px' />
                    <img className='thumbnail' src='/1.2.webp' alt="" width='100px' height='110px' />
                    </div>
                    <img src='/1.1.webp' width='340px' height='350px' alt="" />
            </div>
            <div className="modal__right">
                <div className="content__container">
                <button onClick={() => setOpenModal(false)} className='closeModal__btn'>X</button>
                <h2>ACEITE DE COCO VIRGEN</h2>
                <span>$38.000</span>
                <p>Nuestro Aceite de Coco se denomina VIRGEN porque ha sido extraído mediante prensado en FRÍO sin ningún aditivo químico. Este método garantiza su pureza, mantiene sus propiedades y beneficios nutricionales.</p>
                <button className='buy__btn'>AGREGAR AL CARRITO </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductModal