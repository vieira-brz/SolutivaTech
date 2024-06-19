"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls, Stars, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TexturedSphere = () => {
    const mesh = useRef<THREE.Mesh>(null);
    const texture = useTexture('/images/logo.png');

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y = 5.5;
        }
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 256, 256]} />
            <MeshDistortMaterial
                map={texture}
                distort={1}
                speed={2}
                roughness={0.5}
                displacementScale={0.1}
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
            <OrbitControls enableZoom={false} enableRotate={true} />
            <Stars />
        </Canvas>
    );
};

export default ThreeCanvas;