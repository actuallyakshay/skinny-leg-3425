import { Grid } from "@chakra-ui/react";
import React from "react";
import { SearchData } from "./Searchdata";

function SearchComponent() {
  const productData = JSON.parse(localStorage.getItem("searchData"));
  console.log(productData, "datatatatatata");
  return (
    <Grid
      fontFamily={"poppins"}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      w="full"
      gap="3"
      rowGap={[3, 3, 5, 6]}
    >
      {productData?.map((data) => (
        <SearchData key={data._id} {...data} />
      ))}
    </Grid>
  );
}

export default SearchComponent;
