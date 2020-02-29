import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { WHITE } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export const Title = styled.Text`
  color: ${WHITE};
  font-size: 24px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity``;
