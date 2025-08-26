
import './App.css'
import MainComponent from './sections/MainComponent/MainComponent'
import Sidebar from './sections/Sidebar/Sidebar'
import { Box } from '@chakra-ui/react'

function App() {


  return (
    <Box bgColor="brand.deepest" display="flex">
      <Sidebar />
      <MainComponent />
    </Box>
  )
}

export default App
