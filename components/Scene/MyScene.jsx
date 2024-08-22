import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Float,
  Lightformer,
  Text,
  Environment,
  MeshTransmissionMaterial,
  MeshStandardMaterial,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { easing } from "maath";
import { useTheme } from "next-themes";
import { useSpring, animated } from "@react-spring/three";

function Rig() {
  // useFrame((state, delta) => {
  //   easing.damp3(
  //     state.camera.position,
  //     [
  //       Math.sin(-state.pointer.x) * 5,
  //       state.pointer.y * 3.5,
  //       15 + Math.cos(state.pointer.x) * 10,
  //     ],
  //     0.2,
  //     delta
  //   );
  //   state.camera.lookAt(0, 0, 0);
  // });
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
    <mesh
      receiveShadow
      castShadow
      rotation-x={Math.PI * 0.1}
      // rotation-y={Math.PI * 0.25}
      ref={boxRef}
    >
      <torusGeometry args={[4, 1.2, 128, 64]} />
      {/* <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} /> */}
      <meshStandardMaterial color={theme === "dark" ? "#27272a" : "#e0e0e0"} />{" "}
    </mesh>
  );
};

export default function MyScene() {
  const { theme } = useTheme();
  const texts = [""];
  // const texts = ["DEV", "DES"]

  return (
    <Canvas
      eventPrefix="client"
      shadows
      camera={{ position: [0, 0, 20], fov: 50 }}
      className="width-full height-full"
    >
      {/* <color attach="background" args={["#e0e0e0"]} /> */}
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      {/* <Status position={[0, 0, -10]} /> */}
      {/* <AnimatedText text="Hello, World!" theme="dark" /> */}
      <TextLoop texts={texts} theme="dark" />

      <Float floatIntensity={2}>
        {/* <Torus /> */}
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

const Knot = (props) => (
  <mesh receiveShadow castShadow {...props}>
    <torusKnotGeometry args={[3, 1, 256, 32]} />
    <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
  </mesh>
);

const Torus = (props) => (
  <mesh
    receiveShadow
    castShadow
    {...props}
    rotation-x={Math.PI * 0.25}
    rotation-y={Math.PI * 0.25}
  >
    <torusGeometry args={[4, 1.2, 128, 64]} />
    {/* <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} /> */}
    <meshStandardMaterial color="#e8e5f0" /> {/* #27272a */}
  </mesh>
);

function Bomb(props) {
  const { nodes } = useGLTF("/bomb-gp.glb");
  return (
    <mesh
      receiveShadow
      castShadow
      geometry={nodes.Little_Boy_Little_Boy_Material_0.geometry}
      {...props}
    >
      <MeshTransmissionMaterial backside backsideThickness={10} thickness={5} />
    </mesh>
  );
}

const CustomModel = () => {
  const gltf = useLoader(GLTFLoader, "./bomb-gp.glb");
  return <primitive object={gltf.scene} />;
};

function Status(props) {
  const { theme } = useTheme();

  const text = "/அ";
  return (
    <Text
      fontSize={14}
      letterSpacing={-0.025}
      // font={suspend(inter).default}
      color={theme === "dark" ? "#e8e5f0" : "#27272a"}
      {...props}
    >
      {text}
    </Text>
  );
}

const AnimatedText = ({ text, theme, ...props }) => {
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

  const splitText = text.split("").map((char, index) => (
    <span key={index} className="char" style={charStyle}>
      {char}
    </span>
  ));

  return (
    <animated.group position={position}>
      <Text
        fontSize={4}
        letterSpacing={-0.025}
        color={theme === "dark" ? "#e8e5f0" : "#27272a"}
        style={{ ...h1Style, ...charStyle }}
        {...props}
      >
        {text}
      </Text>
    </animated.group>
  );
};

const TextLoop = ({ texts, theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);

  return (
    <AnimatedText
      key={texts[currentIndex]} // Force re-render on text change
      text={texts[currentIndex]}
      theme={theme}
    />
  );
};
