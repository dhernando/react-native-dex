import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  name: string;
  id: string;
  color?: string;
  backgroundColor?: string;
}

const BuildCard = ({
  id, name
}: Props) => {
  return (
    <View>
      <Text>#{id} {name}</Text>
    </View>
  )
}

export const Card = React.memo(BuildCard)