import React from "react";
import { Box, Button, Flex, Wrap } from "@chakra-ui/react";
import { VStack, Container, Heading } from "@chakra-ui/react";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, } from "@chakra-ui/react";

import { CUIAutoComplete } from "chakra-ui-autocomplete";

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" }
];

export default function App2() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  ///pin start
  const [value, setValue] = React.useState("")
  const [pinok, setPinok] = React.useState(false)

  const handleChange = (value) => {
    setValue(value)
    setPinok(false)
  }

  const handleComplete = (value) => {
    setPinok(true)
  }
  ///pin end
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const onDelete = () => console.log("deleted")
  const cancelRef = React.useRef()
  ///aler dialog end

  return (
    <>
      <Heading>chakra-ui-autocomplete</Heading>
      <Box px={8} py={4} height="60vh">
        <CUIAutoComplete
          label="Choose preferred work locations"
          placeholder="Type a Country"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          tagStyleProps={{
            rounded: "full",
            pt: 1,
            pb: 2,
            px: 2,
            fontSize: "1rem"
          }}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
      </Box>
      <br />
      <Heading>Container</Heading>
      <VStack>
        <Container bg="gray.100" maxW="container.xl">Extra-Large Container</Container>
        <Container bg="gray.100" maxW="container.lg">Large Container</Container>
        <Container bg="gray.100" maxW="container.md">Medium Container</Container>
        <Container bg="gray.100" maxW="container.sm">Small Container</Container>
      </VStack>

      <Heading>Pin</Heading>
      <Container maxW="container.md">
        <HStack m="5">
          <PinInput value={value} onChange={handleChange} onComplete={handleComplete}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          {pinok && <p>{value}</p>}

        </HStack>
      </Container>

      <Heading>Alert Dialog</Heading>
      <Container maxW="container.md">
        <Button colorScheme="red" m="5" onClick={() => setIsOpen(true)}>
          Delete Customer
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent bg="blue.100">
              <AlertDialogHeader bg="blue.500" fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Container>

      <Container maxW="container.md" bg="grey" mb="40" >
        <Wrap color="grey" direction="row" textAlign="center" wrap="true">

          <Box bg="red.300" w="180px" height="40" >1</Box>
          <Box bg="blue.200" w="560px" height="60" >2</Box>
          <Box bg="green.200" w="160px" height="40">3</Box>
          <Box bg="yellow.200" w="260px" height="40">4</Box>
          <Box bg="tomato" w="260px" height="40">5</Box>
          <Box bg="pink" w="560px" height="40">6</Box>

        </Wrap>
      </Container>

      <Container maxW="container.md" bg="grey">


      </Container>

    </>

  );
}



