import { View, StyleSheet, Pressable, Text } from 'react-native';
import colors from 'constants/colors';

import PomodoroPhases from 'enums/PomodoroPhases';
import TimerStates from 'enums/TimerStates';

export default function TimerControls(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.control, mode[props.phase]]}
        onPress={props.timerState === TimerStates.STOPPED ? props.startTimer : props.stopTimer}
      >
        <Text style={[styles.controlLabel, mode[props.phase]]}>
          {props.timerState === TimerStates.STOPPED ? 'PLAY' : 'PAUSE'}
        </Text>
      </Pressable>

      <Pressable
        style={[styles.control, mode[props.phase]]}
        onPress={props.switchPhase}
      >
        <Text style={[styles.controlLabel, mode[props.phase]]}>
          {props.phase === PomodoroPhases.BREAK ? 'FOCUS' : 'BREAK'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 36,
    paddingHorizontal: 48,
  },
  control: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: 8,
    width: 80,
  },
  controlLabel: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});

const mode = StyleSheet.create({
  focus: {
    borderColor: colors.black,
    color: colors.black,
  },
  break: {
    borderColor: colors.white,
    color: colors.white,
  },
});
