import React, { useEffect, useState } from "react";
import AdminDashboard from "./Dashboard";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Loader from "../Utils/Loader";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setload(true);
    axios.get(`${process.env.REACT_APP_URL}/user`).then((res) => {
      setUsers(res.data);
      setload(false);
    });
  };

  return load ? (
    <Loader />
  ) : (
    <>
      <AdminDashboard />
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Phone Number</Th>
              <Th>PinCode</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td>
                    <Text w="220px" overflow={"hidden"} textOverflow="ellipsis">
                      {el.name}
                    </Text>
                  </Td>
                  <Td>{el.phoneNumber}</Td>
                  <Td>{el.pinCode}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllUsers;
