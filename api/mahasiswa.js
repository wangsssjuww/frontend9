import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:4000"
});

const apis = {
    getAllMahasiswa: ()  => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
}
 
export default apis;