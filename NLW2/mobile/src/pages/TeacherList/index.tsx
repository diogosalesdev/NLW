import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader/index';
import TeacherItem, { Teacher } from '../../components/TeacherItem/index';

import styles from './styles.ts';
import { RectButton } from 'react-native-gesture-hundler';
import api from '../../services/api';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  async function handleFiltersSubmit() {
    const res = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    setIsFiltersVisible(false);
    setTeachers(res.data);
  }

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible} >
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
      { isFiltersVisible && (
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            value={subject}
            onChangeText={text => setSubject(text)}
            placeholder="Qual a matéria?"
            placeholderTextColor="#c1bccc"
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                style={styles.input}
                value={week_day}
                onChangeText={text => setWeekDay(text)}
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
              />
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                value={time}
                onChangeText={text => setTime(text)}
                placeholder="Qual o horário?"
                placeholderTextColor="#c1bccc"
              />
            </View>
          </View>
          <RectButton onPress={handleFiltersSubmit} style={styles.submitButton} >
            <Text style={styles.submitButtonText} >Filtrar</Text>
          </RectButton>
        </View>
      )}
      </PageHeader>
      <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}} >
       {teachers.map(teacher: Teacher => <TeacherItem key={teacher.id} teacher={teacher} />)}
       
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