import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { getWindFarmsData } from '../dataFetching/appCalls';
import Header from './Header';
import Inspection from './Inspection';
import FarmsNav from './FarmsNav';
import Sidebar from './Sidebar';
import InspectionsCalendar from './InspectionsCalendar';

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool,
  windFarmsData: PropTypes.any,
  prop2: PropTypes.func,
  onClick: PropTypes.func,
};
const WindFarms = () => {
  const [windFarmsData, setWindFarmsData] = React.useState([{ id: 'test-1', name: 'this is fake' }]);
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [fetchError, setFetchError] = React.useState(null);
  React.useEffect(() => {
    // Make a GET request to fetch the list of farms
    (async () => {
      try {
        const { farms } = await getWindFarmsData();
        setWindFarmsData(farms);
      } catch (error) {
        setFetchError(error);
      }
    })();
  }, []);
  return (

    fetchError ? <div className="text-red-500">Error fetching data: {fetchError}</div> : <div>
          <Header/>
          <main className="flex">
              <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}>
                  <FarmsNav>
                      {windFarmsData.map(({ id, name }) => (<li key={name}>
                          <Link key={name} to={`/wind-farms/${id}`}>
                              {name}
                          </Link>
                      </li>))}
                  </FarmsNav>

                   <Routes>
                      <Route
                          exact
                          path={'/:windFarmId'}
                          element={<InspectionsCalendar/>}/>

                   </Routes>
              </Sidebar>
              <section className="flex-1 p-4">

                  <Routes>
                      <Route
                          exact
                          path="/:windFarmId"
                          element={<Inspection/>}
                      />
                  </Routes>
              </section>
          </main>
      </div>
  );
};

export default WindFarms;
