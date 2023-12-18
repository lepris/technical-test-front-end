import axios from 'axios';

export async function getWindFarmsData() {
  try {
    const response = await axios.get('/api/farms');
    const { data } = response.data;
    return { farms: data, fetchingError: null };
  } catch (error) {
    return { farms: [], fetchingError: error };
  }
}

export async function getWindFarmDataById(windFarmId) {
  try {
    const response = await axios.get(`/api/farms/${windFarmId}`);
    const { data } = response.data;
    return { farm: data, fetchingError: null };
  } catch (error) {
    return { farm: [], fetchingError: error };
  }
}

export async function getWindFarmTurbines(windFarmId) {
  try {
    const response = await axios.get(`/api/farms/${windFarmId}/turbines`);
    const { data } = response.data;
    return { turbines: data, fetchingError: null };
  } catch (error) {
    return { turbines: [], fetchingError: error };
  }
}

export async function getWindFarmInspections(windFarmId) {
  try {
    const response = await axios.get(`/api/inspections/${windFarmId}`);
    const { data } = response.data;
    return { inspections: data, fetchingError: null };
  } catch (error) {
    return { inspections: [], fetchingError: error };
  }
}

export async function getTurbineById(turbineId) {
  try {
    const response = await axios.get(`/api/turbines/${turbineId}/inspections`);
    const { data } = response.data;
    return { turbine: data, fetchingError: null };
  } catch (error) {
    return { turbine: [], fetchingError: error };
  }
}

export async function getTurbineInspectionsGrade(turbineId) {
  try {
    const response = await axios.get(`/api/inspections/${turbineId}/grades`);
    const { data } = response.data;
    return { grades: data, fetchingError: null };
  } catch (error) {
    return { grades: [], fetchingError: error };
  }
}

export async function getTurbineComponents(turbineId) {
  try {
    const response = await axios.get(`/api/turbines/${turbineId}/components`);
    const { data } = response.data;
    return { components: data, fetchingError: null };
  } catch (error) {
    return { components: [], fetchingError: error };
  }
}

export async function getComponentTypes() {
  try {
    const response = await axios.get('/api/component-types');
    const { data } = response.data;
    return { types: data, fetchingError: null };
  } catch (error) {
    return { types: [], fetchingError: error };
  }
}
