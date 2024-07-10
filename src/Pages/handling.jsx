import React, { useState } from "react";
import Layout from "../komponen/Layout";

const EvenHandling = () => {
    const [name, setName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [gender, setGender] = useState('');
    const [blokUnit, setBlokUnit] = useState(false);
    const [kamarUnit, setKamarUnit] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSelectedOption(event) {
        setSelectedOption(event.target.value);
    }

    function handleGender(event) {
        setGender(event.target.value);
    }

    return (
        <Layout>
            <div className="container mt-4 ml-4">
                <h3 className="text-2xl font-bold">Form Pendaftaran Kamar Unit Kos</h3>
                <hr />

                <div className="flex flex-row mt-4">
                    <div className="w-1/2 md:w-7/12 pr-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Nama Lengkap:
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan nama lengkap anda"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="pembayaran" className="block text-gray-700 font-bold mb-2">
                                Pembayaran:
                            </label>
                            <select
                                id="pembayaran"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={selectedOption}
                                onChange={handleSelectedOption}
                            >
                                <option value="6 Bulan">6 Bulan</option>
                                <option value="12 Bulan">12 Bulan</option>
                                <option value="24 Bulan">24 Bulan</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <span className="block text-gray-700 font-bold mb-2">Gender</span>
                            <div className="flex flex-row items-center mr-6">
                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        className="form-radio text-indigo-600"
                                        name="gender"
                                        value="pria"
                                        checked={gender === 'pria'}
                                        onChange={handleGender}
                                    />
                                    <span className="ml-2">Pria</span>
                                </label>

                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        className="form-radio text-indigo-600"
                                        name="gender"
                                        value="wanita"
                                        checked={gender === 'wanita'}
                                        onChange={handleGender}
                                    />
                                    <span className="ml-2">Wanita</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-7">
                            <h3 className="text-2xl font-semibold">Type Unit</h3>
                            <hr />
                            <div className="mb-4">
                                <label htmlFor="" className="block text-sm font-medium">Type Unit</label>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="blokUnit"
                                        id="blokUnit"
                                        className="form-checkbox"
                                        checked={blokUnit}
                                        onChange={(e) => setBlokUnit(e.target.checked)}
                                    />
                                    <label htmlFor="blokUnit" className="ml-2">Blok Unit</label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        name="kamarUnit"
                                        id="kamarUnit"
                                        className="form-checkbox"
                                        checked={kamarUnit}
                                        onChange={(e) => setKamarUnit(e.target.checked)}
                                    />
                                    <label htmlFor="kamarUnit" className="ml-2">Kamar Unit</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 md:w-5/12 pl-4">
                        <h3 className="text-2xl font-bold">Resume</h3>
                        <hr />
                        <h5 className="mb-2">Nama: {name}</h5>
                        <h5 className="mb-2">Pembayaran: {selectedOption}</h5>
                        <h5 className="mb-2">Gender: {gender}</h5>
                        <h5 className="mb-2">Blok Unit: {blokUnit ? "Ya" : "Tidak"}</h5>
                        <h5 className="mb-2">Kamar Unit: {kamarUnit ? "Ya" : "Tidak"}</h5>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EvenHandling;
