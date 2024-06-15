document.addEventListener('DOMContentLoaded', () => {
    const baseFrequency = 442;
    const leftSlider = document.getElementById('left-string');
    const baseSlider = document.getElementById('base-string');
    const rightSlider = document.getElementById('right-string');
    const basePlayButton = document.getElementById('base-play');
    const playUnisonButton = document.getElementById('play-unison');
    const saveButton = document.getElementById('save-button');
    const leftFrequencyField = document.getElementById('left-frequency');
    const rightFrequencyField = document.getElementById('right-frequency');
    const form = document.getElementById('unison-form');
  
    const baseOscillator = new Tone.Oscillator(baseFrequency, 'sine').toDestination();
    const leftOscillator = new Tone.Oscillator(baseFrequency, 'sine').toDestination();
    const rightOscillator = new Tone.Oscillator(baseFrequency, 'sine').toDestination();
  
    let isBasePlaying = false;
    let isLeftPlaying = false;
    let isRightPlaying = false;
    let playUnison = false;
  
    const startOscillator = (oscillator) => {
      if (!oscillator.started) {
        oscillator.start();
        oscillator.started = true;
      }
    };
  
    const stopOscillator = (oscillator) => {
      if (oscillator.started) {
        oscillator.stop();
        oscillator.started = false;
      }
    };
  
    baseSlider.addEventListener('input', () => {
      const frequency = parseFloat(baseSlider.value);
      baseOscillator.frequency.value = frequency;
    });
  
    leftSlider.addEventListener('mousedown', () => {
      startOscillator(baseOscillator);
      startOscillator(leftOscillator);
      isLeftPlaying = true;
    });
    leftSlider.addEventListener('mousemove', () => {
      if (isLeftPlaying) {
        const frequency = parseFloat(leftSlider.value);
        leftOscillator.frequency.value = frequency;
      }
    });
    leftSlider.addEventListener('mouseup', () => {
      stopOscillator(baseOscillator);
      stopOscillator(leftOscillator);
      isLeftPlaying = false;
    });
    leftSlider.addEventListener('touchstart', () => {
      startOscillator(baseOscillator);
      startOscillator(leftOscillator);
      isLeftPlaying = true;
    });
    leftSlider.addEventListener('touchmove', () => {
      if (isLeftPlaying) {
        const frequency = parseFloat(leftSlider.value);
        leftOscillator.frequency.value = frequency;
      }
    });
    leftSlider.addEventListener('touchend', () => {
      stopOscillator(baseOscillator);
      stopOscillator(leftOscillator);
      isLeftPlaying = false;
    });
  
    rightSlider.addEventListener('mousedown', () => {
      startOscillator(baseOscillator);
      startOscillator(leftOscillator);
      startOscillator(rightOscillator);
      isRightPlaying = true;
    });
    rightSlider.addEventListener('mousemove', () => {
      if (isRightPlaying) {
        const frequency = parseFloat(rightSlider.value);
        rightOscillator.frequency.value = frequency;
      }
    });
    rightSlider.addEventListener('mouseup', () => {
      stopOscillator(baseOscillator);
      stopOscillator(leftOscillator);
      stopOscillator(rightOscillator);
      isRightPlaying = false;
    });
    rightSlider.addEventListener('touchstart', () => {
      startOscillator(baseOscillator);
      startOscillator(leftOscillator);
      startOscillator(rightOscillator);
      isRightPlaying = true;
    });
    rightSlider.addEventListener('touchmove', () => {
      if (isRightPlaying) {
        const frequency = parseFloat(rightSlider.value);
        rightOscillator.frequency.value = frequency;
      }
    });
    rightSlider.addEventListener('touchend', () => {
      stopOscillator(baseOscillator);
      stopOscillator(leftOscillator);
      stopOscillator(rightOscillator);
      isRightPlaying = false;
    });
  
    playUnisonButton.addEventListener('click', () => {
      if (playUnison) {
        stopOscillator(baseOscillator);
        stopOscillator(leftOscillator);
        stopOscillator(rightOscillator);
        playUnison = false;
      } else {
        startOscillator(baseOscillator);
        startOscillator(leftOscillator);
        startOscillator(rightOscillator);
        playUnison = true;
      }
    });
  
    basePlayButton.addEventListener('click', () => {
      if (baseOscillator.state === 'started') {
        baseOscillator.stop();
        isBasePlaying = false;
      } else {
        baseOscillator.start();
        isBasePlaying = true;
      }
    });
  
    form.addEventListener('submit', (event) => {
      leftFrequencyField.value = parseFloat(leftSlider.value);
      rightFrequencyField.value = parseFloat(rightSlider.value);
    });
  });