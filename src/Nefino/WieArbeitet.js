import {
    Spacer, Text, Heading, Box,
    Stack,
    VStack, Image,
    HStack,
    Flex,
    Button, Grid, SimpleGrid

} from '@chakra-ui/react';

import Cloud from "./cloud-computing.png"
import Analysis from "./analysis.png"
import Software from "./software.png"


export default function WieArbeitet() {
    return (
        <VStack bg="#F4F7FC" color="blue.900" px={{ base: "4", lg: "8" }} py="8" spacing="7">
            <Heading>Wie arbeitet Nefino?</Heading>
            <Text align="center" fontSize="xl">Wir sind ein Full-Service-Dienstleister, der einzigartige Daten-, Analysen- und Software-Services für Akteure des Erneuerbare-Energien-Marktes anbietet und natürlich alle, die jetzt Teil davon werden wollen.</Text>
            <br />
            <br />

            <SimpleGrid columns={{ base: "1", lg: "3" }} spacing="70px" pb="12" pt="4"  >
                <Box borderRadius="2xl" bg="white" px="8" py="12" textAlign="justify"><Box h="8"><Image style={{ position: "relative", top: "-100px", width: "130px", height: "120px" }} src={Cloud} /></Box><Heading mb="8">Daten </Heading> Verbessere deine Entscheidungsgrundlage mit unseren standortbezogenen Daten. Ob als einmaliger Direktdownload oder durch Einbindung einer regelmäßig aktualisierten API-Lösung, Nefino bietet dir einen einzigartigen Zugang zu einer Vielzahl GIS-fähiger Datenbanken!</Box>
                <Box borderRadius="2xl" bg="white" px="8" py="12" textAlign="justify"><Box h="8"><Image style={{ position: "relative", top: "-100px", width: "130px", height: "120px" }} src={Analysis} /></Box><Heading mb="8">Analysen</Heading> Nutze unsere Expertise, um für deine Herausforderungen die richtige Lösung zu finden. Von der Identifikation neuer Flächenpotenziale bis hin zur Prognose der voraussichtlichen Rückbaukosten, Nefino bietet dir eine Reihe einmaliger Analyseservices entlang des gesamten Lebenszyklusses von Wind- und Solarenergieanlagen!</Box>
                <Box borderRadius="2xl" bg="white" px="8" py="12" textAlign="justify"><Box h="8"><Image style={{ position: "relative", top: "-100px", width: "130px", height: "120px" }} src={Software} /></Box><Heading mb="8">Software</Heading> Bring dein Unternehmen gemeinsam mit uns auf das nächste digitale Level. Mit unseren maßgeschneiderten Schnittstellen und Softwarelösungen verfügst du stets über die richtigen Informationen, zur richtigen Zeit am richtigen Ort.</Box>

            </SimpleGrid>




        </VStack>
    )

};
