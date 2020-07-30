const { useState, useEffect } = require('react');
const useDidUpdateEffect = require('./useDidUpdateEffect');


function useTypingEffect ({ text, playWhenMount }) {
  const [play, setPlay] = useState(playWhenMount);
  const [displayText, setDisplayText] = useState('');
  const [textCount, setTextCount] = useState(-1);

  useDidUpdateEffect(() => {
    if (textCount >= text.length) {
      return setPlay(false);
    }
    setDisplayText((str) => str + text[textCount]);
  }, [textCount]);

  useEffect(() => {
    if (!play) {
      return;
    }
    const timer = setInterval(() => {
      setTextCount((v) => v + 1);
    }, 30);
    return () => clearInterval(timer);
  }, [play]);

  return { displayText, play, setPlay };
};

module.exports = useTypingEffect;