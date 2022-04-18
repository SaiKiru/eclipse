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
    _setTimerState(TimerStates.PLAYING);
  }

  function stopTimer() {
    _setTimerState(TimerStates.STOPPED);
  }

  function switchPhase() {
    _setPhase(phase => {
      if (phase === PomodoroPhases.FOCUS) return PomodoroPhases.BREAK;
      return PomodoroPhases.FOCUS;
    });
  }

  function getTime() {
    let isNegative = _seconds < 0;
    let hours = parseInt(Math.abs(_seconds) / 60 / 60 % 60);
    let minutes = parseInt(Math.abs(_seconds) / 60 % 60);
    let seconds = parseInt(Math.abs(_seconds) % 60);
    let hoursStr = zeroPad(hours, 2);
    let minutesStr = zeroPad(minutes, 2);
    let secondsStr = zeroPad(seconds, 2);

    return `${isNegative ? `-` : ``}${hours ? `${hoursStr} : ` : ``} ${minutesStr} : ${secondsStr}`;
  }

  function getBreakTime() {
    let isNegative = _seconds < 0;
    let credits = _seconds / 5;
    let hours = parseInt(Math.abs(credits) / 60 / 60 % 60);
    let minutes = parseInt(Math.abs(credits) / 60 % 60);
    let seconds = parseInt(Math.abs(credits) % 60);
    let hoursStr = zeroPad(hours, 2);
    let minutesStr = zeroPad(minutes, 2);
    let secondsStr = zeroPad(seconds, 2);

    return `${isNegative ? `-` : ``}${hours ? `${hoursStr} : ` : ``} ${minutesStr} : ${secondsStr}`;
  }

  function _tick() {
    _setSeconds(prev => {
      return phase === PomodoroPhases.FOCUS
        ? prev + 1
        : prev - 5;
    });
  }

  React.useEffect(() => {
    clearInterval(timer.current);

    if (timerState === TimerStates.PLAYING) {
      timer.current = setInterval(_tick, 1000);
    }
  }, [timerState, phase]);

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
