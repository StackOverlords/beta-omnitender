import DeliveryScreen from '../../modules/delivery/screens/DeliveryMapScreen';
import DeliveryMapScreen from '../../modules/delivery/screens/DeliveryMapScreen';

import DashboardScreen from '../../modules/dashboard/screens/DashboardScreen';
import CompaniesScreen from '../../modules/companies/screens/CompaniesScreen';
import DeliveryMainMapScreen from '../../modules/delivery/screens/DeliveryMapMainScreen';


type RouteItem = {
    id: string;
    route: string;
    name: string;
    component?: React.ComponentType<any>;
    icon?: string;
    pl: "sm"| "xl" | "lg" | "md" | "xxl";
    options?: {
        headerShown?: boolean;
        [key: string]: any;
    };
    isAccordionHeader?: boolean;
    step: number;
};
export interface DrawerRoute extends RouteItem {
    subRoutes?: DrawerRoute[];
}

export const drawerRoutes: DrawerRoute[] = [
    {
        id: 'delivery',
        route: 'Delivery',
        name: 'Delivery',
        // component: DeliveryMainMapScreen,
        icon: 'truck-outline',
        step: 1,
        pl: 'sm',
        options: {
            headerShown: false
        },
        isAccordionHeader: true,
        subRoutes: [
            {
                id: 'delivery-map',
                route: 'DeliveryMap',
                name: 'Delivery Map',
                // component: DeliveryMapScreen,
                // icon: 'map',
                pl: "lg",
                isAccordionHeader: true,
                options: {
                    headerShown: false
                },
                step: 2,
                subRoutes: [
                    {
                        id: 'delivery-map',
                        route: 'DeliveryMap',
                        name: 'Deliverys Map',
                        component: DeliveryMainMapScreen,
                        icon: 'map',
                        pl: 'xxl',
                        isAccordionHeader: false,
                        options: {
                            headerShown: false
                        },
                        step: 3
                    }
                ]
            },
            {
                id: 'delivery-map-list',
                route: 'DeliveryMapList',
                name: 'Delivery Map List',
                component: DeliveryMapScreen,
                icon: 'file',
                pl: "xl",
                isAccordionHeader: false,
                options: {
                    headerShown: false
                },
                step: 2
            }
        ]
    },
    {
        id: 'dashboard',
        route: 'Dashboard',
        name: 'Dashboard',
        // component: DashboardScreen,
        pl: 'sm',
        options: {
            headerShown: false
        },
        step: 1,
        isAccordionHeader: true,
        subRoutes: [
            {
                id: 'dashboard-screen',
                route: 'Dashboard view',
                name: 'Dashboard View',
                component: DashboardScreen,
                pl: 'xl',
                options: {
                    headerShown: false
                },
                step: 2,
                isAccordionHeader: false,
                icon: 'grid'
            }
        ]
    },
    {
        id: 'companies',
        route: 'Companies',
        name: 'Companies',
        component: CompaniesScreen,
        pl: 'sm',
        options: {
            headerShown: false
        },
        step: 2
    }
];