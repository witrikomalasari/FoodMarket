import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../Assets';
import {CardFood, Gap, HomeProfile, HomeTopTabSlider} from '../../Component';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapCard}>
              <Gap width={24} />
              <CardFood image={FoodDummy1} />
              <CardFood image={FoodDummy2} />
              <CardFood image={FoodDummy3} />
              <CardFood image={FoodDummy4} />
              <CardFood image={FoodDummy5} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.topTabSlider}>
          <HomeTopTabSlider />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  wrapCard: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  topTabSlider: {
    flex: 1,
  },
});
