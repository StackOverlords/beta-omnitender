import React from 'react';
import Container from '../../../components/atoms/container'; 
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer' 
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ResponsiveLayout from '../../../components/atoms/responsive-layout';
import MainScreenForPhone from '../../../components/atoms/main-phone';

export type HomeDrawerParamList = {
  DeliveryMapScreen: {},
  DeliveryListScreen:{}
}

// ❗❗❗Tengo pendiente el definir el tipo de RootStackParamList coin todas las rutas que vayamos a usar aun no se sabe cuantas
// export type RootStackParamList = { 
//   Home: NavigatorScreenParams<HomeDrawerParamList>
//   Detail: undefined,
// }


type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'DeliveryMapScreen' | 'DeliveryListScreen'>,
  NativeStackScreenProps<any>
>

const DeliveryMainMapScreen = (props:Props) => { 
  return ( 
      <ResponsiveLayout 
       renderOnPhone={()=> <MainScreenForPhone {...props} />}
      />
  );
};

export default DeliveryMainMapScreen;
