import React from 'react';
import propTypes from 'prop-types';
import { getComponentTypes } from '../dataFetching/appCalls';

function ComponentList({ gradeToShow, turbineComponents }) {
  const [componentTypes, setComponentTypes] = React.useState(null);

  function getTurbineComponentsByGrade() {
    if (gradeToShow[0] === undefined) return [];
    const { component_id: targetComponentId } = gradeToShow[0];
    const componentName = (cpId) => componentTypes.find((type) => type.id === cpId).name;

    return turbineComponents
      .filter((component) => component.id === targetComponentId)
      .map((component) => ({ name: componentName(component.component_type_id) }));
  }

  React.useEffect(() => {
    console.log({ turbineComponents });
    console.log({ gradeToShow });
    (async () => {
      try {
        const { types } = await getComponentTypes();
        setComponentTypes(types);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return <ul>
                    {turbineComponents && componentTypes
                        && getTurbineComponentsByGrade().map((component) => (
                            <li key={component.name}>{component.name}</li>
                        ))}

    </ul>;
}

export default ComponentList;

ComponentList.propTypes = {
  turbineComponents: propTypes.arrayOf(propTypes.object),
  gradeToShow: propTypes.arrayOf(propTypes.object),
};
