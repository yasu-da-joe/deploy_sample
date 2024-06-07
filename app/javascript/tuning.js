document.addEventListener('DOMContentLoaded', () => {
  const baseFrequency = 442;
  const leftSlider = document.getElementById('left-string');
  const baseSlider = document.getElementById('base-string');
  const rightSlider = document.getElementById('right-string');
  const basePlayButton = document.getElementById('base-play');
  const saveButton = document.getElementById('save');
  const playUnisonButton = document.getElementById('play-unison');

  const baseOscillator = new Tone.Oscillator(baseFrequency, 'sine').toDestination();
  const leftOscillator = new Tone.Oscillator(baseFrequency, 'sine').toDestination();
  const rightOscillator = new Tone.Oscillator(baseFrequency, 'sine').toDestination();

  baseSlider.addEventListener('input', () => {
      const frequency = parseFloat(baseSlider.value);
      baseOscillator.frequency.value = frequency;
  });

  leftSlider.addEventListener('input', () => {
      const frequency = parseFloat(leftSlider.value);
      leftOscillator.frequency.value = frequency;
  });

  rightSlider.addEventListener('input', () => {
      const frequency = parseFloat(rightSlider.value);
      rightOscillator.frequency.value = frequency;
  });

  basePlayButton.addEventListener('click', () => {
      if (baseOscillator.state === 'started') {
          baseOscillator.stop();
      } else {
          baseOscillator.start();
      }
  });

  saveButton.addEventListener('click', () => {
      // Implement save functionality here
  });

  playUnisonButton.addEventListener('click', () => {
      // Implement play unison functionality here
  });
});
