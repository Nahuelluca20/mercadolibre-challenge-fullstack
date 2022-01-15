import React from "react";
import { GetServerSideProps } from "next";
import api from "../product/api";
import { Product } from "../product/types";
import { Stack, Box, Text, Image, Button } from "@chakra-ui/react";

interface Props {
  result: Product;
}

const IndexPage: React.FC<Props> = ({ result }) => {
  return (
    <Box>
      <Stack
        paddingTop={10}
        width="100%"
        backgroundColor="white"
        borderRadius={2}
        boxShadow="sm"
      >
        <Stack
          direction={{ base: "column", sm: "column", xl: "row" }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Image height={256} width={256} src={result.image} alt="producto" />
          <Stack maxWidth={{ base: "320" , sm: "500"}}>
            <Text color="gray.500" fontSize="sm">
              Estado - Vendidos
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              {result.title}
            </Text>
            <Text fontSize="4xl">
              {result.price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </Text>
            <Button colorScheme="blue">Comprar</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const result = await api.fetch(query.id as string);

  return {
    props: {
      result,
    },
  };
};

export default IndexPage;
