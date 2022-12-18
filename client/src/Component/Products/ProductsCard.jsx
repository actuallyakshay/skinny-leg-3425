import style from "./ProductCard.module.css";

const ProductsCard = ({src,alt,name,price1}) => {
  
  const imageStyle = {
   borderRadius: "10px",
   height: "150px",
   width: "100%"
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
          <div>₹{price1}</div>
        </div>
    </div>
  )
}

export default ProductsCard