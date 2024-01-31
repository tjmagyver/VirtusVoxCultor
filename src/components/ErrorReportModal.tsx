import {
  Button, CloseIcon, HStack, IBoxProps, IconButton, Input, Modal,
  Text,
  TextArea,
  VStack,
  WarningTwoIcon
} from "native-base";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

export function ErrorReportModal({ ...rest }: IBoxProps) {
  const [showModalErrorReport, setShowModalErrorReport] = useState(false);
  const [descriptionError, setDescriptionError] = useState('');

  return (
    <>
      <Button
        w="112px"
        h="25px"
        bg="gray.100"
        px={0}
        py={0}
        _pressed={{
          bg: "gray.100",
          opacity: 0.9,
        }}
        rounded="5px"
        leftIcon={
          <WarningTwoIcon
            size="14px"
            color="red.500"
          />
        }
        onPress={() => setShowModalErrorReport(true)}
      >
        <Text
          fontSize={RFValue(12)}
          fontFamily="inriaRegular"
          color="gray.300"
        >
          Reportar erro
        </Text>
      </Button>
      <Modal
        isOpen={showModalErrorReport}
        onClose={() => setShowModalErrorReport(false)}
      >
        <Modal.Content
          {...rest}
          w="368px"
          h="fit-content"
          borderBottomRadius="5px"
          borderTopRadius={0}
          bg="gray.100"
          pb="12px"
        >
          <VStack
            mt="16px"
            alignItems="center"
            justifyContent="space-between"
            px="34px"
          >
            <Text
              fontSize={RFValue(12)}
              fontFamily="inriaLight"
              color="gray.350"
              textAlign="center"
              w="260px"
            >
              Conte-nos o problema que encontrou e faixa em que ele aconteceu.
            </Text>
            <VStack alignItems="flex-end">
              <IconButton
                icon={
                  <CloseIcon color="white" size="12px" />
                }
                rounded="3px"
                bg="red.900"
                w="12px"
                h="12px"
                mb="3px"
                mr="10px"
                onPress={() => setShowModalErrorReport(false)}
                _pressed={{
                  bg: "red.900",
                  opacity: 0.9
                }}
              />

              <TextArea
                autoCompleteType={'off'}
                shadow={4}
                w="301px"
                h="86px"
                placeholder="Breve descrição do problema"
                bg="white"
                placeholderTextColor="gray.100"
                color="gray.900"
                fontSize={RFValue(14)}
                fontFamily="inriaLight"
                value={descriptionError}
                onChangeText={text => setDescriptionError(text)}
                rounded="5px"
                _focus={{
                  borderWidth: "0px",
                  bg: "white"
                }}
              />
            </VStack>
            <HStack
              mt="8px"
              alignItems="center"
              ml="auto"
            >
              <Text
                fontSize={RFValue(12)}
                fontFamily="inriaLight"
                color="gray.350"
                mr="6px"
              >
                Nome da faixa:
              </Text>
              <Input 
                w="209px"
                h="24px"
                shadow={4}
                fontSize={RFValue(14)}
                placeholderTextColor="gray.100"
                color="gray.900"
                py={0}
                bg="white"
                _focus={{
                  borderWidth: "0px",
                  bg: "white"
                }}
                placeholder="Ex: Capítulo 1"
              />
            </HStack>
          </VStack>
        </Modal.Content>
      </Modal>
    </>
  )
}