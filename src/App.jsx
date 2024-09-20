import PomodoroTimer from "./components/PomodoroTimer"

import {ChakraProvider, CSSReset, Box, Text} from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <CSSReset />
      <Box textAlign='center' fontSize='xl' mt='4'>
        <Text>Pomodoro</Text>
        <PomodoroTimer />
      </Box>
    </ChakraProvider>
  )
}

export default App
