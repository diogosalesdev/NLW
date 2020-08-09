import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-hundler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import './styles.ts'

export interface Teacher {  
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image 
          style={syles.avatar}
          source={{uri: teacher.avatar}}
        />
        <View style={styles.profileInfo} >
          <Text style={styles.name} >{teacher.name}</Text>
          <Text style={styles.subject} >{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio} >{teacher.bio} </Text>
      <View style={syles.footer} >
        <Text style={styles.price} >
          Preço/Hora {'   '}
          <Text style={styles.priceValue} >{teacher.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer} >
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unFavoriteIcon} />
          </RectButton>
          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
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