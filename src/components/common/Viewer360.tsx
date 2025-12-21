// Viewer360.tsx
import { Canvas } from "@react-three/fiber";
import { useTexture, CameraControls } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";


function Sphere360({ panoramaImg }: { panoramaImg: string }) {
  const texture = useTexture(panoramaImg);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

// ✅ Correct: accept { panoramaImage } as prop
export default function Viewer360({ panoramaImage }: { panoramaImage: string }) {
    const baseUrl = import.meta.env.VITE_FILE_URL ?? '';
    const url = panoramaImage && panoramaImage.length > 0 ? baseUrl + panoramaImage : '';
  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <Canvas
        camera={{
          position: [0, 0, 0.1],
          fov: 75,
        }}
      >
        <Suspense fallback={null}>
          <Sphere360 panoramaImg={url} />
          <CameraControls
            dollySpeed={0}
            truckSpeed={0}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            azimuthRotateSpeed={-1}
            polarRotateSpeed={-1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}