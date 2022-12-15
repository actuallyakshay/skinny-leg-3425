import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const RouteLinks = ({ title, link, mx }) => {
  return (
    <Link to={link}>
      <Box
        w="100px"
        textAlign={"center"}
        color={"blackAlpha.700"}
        _hover={{ fontWeight: "semibold", color: "#15ACA5" }}
        mx={mx}
      >
        {title}
      </Box>
    </Link>
  );
};
