import styles from "./navbar.module.css";
import {
  Flex,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import SelectPin from "./SelectPin";
import Select from "react-select";
import { useState } from "react";
import { TbDiscount2 } from "react-icons/tb";
import { RiUser5Fill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"
import { useEffect } from "react";

const options = [
  {
    value: "ayurvedic",
    label: "ayurvedic",
  },
  {
    value: "babycare",
    label: "babycare",
  },
  {
    value: "diabetes",
    label: "diabetes",
  },
  {
    value: "disinfactents",
    label: "disinfactents",
  },
  {
    value: "healthcareDevices",
    label: "healthcareDevices",
  },
  {
    value: "healthFood",
    label: "healthFood",
  },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#9e9e9e",
    minHeight: "30px",
    height: "3rem",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "3rem",
  }),
};
const UNavbar = () => {
  const [val, setVal] = useState("");

  const navigate = useNavigate();

  const handleChange = (values) => {
    console.log(values, "valuesssssss");
    setVal(values);
  };

  async function filteredData() {}

  useEffect(() => {
    filteredData();
  }, [val]);

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={Logo}
          alt=""
        />
      </div>

      <div>
        <div>
          <InputGroup size="lg" width={"75%"}>
            <InputLeftAddon children={<SelectPin />} />

            <div
              style={{ width: "40rem", height: "3rem", objectFit: "contain" }}
            >
              <Select
                onChange={handleChange}
                placeholder="Search medicines/Healthcare products"
                svg=""
                options={options}
                color={"black"}
                styles={customStyles}
              />
            </div>
            <InputRightAddon children={<SearchIcon h={8} color="gray.500" />} />
          </InputGroup>
        </div>
        <div className={styles.tabContainer}>
          <div>
            <div>
              <Link to="/orderMed">Order Medicines</Link>
            </div>
            <div>
              <Link to="/healthcare">Healthcare Products</Link>
            </div>
            <div>
              <Link to="/labtest">Lab tests</Link>
            </div>
            <div>
              <Link to="/rtpcr">RTPCR</Link>
            </div>
          </div>
          <Flex marginRight={"2rem"}>
            <Flex>
              <TbDiscount2
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <p style={{ color: "white" }}>Offers</p>
            </Flex>
            <Flex>
              <RiUser5Fill
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <Menu>
                <MenuButton style={{ cursor: "pointer", color: "white" }}>
                  <Link to="">Login/Signup</Link>
                </MenuButton>
              </Menu>
            </Flex>

            <Flex>
              <HiShoppingCart
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <Link to="/cart">Cart</Link>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export { UNavbar };
