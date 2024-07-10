import { createContext, useState } from "react";
import ContextComp1 from "../komponen/component1";
import ContextComp2 from "../komponen/component2";
import Layout from "../komponen/Layout";

export const MyContext = createContext();

const ReactContext = () => {
    const [data, setData] = useState(0);
    return (
        <>
            <Layout>
                <div>
                    {data}
                    <MyContext.Provider value={[data, setData]}>
                        <ContextComp1 />
                        <ContextComp2 />
                    </MyContext.Provider>
                </div>
            </Layout>
        </>
    );
}

export default ReactContext;
