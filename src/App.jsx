import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './state/reduxtoolkit/store';  // Use Redux Toolkit store
import ItemListRTK from './components/reduxtoolkit/ItemListRTK';
import ItemListZustand from './components/zustand/ItemListZustand';

function App() {
  return (
    <div>
      <h1>State Management Comparison</h1>
      
      <h2>Redux Toolkit</h2>
      <ReduxProvider store={reduxStore}>
        <ItemListRTK />
      </ReduxProvider>

      <h2>Zustand</h2>
      <ItemListZustand />
    </div>
  );
}

export default App;
