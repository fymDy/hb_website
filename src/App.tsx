import React from 'react';
import { RouterProvider} from 'react-router-dom';
import routesConfig from './routes';
function App() {
  return (
    <div className="App">
        <RouterProvider router={routesConfig}  />
    </div>
  );
}

export default App;
