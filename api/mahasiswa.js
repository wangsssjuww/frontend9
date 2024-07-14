import axios from "axios";
import UpdateMahasiswa from "../src/komponen/admin/UpdateMahasiswa";

const api = axios.create({
    baseURL: "http://127.0.0.1:4000"
});

const apis = {
    getAllMahasiswa: ()  => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
    CreateMahasiswa: (data) => api.post('/mahasiswa', data),
    UpdateMahasiswa: (nim, data) => api.put(`/mahasiswa/${nim}`, data),
    DeleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`)

}
 
export default apis;