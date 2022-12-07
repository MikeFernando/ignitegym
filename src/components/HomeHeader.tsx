import { VStack, Text, Heading, HStack } from 'native-base'

export const HomeHeader = () => {
  return (
    <HStack>
      <VStack>
        <Text color='gray.100'>Olá</Text>
        <Heading color='gray.100'>Mike Fernando</Heading>
      </VStack>
    </HStack>
  )
}