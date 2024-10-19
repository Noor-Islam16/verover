import { View, Text } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from './src/pages/Onboarding'
import Login from './src/pages/Login'
import Registration from './src/pages/Registration'
import NumberVerify from './src/pages/NumberVerify'
import PhoneVerified from './src/pages/PhoneVerified'
import Personalinfo from './src/pages/PersonalInfo'
import PhoneNumberVerified from './src/pages/PhoneNumberVerified'
import ForgetPassword from './src/pages/ForgetPassword'
import EmailVerify from './src/pages/EmailVerify'
import EmailVerifiedSuccess from './src/pages/EmailVerifiedSuccess'
import EmailSentBack from './src/pages/EmailSentBack'

const App = () => {
  // return < Onboarding/>
  // return < Login/>
  // return < Registration/>
  // return < Register/>
  // return < NumberVerify/>
  // return < PhoneVerified />
  // return < Personalinfo/>
  // return < PhoneNumberVerified/>
  // return < ForgetPassword/>
  // return < EmailVerify/>
// return < EmailSentBack />
  return< EmailVerifiedSuccess/>
}

// export type RootStackParamList = {
//   Home: undefined;
//   Login: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();
// function App(): React.JSX.Element {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={Onboarding} />
//         {/* <Stack.Screen name="Login" component={Login} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
export default App