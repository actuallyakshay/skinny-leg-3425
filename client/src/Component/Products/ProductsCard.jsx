import style from "./ProductCard.module.css";

const ProductsCard = ({src,alt,name,price}) => {
  
  const imageStyle = {
   borderRadius: "30px"
  }
  const textStyle = {
    textAlign : "center",
    color: "gray",
    fontSize: "16px",
    fontWeight: "bold",
  }
  return (
    <div  className={style.productCard}>
        <div>
          <img src={src} alt={alt} style={imageStyle}  />
        </div>
        <div style={textStyle}>
          <div>{name}</div>
          <div>₹{price}</div>
        </div>
    </div>
  )
}

export default ProductsCard