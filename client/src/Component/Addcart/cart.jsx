import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import Counter from "./Counter";
import CartSlider from "./Cartcarausal";

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

function Cart() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  // //   let emails = "pathaksupriya981@gmail.com";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let daa = await axios.get(d, {
      //       headers: {
      //         // email: emails,
      //       },
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
      .patch(d, { id: id, qty: qty })
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
      .delete(d, {
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
      {/* <Cartcarousal/>


*/}

      <Stack textAlign={"center"}>
        {/* <Navbar /> */}
        <Box w={"90%"} p="0% 2%" textAlign={"center"}>
          <Image w={"90%"} />
          <Box display={"flex"} justifyContent={"space-between"} mb={"30px"}>
            <Box display={"flex"} alignItems="center" gap={"30px"}>
              <Text fontSize={["20px", "20px", "30px"]}>
                MY CART(LENGTH OF CART) |
              </Text>
              <Box gap={"5px"}>
                {/* <RepeatIcon color={"#10847E"} fontSize={"20px"} /> Refresh */}
              </Box>
            </Box>
            <Box display={"flex"} gap={"30px"}>
              <Button bg={"#10847E"} color={"white"}>
                CONTINUE SHOPPING
              </Button>
              <Button bg={"#10847E"} color={"white"}>
                PROCEED TO CHECKOUT
              </Button>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            gap={"30px"}
            alignItems={"center"}
            borderTop={"2px solid #dedede"}
          >
            {/* <TbTruckDelivery fontSize={"25px"} /> */}
            <Text color={"#212c31"} fontWeight={"semibold"}>
              GET YOUR ORDER DELIVERED VERY SOON
            </Text>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th fontSize={["sm", "lg", "lg"]} w={"40%"}>
                    Name
                  </Th>
                  <Th fontSize={["sm", "lg", "lg"]} w={"30%"}>
                    Price
                  </Th>
                  <Th fontSize={["sm", "lg", "lg"]} w={"30%"}>
                    Discount
                  </Th>
                  <Th fontSize={["sm", "lg", "lg"]} w={"30%"}>
                    Qty
                  </Th>
                  <Th fontSize={["sm", "lg", "lg"]} w={"30%"}>
                    Sub-Total
                  </Th>
                  <Th fontSize={["sm", "lg", "lg"]} w={"10%"}></Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.map((el, i) => {
                  return (
                    <Counter
                      key={i}
                      {...el}
                      changeQty={changeQty}
                      i={i}
                      handleDelete={handleDelete}
                      handleQuantity={handleQuantity}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Box align={"right"}>
            <Box w={"20%"} align="left" p={"10px"}>
              <Text fontSize={["20px", "30px", "30px"]}>
                Sub-Total: ₹ {total}.00
              </Text>
              <Text fontSize={["20px", "20px", "30px"]}>
                Delivery Charges: ₹ 0.00
              </Text>
              <Text fontSize={["20px", "20px", "30px"]}>
                Total: ₹ {total}.00
              </Text>
            </Box>
          </Box>
          <Box
            align={"right"}
            borderTop={"1px solid #dedede"}
            borderBottom={"2px solid #dedede"}
            p={"10px 0px 10px 0px"}
          >
            <Button bg={"#10847E"} color={"white"}>
              {/* <Link href="/">CONTINUE SHOPPING</Link> */}
            </Button>
            <Button ml={"20px"} bg={"#10847E"} color={"white"}>
              PROCEED TO CHECKOUT
            </Button>
          </Box>
          <Text textAlign={"center"} color={"#212c31"} fontWeight={"semibold"}>
            RESTOCK YOUR BASKET
          </Text>
          <br />
          <br />
          <br />
          <CartSlider />
        </Box>
        {/* <Footer /> */}
      </Stack>
    </div>
  );
}

export default Cart;
