import React, { useState, useEffect } from 'react';
import Animasi from './timer'; // Pastikan jalur impor ini benar
import FetchApi from './fetch'; // Pastikan jalur impor ini benar
import Layout from '../komponen/Layout';

function UseEffect() {
    const [harga, setHarga] = useState(0);
    const [qty, setQty] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        setSubTotal(harga * qty);
    }, [harga, qty]);

    return ( 
        <>
            <Layout>
                <div className="container" style={{ marginLeft: '2rem' }}>
                    <div className="mt-8">
                        <label htmlFor="harga" className="block text-gray-700 font-bold mb-2">
                            Harga :
                        </label>
                        <input 
                            type="text" 
                            id="harga" 
                            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukkan nominal anda"
                            value={harga}
                            onChange={(e) => setHarga(Number(e.target.value))}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="qty" className="block text-gray-700 font-bold mb-2">
                            Qty :
                        </label>
                        <input 
                            type="text" 
                            id="qty" 
                            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukkan nominal anda"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        />
                    </div>
                    <p className="text-gray-600 text-sm italic mt-2">Sub Total : {subTotal}</p>
                    <hr />
                    <div className="font-bold font-medium text-3xl">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Use Effect Timer:
                        </label>
                    </div>
                    <Animasi />
                    <div className="font-bold font-medium text-3xl">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Use Effect Api Cell:
                        </label>
                    </div>
                    <FetchApi />
                </div>
            </Layout>
        </>
    );
}

export default UseEffect;
