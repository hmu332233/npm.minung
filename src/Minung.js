const React = require("react");
const { useState, useEffect } = require("react");
const { render, Box, Text, Newline } = require("ink");

const useTypingEffect = ({ text }) => {
  const [end, setEnd] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [textCount, setTextCount] = useState(0);

  useEffect(() => {
    if (textCount >= text.length) {
      return setEnd(true);
    }
    
    setDisplayText((str) => str + text[textCount]);
  }, [textCount]);

  useEffect(() => {
    if (end) {
      return;
    }

    const timer = setInterval(() => {
      setTextCount((v) => v + 1);
    }, 100);
    return () => clearInterval(timer);
  }, [end]);

  return { displayText };
};

const Minung = () => {
  const { displayText } = useTypingEffect({
    text: 'Hi! I\'m Minung!',
  });
 
  return (
    <Box flexDirection="column" padding={2}>
      <Text>
        {displayText}
        <Newline />
        I'm working as a software engineer at Goorm.
      </Text>
    </Box>
  );
};

render(<Minung />);
