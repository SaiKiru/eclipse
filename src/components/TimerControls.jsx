import { View, StyleSheet, Pressable, Text } from 'react-native';
import colors from 'constants/colors';
import { NextIcon, PauseIcon, PlayIcon, StopIcon } from 'assets/img/icons/index';
import PomodoroPhases from 'enums/PomodoroPhases';
import TimerStates from 'enums/TimerStates';

export default function TimerControls(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.control}
        onPress={props.resetTimer}
      >
        <StopIcon
          width={'100%'}
          fill={props.phase === PomodoroPhases.FOCUS ? colors.black : colors.white}
        />
      </Pressable>

      <Pressable
        style={styles.control}
        onPress={props.timerState === TimerStates.STOPPED ? props.startTimer : props.stopTimer}
      >
        {props.timerState === TimerStates.STOPPED
          ? <PlayIcon
            width={'100%'}
            fill={props.phase === PomodoroPhases.FOCUS ? colors.black : colors.white}
          />
          : <PauseIcon
            width={'100%'}
            fill={props.phase === PomodoroPhases.FOCUS ? colors.black : colors.white}
          />}
      </Pressable>

      <Pressable
        style={styles.control}
        onPress={props.switchPhase}
      >
        <NextIcon
          width={'100%'}
          fill={props.phase === PomodoroPhases.FOCUS ? colors.black : colors.white}
        />
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
    padding: 8,
    width: 64,
  },
  controlLabel: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});
