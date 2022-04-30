import React, {useState} from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1} from '../../../Assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const InProgress = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <ItemListFood
        image={FoodDummy1}
        name="Avosalado"
        totalItems="3"
        type="Orders-InProgress"
        price="18.000.000"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        image={FoodDummy1}
        name="Avosalado"
        totalItems="3"
        type="Orders-InProgress"
        price="18.000.000"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        image={FoodDummy1}
        name="Avosalado"
        totalItems="3"
        type="Orders-InProgress"
        price="18.000.000"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

const PostOrders = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <ItemListFood
        image={FoodDummy1}
        name="Avosalado"
        totalItems="3"
        type="Orders-PostOrders"
        price="• IDR 18.000.000"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        image={FoodDummy1}
        name="Avosalado"
        totalItems="3"
        type="Orders-PostOrders"
        price="• IDR 18.000.000"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        image={FoodDummy1}
        name="Avosalado"
        totalItems="3"
        type="Orders-PostOrders"
        price="• IDR 18.000.000"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PostOrders,
});

// librabry TOP TAB SLIDER === react-native-tab-view
const renderTabBar = props => {
  console.log('ini props rendertabbar', JSON.stringify(props, null, 2));
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.borderTopBar}
      tabStyle={styles.justifyTopBar}
      renderLabel={({route, focused}) => (
        <Text style={styles.title(focused)}>{route.title}</Text>
      )}
    />
  );
};

export default function OrderTopTabSlider() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'InProgress'},
    {key: '2', title: 'PostOrders'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      style={styles.containerTabView}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: 0.4,
  },
  borderTopBar: {
    backgroundColor: '#ffffff',
    alignItem: 'center',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  justifyTopBar: {
    width: 'auto',
    marginHorizontal: 14,
  },
  title: focused => ({
    color: focused ? '#020202' : '#8D92A3',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  }),
  containerTabView: {
    backgroundColor: '#ffffff',
  },
});
