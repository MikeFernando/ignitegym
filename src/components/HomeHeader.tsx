import { VStack, Text, Heading, HStack, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import { UserFoto } from './UserFoto'

export const HomeHeader = () => {
  return (
    <HStack bg='gray.500' pt={16} pb={5} px={8} alignItems='center'>
      <UserFoto 
        source={{ uri: 'https://github.com/MikeFernando.png' }}
        alt='Imagem do usuário'
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>
          Olá</Text>
        <Heading color='gray.100' fontSize='md'>
          Mike Fernando
        </Heading>
      </VStack>

      <Icon 
        as={MaterialIcons}
        name='logout'
        color='gray.200'
        size={7}
      />
    </HStack>
  )
}