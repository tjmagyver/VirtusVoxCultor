import { HStack, Image, ScrollView, Text, VStack } from "native-base";


import PolygonIconImage from '@assets/polygonIcon.png';
import { CardAudioBook } from "@components/CardAudiobook";


export function YourLibrary() {
  return (
    <VStack
      w="100%"
      bg="gray.50"
      ml="6px"
      py="7px"
    >
      <HStack
        px="10px"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <HStack
          alignItems="center"
        >
          <Image
            source={PolygonIconImage}
            alt="Ícone de polígono"
            resizeMode="contain"
            w="32px"
            h="32px"
          />

          <Text
            fontSize="24px"
            fontFamily="inriaBold"
            color="red.900"
            ml="6px"
          >
            Sua biblioteca
          </Text>
        </HStack>

        <Text
          fontSize="12px"
          fontFamily="inriaRegular"
          color="gray.300"
        >
          ver mais...
        </Text>
      </HStack>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <HStack mt="10px">
          <CardAudioBook />
          <CardAudioBook />
          <CardAudioBook />
          <CardAudioBook />
        </HStack>
      </ScrollView>
    </VStack>
  )
}