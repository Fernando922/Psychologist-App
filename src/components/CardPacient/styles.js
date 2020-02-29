import styled from 'styled-components/native';
import {
  WHITE,
  PRIMARY,
  VERYLIGHTGRAY,
  DARKGRAYISHBLUE,
} from '../../utils/colors';

export const Container = styled.View`
  height: 100px;
  width: 100%;
  background-color: ${WHITE};
  padding: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${VERYLIGHTGRAY};
`;

export const ContainerInitial = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: ${PRIMARY};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const FirstLetter = styled.Text`
  color: ${WHITE};
  font-size: 24px;
`;

export const Name = styled.Text`
  color: ${PRIMARY};
`;

export const Profission = styled.Text`
  color: ${DARKGRAYISHBLUE};
`;
export const Age = styled.Text`
  color: ${PRIMARY};
`;
