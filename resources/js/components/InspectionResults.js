import React from 'react';
import { useParams } from 'react-router-dom';
import {
  getTurbineComponents,
  getTurbineInspectionsGrade,
  getWindFarmInspections,
} from '../dataFetching/appCalls';
import ComponentList from './ComponentList';

function InspectionResults() {
  const [inspectionResults, setInspectionResults] = React.useState(null);
  const [acceptableGrade, setAcceptableGrade] = React.useState(null);
  const [moderateGrade, setModerateGrade] = React.useState(null);
  const [criticalGrade, setCriticalGrade] = React.useState(null);
  const [turbineComponents, setTurbineComponents] = React.useState(null);

  const { windFarmId } = useParams();

  function formatDate(date) {
    return new Date(date).toDateString();
  }

  React.useEffect(() => {
    (async () => {
      try {
        // Make a GET request to fetch the list of inspections
        const { inspections } = await getWindFarmInspections(windFarmId);
        setInspectionResults(inspections);

        const { grades } = await getTurbineInspectionsGrade(inspections.turbine_id);
        setAcceptableGrade(grades.filter((grade) => grade.grade_type_id === 1));
        setModerateGrade(grades.filter((grade) => grade.grade_type_id === 2));
        setCriticalGrade(grades.filter((grade) => grade.grade_type_id === 3));

        const { components } = await getTurbineComponents(inspections.turbine_id);
        setTurbineComponents(components);

        // Additional logic or actions after fetching data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [windFarmId]);

  return (
      <>
          <h2 className="mb-4">Inspection Results </h2>

          {inspectionResults && <ul>
              <li key='date1'>Created at {formatDate(inspectionResults.created_at)}</li>
              <li key='date2'>Inspected at {formatDate(inspectionResults.inspected_at)}</li>
              <li key='date3'>Updated at {formatDate(inspectionResults.updated_at)}</li>
          </ul>}

          <div className="container mx-auto py-8">
              <div className="flex flex-wrap -mx-4">

                  {/* //  First Column */}
                  <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                      <div className="border border-green-400 p-6 rounded-md shadow-md">
                          <h2 className="text-2xl text-green-400 font-semibold mb-4">Pass</h2>
                           <ComponentList gradeToShow={acceptableGrade} turbineComponents={turbineComponents} />
                      </div>
                  </div>

                   {/* Second Column */}
                  <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                      <div className="border border-amber-600 p-6 rounded-md shadow-md">
                          <h2 className="text-2xl text-amber-600 font-semibold mb-4">Moderate</h2>
                           <ComponentList gradeToShow={moderateGrade} turbineComponents={turbineComponents} />
                      </div>
                  </div>

                   {/* Third Column */}
                  <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                      <div className="border border-red-600 p-6 rounded-md shadow-md">
                          <h2 className="text-2xl text-red-600 font-semibold mb-4">Critical</h2>
                           <ComponentList gradeToShow={criticalGrade} turbineComponents={turbineComponents} />
                      </div>
                  </div>

              </div>

          </div>
      </>);
}

export default InspectionResults;
