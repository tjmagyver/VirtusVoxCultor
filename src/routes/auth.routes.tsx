import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ForgotPassword } from "@screens/ForgotPassword"
import { InitialSignIn } from "@screens/InitialSignIn"
import { SignIn } from "@screens/SignIn"
import { SignUp } from "@screens/SignUp"

export type AuthStackParamList = {
  InitialSignIn: undefined
  SignIn: undefined
  SignUp: undefined
  ForgotPassword: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>()

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="InitialSignIn"
      screenOptions={{ headerShown: false }}>
      <Screen name="InitialSignIn" component={InitialSignIn} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  )
}