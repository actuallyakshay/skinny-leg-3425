import React from 'react'
import { Select } from "@chakra-ui/react";

const Sorting = () => {
  return (
    <div>
         <Select
                  placeholder="Sort By"
                  width={250}
                  borderColor="#4F585E"
                >
                  <option value="asc">Price low to high</option>
                  <option value="desc">Price high to low</option>
                  <option value="asc">Discount low to high</option>
                  <option value="desc">Discount high to low</option>
                </Select>
    </div>
  )
}

export default Sorting