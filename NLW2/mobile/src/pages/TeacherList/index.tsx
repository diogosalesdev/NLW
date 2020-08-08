import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem/index';

import styles from './styles.ts';

function TeacherList() {
  return (
    <View style={styles.container}>
     <PageHeader title="Proffys disponíveis" />
     <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}} >
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
     </ScrollView>
    </View>
  );
}

export default TeacherList;