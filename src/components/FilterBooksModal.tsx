import { Button, HStack, IBoxProps, Image, Modal, Text, VStack } from "native-base";

import PolygonBlackIconImage from '@assets/polygonBlackIcon.png';
import { useState } from "react";
import { CardFilterName } from "./CardFilterName";

export function FilterBooksModal({ ...rest }: IBoxProps) {
  const [showModalFilterBooks, setShowModalFilterBooks] = useState(false);

  return (
    <>
      <Button
        variant="link"
        px={0}
        py={0}
        onPress={() => setShowModalFilterBooks(true)}
      >
        <Image
          source={PolygonBlackIconImage}
          alt="Ícone de polígono preto"
          w="20px"
          h="20px"
          resizeMode="contain"
          ml="7px"
        />
      </Button>
      <Modal
        isOpen={showModalFilterBooks}
        onClose={() => setShowModalFilterBooks(false)}
      >
        <Modal.Content
          {...rest}
          shadow={4}
          maxWidth="143px"
          borderBottomLeftRadius="10px"
          borderTopLeftRadius="10px"
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
        >
          <VStack
            borderTopLeftRadius={0}
            borderTopRightRadius={0}
            borderColor="gray.100"
            borderWidth={1}
            w="143px"
            h="209px"
            bg="gray.75"
          >
            <HStack
              pl="15px"
              pr="4px"
              mt="4px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontFamily="inriaRegular"
                fontSize="15px"
                color="gray.900"
              >
                Listar por:
              </Text>
              <Button
                variant="link"
                px={0}
                py={0}
                onPress={() => setShowModalFilterBooks(false)}
              >
                <Image
                  source={PolygonBlackIconImage}
                  alt="Ícone de polígono preto"
                  w="20px"
                  h="20px"
                  resizeMode="contain"
                />
              </Button>
            </HStack>
            <VStack alignItems="center" mt={5}>
              <CardFilterName filterName="Ordem alfabética" />
              <CardFilterName filterName="Data de adição" mt="8px" />
              <CardFilterName 
                filterName="Maior Duração" 
                mt="8px" 
                isActiveFilter
              />
              <CardFilterName filterName="Menor Duração" mt="8px" />
            </VStack>
          </VStack>
        </Modal.Content>
      </Modal>
    </>
  )
}