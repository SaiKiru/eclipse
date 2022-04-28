import { StyleSheet, Text } from 'react-native';

import PomodoroPhases from 'enums/PomodoroPhases';
import colors from 'constants/colors';

export default function TimerPhaseLabel(props) {
  return (
    <Text style={[styles.label, mode[props.phase]]}>
      {props.phase === PomodoroPhases.FOCUS
        ? 'FOCUS'
        : 'BREAK'}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 32,
    marginVertical: 32,
  },
});

const mode = StyleSheet.create({
  focus: {
    color: colors.black,
  },
  break: {
    color: colors.white,
  },
});
