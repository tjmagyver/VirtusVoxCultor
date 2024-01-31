import { Image, Text, VStack } from "native-base";

import BookCoverImage from '@assets/bookCover.png';
import { RFValue } from "react-native-responsive-fontsize";

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
        resizeMethod="resize"
      />
      <Text
        fontSize={RFValue(20)}
        fontFamily="inriaRegular"
        color="red.900"
        ml="30px"
        mt="16px"
      >
        {'CONTINUAR OUVINDO >'}
      </Text>
      <Text
        fontSize={RFValue(16)}
        fontFamily="inriaRegular"
        color="gray.300"
        ml="22px"
      >
        Reiniciar o capítulo recente.
      </Text>
    </VStack>
  )
}