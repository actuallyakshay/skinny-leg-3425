import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function ViewProduct({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [one, setOne] = useState({});

  const getViewProd = (id) => {
    axios
      .get(`${process.env.REACT_APP_URL}/product/${id}`)
      .then((res) => setOne(res.data))
      .catch((e) => console.log(e.message));
  };

  return (
    <>
      <Button
        variant="link"
        as="i"
        textDecoration={"underline"}
        // onClick={onOpen}
        fontSize="13px"
        color="#8181fb"
        _hover={{ cursor: "pointer" }}
        onClick={() => {
          getViewProd(id);
          onOpen();
        }}
      >
        View prod.
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={"start"} position="relative">
              <Box
                className="container"
                overflow={"hidden"}
                borderRadius={"2px"}
                position="relative"
              >
                <Image
                  src={one?.image}
                  _hover={{
                    transform: "scale(1.1)",
                    transformOrigin: "50% 50%",
                    cursor: "pointer",
                    opacity: ".9",
                  }}
                  transition="transform .5s"
                  w="80%"
                  m="auto"
                />
              </Box>
              <Text
                color="rgba(0, 0, 0, 0.6)"
                fontSize={"15px"}
                letterSpacing=".2px"
              >
                {one?.name}
              </Text>
              <Flex
                alignItems={"center"}
                justifyContent="center"
                gap={{ base: "1", sm: "1", md: "2", lg: "3" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Flex gap="3">
                  <Heading
                    color="rgb(38, 38, 38)"
                    fontSize={"17px"}
                    letterSpacing=".2px"
                    fontWeight="500"
                  >
                    ₹ {one?.price1}
                  </Heading>
                  <Heading
                    color="rgba(0, 0, 0, 0.6)"
                    fontSize={"17px"}
                    letterSpacing=".2px"
                    fontWeight="400"
                    as="s"
                  >
                    {" "}
                    ₹ {one?.price2}
                  </Heading>
                </Flex>
                <Heading
                  color=" rgb(255, 50, 120)"
                  fontSize={"17px"}
                  letterSpacing=".2px"
                  fontWeight="500"
                >
                  {one?.off}% off
                </Heading>
                <br />
                <br />
              </Flex>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
