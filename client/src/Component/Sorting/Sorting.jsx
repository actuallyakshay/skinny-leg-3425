import React from 'react'
import { Select } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Sorting = ({filterVal}) => {
  const [searchParams,setSearchParams] = useSearchParams();
  const [sortData , setSortData] = React.useState(searchParams.get("sortData") || "");

  // const handleSort = (e) => {
  //   setSortData(e.target.value);
  // }

  // let p1 = `&sort=price1&order=${sortData}`;
  // if(sortData==="offerasc"){
  //   p1 = `&sort=offerasc&order=asc` 
  // }else if(sortData==="offerdesc"){
  //   p1 = `&sort=offerdesc&order=desc`
  // }



  React.useEffect(() => {
    const params = {};
    sortData && (params.sortData = sortData);
    setSearchParams(params)
  }, [sortData])

  return (
    <div>
         <Select
                  placeholder="Sort By"
                  width={250}
                  borderColor="#4F585E"
                  value={sortData}
                  onChange={(e) => {filterVal(e.target.value)}}
                >
                  <option value="asc"  >Price low to high</option>
                  <option value="desc"  >Price high to low</option>
                  <option value="offerasc">Discount low to high</option>
                  <option value="offerdesc">Discount high to low</option>
                </Select>
    </div>
  )
}

export default Sorting