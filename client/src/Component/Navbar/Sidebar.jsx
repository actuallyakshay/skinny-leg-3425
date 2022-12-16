import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Button,
    Flex,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    IoLogOutOutline,
    IoPersonOutline,
    IoWalletOutline,
  } from "react-icons/io5";
  import ReactStars from "react-rating-stars-component";
  import { IoIosArrowForward, IoIosHelpCircleOutline } from "react-icons/io";
  import { AiOutlineGift, AiOutlineHome } from "react-icons/ai";
  import { GiHealthCapsule, GiMedicines, GiTestTubes } from "react-icons/gi";
  import { MenuItems } from "./MenuItems";
  import { CiDiscount1 } from "react-icons/ci";
  import { BsCheck2Circle, BsHandbag } from "react-icons/bs";
  import { FiPhoneCall } from "react-icons/fi";
  import { RiArticleLine } from "react-icons/ri";
  
  export const Sidebar = ({ name, avatar, Openlogin }) => {
    return (
      <Box mx="-24px">
        <Flex
          p="10px"
          mt="-10px"
          bgGradient="linear(to-r, green.400, green.700)"
          align={"center"}
          gap="2"
        >
          <Flex
            bg="white"
            borderRadius={"100%"}
            w="40px"
            h="40px"
            align={"center"}
            justify="center"
          >
            {name ? (
              avatar ? (
                <Image src={avatar} />
              ) : (
                <Text>{name[0]}</Text>
              )
            ) : (
              <IoPersonOutline />
            )}
          </Flex>
          <Flex justify={"space-between"} align="center" w="80%">
            {name ? (
              <Box>
                <Text>{name}</Text>
              </Box>
            ) : (
              <Box color={"white"}>
                <Text>Hi there!</Text>
                <Text>Log In / Sign Up</Text>
              </Box>
            )}
            <Box mr="-10px" onClick={Openlogin}>
              <IoIosArrowForward />
            </Box>
          </Flex>
        </Flex>
        <Box borderBottom={"1px solid #949494"} py="2px">
          <MenuItems icon={<AiOutlineHome />} title={"Home"} />
        </Box>
        <Box borderBottom={"1px solid #949494"} py="2px">
          <Flex align={"center"} justify="space-between">
            <MenuItems
              icon={<GiMedicines />}
              title={"Order Medicines"}
              sub={"UPTO 70% OFF"}
            />
            <Box mr="10px">
              <IoIosArrowForward />
            </Box>
          </Flex>
          <Flex align={"center"} justify="space-between">
            <MenuItems
              icon={<GiHealthCapsule />}
              title={"Healthcare Products"}
              sub={"UPTO 70% OFF"}
            />
            <Box mr="10px">
              <IoIosArrowForward />
            </Box>
          </Flex>
          <Flex align={"center"} justify="space-between">
            <MenuItems
              icon={<GiTestTubes />}
              title={"Lab Test"}
              sub={"UPTO 70% OFF"}
            />
            <Box mr="10px">
              <Badge px="4px" colorScheme="green">
                New
              </Badge>
            </Box>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid #949494"} py="2px">
          <MenuItems icon={<CiDiscount1 />} title={"Offers"} />
        </Box>
        <Box borderBottom={"1px solid #949494"}>
          <Accordion allowMultiple>
            <AccordionItem w="full" border={"none"}>
              <AccordionButton w="full" py="0">
                <Flex
                  justify={"space-between"}
                  align="center"
                  w="full"
                  mx="-16px"
                >
                  <MenuItems
                    icon={<IoPersonOutline />}
                    title={"My Account"}
                    weight="semibold"
                  />
                  <AccordionIcon mr="-20px" />
                </Flex>
              </AccordionButton>
              <AccordionPanel p="0" mb="10px" color={"#454545"}>
                <MenuItems title={"Saved Doctor's Notes"} weight="normal" />
                <MenuItems title={"My Addressess"} weight="normal" />
                <MenuItems title={"Refund Settings"} weight="normal" />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <MenuItems icon={<BsHandbag />} title={"Orders"} />
          <MenuItems icon={<IoWalletOutline />} title={"Wallet"} />
        </Box>
        <Box borderBottom={"1px solid #949494"} py="2px">
          <MenuItems icon={<CiDiscount1 />} title={"Browse All Medicine"} />
          <Flex align={"center"} justify="space-between">
            <MenuItems icon={<RiArticleLine />} title={"Health Articles"} />
            <Box mr="10px">
              <Badge px="4px" colorScheme="green">
                New
              </Badge>
            </Box>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid #949494"} py="2px">
          <MenuItems icon={<FiPhoneCall />} title={"Order on Call"} />
        </Box>
        <Box borderBottom={"1px solid #949494"} py="2px">
          <MenuItems icon={<IoIosHelpCircleOutline />} title={"Need Help?"} />
          <MenuItems
            icon={<AiOutlineGift />}
            title={"Refer and Earn"}
            sub="EXTRA 5% OFF ON YOUR NEXT ORDER"
          />
        </Box>
        <Box borderBottom={"1px solid #949494"} py="2px">
          <MenuItems icon={<IoLogOutOutline />} title={"Logout"} />
        </Box>
        <Box p="15px" bg={"green.100"}>
          <Text fontWeight={"semibold"}>Install the PharmEasy App</Text>
          <Flex align={"center"} fontSize="14px" gap={2}>
            <ReactStars
              count={5}
              size={15}
              value={4.6}
              isHalf={true}
              activeColor="#ffd700"
              edit={false}
            />
            4.6 • 1Cr+ Downloads
          </Flex>
          <Box px={"1"} py="4">
            <Flex fontSize="14px" align="center" gap="2" cursor={"pointer"}>
              <Box>
                <BsCheck2Circle />
              </Box>
              <Box>
                <Text>Get Extra Savings</Text>
              </Box>
            </Flex>
            <Flex fontSize="14px" align="center" gap="2" cursor={"pointer"}>
              <Box>
                <BsCheck2Circle />
              </Box>
              <Box>
                <Text>Better Personalised Experience</Text>
              </Box>
            </Flex>
          </Box>
          <Button colorScheme={"green"}>Download App</Button>
        </Box>
      </Box>
    );
  };