import { Button, HStack, Image, Text, VStack } from "native-base";

import BuyBookImage from '@assets/buyBook.png';
import { Linking } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

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
      alignItems="center"
      px="15px"
      mx="15px"
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
            fontSize='2xl'
            color="red.900"
            mt="10px"
            noOfLines={1}
          >
            COMPRAR O LIVRO FÍSICO
          </Text>
        </Button>
        <Text
          fontFamily="inriaRegular"
          fontSize={RFValue(15)}
          color="gray.900"
          mb="16px"
          ml="2px"
          noOfLines={1}
        >
          Perfis ativos têm 10% de desconto!
        </Text>
      </VStack>
    </HStack>
  )
}