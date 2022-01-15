import React from "react";
import { GetServerSideProps } from "next";
import api from "../product/api";
import { Product } from "../product/types";
import { Stack, Box, Text, Flex, Grid } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  results: Product[];
}

const IndexPage: React.FC<Props> = ({ results }) => {
  {
    console.log({ results });
  }
  return (
    <Box>
      <Box
        style={{ backgroundColor: "#ededed" }}
        paddingY={{base: "2", sm:"4"}}
        paddingX={{base: "2", sm:"50px", xl: "200px"}}
        sx={{ columnCount: [2, 1], columnGap: "0px" }}
        textAlign='center'
      >
        {results.map((product) => (
          <Link key={product.id} href={`/${product.id}`}>
            <a>
              <Stack
                style={{ borderColor: "#ededed" }}
                backgroundColor="white"
                d={{ base: 'inline-block', sm: 'flex'}}
                direction={{ sm: "row"}}
                width={{ base: "150px", sm: "100%"}}
                marginY={{ base: '2', sm: '4'}}
                padding={3}
                border="1px"
                boxShadow="md"
                borderRadius="lg"
              >
                <Box
                  backgroundImage={`url(${product.image})`}
                  backgroundRepeat="no-repeat"
                  backgroundSize="contain"
                  backgroundPosition="center"
                  width={{ base: "130px", sm: "220px"}}
                  height={{ base: "130px", sm: "220px"}}
                  minWidth={{ base: "130px", sm: "220px"}}
                  minHeight={{ base: "130px", sm: "220px"}}
                  backgroundColor="gray.50"
                  borderRadius="sm"
                  src={product.image}
                  alt={product.title}
                ></Box>
                <Stack padding={{ sm: "5"}}>
                  <Text fontSize={{ base: "sm", sm: "xl" }} textAlign="start">{product.title}</Text>
                  <Text fontSize={{ base:"xl", sm: "2xl" }}textAlign="start">
                    {product.price.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </Text>
                </Stack>
              </Stack>
            </a>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const results = await api.search(query.q as string);

  return {
    props: {
      results,
    },
  };
};

export default IndexPage;
