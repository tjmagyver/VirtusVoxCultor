import {
  Button,
  Divider,
  HStack, IBoxProps,
  Image,
  Modal,
  ScrollView,
  Text, VStack
} from "native-base";
import { useState } from "react";

import EditIconLightImage from '@assets/editIconLight.png';
import { PageNoteDetails } from "./PageNoteDetails";

const notes: { note: string, noteNumber: string }[] = [
  {
    noteNumber: "8",
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis vel felis eget posuere. Proin et nibh lobortis, dictum urna ac, tincidunt nisi. Praesent placerat tincidunt lorem, vitae ultrices tellus aliquam in. - 2’10”'
  },
  {
    noteNumber: "9",
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis vel felis eget posuere. Proin et nibh lobortis, dictum urna ac, tincidunt nisi. Praesent placerat tincidunt lorem, vitae ultrices tellus aliquam in. - 2’10”`
  }
]

export function BookNotesModal({ ...rest }: IBoxProps) {
  const [showModalBookNotes, setShowModalBookNotes] = useState(false);
  const [originalsNotesSelected, setOriginalsNotesSelected] = useState(true);
  const [personalsNotesSelected, setPersonalsNotesSelected] = useState(false);

  function handleOriginalsNotesSelected() {
    setOriginalsNotesSelected(true);
    setPersonalsNotesSelected(false);
  }

  function handlePersonalsNotesSelected() {
    setOriginalsNotesSelected(false);
    setPersonalsNotesSelected(true);
  }

  return (
    <>
      <Button
        variant="unstyled"
        px={0}
        py={0}
        onPress={() => setShowModalBookNotes(true)}
      >
        <HStack
          alignItems="center"
          w="59px"
          h="21px"
          borderBottomWidth={1}
          borderBottomColor="gray.300"
        >
          <Image
            source={EditIconLightImage}
            w="16px"
            h="16px"
            alt="Edit icon light"
            resizeMethod="resize"
            resizeMode="contain"
          />
          <Text
            fontSize="16px"
            fontFamily="inriaRegular"
            color="gray.300"
            ml="2px"
          >
            Notas
          </Text>
        </HStack>
      </Button>
      <Modal
        isOpen={showModalBookNotes}
        onClose={() => setShowModalBookNotes(false)}
      >
        <Modal.Content
          {...rest}
          w="366px"
          h="437px"
          rounded="10px"
          bg="white"
        >
          <VStack
            px="5px"
            py="12px"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <HStack
              w="100%"
              alignItems="center"
              justifyContent="space-between"
              pl="15px"
              pr="13px"
            >
              <HStack
                alignItems="center"
                w="59px"
                h="21px"
                borderBottomWidth={1}
                borderBottomColor="gray.300"
              >
                <Image
                  source={EditIconLightImage}
                  w="16px"
                  h="16px"
                  alt="Edit icon light"
                  resizeMethod="resize"
                  resizeMode="contain"
                />
                <Text
                  fontSize="16px"
                  fontFamily="inriaRegular"
                  color="gray.300"
                  ml="2px"
                >
                  Notas
                </Text>
              </HStack>
              <HStack>
                <Button
                  variant="unstyled"
                  px={0}
                  py={0}
                  w="77px"
                  h="23px"
                  borderWidth={originalsNotesSelected ? 2 : 0}
                  borderColor="gray.100"
                  borderRadius="5px"
                  borderBottomRadius="0px"
                  borderBottomWidth={0}
                  onPress={handleOriginalsNotesSelected}
                >
                  <Text
                    color="gray.300"
                    fontFamily="inriaRegular"
                    fontSize="16px"
                    mt={originalsNotesSelected ? "-2px" : "0px"}
                  >
                    Originais
                  </Text>
                </Button>
                <Button
                  variant="unstyled"
                  px={0}
                  py={0}
                  w="77px"
                  h="23px"
                  borderWidth={personalsNotesSelected ? 2 : 0}
                  borderColor="gray.100"
                  borderRadius="5px"
                  borderBottomRadius="0px"
                  borderBottomWidth={0}
                  onPress={handlePersonalsNotesSelected}
                >
                  <Text
                    color="gray.300"
                    fontFamily="inriaRegular"
                    fontSize="16px"
                    mt={personalsNotesSelected ? "-2px" : "0px"}
                  >
                    Próprias
                  </Text>
                </Button>
              </HStack>
            </HStack>
            <Divider
              bg="gray.100"
              h="3px"
              mt="10px"
              w="347px"
              ml="auto"
            />
            <ScrollView
              maxH="325px"
              h="325px"
            >
              <VStack
                w="346px"
                ml="9px"
                mt="10px"
              >
                {
                  personalsNotesSelected && (
                    <>
                      <PageNoteDetails
                        page="XX"
                        notes={notes}
                        isPersonalNote
                      />
                    </>
                  )
                }
                {
                  originalsNotesSelected && (
                    <>
                      <PageNoteDetails
                        page="43"
                        notes={notes}
                      />
                      <PageNoteDetails
                        page="44"
                        notes={notes}
                        mt="28px"
                      />
                    </>
                  )
                }
              </VStack>
            </ScrollView>
            <Divider
              bg="gray.100"
              h="3px"
              mt="15px"
              w="347px"
              mb="11px"
            />
            <Button
              variant="link"
              ml="30px"
              px={0}
              py={0}
              onPress={() => setShowModalBookNotes(false)}
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