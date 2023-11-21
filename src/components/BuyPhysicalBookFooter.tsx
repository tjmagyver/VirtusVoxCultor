import { HStack, Image, Text, VStack } from "native-base";

import BuyBookImage from '@assets/buyBook.png';

export function BuyPhysicalBookFooter() {
  return (
    <HStack 
      w="366px"
      h="98px"
      rounded="22px"
      bg="gray.100"
      ml="14px"
      alignItems="center"
      px="15px"
    >
      <Image 
        source={BuyBookImage}
        alt="Buy Book"
        resizeMode="contain"
        resizeMethod="resize"
      />
      <VStack 
        h="40px"
        justifyContent="center"
        ml="15px"
      >
        <Text
          fontFamily="inriaRegular"
          fontSize="25px"
          color="red.900"
          mt="10px"
        >
          COMPRAR O LIVRO FÍSICO
        </Text>
        <Text
          fontFamily="inriaRegular"
          fontSize="15px"
          color="gray.900"
          mb="16px"
          ml="2px"
        >
          Perfis ativos têm 10% de desconto!
        </Text>
      </VStack>
    </HStack>
  )
}