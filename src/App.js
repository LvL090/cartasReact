
import Testimony from './components/Testimony';

function App() {
  return (
    <div className='App'>
      <div>
          <h1 className=' mb-4 text-3xl font-bold tracking-tight text-gray-900'>Listado de personal </h1>
          <Testimony 
            img='cat1'
            name='Michi 1'
            country='Andorra'
            position='CEO'
            business='Roca'
            text=' Que te sorpasa?'/>
          <Testimony 
            img='cat2'
            name='Michi 2'
            country='San Marino'
            position='CEO'
            business='Mercadona'
            text=' Exacto'/>
          <Testimony 
            img='cat3'
            name='Michi 3'
            country='Madagascar'
            position='CEO'
            business='Dodotis'
            text=' El pobre es pobre porque quiere'/>
      </div>
    </div>
  );
}


export default App;






