import React from 'react';
import { createBottomTabNavigator } from '@react-navogation/bottom-tabs';
import TeacherList from '../pages/TeacherList/index';
import Favorites from '../pages/Favorites/index';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator>
      <Screen name="TeahcerList" component={TeacherList} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}

export default StudyTabs;