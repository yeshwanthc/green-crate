import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

interface ViewerProps {
  modelPath: string;
}

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} />;
}

export function ProductModelViewer({ modelPath }: ViewerProps) {
  useGLTF.preload(modelPath);
  const isMobile = window.innerWidth < 768;



  return (
    <Canvas camera={{ position: isMobile ? [0, 0, 1.5] : [0, 0, 2.5] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[1, 1, 5]} />

      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
