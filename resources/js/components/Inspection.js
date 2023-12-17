import React from 'react';
import { useParams } from 'react-router-dom';
import WindFarmOverview from './WindFarmOverview';
import InspectionResults from './InspectionResults';

function Inspection() {
  const { windFarmId } = useParams();

  return (<>
        <WindFarmOverview windFarmId={windFarmId}/>
        <InspectionResults windFarmId={windFarmId}/>
    </>);
}

export default Inspection;
