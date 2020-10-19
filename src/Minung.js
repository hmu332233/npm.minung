const React = require('react');
const { useEffect } = require('react');
const { Box, Text, Newline } = require('ink');

const useTypingEffect = require('./useTypingEffect');

function Minung() {
  const { displayText: firstText, end: firstTextEnd, setPlay: setFirstTextPlay } = useTypingEffect({
    text: "Hi! I'm Minung!",
  });
  const { displayText: secondText, end: secondTextEnd, setPlay: setSecondTextPlay } = useTypingEffect({
    text: "I'm working as a software engineer at Goorm.",
  });
  const { displayText: thirdText, setPlay: setThirdTextPlay } = useTypingEffect({
    text: "Github: https://github.com/hmu332233",
  });

  useEffect(() => {
    setFirstTextPlay(true);
  }, [])

  useEffect(() => {
    if (firstTextEnd) {
      setSecondTextPlay(true);
    }
  }, [firstTextEnd]);

  useEffect(() => {
    if (secondTextEnd) {
      setThirdTextPlay(true);
    }
  }, [secondTextEnd]);

  return (
    <Box flexDirection="column" padding={2}>
      <Text>
        {firstText}
        <Newline />
        {secondText}
        <Newline />
        <Newline />
        {thirdText}
      </Text>
    </Box>
  );
};

module.exports = Minung;
