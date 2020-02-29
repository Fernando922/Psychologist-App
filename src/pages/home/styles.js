import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { WHITE } from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${WHITE};
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
