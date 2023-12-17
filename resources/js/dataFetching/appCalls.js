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
    const response = await axios.get(`/api/farms/${windFarmId}/inspections`);
    const { data } = response.data;
    return { inspections: data, fetchingError: null };
  } catch (error) {
    return { inspections: [], fetchingError: error };
  }
}
