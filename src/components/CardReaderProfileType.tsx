import { Center, Image } from "native-base";
import { ImageSourcePropType } from "react-native";

interface CardReaderProfileTypeProps {
  image: ImageSourcePropType;
  isReaderProfileTypeCurrent?: boolean;
}

export function CardReaderProfileType({ 
  image,
  isReaderProfileTypeCurrent = false
}: CardReaderProfileTypeProps) {
  return (
    <Center
      bg={isReaderProfileTypeCurrent ? 'teal.100' : 'gray.150'}
      w="110px"
      h="110px"
      rounded="10px"
      ml="10px"
    >
      <Image 
        source={image}
        alt="Books Icon"
        w="90px"
        h="90px"
        resizeMode="contain"
      />
    </Center>
  )
}