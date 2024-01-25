import { Button, HStack, Image, Text, VStack } from "native-base";

import BuyBookImage from '@assets/buyBook.png';
import { Linking } from "react-native";

interface BuyPhysicalBookFooterProps {
  linkPurchase: string
}

export function BuyPhysicalBookFooter({
  linkPurchase
}: BuyPhysicalBookFooterProps) {
  return (
    <HStack
      w="fit-content"
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
        h="50px"
        justifyContent="center"
        ml="15px"
      >
        <Button variant="unstyled" px={0} py={0} onPress={() => Linking.openURL(linkPurchase)}>
          <Text
            fontFamily="inriaRegular"
            fontSize="23px"
            color="red.900"
            mt="10px"
          >
            COMPRAR O LIVRO FÍSICO
          </Text>
        </Button>
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