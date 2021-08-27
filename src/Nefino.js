import {
  Heading,
  Box,
  Spacer,
  VStack,
  HStack,
  Code,
  Button,
  Input,
  Link,
  Image,
  chakra
} from "@chakra-ui/react";

import React, { useState } from "react";

export default function Nefino() {
  const [input, setInput] = useState("");

  const handleClick = () => {
    alert(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <chakra.div
        color="white"
        backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/background.svg)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        h="100vh"
        border="solid 1px red"
      >
        <HStack spacing="3" pr="4" fontSize="15" border="solid 1px red">
          <Link p="2.5" ml="6">
            <Image
              width="153px"
              height="40px"
              //src="https://www.nefino.de/wp-content/uploads/2021/02/Nefino_logo.png"
              src="https://www.nefino.de/wp-content/uploads/2021/02/Nefino_white.svg"
            />
          </Link>
          <Spacer />
          <Link p="2">Home</Link>
          <Link ml="1" p="2">
            Aktuelles
          </Link>
          <Link ml="1" p="2">
            Leistungen
          </Link>
          <Link ml="1" p="2">
            Kontakt
          </Link>
          <Link ml="1" p="2">
            Karriere
          </Link>
          <Link ml="1" p="2">
            <Image
              width="20px"
              height="12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABLElEQVR4AY2QgUZEQRSGz9ydmzbYkBWABBJYABHEFhJ6m0WP0DMEQNIr9AKrN8ne2Tt3Zs7MOdOZmRBEv+v34Tvub9R6fdNlAzU+snSME/wdjbjbbJ6EiEg6BA8102QbjKNpoMzw8v6qD/sOALbbT2MC1NgaAWOKOgxf5czY+4dbAX2G/THzcozLrvPV85IQyqVz0rvg2p9Pei4HjzSsiFbV4JgyhhxCjpGdZ0RhdikLB9/b8Qig7MkpSovR7Cp59q6CazaNFiTt4J82o6uvdMVwTsztKTXZod4jgOJJuqNAjFyGrBR8gM6XwKfIC4KanBSTZ0rClKh08D9DFh3egW7ebH7NcRDQWrz9rM2Ne+mDOXB2mZJ8agL19nwxR2iZXGm1gDbQKhDjd4yHb2oW/KR8xHicAAAAAElFTkSuQmCC"
            />
          </Link>
          <Link ml="1" p="2">
            <Image
              width="20px"
              height="12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII="
            />
          </Link>
        </HStack>

        <VStack
          ml="6"
          spacing="24px"
          mt="12vh"
          align="flex-start"
          border="solid 1px red"
        >
          <Heading fontSize={["30px", "40px", "60px"]}>
            Nutzen des vollen Potenzials
          </Heading>
          <Heading
            pl="24"
            fontSize={["40px", "40px", "65px"]}
            style={{ fontFamily: "Arial" }}
          >
            erneubarer Ressourcen
          </Heading>
          <Heading fontSize={["30px", "40px", "60px"]} pl="5">
            mit{" "}
            <chakra.span
              fontSize={["35px", "45px", "65px"]}
              style={{ fontFamily: "Arial" }}
            >
              Location Intelligence
            </chakra.span>
          </Heading>
          <br />
          <chakra.h1
            fontSize={["30px", "40px", "45px"]}
            style={{ color: "#64B63F" }}
          >
            <chakra.p as="strong">Nefino</chakra.p> bietet leistungsstarke{" "}
            <chakra.p as="strong">GIS Lösungen</chakra.p>
          </chakra.h1>
          <Heading
            fontSize={["30px", "40px", "45px"]}
            style={{ color: "#64B63F" }}
          >
            für die grünen Vorreiter von Morgen
          </Heading>
        </VStack>

        <Box
          position="absolute"
          top="6vh"
          right="3"
          width="480px"
          height="480px"
          backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/earth.svg)"
          backgroundPosition="right"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          border="solid 1px red"
        ></Box>
        <Box

          position="absolute"
          top="50vh"
          left="0"
          w="100%"
          height="calc(45vh)"
          backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/wt_and_pv.svg)"
          backgroundSize="Contain"
          backgroundRepeat="no-repeat"
          border="solid 1px red"
        ></Box>
      </chakra.div>

      <VStack bg="salmon">
        <HStack>
          <Box>
            fd fdsfsd <Code>dasda</Code> d
          </Box>
          <Box>fdsffdfssd</Box>
          <Box>
            fdsfsd <Code>dasda</Code>
          </Box>
        </HStack>
        <Input
          w="40%"
          type="text"
          value={input}
          onChange={handleChange}
        ></Input>
        <Button color="black" onClick={handleClick}>
          Alert
        </Button>
      </VStack>
    </>
  );
}
