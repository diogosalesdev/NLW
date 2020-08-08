import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-hundler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import './styles.ts'

function TeacherItem() {
  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image 
          style={syles.avatar}
          source={{uri: 'http://github.com/diogosalesdev.png'}}
        />
        <View style={styles.profileInfo} >
          <Text style={styles.name} >Dr. Jekyll</Text>
          <Text style={styles.subject} >Física</Text>
        </View>
      </View>
      <Text style={styles.bio} >
        fhjsdhkfjksdfjdnf jhskdhjfgkdjsfg jhfdhafgçjdfg ljhjfkg jhkjfhnsd jndf
        {'\n'}{'\n'}
        jkflvgdfç knj mjnh mk lknvçklvnaç çlvknsdçvkç mlkmçmkmçkmçkmç kmkmçkmç
      </Text>
      <View style={syles.footer} >
        <Text style={styles.price} >
          Preço/Hora {'   '}
          <Text style={styles.priceValue} >R$ 80,00</Text>
        </Text>
        <View style={styles.buttonsContainer} >
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unFavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText} >
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;