import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './pages/home';

const HomeStack = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const Routes = createAppContainer(HomeStack);

export default Routes;
