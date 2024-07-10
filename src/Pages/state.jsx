import { useState } from "react";
import Layout from "../komponen/Layout";

function State() {
    const [bilangan1, setBilangan1] = useState(30);
    const [bilangan2, setBilangan2] = useState(2);
    const [hasil, setHasil] = useState(0);

    const penambahan = () => {
        setHasil (parseInt(bilangan1) + parseInt(bilangan2))
    }

    const pengurangan = () => {
        setHasil (bilangan1 - bilangan2)
    }

    const perkalian = () => {
        setHasil (bilangan1 * bilangan2)
    }

    return (  
        <>
            <Layout>
                <p>
                    Bilangan 1 : <input type="text"
                    value={bilangan1}
                    onChange={(e) => setBilangan1(e.target.value)} />
                </p>
                <p>
                    Bilangan 2 : <input type="text"
                    value={bilangan2}
                    onChange={(e) => setBilangan2(e.target.value)} />
                </p>
                <p>Hasil : {hasil}</p>

                <button type="button" 
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={penambahan}
                >
                    Tambah
                </button>
                <button type="button" 
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={pengurangan}
                >
                    Kurang
                </button>
                <button type="button" 
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={perkalian}
                >
                    Kali
                </button>
            </Layout>

        </>
    );
}

export default State;