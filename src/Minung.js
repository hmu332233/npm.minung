const React = require('react');
const { useEffect } = require('react');
const { render, Box, Text, Newline } = require('ink');

const useTypingEffect = require('./useTypingEffect');

const Minung = () => {
  const { displayText: firstText, play: firstTextPlay } = useTypingEffect({
    text: "Hi! I'm Minung!",
    playWhenMount: true,
  });
  const { displayText: secondText, setPlay: setSecondTextPlay } = useTypingEffect({
    text: "I'm working as a software engineer at Goorm.",
  });

  useEffect(() => {
    setSecondTextPlay(!firstTextPlay);
  }, [firstTextPlay]);

  return (
    <Box flexDirection="column" padding={2}>
      <Text>
        {firstText}
        <Newline />
        {secondText}
      </Text>
    </Box>
  );
};

render(<Minung />);
