// ProductViewer.jsx
import React from "react";
import useMacbookStore from "../Store"
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import MacbookModel14 from "./Models/Macbook-14";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {

  // Destructuring what we are getting from the Store 
  const {color, scale, setColor, setScale} = useMacbookStore();

 const isMobile = useMediaQuery({ query: '(max-width: 1024px)'})

 const colorName = color === "#adb5bd"? 'Silver' : 'Space Black';

 const sizeLabel = scale === 0.06? '14"' : '16"';

  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info">Macbook Pro {sizeLabel} | Available in {colorName}</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            {/* Set to Silver and active */}
            <div 
              onClick={() => setColor('#adb5bd')} 
              className={clsx("bg-neutral-300", color === '#adb5bd' && 'active')}
            />
            {/* Set to Space Black and active*/}
            <div 
              onClick={() => setColor('#2e2c2e')}
              className={clsx('bg-neutral-900', color === "#2e2c2e" && 'active')}
            />
          </div>
          <div className="size-control">
            {/* Set to 14" */}
            <div 
              onClick={() => setScale(0.06)}
              className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
            ><p>14"</p></div>
            {/* Set to 16" */}
            <div 
              onClick={() => setScale(0.08)}
              className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
            ><p>16"</p></div>
          </div>
        </div>
      </div>

      <Canvas id="canvas" camera={{position:[0, 2, 5], fov:50, near:0.1, far:100}}>
        <StudioLights />
   {/* Renders different models depending on what is clicked */}
        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile}/>
      </Canvas>
    </section>
  );
};

export default ProductViewer;