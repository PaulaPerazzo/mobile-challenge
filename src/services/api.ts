import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://api.staging.aca.so',
});

// api.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   async (error) => {
//     if (error.response.status === 404) {
//       try {
//         const userResponse = await api.post('/user', {
//           nickname: 'User Test',
//           bio: 'string',
//           birthday: '2023-04-05',
//           children_qty: 0,
//           civil_state: 'Solteiro(a)',
//           instagram: 'string',
//           whats_app: 'string',
//           linkedin: 'string',
//           city_current_id: 'string',
//           city_born_at_id: 'string',
//           company_id: 'string',
//           occupation_id: 'string',
//           work_field_id: 'string',
//           skills_want: [],
//           skills_can: [],
//           hobbies: [],
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

export default api;
