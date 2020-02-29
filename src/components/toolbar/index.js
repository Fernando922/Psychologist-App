import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { styles, Title, Button } from './styles';
import { PRIMARY, SECONDARY, WHITE } from '../../utils/colors';

export default function Toolbar({
  leftIcon,
  leftAction,
  title,
  rightIcon,
  rightAction,
}) {
  return (
    <LinearGradient style={styles.container} colors={[PRIMARY, SECONDARY]}>
      {leftIcon && (
        <Button>
          <Icon name={leftIcon} onPress={leftAction} size={30} color={WHITE} />
        </Button>
      )}
      <Title>{title}</Title>
      {rightIcon ? (
        <Button>
          <Icon name={leftIcon} onPress={rightAction} size={24} color={WHITE} />
        </Button>
      ) : (
        <Button />
      )}
    </LinearGradient>
  );
}

Toolbar.propTypes = {
  leftIcon: PropTypes.string,
  leftAction: PropTypes.func,
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.string,
  rightAction: PropTypes.func,
};

Toolbar.defaultProps = {
  leftIcon: null,
  leftAction: null,
  rightIcon: null,
  rightAction: null,
};
