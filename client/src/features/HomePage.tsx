import { Box } from '@mui/material';
import DuckCards from './DuckCards';

function HomePage() {
  return (
    <Box component='div' display='flex' alignContent='center' justifyContent='space-between'>
      {/* duck card 1 */}
      <DuckCards 
        img='https://www.treehugger.com/thmb/KY_lq3tf1D8X_hj9FC2gT5kzi0w=/1885x1414/smart/filters:no_upscale()/GettyImages-1285433925-df2c4e96e5ca4ca9826cc984bd90f386.jpg' 
        title='Ducks101' 
        desc='They can sleep with one eye open – Ducks can turn off half their brain while keeping the other half alert for predators...'
      />
     {/* duck card 2 */}
     <DuckCards 
        img='https://newyork.cbslocal.com/wp-content/uploads/sites/14578484/2018/10/duck1.jpg' 
        title='The Rare Mandarin Duck' 
        desc='The estimated global population of the Mandarin duck is 65,000-66,000. The Mandarin duck is a relatively rare bird and hence it has a small population, which is slowly declining...'
      />
     {/* duck card 3 */}
     <DuckCards 
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1zt-Jexxf_dLgmL5S35uNcteA5CdVNoZA&usqp=CAU' 
        title='The American Black Duck' 
        desc='American black ducks breed in a variety of wetland habitats, from salt marshes to beaver ponds, river islands, and boreal bogs...'
      />
    </Box>
  );
}

export default HomePage;
