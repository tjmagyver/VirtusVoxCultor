import {
  Button,
  HStack,
  IBoxProps, Input, Modal,
  Text,
  VStack
} from "native-base";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

interface ReadMoreModalProps extends IBoxProps {
  sinopse: string
}

export function ReadMoreModal({ sinopse, ...rest }: ReadMoreModalProps) {
  const [showModalReadMore, setShowModalReadMore] = useState(false);

  return (
    <>
      <Button
        variant="link"
        px={0}
        py={0}
        onPress={() => setShowModalReadMore(true)}
      >
        <Text
          fontSize={RFValue(14)}
          fontFamily="inriaRegular"
          color="gray.300"
        >
          ler mais ...
        </Text>
      </Button>
      <Modal
        isOpen={showModalReadMore}
        onClose={() => setShowModalReadMore(false)}
      >
        <Modal.Content
          {...rest}
          w={RFValue(332)}
          h="fit-content"
          rounded="10px"
          bg="gray.100"
        >
          <VStack
            px="20px"
            py="17px"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Text
              w={RFValue(288)}
              color="black"
              fontFamily="inriaRegular"
              fontSize={RFValue(12)}
              letterSpacing='0.06px'
              lineHeight={RFValue(15)}
            >
              {sinopse}
            </Text>
            <HStack
              ml="22px"
              mt="12px"
              mb="16px"
            >
              <Text
                fontSize={RFValue(15)}
                fontFamily="inriaRegular"
                color="gray.350"
              >
                Tempo total estimado: {' '}
                <Input
                  bg="white"
                  color="gray.900"
                  fontSize={RFValue(15)}
                  fontFamily="body"
                  w="57px"
                  h="26px"
                  rounded={0}
                  py={0}
                  px={2}
                  borderWidth={0}
                  _focus={{
                    bg: 'white'
                  }}
                />
                {' '}
                min.
              </Text>
            </HStack>
            <Button
              variant="link"
              px={0}
              py={0}
              onPress={() => setShowModalReadMore(false)}
            >
              <Text
                fontSize={RFValue(15)}
                fontFamily="inriaRegular"
                color="gray.900"
              >
                {'< Voltar'}
              </Text>
            </Button>
          </VStack>
        </Modal.Content>
      </Modal>
    </>
  )
}