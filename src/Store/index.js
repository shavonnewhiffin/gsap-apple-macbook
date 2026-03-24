import { create } from 'zustand';

// Keeps track of which version and color of the macbook model is being shown
const useMacbookStore = create((set)=>({
    // Default color - Space Black when app starts
    color: '#2e2c2e', 
    // Function to change color - called in ProductViewer
    setColor: (color) => set({ color }),
    
    // Default scale
    scale: 0.08,
    // Function to change scale
    setScale: (scale) => set({ scale }),


// Modifying the texture of the Macbook in the Features component
    texture: '/videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    // Resets everything back to default
    reset:()=> set({ color: '#2e2c2e', scale:0.08, texture: '/videos/feature-1.mp4' }),
}))

export default useMacbookStore;