const { useState, useEffect } = require('react');
const useDidUpdateEffect = require('./useDidUpdateEffect');


function useTypingEffect ({ text }) {
  const [end, setEnd] = useState(false);
  const [play, setPlay] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [textCount, setTextCount] = useState(-1);

  useDidUpdateEffect(() => {
    if (textCount >= text.length) {
      setPlay(false);
      setEnd(true);
      return;
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

  return { displayText, play, setPlay, end };
};

module.exports = useTypingEffect;