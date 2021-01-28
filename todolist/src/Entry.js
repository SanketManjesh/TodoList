import React, {useState} from 'react'
import {
    Checkbox,
    Flex,
    Spacer,
    Box,
    Button
  } from "@chakra-ui/react"
function Entry(props) {
    const deleteFunc = props.deleter;
    const [color, colorState] = useState("#FFFFFF");
    const [complete, completeState] = useState("Ongoing");
    const [buttonColor, buttonColorState] = useState("#FFD700");

    const completed = () => {
        if (color === "#FFFFFF") {
            colorState("#98FB98");
            completeState("Complete");
            buttonColorState("#008000");
        } else {
            colorState("#FFFFFF");
            completeState("Ongoing");
            buttonColorState("#FFD700");
        }
        console.log(color)
    }
    
    return ( 
        <Box>
            <Flex>
                <Flex backgroundColor={buttonColor} marginLeft="40px" marginRight="auto" color="white" height="40px" 
                paddingLeft="5px" paddingRight="5px" borderRadius="20px" fontWeight="bold" alignItems="center">{complete}</Flex>
                <Flex boxShadow="outline" rounded="md" bg={color} marginBottom="20px" width="1000px" marginLeft="20px" marginRight="auto" paddingLeft="20px" fontWeight="bold">
                    <Checkbox onChange={completed} marginRight="30px"></Checkbox>
                    <Box alignSelf="center">
                    {props.value}
                    </Box>
                    <Spacer/>
                    <Button colorScheme="red" onClick={() => deleteFunc(props.delId)}>Delete Me</Button>
                </Flex>
            </Flex>
            <Box backgroundColor="black" height="3px" width="1192px" marginBottom="20px"></Box>
        </Box>
    );
}

export default Entry