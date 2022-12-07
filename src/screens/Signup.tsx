import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base'

import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export const SignUp = () => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <ScrollView _contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px='10' pb='16'>
        <Image 
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />

        <Center my='24'>
          <LogoSvg />

          <Text color='gray.100'>
              Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color='gray.100' mb='6'>
            Acesse sua conta
          </Heading>
        </Center>

        <Center>
          <Input 
            placeholder='Nome'
          />
          <Input 
            placeholder='E-mail' 
            keyboardType='email-address' 
            autoCapitalize='none'
          />
          <Input 
            placeholder='Senha'
            secureTextEntry={true}
          />

          <Button title='Criar e acessar'/>
        </Center>

        <Button
          mt='24'
          title='Voltar para o login' 
          variant='outline'
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}