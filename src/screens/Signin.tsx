import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base'

import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export const SignIn = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const handleNavigateSignUp = () => {
    navigation.navigate('signUp')
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
            placeholder='E-mail' 
            keyboardType='email-address' 
            autoCapitalize='none'
          />
          <Input 
            placeholder='Senha'
            secureTextEntry={true}
          />

          <Button title='acessar'/>
        </Center>

        <Center mt='24'>
          <Text color='white' fontSize='sm' mb='3' fontFamily='body'>
            Ainda não tem acesso?
          </Text>

          <Button 
            title='Criar conta' 
            variant='outline'
            onPress={handleNavigateSignUp}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}