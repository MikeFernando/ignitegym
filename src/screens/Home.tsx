import { useState } from 'react'
import { FlatList, Heading, HStack, Text, VStack } from 'native-base'

import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'
import { ExerciseCard } from '@components/ExerciseCard'

export const Home = () => {
  const [ groups, setGroups ] = useState(['costas', 'Bícipes', 'Trícipes', 'Perna', 'Ombro'])
  const [ groupSelected, setGroupSelected ] = useState('')

  return (
    <VStack flex={1}>
        <HomeHeader />

        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Group 
              name={item} 
              isActive={groupSelected === item}
              onPress={() => setGroupSelected(item)} 
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          my={10}
          maxH={10}
          minH={10}
        />

       <VStack flex={1} px={8}>
          <HStack justifyContent='space-between' mb={5}>
              <Heading color='gray.200' fontSize='md'>
                  Exercícios
              </Heading>

              <Text color='gray.200' fontSize='sm'>
                  5
              </Text>
          </HStack>

          <ExerciseCard />
          <ExerciseCard />

       </VStack>
    </VStack>
  )
}