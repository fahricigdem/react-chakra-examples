import React, { useState, useEffect } from 'react';
import { Container, Input, VStack } from "@chakra-ui/react";
import { nanoid } from 'nanoid';

const App = () => {
    ////logic//////////////////////////////
    const [text, setText] = useState('')
    const [mytasks, setMytasks] = useState(() => JSON.parse(localStorage.getItem("mytasks")) || [])

    useEffect(() => {
        localStorage.setItem("mytasks", JSON.stringify(mytasks))
    }, [mytasks])

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setMytasks([...mytasks, { "id": nanoid(), "text": text }])
            setText("")
        }
    }
    const handleDelete = (id) => {
        setMytasks(mytasks.filter(t => t.id !== id))
    }

    ////user interface//////////////////////////////
    return (
        <Container >
            <VStack m="5" borderColor="red.300" borderWidth='2px'>
                <h1>Todo App (with localStorage)</h1>
                <ul>
                    {mytasks.map(task => <li key={task.id}>{task.text} <span onClick={() => handleDelete(task.id)}>delete</span></li>)}
                </ul>
                <Input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyUp={handleEnter} placeholder="add new task!" />
            </VStack>
        </Container>
    );
}

export default App;