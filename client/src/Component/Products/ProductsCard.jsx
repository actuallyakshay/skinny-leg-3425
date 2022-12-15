import React from 'react'

const ProductsCard = ({name}) => {
  return (
    <div>
        <div>
          <img src={src} alt={alt} />
        </div>
        <div>
          <div>{name}</div>
          <div>{price}</div>
          <div></div>
        </div>
    </div>
  )
}

export default ProductsCard