import React, { PureComponent } from 'react';
import Header from './Components/Header/Header';
import Text from './Components/Content/Text';
import Box from './Components/Content/Box';

function App(props) {
  return (
    <div>
      <Header />
      <Text />
     {/* <div>hello</div> */}
     <Box />
    </div>
    
  );
}
export default App;
