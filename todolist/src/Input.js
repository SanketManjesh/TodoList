import React, { useState } from 'react';
import Entry from './Entry'
import {
    Box,
    Flex,
    Input,
    FormControl,
    FormLabel,
    Button,
    Spacer
  } from "@chakra-ui/react"
function InputField() {
    const[letter, wordState] = useState("");
    const[wordList, wordListState] = useState([]);

    const wordTracker = (event) => {
        wordState(event.target.value);
    }

    const addEventList = () => {
        if (letter !== "") {
            wordListState([...wordList, {id: wordList.length, value: letter}]);
            wordState("");
        }
    }

    const deleteEvent = (idNum) => {
        wordListState(wordList.filter(({ id }) => id !== idNum));
    }

    return (
        <div>
            <FormControl margin="10px" width="1200px" marginLeft="auto" marginRight="auto" paddingBottom="10px">
                <Flex marginBottom="40px" backgroundColor="#00BFFF" rounded="md" height="100px" alignItems="center" width="1000px" marginLeft="auto" marginRight="auto">
                <Box paddingLeft="15px">
                    <img src="https://www.clker.com/cliparts/p/e/X/9/d/4/check-mark-white-md.png" width="60px" height="60px"></img>
                </Box>
                <Box paddingLeft="15px">
                    <img src="https://www.clker.com/cliparts/p/e/X/9/d/4/check-mark-white-md.png" width="60px" height="60px"></img>
                </Box>
                    <Flex width="400px" height="100px" borderRadius="40px" 
                    backgroundColor="white" marginLeft="auto" marginRight="auto" alignItems="center" 
                    justifyContent="center" border="4px" borderColor="#00FFFF" height="60px" width="600px">
                        <FormLabel color="#00FFFF" fontSize="40px">Todo Entry List</FormLabel>
                    </Flex>
                <Box paddingRight="15px">
                    <img src="https://www.clker.com/cliparts/p/e/X/9/d/4/check-mark-white-md.png" width="60px" height="60px"></img>
                </Box>
                <Box paddingRight="15px">
                    <img src="https://www.clker.com/cliparts/p/e/X/9/d/4/check-mark-white-md.png" width="60px" height="60px"></img>
                </Box>
                </Flex>
                <Flex marginBottom="20px" backgroundColor="#F0F0F0" width="1000px" height="100px" alignItems="center" justifyContent="center" rounded="md" marginLeft="auto" marginRight="auto">
                    <Box paddingRight="10px">
                        <img src="https://cdn4.iconfinder.com/data/icons/circles-1/32/183-01-512.png" width="40px" height="40px"></img>
                    </Box>
                    <Input placeholder="Enter Item to Add" type="text" onChange={wordTracker} value={letter} backgroundColor="white" width="800px"></Input>
                    <Button colorScheme="teal" onClick={addEventList}>Add to List</Button>
                </Flex>
            </FormControl>
            <Box backgroundColor="#f5f5dc" rounded="md" border="4px" BorderColor="black" paddingTop="20px" height="1167px" width="1200px" marginLeft="auto" marginRight="auto">
                {wordList.map(word => <Entry key={word.id} value={word.value} stateList={wordList} deleter={deleteEvent} delId={word.id}/>)}
            </Box>
        </div>
    );
}

export default InputField;