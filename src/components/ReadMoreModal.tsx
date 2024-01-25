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
              letterSpacing={RFValue(0.06)}
              lineHeight={RFValue(15)}
            >
              {sinopse}
              {/* Em Dominus Vobiscum, São Pedro Damião reflete sobre a natureza e a
              forma da liturgia da missa, quando rezada pelo sacerdote
              privadamente, sem presença do povo. Um assunto pouco explorado e
              pouco compreendido, mas de suma importância quando entendemos que
              cada membro da Igreja está unido ao Corpo Místico, e suas ações
              privadas também fazem parte deste Corpo. Essa perspectiva pode
              revolucionar a forma como os sacerdotes celebram e como os fiéis
              participam da ação litúrgica e, também, como fazem suas
              orações diárias.  */}
              {'\n'} {'\n'}

              Para esta edição, além do texto original e integral, trazemos
              também contribuições do Papa Bento XVI, e artigos do Ir. Vanderlei
              de Lima e do Pe. Bruno Roberto Rossi, que complementam a visão de
              São Pedro Damião com considerações atuais sobre a Santa Missa.
            </Text>
            <HStack
              ml="22px"
              mt="12px"
              mb="16px"
            >
              <Text
                fontSize="15px"
                fontFamily="inriaRegular"
                color="gray.350"
              >
                Tempo total estimado: {' '}
                <Input
                  bg="white"
                  color="gray.900"
                  fontSize="15px"
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
                fontSize="15px"
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