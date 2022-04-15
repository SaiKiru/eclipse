import { View, Text, StyleSheet } from 'react-native';

import colors from 'constants/colors';
import PomodoroPhases from 'enums/PomodoroPhases';

export default function TimerFace(props) {

  return (
    <View style={[styles.timerFace, mode[props.phase]]}>
      <View style={styles.safeArea}>
        <Text style={[styles.time, mode[props.phase]]}>
          {props.phase === PomodoroPhases.FOCUS
            ? props.time
            : props.breakTime}
        </Text>

        {props.phase === PomodoroPhases.FOCUS &&
          <Text style={[styles.storedTime, mode[props.phase]]}>
            {props.breakTime}
          </Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70.71%',
    aspectRatio: 1,
  },
  timerFace: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    aspectRatio: 1,
    borderRadius: 1000,
  },
  time: {
    fontSize: 52,
    fontWeight: '700',
  },
  storedTime: {
    position: 'absolute',
    bottom: 0,
    fontSize: 24,
  },
});

const mode = StyleSheet.create({
  focus: {
    backgroundColor: colors.black,
    color: colors.white,
  },
  break: {
    backgroundColor: colors.white,
    color: colors.black,
  },
});
