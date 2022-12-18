import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postCartData } from "../../Redux/Cart/cart.action";

export const ProductCard = ({
  _id,
  image,
  name,
  price2,
  price1,
  off,
  link,
}) => {
  const { userToken } = useSelector((state) => state?.authReducer);

  const dispatch = useDispatch();
  const hadleAddtoCart = (product, quantity) => {
    let body = {
      product,
      quantity,
    };
    dispatch(postCartData(userToken, body));
  };

  return (
    <Box w="100%">
      <Box
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        }}
        border={"1px solid #d7dfe5"}
        borderRadius="lg"
        transition={"all"}
        transitionDuration={"500ms"}
      >
        <Link to={_id}>
          <Box py="12px" w="full" h="140px">
            <Image w="100%" h="100%" objectFit={"contain"} src={image}></Image>
          </Box>
          <Box textAlign={"left"} mx="10px">
            <p className="cardname">{name}</p>

            <p>
              MRP <del>₹{price2}</del>
            </p>
            <Flex gap="2" flexWrap={"wrap"}>
              <Text>₹{price1}</Text>
              <Text color="white" className="off">
                {off} % OFF
              </Text>
            </Flex>
          </Box>
        </Link>
        <Flex w="full" justifyContent={"center"}>
          <Button
            size="md"
            my="10px"
            h="38px"
            borderRadius={10}
            colorScheme={"teal"}
            onClick={() => hadleAddtoCart(_id, 1)}
          >
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
