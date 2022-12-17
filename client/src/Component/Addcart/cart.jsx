import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";


const d = [
  {
    id: 1,
    name: "American Kale Curled - Exotic 200.00 g",
    src: "https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/3bc083e7-3eee-4d3d-a54b-8be0fb2e7a4c_50x50.JPG",
    price: "159.00",
    discount: "20.00",
    qty: 1,
  },
  {
    id: 2,
    name: "Kwality walls Ice cream- Magnum",
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg",
    price: "269.00",
    discount: "15.00",
    qty: 1,
  },
  {
    id: 3,
    name: "Moong dal- Exotic 200.00 g",
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/13dbbb37-317e-46e3-a94f-477772c22f0d_425x425.jpg",
    price: "189.00",
    discount: "25.00",
    qty: 2,
  },
  {
    id: 4,
    name: "Raw pressery",
    src: "https:// .cloudfront.net/ProductVariantThumbnailImages/eb67bb12-a336-4dab-9913-652d224e83a9_425x425.jpg",
    price: "89.00",
    discount: "5.00",
    qty: 2,
  },
];

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

//   let url = `${NEXT_URL}/api/cart/`;
//   let emails = "pathaksupriya981@@gmail.com";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let daa = await axios.get(url, {
      headers: {
        email: emails,
      },
    });
    setData(daa.data);
  };

  useEffect(() => {
    const t = data.reduce((acc, el) => {
      return acc + el.price * el.qty;
    }, 0);
    setTotal(t);
  }, [data]);

  const handleQuantity = async ({ id, qty }) => {
    console.log(id, qty);
    await axios
      .patch(url, { id: id, qty: qty })
      .then((res) => {
        fetchData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  ////delete
  const handleDelete = async (_id) => {
    await axios
      .delete(url, {
        headers: {
          productid: _id,
        },
      })
      .then(() => {
        fetchData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changeQty = (id, q) => {
    const newData = data.map((el) =>
      id === el.id ? { ...el, qty: el.qty + q } : el
    );
    // console.log(newData);
    setData(newData);
  };



  return (
   <div>
    
   </div>
  
  );
};

export default Cart;