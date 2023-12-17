import React from 'react';
import { useParams } from 'react-router-dom';
import { getWindFarmDataById, getWindFarmTurbines } from '../dataFetching/appCalls';

function WindFarmOverview() {
  const { windFarmId } = useParams();
  const [windFarmData, setWindFarmData] = React.useState([{ id: 'test-1', name: 'this is fake' }]);
  const [turbinesData, setTurbinesData] = React.useState([{ name: 'this is fake' }]);

  React.useEffect(() => {
    // Make a GET request to fetch the list of farms2
    (async () => {
      try {
        const { farm } = await getWindFarmDataById(windFarmId);
        setWindFarmData(farm);

        const { turbines } = await getWindFarmTurbines(windFarmId);
        setTurbinesData(turbines);

        // Additional logic or actions after fetching data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [windFarmId]);

  return <div className="w-1/2 p-4 border-r">
        <h2 className="mb-4">{windFarmData.name} Wind Farm Overview</h2>
      <ul>
          {turbinesData.map((turbine) => (<li key={turbine.name}>
                {turbine.name}
                </li>))}

      </ul>
        {/* SVG illustration of wind turbines */}
        <div className="mb-4">SVG Illustration (5 Wind Turbines)</div>
        {/* Other content for the viewport section */}
    </div>;
}

export default WindFarmOverview;
