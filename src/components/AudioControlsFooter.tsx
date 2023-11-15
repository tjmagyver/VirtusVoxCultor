import { Image, Text, VStack } from "native-base";

import BookCoverImage from '@assets/bookCover.png';

export function AudioControlsFooter() {
  return (
    <VStack
      bg="gray.100"
      w="100%"
      h="109px"
      justifyContent="flex-start"
      alignItems="center"
      position="absolute"
      bottom={0}
    >
      <Image 
        source={BookCoverImage}
        alt="Capa do livro"
        position="absolute"
        top="-45px"
        left="16px"
        resizeMode="contain"
      />
      <Text
        fontSize="20px"
        fontFamily="inriaRegular"
        color="red.900"
        ml="20px"
        mt="16px"
      >
        {'CONTINUAR OUVINDO >'}
      </Text>
      <Text
        fontSize="16px"
        fontFamily="inriaRegular"
        color="gray.300"
        ml="7px"
      >
        Reiniciar o capítulo recente.
      </Text>
    </VStack>
  )
}