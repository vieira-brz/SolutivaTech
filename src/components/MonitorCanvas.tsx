// @ts-nocheck
"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const MonitorCanvas = () => {
    const [texture, setTexture] = useState(null);
    const textureLoader = new THREE.TextureLoader();
    const isClient = typeof window !== 'undefined';

    useEffect(() => {
        if (isClient) {
            const loadTexture = async () => {
                const loadedTexture = await textureLoader.loadAsync('/images/videoprint.png');
                setTexture(loadedTexture);
            };
            loadTexture();
        }
    }, [isClient]);

    return (
        // Todo: hover no monitor, tour pela imagem, etc...
        
        <div className='md:block hidden'>
            <Canvas>
                <ambientLight intensity={2} />
                <directionalLight position={[2, 5, 2]} />
                <OrbitControls enableZoom={true} enableRotate={true} />

                {/* Corpo do monitor */}
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[6, 3.5, 0.2]} /> {/* Aumentei os valores aqui */}
                    <meshStandardMaterial color="#333" />
                </mesh>

                {/* Tela do monitor */}
                {texture && (
                    <mesh position={[0, 1, 0.11]}>
                        <planeGeometry args={[5.8, 3.3]} /> {/* Aumentei os valores aqui */}
                        <meshStandardMaterial map={texture} />
                    </mesh>
                )}

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
