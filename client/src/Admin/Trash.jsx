import React, { useEffect, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { MdRestorePage } from "react-icons/md";
import AdminDashboard from "./Dashboard";
import { useSelector } from "react-redux";

function Trash() {
  const [trash, setTrash] = useState([]);
  const [load, setLoad] = useState(false);
  const toast = useToast();
   const { name, role, isAuth } = useSelector((state) => state?.authReducer);

  useEffect(() => {
    getTrash();
  }, []);

  const getTrash = () => {
    setLoad(true);
    axios.get(`${process.env.REACT_APP_URL}/trash`).then((res) => {
      setLoad(false);
      setTrash(res.data);
    });
  };
  return (
    <>
      <AdminDashboard />
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Prod. name</Th>
              <Th>MRP</Th>
              <Th>Discounted Price</Th>
              <Th>% OFF</Th>
              <Th display={role == "ProductManager" ? "" : "none"}>
                Restore prod.
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {trash?.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td>
                    <Text w="220px" overflow={"hidden"} textOverflow="ellipsis">
                      {el?.name}
                    </Text>
                  </Td>
                  <Td>₹ {el.price2}</Td>
                  <Td>₹ {el.price1}</Td>
                  <Td>{el.off}%</Td>
                  <Td display={role == "ProductManager" ? "" : "none"}>
                    <Button
                      onClick={() => {
                        axios
                          .post(`${process.env.REACT_APP_URL}/trash`, el)
                          .then((res) => {
                            console.log(res.data);
                            getTrash();
                            toast({
                              title: "Hey! Akshay ❤️",
                              description:
                                "Item has been restored and added agn to the database ! 😍",
                              status: "success",
                              position: "top",
                              duration: 2000,
                              isClosable: true,
                            });
                          });
                      }}
                      size="sm"
                    >
                      <MdRestorePage fontSize={"20px"} color="#7575fd" />{" "}
                      Restore
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Trash;
