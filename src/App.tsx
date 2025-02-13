import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav' bg='coral'>
        <NavBar />
      </GridItem>
      <GridItem area='aside' hideBelow='lg' bg='gold'>
        Sidebar
      </GridItem>
      <GridItem area='main' bg='dodgerblue'>
        Main content
      </GridItem>
    </Grid>
  );
}

export default App;
