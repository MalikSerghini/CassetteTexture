import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

export default function Cassette({defaultCassetteTexture, showWithPackaging, defaultPackagingTexture}){

    const modelCassette = useGLTF("./models/cassette.gltf")
    const modelPackaging = useGLTF("./models/packaging.gltf")

    const model = showWithPackaging ? modelPackaging : modelCassette

    model.scene.children.forEach(child =>{
        if(child.name.includes("Sticker")){

            let customTextureFront = defaultCassetteTexture;

            customTextureFront.wrapS = THREE.RepeatWrapping;
            customTextureFront.repeat.x = -1;

            child.material.map = customTextureFront
            child.material.needsUpdate = true
        }
        if(child.name.includes("Packaging_Front")){

            let customTextureFront = defaultPackagingTexture

            customTextureFront.wrapS = THREE.RepeatWrapping;
            customTextureFront.repeat.x = -1;

            child.material.map = customTextureFront
            child.material.needsUpdate = true
        }
    })

    return <>
        <primitive
            object={model.scene}
        />
    </>
}