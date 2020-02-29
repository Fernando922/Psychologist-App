import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Button, styles } from './styles';
import { WHITE, PRIMARY, SECONDARY } from '../../utils/colors';
import Toolbar from '../../components/toolbar';
import CardPacient from '../../components/CardPacient';

export default function Home() {
  function openDrawer() {}

  return (
    <Container>
      <Toolbar leftIcon="menu" leftAction={openDrawer} title="Home" />

      <CardPacient name="Marcos Vinícius" profission="Estudante" age="19" />
      <CardPacient name="Vanessa Cardoso" profission="Cantora" age="19" />
      <CardPacient name="Joaquim Silveira" profission="Pintor" age="19" />
      <CardPacient name="Clóvis Basilio" profission="Ator" age="19" />

      <Button>
        <LinearGradient colors={[PRIMARY, SECONDARY]} style={styles.gradient}>
          <Icon name="plus" color={WHITE} size={24} />
        </LinearGradient>
      </Button>
    </Container>
  );
}
