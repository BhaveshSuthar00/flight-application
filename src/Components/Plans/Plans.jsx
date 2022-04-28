import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { apiCallAdd } from '../../Redux/Plans/Action';
import {useSelector, useDispatch } from 'react-redux'
import { Box, Container, Image, Text, 
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
} from '@chakra-ui/react';
const Plans = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {plans, loading} = useSelector((store)=> store.plans);
    console.log(plans, loading)
    useEffect(() => {
        dispatch(apiCallAdd(id))
    }, [id])
    return (
        <Stack>
            <Text as='h1' fontSize='34px' p={4} fontWeight='bold'>All the flight</Text>
            
        <TableContainer w="full">
            <Table size='sm'>
            <Thead>
                <Tr>
                <Th>Image</Th>
                <Th>Take off time / Landing time</Th>
                <Th>Starting Point</Th>
                <Th>End Point</Th>
                <Th>Cost</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    plans && plans.map((plan)=>(
                        <Tr key={plan._id}>
                            <Td>
                                <Image src={plan.planImg} w='sm' alt={plan.companyName}/>
                            </Td>
                            <Td>{plan.startTime} - {plan.endTime}</Td>
                            <Td>{plan.startingPoint.city},{plan.startingPoint.country}</Td>
                            <Td>{plan.endPoint.city},{plan.endPoint.country}</Td>
                            <Td>{plan.cost}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
            </Table>
        </TableContainer>
        </Stack>
    )
}

export default Plans