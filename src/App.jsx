
import React, { useState, useEffect } from 'react';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Experience from "./Experience.jsx";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import imgCassette from "/images/tapeSticker.png";
import imgPackaging from "/images/jCard.png";

export default function App() {

    const [showWithPackaging, setShowWithPackaging] = useState(false)

    const initialTextureCassette = useLoader(THREE.TextureLoader, imgCassette);
    const initialTexturePackaging = useLoader(THREE.TextureLoader, imgPackaging);
    const [defaultCassetteTexture, setDefaultCassetteTexture] = useState(initialTextureCassette);
    const [defaultPackagingTexture, setDefaultPackagingTexture] = useState(initialTexturePackaging);

    const changeTexture = (event) => {
        
        const image = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const loader = new THREE.TextureLoader();
            loader.load(e.target.result, (newTexture) => {
                showWithPackaging ? setDefaultPackagingTexture(newTexture) : setDefaultCassetteTexture(newTexture);
            });
        };

        if (image) {
            reader.readAsDataURL(image);
        }
    };

    return (
        <div className='flex gap-10 justify-around items-center h-screen p-7 relative'>

            <label className='fileInput' for="fileUpload"></label>
            <input type="file" onChange={changeTexture} className='hidden' id='fileUpload'/>

            <button onClick={()=>{setShowWithPackaging(!showWithPackaging)}} className='toggleModel toggleLeft'></button>

            <div className="w-[70%] h-full relative">

                <Canvas
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [3, -1, -1.7]
                    }}
                >
                    <Experience defaultCassetteTexture={defaultCassetteTexture} defaultPackagingTexture={defaultPackagingTexture} showWithPackaging={showWithPackaging}/>
                </Canvas>
            </div>

            <button onClick={()=>{setShowWithPackaging(!showWithPackaging)}} className='toggleModel toggleRight'></button>
        </div>
    );
}
