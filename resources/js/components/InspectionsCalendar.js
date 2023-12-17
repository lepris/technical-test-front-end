import React from 'react';
import { useParams } from 'react-router-dom';
import { getWindFarmInspections } from '../dataFetching/appCalls';

const InspectionsCalendar = () => {
  const [inspectionsData, setInspectionsData] = React.useState([{ id: 'test-1', name: 'this is fake' }]);
  const [fetchError, setFetchError] = React.useState(null);
  const { windFarmId } = useParams();

  React.useEffect(() => {
    (async () => {
      try {
        const { inspections } = await getWindFarmInspections(windFarmId);
        setInspectionsData(inspections);
      } catch (error) {
        setFetchError(error);
      }
    })();
  }, [windFarmId]);

  return (fetchError
    ? <div className="text-red-500">Error fetching data: {fetchError}</div>
    : (<div >
        <h2 className="mb-4">Inspections Calendar</h2>
       <div className="mb-4">
          <ul>
              {inspectionsData && inspectionsData.length >= 1
                ? (inspectionsData.map((inspection) => <li key={inspection.name}>
                  {inspection.name}
              </li>)) : (<li>No inspections</li>)}
          </ul>
       </div>
  </div>));
};

export default InspectionsCalendar;
