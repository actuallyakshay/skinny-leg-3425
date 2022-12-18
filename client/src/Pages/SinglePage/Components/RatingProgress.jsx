import { Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";

export const RatingProgress = ({ value, title, colorScheme, percent }) => {
  return (
    <Flex w={{ base: "100%", lg: "40%" }} align={"center"} gap="1">
      <Text whiteSpace={"nowrap"}>{title}</Text>
      <Progress
        w={"full"}
        colorScheme={colorScheme}
        p="0"
        size={"sm"}
        mt="1"
        value={value}
      />
      <Text>{percent} %</Text>
    </Flex>
  );
};
