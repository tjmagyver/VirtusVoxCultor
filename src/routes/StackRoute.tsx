import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ForgotPassword } from "@screens/ForgotPassword"
import { InitialSignIn } from "@screens/InitialSignIn"
import { Plans } from "@screens/Plans"
import { SignIn } from "@screens/SignIn"
import { SignUp } from "@screens/SignUp"

export type RootStackParamList = {
  InitialSignIn: undefined
  SignIn: undefined
  SignUp: undefined
  ForgotPassword: undefined
  Plans: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackRoute() {
  return (
    <Stack.Navigator 
      initialRouteName="InitialSignIn" 
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InitialSignIn" component={InitialSignIn} 
    />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Plans" component={Plans} />
    </Stack.Navigator>
  )
}