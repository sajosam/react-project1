import Header from './components/Header/Header';

import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

// function Coreconcept(props){
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function App() {




  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </>
  );
}

export default App;
 