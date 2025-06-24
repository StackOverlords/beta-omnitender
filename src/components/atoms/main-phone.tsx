import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import DeliveryMapScreen from '../../modules/delivery/screens/DeliveryMapScreen';
import { HomeDrawerParamList } from '../../modules/delivery/screens/DeliveryMapMainScreen';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'DeliveryMapScreen' | 'DeliveryListScreen'>,
  NativeStackScreenProps<any>
>;

export default function MainScreenForPhone({ navigation }: Props) {
  return <DeliveryMapScreen navigation={navigation} />;
}
