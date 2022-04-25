import React from 'react';

import TimerStates from 'enums/TimerStates';
import PomodoroPhases from 'enums/PomodoroPhases';
import { zeroPad } from 'utils/zeroPad';

export function useTimer() {
  const [_seconds, _setSeconds] = React.useState(0);
  const [timerState, _setTimerState] = React.useState(TimerStates.STOPPED);
  const [phase, _setPhase] = React.useState(PomodoroPhases.FOCUS);
  let timer = React.useRef();
  let startTime = React.useRef();
  let accumulatedTime = React.useRef(0);

  function startTimer() {
    startTime.current = new Date();
    _setTimerState(TimerStates.PLAYING);
  }

  function stopTimer() {
    accumulatedTime.current = _seconds;
    _setTimerState(TimerStates.STOPPED);
  }

  function resetTimer() {
    stopTimer();
    _setSeconds(0);
    accumulatedTime.current = 0;
    if (phase === PomodoroPhases.BREAK) { switchPhase(); }
  }

  function switchPhase() {
    startTime.current = new Date();
    accumulatedTime.current = _seconds;

    _setPhase(phase => {
      if (phase === PomodoroPhases.FOCUS) return PomodoroPhases.BREAK;
      return PomodoroPhases.FOCUS;
    });
  }

  function getTime() {
    let isNegative = _seconds < 0;
    let hours = Math.floor(Math.abs(_seconds) / 3600);
    let minutes = Math.floor(Math.abs(_seconds) / 60 % 60);
    let seconds = Math.floor(Math.abs(_seconds) % 60);
    let hoursStr = zeroPad(hours, 2);
    let minutesStr = zeroPad(minutes, 2);
    let secondsStr = zeroPad(seconds, 2);

    return `${isNegative ? `-` : ``}${hours ? `${hoursStr} : ` : ``} ${minutesStr} : ${secondsStr}`;
  }

  function getBreakTime() {
    let isNegative = _seconds < 0;
    let credits = Math.floor(_seconds / 5);
    let hours = Math.floor(Math.abs(credits) / 3600);
    let minutes = Math.floor(Math.abs(credits) / 60 % 60);
    let seconds = Math.floor(Math.abs(credits) % 60);
    let hoursStr = zeroPad(hours, 2);
    let minutesStr = zeroPad(minutes, 2);
    let secondsStr = zeroPad(seconds, 2);

    return `${isNegative ? `-` : ``}${hours ? `${hoursStr} : ` : ``} ${minutesStr} : ${secondsStr}`;
  }

  function _tick() {
    let currentTime = new Date();
    let elapsedTime = Math.floor((currentTime - startTime.current) / 1000);

    _setSeconds(phase === PomodoroPhases.FOCUS
      ? accumulatedTime.current + elapsedTime
      : accumulatedTime.current - (elapsedTime * 5)
    );
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
    resetTimer,
    switchPhase,
    getTime,
    getBreakTime
  };
}
