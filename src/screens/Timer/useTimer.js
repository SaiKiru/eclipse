import React from 'react';

import TimerStates from 'enums/TimerStates';
import PomodoroPhases from 'enums/PomodoroPhases';
import { zeroPad } from 'utils/zeroPad';

export function useTimer() {
  const [_seconds, _setSeconds] = React.useState(0);
  const [timerState, _setTimerState] = React.useState(TimerStates.STOPPED);
  const [phase, _setPhase] = React.useState(PomodoroPhases.FOCUS);
  let timer = React.useRef();

  function startTimer() {
    clearInterval(timer.current);
    timer.current = setInterval(_tick, 1000);
    _setTimerState(TimerStates.PLAYING);
  }

  function stopTimer() {
    clearInterval(timer.current);
    _setTimerState(TimerStates.STOPPED);
  }

  function switchPhase() {
    _setPhase(phase => {
      if (phase === PomodoroPhases.FOCUS) return PomodoroPhases.BREAK;
      return PomodoroPhases.FOCUS;
    });
  }

  function getTime() {
    let hours = parseInt(_seconds / 60 / 60 % 60);
    let minutes = parseInt(_seconds / 60 % 60);
    let seconds = parseInt(_seconds % 60);
    let hoursStr = zeroPad(hours, 2);
    let minutesStr = zeroPad(minutes, 2);
    let secondsStr = zeroPad(seconds, 2);

    return `${hours ? `${hoursStr} : ` : ``} ${minutesStr} : ${secondsStr}`;
  }

  function getBreakTime() {
    let credits = _seconds / 5;
    let hours = parseInt(credits / 60 / 60 % 60);
    let minutes = parseInt(credits / 60 % 60);
    let seconds = parseInt(credits % 60);
    let hoursStr = zeroPad(hours, 2);
    let minutesStr = zeroPad(minutes, 2);
    let secondsStr = zeroPad(seconds, 2);

    return `${hours ? `${hoursStr} : ` : ``} ${minutesStr} : ${secondsStr}`;
  }

  function _tick() {
    _setSeconds(prev => {
      return phase === PomodoroPhases.FOCUS
        ? prev + 1
        : prev - 5;
    });
  }

  return {
    timerState,
    phase,
    startTimer,
    stopTimer,
    switchPhase,
    getTime,
    getBreakTime
  };
}
