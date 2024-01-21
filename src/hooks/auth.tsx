import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

// import * as Google from 'expo-google-app-auth'
// import AsyncStorage from '@react-native-async-storage/async-storage

// import * as AuthSession from 'expo-auth-session'
// import * as AppleAuthentication from 'expo-apple-authentication';

import AsyncStorage from "@react-native-async-storage/async-storage";
import reactotron from "reactotron-react-native";
import { api } from "./../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  isSigned: boolean;
  token: string;
  createdAt: Date,
  updatedAt: Date,
}

interface IAuthContextData {
  user: User;
  // signInWithGoogle(): Promise<void>
  // signInWithApple(): Promise<void>
  signInWithEmailAndPassword(email: string, password: string): Promise<void>
  signOut(): Promise<void>
  userStorageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [userStorageLoading, setUserStorageLoading] = useState(true)

  // async function signInWithGoogle() {
  //   try {
  //     const RESPONSE_TYPE = "token"
  //     const SCOPE = encodeURI("profile email")

  //     const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

  //     const { type, params } = await AuthSession
  //     .startAsync({ authUrl }) as AuthorizationResponse;

  //     if(type === 'success') {
  //       const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
  //       const userInfo = await response.json()

  //       setUser({
  //         id: userInfo.id,
  //         email: userInfo.email,
  //         name: userInfo.given_name,
  //         photo: userInfo.picture
  //       })
  //     }
  //   } catch (error) {
  //     throw new Error
  //   }

  // try {
  // const result = await Google.logInAsync({
  //   iosClientId: '',
  //   androidClientId: '',
  //   scopes: ['profile', 'email']
  // })

  // if(result.type === 'success'){
  //   const userLogged = {
  //     id: String(result.user.id),
  //     email: result.user.email!,
  //     name: result.user.name!,
  //     photo: result.user.photoUrl!
  //   }
  // }

  // setUser(userLogged)
  // await AsyncStore.setItem('@gofinances:user', JSON.stringify(userLogged))
  // } catch (error) {

  // }
  // }

  // async function signInWithApple() {
  //   try {
  //     const credential = await AppleAuthentication.signInAsync({
  //       requestedScopes: [
  //         AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
  //         AppleAuthentication.AppleAuthenticationScope.EMAIL,
  //       ]
  //     })

  //     if(credential) {
  //       const name = credential.fullName!.givenName!
  //       const photo = `https://ui-avatars.com/api/?name=${name}&length=1`

  //       const userLogged = {
  //         id: String(credential.user),
  //         email: credential.email!,
  //         name,
  //         photo,
  //       }

  //       setUser(userLogged)
  //       await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
  //     }
  //   } catch (error) {
  //     throw new Error
  //   }
  // }

  async function signInWithEmailAndPassword(email: string, password: string) {

    const credentials = {
      email,
      password
    }
    try {
      const userCredentials: any = await api.post('/sessions', credentials)

      const token = userCredentials?.data?.access_token

      const response = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      try {
        const { data } = await api.get(`/accounts/${response.data.sub}`)

        const userLogged: User = {
          id: data.id,
          email: data.email,
          name: data.name,
          username: data.username,
          isSigned: data.isSigned,
          token: token,
          createdAt: new Date(data.createdAt),
          updatedAt: new Date(data.updatedAt)
        }
        reactotron.log(userLogged)
        setUser(userLogged);
        await AsyncStorage.setItem(`${process.env.ASYNC_STORAGE_KEY}`, JSON.stringify(userLogged));
      } catch (error) {
        throw new Error("Erro na autenticação por e-mail e senha");
      }
    } catch (error) {
      reactotron.log(error)
      throw new Error("Erro na autenticação por e-mail e senha");
    }
  }

  async function signOut() {
    setUser({} as User)
    await AsyncStorage.removeItem(`${process.env.ASYNC_STORAGE_KEY}`)
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStoraged = await AsyncStorage.getItem(`${process.env.ASYNC_STORAGE_KEY}`)

      if (userStoraged) {
        const userLogged = JSON.parse(userStoraged) as User
        setUser(userLogged)
      }

      setUserStorageLoading(false)
    }

    loadUserStorageData()
  }, [user])

  return (
    <AuthContext.Provider value={{
      user,
      // signInWithGoogle,
      // signInWithApple,
      signInWithEmailAndPassword,
      signOut,
      userStorageLoading
    }}>
      {children}
    </AuthContext.Provider >
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth };

