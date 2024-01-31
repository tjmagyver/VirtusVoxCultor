import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@routes/app.routes";
import {
  Button as ButtonNativeBase, CheckIcon,
  CloseIcon,
  HStack,
  IconButton, Input, ScrollView,
  Select,
  Switch,
  Text,
  TextArea,
  VStack
} from "native-base";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

type UserOptionsProps = NativeStackScreenProps<AppStackParamList, 'UserOptions'>

export function UserOptions({ navigation }: UserOptionsProps) {
  const [toggleFootnoteSound, setToggleFootnoteSound] = useState('Desativado');
  const [isTypingSupport, setIsTypingSupport] = useState(false);
  const [supportText, setSupportText] = useState('');

  function handleToggleSupportButtonClick() {
    setIsTypingSupport(!isTypingSupport);
  }

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="flex-start"
      bg="background"
    >
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <VStack
          mt="75px"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontFamily="inriaBold"
            fontSize={RFValue(24)}
            color="red.900"
            textAlign="center"
          >
            OPÇÕES DO USUÁRIO
          </Text>
          <VStack mt="47px" w="100%">
            <HStack alignItems="center">
              <Switch
                size="lg"
                offTrackColor="gray.350"
                onTrackColor="gray.100"
                offThumbColor="gray.100"
                onThumbColor="teal.300"
              />
              <Text
                fontFamily="inriaRegular"
                color="gray.350"
                fontSize={RFValue(20)}
                ml="5px"
              >
                Passar automático
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Switch
                size="lg"
                offTrackColor="gray.350"
                onTrackColor="gray.100"
                offThumbColor="gray.100"
                onThumbColor="teal.300"
              />
              <Text
                fontFamily="inriaRegular"
                color="gray.350"
                fontSize={RFValue(20)}
                ml="5px"
              >
                Continuar de onde parou
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Switch
                size="lg"
                offTrackColor="gray.350"
                onTrackColor="gray.100"
                offThumbColor="gray.100"
                onThumbColor="teal.300"
              />
              <Text
                fontFamily="inriaRegular"
                color="gray.350"
                fontSize={RFValue(20)}
                ml="5px"
              >
                Desligar a tela aos {' '}
                <Input
                  bg="white"
                  color="gray.900"
                  fontSize={RFValue(20)}
                  fontFamily="body"
                  w="40px"
                  h="30px"
                  px={2}
                  py={0}
                  borderWidth={0}
                  _focus={{
                    bg: 'white'
                  }}
                  defaultValue='30'
                /> {' '}
                seg
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Switch
                size="lg"
                offTrackColor="gray.350"
                onTrackColor="gray.100"
                offThumbColor="gray.100"
                onThumbColor="teal.300"
              />
              <Text
                fontFamily="inriaRegular"
                color="gray.350"
                fontSize={RFValue(20)}
                ml="5px"
              >
                Desativar notificações
              </Text>
            </HStack>
            <HStack alignItems="flex-start">
              <Switch
                size="lg"
                offTrackColor="gray.350"
                onTrackColor="gray.100"
                offThumbColor="gray.100"
                onThumbColor="teal.300"
              />
              <Text
                fontFamily="inriaRegular"
                color="gray.350"
                fontSize={RFValue(20)}
                ml="5px"
                lineHeight="26px"
                w={RFValue(200)}
              >
                Permitir sobreposição de outros aplicativos
              </Text>
            </HStack>
            <HStack alignItems="center" mt="27px" opacity={0.4}>
              <Text
                fontFamily="inriaRegular"
                color="gray.350"
                fontSize={RFValue(20)}
                ml="5px"
                lineHeight="26px"
                w="180px"
              >
                Sinal sonoro em notas de rodapé
              </Text>
              <Select
                selectedValue={toggleFootnoteSound}
                minWidth="154px"
                accessibilityLabel="Escolha uma opção"
                placeholder="Selecione"
                color="gray.350"
                bg="white"
                isDisabled
                opacity={1}
                fontSize={RFValue(14)}
                fontStyle="italic"
                borderWidth={0}
                _selectedItem={{
                  bg: "gray.100",
                  endIcon: <CheckIcon size="5" color="teal.300" />
                }}
                mt={1}
                onValueChange={
                  itemValue => setToggleFootnoteSound(itemValue)
                }
              >
                <Select.Item label="Ativado" value="Ativado" />
                <Select.Item label="Desativado" value="Desativado" />
              </Select>
            </HStack>
          </VStack>
          <Text
            fontFamily="inriaLight"
            fontSize={RFValue(24)}
            color="gray.350"
            textAlign="center"
            mt="75px"
          >
            Precisa de ajuda ?
          </Text>
          {
            isTypingSupport ?
              <VStack
                mt="8px"
                alignItems="flex-end"
              >
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
                  onPress={handleToggleSupportButtonClick}
                  _pressed={{
                    bg: "red.900",
                    opacity: 0.9
                  }}
                />
                <TextArea
                  autoCompleteType={'off'}
                  shadow={4}
                  w="298px"
                  h="104px"
                  placeholder="Conte-nos seu problema"
                  bg="white"
                  placeholderTextColor="gray.100"
                  color="gray.900"
                  fontSize={RFValue(14)}
                  value={supportText}
                  onChangeText={text => setSupportText(text)}
                  rounded="10px"
                  _focus={{
                    borderWidth: "0px",
                    bg: "white"
                  }}
                />
                <Button
                  mt={2}
                  w="298px"
                  title="Enviar"
                  onPress={handleToggleSupportButtonClick}
                />
              </VStack>
              :
              <Button
                mt={6}
                w="268px"
                h="52px"
                title="Suporte"
                onPress={handleToggleSupportButtonClick}
              />
          }
          <ButtonNativeBase
            variant="link"
            mt="40px"
            mb="40px"
            ml="-260px"
            onPress={handleGoBack}
          >
            <Text
              fontFamily="inriaRegular"
              fontSize={RFValue(15)}
              color="gray.900"
            >
              {'< Voltar'}
            </Text>
          </ButtonNativeBase>
        </VStack>
      </ScrollView>
    </VStack>
  )
}