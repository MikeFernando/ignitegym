import { VStack, Text, Heading, HStack } from 'native-base'
import { UserFoto } from './UserFoto'

export const HomeHeader = () => {
  return (
    <HStack pt={16} pb={5} px={8} alignItems='center'>
      <UserFoto 
        source={{ uri: 'https://github.com/MikeFernando.png' }}
        alt='Imagem do usuário'
        size={16}
        mr={4}
      />

      <VStack>
        <Text color='gray.100' fontSize='md'>
          Olá</Text>
        <Heading color='gray.100' fontSize='md'>
          Mike Fernando
        </Heading>
      </VStack>
    </HStack>
  )
}