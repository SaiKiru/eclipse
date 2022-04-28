import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import colors from 'constants/colors';
import TimerFace from 'components/TimerFace';
import TimerControls from 'components/TimerControls';
import TimerPhaseLabel from 'components/TimerPhaseLabel';
import { useTimer } from './useTimer';

export default function TimerScreen() {
  const {
    timerState,
    phase,
    startTimer,
    stopTimer,
    switchPhase,
    resetTimer,
    getTime,
    getBreakTime
  } = useTimer();

  return (
    <SafeAreaView style={[styles.container, mode[phase]]}>
      <TimerPhaseLabel
        phase={phase}
      />
      <TimerFace
        time={getTime()}
        breakTime={getBreakTime()}
        phase={phase}
      />
      <TimerControls
        timerState={timerState}
        phase={phase}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        switchPhase={switchPhase}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mode = StyleSheet.create({
  focus: {
    backgroundColor: colors.white,
  },
  break: {
    backgroundColor: colors.black,
  },
});
