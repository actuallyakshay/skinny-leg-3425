import React from "react";
import {Stack , Button , Text, Box, HStack} from "@chakra-ui/react";

const Pagination = ({current,handlePageClick}) => {
    const prev = (
        <Button backgroundColor="teal.500" color="white" disabled={current === 1} onClick={() => handlePageClick(current-1)} >
          Prev
        </Button>
    );

    const currentPage = (
        <Button>{current}</Button>
    );

    const next = (
      <Button  backgroundColor="teal.500" color="white" onClick={() => handlePageClick(current+1)} >
         Next
      </Button>
    )



return (
   <Stack direction="row" align="center"   pl={20} mt={5}  >
    <HStack justifyContent="center" w="full" >
    <Box>
    {prev}
   {currentPage}
   {next}
    </Box>
    </HStack>

    </Stack>
)
}

export default Pagination