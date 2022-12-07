import { useState } from 'react'
import { FlatList, VStack } from 'native-base'

import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'

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
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          my={10}
          maxH={10}
          minH={10}
        />
    </VStack>
  )
}