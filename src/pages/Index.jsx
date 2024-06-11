import { Box, Container, SimpleGrid, Image, Text, VStack, Heading, Stack } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance for work and play",
    price: "$1299",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Keep track of your health and notifications",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$299",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} textAlign="center">
        <Heading as="h1">Welcome to TechStore</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics!</Text>
      </VStack>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10} mt={10}>
        {products.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={product.imageUrl} alt={product.name} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontSize="xl" color="blue.600">{product.price}</Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;