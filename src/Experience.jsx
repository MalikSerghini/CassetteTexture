import {Environment, Float, OrbitControls } from "@react-three/drei";
import Cassette from "./components/Cassette";

import { Suspense} from "react";

export default function Experience({defaultCassetteTexture, showWithPackaging, defaultPackagingTexture}){

    return <>
        <Environment  preset="warehouse"/>
        <OrbitControls/>
        {/* <axesHelper args={[40]}/> */}
        
    <Suspense>
        <Float>
            <Cassette defaultCassetteTexture = {defaultCassetteTexture} defaultPackagingTexture={defaultPackagingTexture} showWithPackaging={showWithPackaging}/>
        </Float>
        </Suspense>

    </>
}