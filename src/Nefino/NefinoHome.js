import {
    Heading,
    Box,
    VStack,
    chakra
} from "@chakra-ui/react";
import Navbar from "./NefinoNavbar"
import NefinoHomeBewerbung from "./NefinoHomeBewerbung"
import WieArbeitet from "./WieArbeitet"

export default function NefinoHome() {

    return (
        <>

            <chakra.div
                color="white"
                backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/background.svg)"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                h="100vh"
            >

                <Navbar />

                <VStack
                    ml="6"
                    spacing={["2vw"]}
                    mt="18vh"
                    align="flex-start"
                    position="absolute"

                >
                    <Box>
                        <Heading fontSize={["4.8vw"]}>
                            Nutzen des vollen Potenzials
                        </Heading>
                    </Box>
                    <Heading
                        pl={["6vw", "8vw"]}
                        fontSize={["5vw"]}
                        style={{ fontFamily: "Arial" }}
                    >
                        erneubarer Ressourcen
                    </Heading>
                    <Heading fontSize={["4.5vw"]} pl={["4vw", "4.8vw"]}>
                        mit{" "}
                        <chakra.span
                            fontSize={["5vw"]}
                            style={{ fontFamily: "Arial" }}
                        >
                            Location Intelligence
                        </chakra.span>
                    </Heading>

                </VStack>
                <VStack
                    ml="6"
                    spacing='-1vw'
                    mt="38vh"
                    align="flex-start"
                    position="absolute"
                >
                    <chakra.h1
                        fontSize={["4vw"]}
                        style={{ color: "#64B63F" }}
                    >
                        <chakra.p as="strong">Nefino</chakra.p> bietet leistungsstarke{" "}
                        <chakra.p as="strong">GIS Lösungen</chakra.p>
                    </chakra.h1>
                    <chakra.h1
                        fontSize={["3.8vw"]}
                        style={{ color: "#64B63F" }}
                    >
                        für die grünen Vorreiter von Morgen
                    </chakra.h1>
                </VStack>

                <Box

                    position="absolute"
                    top="7vh"
                    right="3"
                    width="40vw"
                    height="40vw"
                    backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/earth.svg)"
                    backgroundPosition="right"
                    backgroundSize="contain"
                    backgroundRepeat="no-repeat"

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

                ></Box>
            </chakra.div>
            <NefinoHomeBewerbung />
            <WieArbeitet />
        </>
    );
}
