import { Box, IBoxProps, Image, Text, VStack } from 'native-base';
import React from 'react';
import { Button } from './Button';

import { RFValue } from 'react-native-responsive-fontsize';
import BestOfferImage from '../assets/bestOffer.png';

interface CardPlansProps extends IBoxProps {
  price: string
  title: string
  isBestOffer?: boolean
  onNavigateCheckout: () => void
}

export function CardPlans({
  price,
  title,
  isBestOffer = false,
  onNavigateCheckout,
  ...rest
}: CardPlansProps) {
  return (
    <VStack
      {...rest}
    >
      <Text
        fontFamily="inriaRegular"
        fontSize="2xl"
        color="white"
        textAlign="center"
      >
        {title}
      </Text>
      <Box
        w={RFValue(314)}
        h={RFValue(96)}
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
        bg="gray.100"
        borderRadius="5px"
        px="18px"
        py="10px"
        mt="9px"
        position="relative"
      >
        {
          isBestOffer && (
            <Image
              position="absolute"
              source={BestOfferImage}
              resizeMode="contain"
              alt="Melhor oferta"
              top="-33%"
              right="-4%"
            />
          )
        }

        <Box>
          <Text
            fontFamily="inriaBold"
            color="gray.900"
            fontSize={45}
            mt="2px"
          >
            R$ {price}
          </Text>
          <Text
            fontFamily="inriaRegular"
            color="gray.300"
            fontSize='lg'
            ml="10px"
            mt="-6px"
          >
            *Renovação automática
          </Text>
        </Box>
        <Box ml="auto" justifyContent="flex-end" mt="auto">
          <Text
            fontFamily="inriaRegular"
            color="gray.900"
            fontSize='xl'
          >
            /Mês
          </Text>
          <Button
            title="Assinar"
            w={RFValue(80)}
            h={RFValue(22)}
            p={0}
            rounded={5}
            fontSize={RFValue(12)}
            fontFamily="inriaBold"
            onPress={onNavigateCheckout}
          />
        </Box>
      </Box>
    </VStack>
  )
}