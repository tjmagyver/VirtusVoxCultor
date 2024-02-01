import { Button, Image, Text, VStack } from "native-base";

import BookCoverImage from '@assets/bookCover.png';
import { useNavigation } from "@react-navigation/native";

export function AudioControlsFooter() {
  const navigation = useNavigation<any>()

  function handleNavigatePlayer() {
    navigation.navigate('Player')
  }

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
      <VStack
        ml={10}
        alignItems="flex-start"
      >
        <Button
          variant="unstyled"
          p={0}
          onPress={handleNavigatePlayer}
        >
          <Text
            fontSize="xl"
            fontFamily="inriaRegular"
            color="red.900"
            mt="16px"
          >
            {'CONTINUAR OUVINDO >'}
          </Text>
        </Button>
        <Text
          fontSize='lg'
          fontFamily="inriaRegular"
          color="gray.300"
        >
          Reiniciar o capítulo recente.
        </Text>
      </VStack>
    </VStack>
  )
}