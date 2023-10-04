import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';


const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={(
            <Suspense fallback={<div>Loading...</div>}>
              <div className='page-wrapper'>
                {element}
              </div>
            </Suspense>
          )}
          path={path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;