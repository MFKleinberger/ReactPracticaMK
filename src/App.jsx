import React from 'react';
import ItemCount from './components/ItemCount';

function App () {

  return (
    <div>
      <ItemCount stock={10} initial={1} />
    </div>
  );
};


// function App() {

//   return (
//     <>
//       <Greeting message="Me gusta el cafe"/>
//       <Greeting message = "Me gusta el mate"/>
//        <Greeting message = "Me gusta el" OtraProp={23} />
//     </>
//   )
// }

export default App
