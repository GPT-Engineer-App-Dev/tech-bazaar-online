import { Box, Container, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "$299",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    price: "$799",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "$199",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Headphones",
    price: "$99",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="2xl">Electronics Store</Heading>
        <Text fontSize="xl">Discover our range of electronics products</Text>
      </VStack>
      <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={10} mt={10}>
        {products.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack align="start" mt={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;