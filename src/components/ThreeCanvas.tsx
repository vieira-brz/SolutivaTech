"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls, Stars, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TexturedSphere = () => {
    const mesh = useRef();

    const texture = useTexture('/images/logo.png');

    // Configurar a repetição das texturas
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    useFrame(() => {
        mesh.current.rotation.y = 5.5;
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 256, 256]} />
            <MeshDistortMaterial
                map={texture}
                distort={1}
                speed={2}
                roughness={0.1}
                displacementScale={.1}
                normalMap={texture}
                displacementMap={texture}
                metalness={0.2}    
                emissive={new THREE.Color(0x0F043D)}  
                envMapIntensity={0.8}
            />

        </mesh>
    );
};

const ThreeCanvas = () => {
    return (
        <Canvas
            camera={{ position: [5, 0, 5], fov: 60 }}
            style={{ background: '#fff' }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <TexturedSphere />
            <OrbitControls enableZoom={true} />
            <Stars />
        </Canvas>
    );
};

export default ThreeCanvas;
