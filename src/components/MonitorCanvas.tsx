"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const MonitorCanvas = () => {
    // Carregue a textura do site ou qualquer imagem que você queira exibir no monitor
    const texture = useLoader(THREE.TextureLoader, '/images/videoprint.png');

    return (
        <div className='md:block hidden'>
            <Canvas>
                <ambientLight intensity={2} />
                <directionalLight position={[2, 5, 2]} />
                <OrbitControls enableZoom={false} enableRotate={true} />

                {/* Corpo do monitor */}
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[6, 3.5, 0.2]} /> {/* Aumentei os valores aqui */}
                    <meshStandardMaterial color="#333" />
                </mesh>

                {/* Tela do monitor */}
                <mesh position={[0, 1, 0.11]}>
                    <planeGeometry args={[5.8, 3.3]} /> {/* Aumentei os valores aqui */}
                    <meshStandardMaterial map={texture} />
                </mesh>

                {/* Base do monitor */}
                <mesh position={[0, -1.3, 0]}>
                    <boxGeometry args={[3.5, 0.2, 2]} /> {/* Aumentei os valores aqui */}
                    <meshStandardMaterial color="#333" />
                </mesh>

                {/* Suporte do monitor */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.2, 2.5, 0.2]} /> {/* Aumentei os valores aqui */}
                    <meshStandardMaterial color="#333" />
                </mesh>
            </Canvas>
        </div>
    );
};

export default MonitorCanvas;
