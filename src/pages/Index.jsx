import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("https://api.color.pizza/v1/")
      .then((res) => res.json())
      .then((data) => setColors(data.colors));
  }, []);

  return (
    <Box>
      <Heading mb={4}>Color Names</Heading>
      <SimpleGrid columns={4} spacing={4}>
        {colors.map((color) => (
          <Box key={color.name}>
            <Heading size="sm">{color.name}</Heading>
            <Box bg={color.hex} w="100%" h="100px" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
