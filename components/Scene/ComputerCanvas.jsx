import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Lightformer,
  Text,
  Environment,
} from "@react-three/drei";
import { easing } from "maath";
import { useTheme } from "next-themes";
import { useSpring, animated, Globals } from "@react-spring/three";

Globals.assign({
  frameLoop: "always",
});

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.2, delta);
  });
}

const Model = () => {
  const boxRef = useRef();
  const { theme } = useTheme();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh receiveShadow castShadow rotation-x={Math.PI * 0.1} ref={boxRef}>
      <torusGeometry args={[4, 1.2, 128, 64]} />
      <meshStandardMaterial
        color={theme === "dark" ? "#27272a" : "#e0e0e0"}
      />{" "}
    </mesh>
  );
};

const ComputerCanvas = () => {
  const { theme } = useTheme();

  return (
    <Canvas
      eventPrefix="client"
      shadows
      camera={{ position: [0, 0, 20], fov: 50 }}
      className="w-full h-full"
    >
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <AnimatedText />
      <Float floatIntensity={2}>
        <Model />
      </Float>
      <Environment preset="city">
        <Lightformer
          intensity={theme === "dark" ? 2 : 5}
          position={[7, 5, 10]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <Rig />
    </Canvas>
  );
}

const AnimatedText = ({ text, ...props }) => {
  const h1Style = {
    fontSize: "7rem",
    textTransform: "uppercase",
    fontFamily: "Bebas Neue",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    lineHeight: "5.9rem",
  };

  const charStyle = {
    transform: "translateY(115px)",
    transition: "transform .5s",
  };

  const { opacity, position } = useSpring({
    from: { opacity: 0, position: [0, -5, 0] },
    to: { opacity: 1, position: [0, 0, 0] },
    config: { duration: 500 },
    bounce: true,
  });

  return (
    <animated.group position={position}>
      <Text
        fontSize={4}
        letterSpacing={-0.025}
        color="#e8e5f0"
        style={{ ...h1Style, ...charStyle }}
        {...props}
      >
        அ
      </Text>
    </animated.group>
  );
};

export default ComputerCanvas
