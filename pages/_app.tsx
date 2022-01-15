import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import {
  ChakraProvider,
  Stack,
  Image,
  Input,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.target["query"].value);
    router.push(`/?q=${event.target["query"].value}`);
  }

  return (
    <ChakraProvider>
      <Stack textAlign="center" style={{ backgroundColor: "#2a1c4f" }} color="white" paddingY={1}>
        <span style={{ margin: "0px"}}>
          Esto es un reto hecho por
          <a href="https://github.com/Nahuelluca20" style={{ margin: "0px", color: "#ff9347"}}> Nahuel Luca</a>
        </span>
      </Stack>
      <Stack backgroundColor="gray.500">
        <Stack
          backgroundColor="yellow.400"
          direction="row"
          padding={4}
          spacing={2}
        >
          <Link href="/">
            <Image alt="logo" src="./logo.png" style={{ cursor: "pointer" }} />
          </Link>
          <Stack width="100%" paddingLeft={{ base: "0", sm: "20" }}>
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <Stack direction="row" spacing={0} width="100%">
                <Input
                  name="query"
                  backgroundColor="white"
                  variant=""
                  roundedRight={0}
                />
                <button
                  style={{
                    backgroundColor: "white",
                    paddingRight: "15px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <img src="https://icongr.am/feather/search.svg?size=20&color=#333" />
                </button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
