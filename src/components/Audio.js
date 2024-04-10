import React, { useState, useEffect } from 'react';

function AudioControl() {
  const [audio] = useState(new Audio('harmony.wav'));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
  [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(true));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(true));
    };
  }, [audio]);

  return (
    <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
  );
}

export default AudioControl;