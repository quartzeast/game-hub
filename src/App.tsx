import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav' bg='coral'>
        Navbar
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
