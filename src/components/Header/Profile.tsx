import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
        <Box mr='6' textAlign='right'>
          <Text>Jones Bass</Text>
          <Text color='gray.300' fontSize='small'>
            jonesbass.tb@gmail.com
          </Text>
        </Box>
      <Avatar size='md' name='Jones Bass' src='https://avatars.githubusercontent.com/u/85463497?v=4' />
    </Flex>
  )
}
