import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader/index';

import styles from './styles.ts'

function Favorites() {
  return (
    <View style={styles.container}>
     <PageHeaderr title="Meus proffys favoritos" />
    </View>
  );
}

export default Favorites;