import React from 'react';
import Container from '../../../components/atoms/container';
import Text from '../../../components/atoms/text';

type DeliveryMapScreenProps = {
  navigation: any;
};

const DeliveryMapScreen = ({ navigation }: DeliveryMapScreenProps) => {
  return (
    <Container>
      <Text color="$foreground" fontFamily="Satoshi-Medium" fontSize={24}>
        Delivery Map Screen
      </Text>
      <Text>This is where the delivery map will be displayed.</Text>
    </Container>
  );
};

export default DeliveryMapScreen;
