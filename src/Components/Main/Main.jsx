import { 
  Container,
  Stack,
  Spinner,
  Box,
  Image,
  Text,

} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { apiCallAdd } from '../../Redux/Airports/Action'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
const Main = () => {
  const dispatch = useDispatch();
  const {loading,airports} = useSelector((store)=> store.airport);
  useEffect(()=>{
    dispatch(apiCallAdd())
  }, [dispatch])
  if(loading){
    return <Container w="50%" mt={'20%'} align="center">
      <Spinner size='xl' thickness='5px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'/>
    </Container>
  }
  
  return (
    <>
      <Stack direction={['column', 'row']}>
        {
          airports && airports.map((item)=>(
              <Link to={`/plans/${item._id}`} key={item._id}>
                <Box h="300px" w="300px" boxShadow='lg' p={4} borderRadius="10px">
                  <Image h="60%"  src={item.image}  borderRadius="10px" alt='dd'/>
                  <Box h="25%" overflow='hidden' fontSize="23px" justify="center" mt={4}>
                    <Stack direction={['column', 'row']}  justify="center">
                      <Text>{item.city},</Text>
                      <Text>{item.country}</Text>
                    </Stack>
                    <Text>{item.name}</Text>
                  </Box>
                </Box>  
              </Link>
          ))
        }
      </Stack>
    </>
  )
}

export default Main