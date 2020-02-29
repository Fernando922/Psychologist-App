import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerInitial,
  FirstLetter,
  Name,
  Profission,
  Age,
  Content,
} from './styles';

export default function CardPacient({ name, profission, age }) {
  return (
    <Container>
      <ContainerInitial>
        <FirstLetter>{name[0]}</FirstLetter>
      </ContainerInitial>
      <Content>
        <Name>{name}</Name>
        <Profission>{profission}</Profission>
        <Age>{age}</Age>
      </Content>
    </Container>
  );
}

CardPacient.propTypes = {
  name: PropTypes.string.isRequired,
  profission: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};
