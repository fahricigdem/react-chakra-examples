import {
    Heading,
    Box,
    VStack,
    chakra,
    Spacer
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
                    mt="31vh"
                    align="flex-start"
                    position="absolute"
                    zIndex="10"
                    spacing="5"
                >

                    <Heading fontSize={["4vw"]}>
                        Nutzen des vollen Potenzials
                    </Heading>

                    <Heading
                        pl={["6vw", "8vw"]}
                        fontSize={["5vw"]}

                    >
                        erneubarer Ressourcen
                    </Heading>

                    <Heading fontSize={["4vw"]} pl={["4vw", "4.8vw"]}>
                        mit {" "}
                        <chakra.span
                            fontSize={["5vw"]}
                            fontWeight="bold"
                            style={{ fontFamily: "Arial", fontWeight: "900" }}
                        >
                            Location Intelligence
                        </chakra.span>
                    </Heading>
                    <Spacer />


                    <VStack align="flex-start" spacing={{ base: "0", md: "-2" }}>
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


                </VStack>


                <Box

                    position="absolute"
                    top="14.5vh"
                    right="0.95"
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
