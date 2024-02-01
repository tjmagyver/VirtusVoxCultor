import { IInputProps, Input as NativeBaseInput } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput 
      {...rest}
      bg="gray.100"
      rounded="5px"
      h="fit-content"
      px={4}
      fontSize={RFValue(16)}
      fontFamily="body"
      borderWidth={0}
      _focus={{
        bg: 'gray.100'
      }}
    />
  )
}