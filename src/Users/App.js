import { Container, Wrap, Box, Heading, Text, VStack, Divider, WrapItem, Avatar } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
const Users = () => {

    const [users, setUsers] = useState([])

    async function fetchFunction() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const json = await response.json();
            setUsers(json)
        }
        catch (err) {
            throw err;
            console.log(err);
        }
    }

    useEffect(() => {
        fetchFunction()
    }, []);

    const avatars = ["teal", "red", "pink", "green", "gray",
        "orange", "cyan", "red.300", "teal.700", "red.300"]
    const renderContent = () => {
        return (
            users.map((user, index) => {
                return (
                    <WrapItem w="25%" minW="220px">
                        <VStack key={index} bg="red.100" my="4" rounded="md" p="4" w="100%" textAlign="center">
                            <Text >{user.name}</Text>
                            <Avatar size="2xl" bg={avatars[index]} />
                            <Text >{user.email}</Text>
                            <Text >{user.address.city} - {user.address.street}</Text>
                            <Divider borderColor="cyan.400" w="80%" />
                            <Text >{user.company.name}</Text>
                            <Text >{user.company.bs}</Text>
                        </VStack>
                    </WrapItem>
                )
            }

            )
        )
    }

    return (
        <Container maxW="container.xl" bg="cyan.100">
            <VStack >
                <VStack bg="cyan.300" w="80vw" my="20" p="4" rounded="xl" boxShadow="lg" border="4px" borderColor="red.200" bgGradient="linear(to-br, #7928CA, #FF0080)" textAlign="center">
                    <Heading size="4xl" color="blue.200" p="4">Users Api</Heading>
                    <Wrap spacing="40px" justify="center">{renderContent()}</Wrap>
                </VStack>

            </VStack>
        </Container>

    );
}

export default Users;