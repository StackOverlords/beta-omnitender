import { createBox } from '@shopify/restyle';
import React, { useCallback, useState } from 'react';
import { FlatList, FlatListProps, SafeAreaView } from 'react-native';
import { Theme } from '../../themes';
import Text from '../atoms/text'; 
import { TouchableOpacity } from '../atoms/touchable';
import {
  DrawerRoute,
  drawerRoutes,
} from '../../navigation/drawerRoutes/drawerRoutes';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AnimatedBox from '../atoms/animated-box';
import {
  FadeIn, 
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import FeatherIcon from '../atoms/icon';
import OmnitenderLogo from '../atoms/omnitender-logo';

const StyledFlatList = createBox<Theme, FlatListProps<any>>(FlatList);

const Sidebar: React.FC<any> = ({ navigation }: any) => {
  const [expandedAcordion, setExpandedAccordion] = useState<string[]>([]);

  // Valores compartidos para animaciones
  const headerScale = useSharedValue(1);
  const sidebarOpacity = useSharedValue(0);

  React.useEffect(() => {
    sidebarOpacity.value = withTiming(1, { duration: 500 });
  }, []);

  const toggleAccordion = useCallback((id: string) => {
    setExpandedAccordion((prev: any) =>
      prev.includes(id)
        ? prev.filter((item: any) => item !== id)
        : [...prev, id],
    );
  }, []);

  // Estilo animado para el header
  const animatedHeaderStyle = useAnimatedStyle(() => ({
    transform: [{ scale: headerScale.value }],
  }));

  // Estilo animado para el sidebar principal
  const animatedSidebarStyle = useAnimatedStyle(() => ({
    opacity: sidebarOpacity.value,
  }));
 
  const renderDrawerItem = useCallback(
    (item: DrawerRoute, isSubRoute: boolean = false) => {
      const isExpanded = expandedAcordion?.includes(item.id);
      const paddingLeft = item.pl ? item.pl : 'md';

      if (item.isAccordionHeader && item.subRoutes) {
        return (
          <AnimatedBox key={item.id}
          >
            <TouchableOpacity
              onPress={() => toggleAccordion(item.id)}
              p="sm"
              pl={paddingLeft}
              flexDirection="row" 
              justifyContent="space-between"
            >
              <AnimatedBox
                flexDirection="row"
                alignItems="center"
                gap="md"
                entering={FadeIn.delay(200)}
              >
                <FeatherIcon
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={15}
              />
              <Text color="$sidebarForeground" fontWeight="bold">
                  {item.name}
                </Text>
                {item.icon && item.step >= 2 ? (
                  <FeatherIcon name={item.icon} size={15} />
                ) : null}
                
              </AnimatedBox>
              
            </TouchableOpacity>
            {isExpanded && (
              <AnimatedBox>
                {item.subRoutes.map(subItem => renderDrawerItem(subItem, true))}
              </AnimatedBox>
            )}
          </AnimatedBox>
        );

        // If the item has subRoutes, we render it as an accordion header
      } else if (item.component) {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate(item.route);
            }}
            px="md"
            pl={paddingLeft}
          >
            <AnimatedBox
              alignItems="center"
              justifyContent="flex-start"
              gap="sm"
              flexDirection="row"
              entering={FadeIn.delay(200)}
            >
              {item.icon ? (
                <FeatherIcon name={item.icon} size={15} />
              ) : null}
              <Text color="$sidebarForeground">{item.name}</Text>
            </AnimatedBox>
          </TouchableOpacity>
        );
      }
      return null;
    },
    [navigation, expandedAcordion, toggleAccordion],
  );

  return (
    <AnimatedBox flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <AnimatedBox
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          style={[animatedHeaderStyle, animatedSidebarStyle]}
          py="sm"  
          px="md"
          borderBottomColor="$sidebarSeparator" 
          borderBottomWidth={1}
        >
          <OmnitenderLogo width={130} height={38} color="$sidebarForeground" />
          <IonIcons name="settings-outline" size={24} color="gray"/>
        </AnimatedBox>
      </SafeAreaView>
      <StyledFlatList 
        pl="sm"
        ListHeaderComponent={() => (
          <AnimatedBox p="sm" pl="xl" alignItems="flex-start">
            <Text color="$sidebarForeground" fontWeight="bold">
              Menu
            </Text>
          </AnimatedBox>
        )}
        data={drawerRoutes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => renderDrawerItem(item)}
      />
    </AnimatedBox>
  );
};

export default Sidebar;
