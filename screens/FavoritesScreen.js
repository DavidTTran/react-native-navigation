import { View, Text, StyleSheet } from 'react-native';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));
  // const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));


  if (favoriteMeals.length === 0) {
    return(
      <View style={styles.rootContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>You have no favorited meals yet. Start adding some!</Text>
        </View>
      </View>
    )
  } else {
    return <MealsList items={favoriteMeals} />
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    width: '80%'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})
