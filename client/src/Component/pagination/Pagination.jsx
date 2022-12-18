import React from "react";
import {Stack , Button , Text} from "@chakra-ui/react";

const Pagination = () => {
const [page,setPage] = React.useState(0);


return (
   <Stack direction="row" align="center" w={50}  pl={20}  border="1px solid blue" >
    <Button size="md" onClick={() => {setPage(page-1)}}>Prev</Button>
     <Text fontSize="2xl" >{page}</Text>
    <Button size="md" onClick={() => {setPage(page+1)}}>Next</Button>
    </Stack>
)
}

export default Pagination