import React from 'react';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem/index';
import Input from '../../components/Input/index';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os professores disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
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