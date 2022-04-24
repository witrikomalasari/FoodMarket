import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../../Assets';
import ItemListFood from '../ItemListFood';

const NewTaste = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ItemListFood
          image={FoodDummy1}
          name="Soup Bumil"
          price="IDR 289.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          name="Chicken"
          price="IDR 4.509.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          image={FoodDummy3}
          name="Shrimp"
          price="IDR 999.000"
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ItemListFood
        image={FoodDummy1}
        name="Soup Bumil"
        price="IDR 289.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy4}
        name="Chicken"
        price="IDR 4.509.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy2}
        name="Shrimp"
        price="IDR 999.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy3}
        name="Coffee"
        price="IDR 200.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ItemListFood
        image={FoodDummy1}
        name="Soup Bumil"
        price="IDR 289.000 "
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy3}
        name="Chicken"
        price="IDR 4.509.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy5}
        name="Shrimp"
        price="IDR 999.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy2}
        name="Coffee"
        price="IDR 200.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const renderTabBar = props => (
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

const HomeTopTabSlider = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, fontSize: layout.fontScale}}
      renderTabBar={renderTabBar}
      style={styles.containerTabView}
    />
  );
};

export default HomeTopTabSlider;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: 0.4,
  },
  borderTopBar: {
    backgroundColor: '#ffffff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  justifyTopBar: {
    width: 'auto',
    marginHorizontal: 10,
  },
  title: focused => ({
    color: focused ? '#020202' : '#8D92A3',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  }),
  containerTabView: {backgroundColor: '#ffffff'},
});
