import { useState  } from "react";
import apis from "../../../api/mahasiswa";

const CreateMahasiswa = () => {
    const [nim, setNim] = useState('')
    const [nama, setNama] = useState('')
    const [angkatan, setAngkatan] = useState('')
    const [prodi, setProdi] = useState('Teknik Informatika')

    const clearForm = () => {
        setNim('')
        setNama('')
        setAngkatan('')
    }
    
    const addMahasiswa = async () => {
        if(!nim || !nama || !angkatan || !prodi) {
            alert('isian tidak boleh losong')
        }
        else {
            const mhsBaru = { nim, nama, angkatan, prodi };
            try {
                await apis.createmahasiswa(mhsBaru);

                alert('Data berhasil ditambah')
                clearForm()
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div className="w-1/2 mx-auto rounded-lg shadow-lg p-8">
                <h1 className="text-2x1 font-bold">Input Mahasiswa</h1>
                <div className="mt-4">
                    <label htmlFor="nim" className="block text-gray-700 font-bold mb-2">
                        NIM :
                    </label>
                    <input 
                        type="text" id="nim" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="ex: 11221020566"
                        value={nim}
                        onChange={(e) => { setNim(e.target.value)}} 
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="nama" className="block text-gray-700 font-bold mb-2">
                        NAMA :
                    </label>
                    <input 
                        type="text" id="nama" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="ex: juju"
                        value={nama}
                        onChange={(e) => { setNama(e.target.value)}} 
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="angkatan" className="block text-gray-700 font-bold mb-2">
                        ANGKATAN :
                    </label>
                    <input 
                        type="text" id="angkatan" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="ex: 2021"
                        value={angkatan}
                        onChange={(e) => { setAngkatan(e.target.value)}} 
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="prodi" className="block text-gray-700 font-bold mb-2">
                        PRODI  :
                    </label>
                    <select
                        id="prodi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="ex: IT"
                        value={prodi}
                        onChange={(e) => { setProdi(e.target.value)}}>

                            <option value="Teknik Informatika ">Teknik Informatika</option>
                            <option value="Manajemen Informatika">Manajemen Informatika</option>
                    </select>
                </div>
                <div className="flex flex-row justify-end mt-4">
                    <button
                        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounder"
                        onClick={addMahasiswa}
                    >
                        Tambah
                    </button>
                </div>
            </div>
        </>
    )
}

export default CreateMahasiswa;