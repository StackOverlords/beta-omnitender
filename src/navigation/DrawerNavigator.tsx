import React, { useMemo, useCallback } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from '../components/common/sidebar';
import useResponsiveLayout from '../hooks/use-responsive-layout';
import useDrawerEnabled from '../hooks/use-drawer-enabled';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerRoute, drawerRoutes } from './drawerRoutes/drawerRoutes';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  const { isTablet } = useResponsiveLayout();
  const swipeEnabled = useDrawerEnabled();
 
  const allRoutesToRegister = useMemo(() => {
    const routes: DrawerRoute[] = [];
    drawerRoutes.forEach(route => {
      if (route.component) {
        routes.push(route);
      }
      if (route.subRoutes) {
        route.subRoutes.forEach(subRoute => {
          if (subRoute.component) {
            routes.push(subRoute);
          }
        });
      }
    });
    return routes;
  }, []);
  const renderDrawerContent = useCallback(
    (props: any) => <Sidebar {...props} />,
    [],
  );

  return (
    <Drawer.Navigator
      // initialRouteName={drawerRoutes[0].name}
      screenOptions={{
        drawerType: isTablet ? 'front' : 'back',
        drawerStyle: {
          width: isTablet ? 280 : '90%',
        },
        swipeEdgeWidth: 200,
        swipeEnabled: swipeEnabled
      }}
      drawerContent={renderDrawerContent}
    >
      {allRoutesToRegister.map((route: DrawerRoute) => (
        <Drawer.Screen
          key={route.id}
          name={route.route}
          component={route.component!}
          options={route.options}
        />
      ))}
    </Drawer.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
