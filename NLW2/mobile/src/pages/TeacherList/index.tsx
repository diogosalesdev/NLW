import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader/index';

import styles from './styles.ts';

function TeacherList() {
  return (
    <View style={styles.container}>
     <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;