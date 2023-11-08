import { IInputProps, Input as NativeBaseInput } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput 
      bg="gray.100"
      rounded="5px"
      h={10}
      px={4}
      {...rest}
    />
  )
}