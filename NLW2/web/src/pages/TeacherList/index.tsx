import React from 'react';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem/index';
import Input from '../../components/Input/index';
import Select from '../../components/Select/index';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os professores disponíveis.">
        <form id="search-teachers">
           <Select 
            name="subject"
            label="Matéria"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Física', label: 'Física'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Português', label: 'Português'},
              {value: 'História', label: 'História'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'Literatura', label: 'Literatura'},
              {value: 'Literatura', label: 'Literatura'},
              {value: 'Inglês', label: 'Inglês'},
              {value: 'Educação física', label: 'Educação física'},
              {value: 'Química', label: 'Química'},
            ]}
          />
           <Select 
            name="week_day"
            label="Dia da semana"
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6', label: 'Sábado'}
            ]}
          />
          <Input type="time" name="time" label="Hora" />          
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;