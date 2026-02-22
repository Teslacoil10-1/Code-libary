
import inversionNavImg from "@/assets/inversion-nav.png";
import glassSurface from "@/assets/glass-surface.png";

export const componentsData = {
  "intro": {
    title: "Introduction",
    category: "Get Started",
    image: "introImg", 
    description:
      "copy and paste these snippets in your React or HTML projects.",
    code: `// Welcome to UI.Snippets
// Copy any code and paste it into your project.`,
  },

  "inversion-nav": {
    title: "Inversion NavBar",
    category: "components",
    image: inversionNavImg,
    description:
      "A clean glassmorphic navigation bar with an animated color inversion effect on hover.",
    code: `<!DOCTYPE html>
<html>
    <head>
        <style>
            .navBar {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                width: auto;
                min-width: 450px;
                padding: 10px 30px;
                border-radius: 100px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: white;
                font-family: "Segoe UI", Roboto, sans-serif;
                font-weight: 400;
                text-transform: capitalize;
                z-index: 100;
                transition: all 0.3s ease;
            }

            #cta {
                background-color: white;
                color: black;
                mix-blend-mode: screen;
                padding: 8px 22px;
                border-radius: 50px;
                font-weight: 700;
                font-size: 0.85rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            .navBar > div:not(#cta) {
                cursor: pointer;
                padding: 6px 16px;
                border-radius: 50px;
                border: 1px solid transparent;
                transition: all 0.2s ease;
            }

            .navBar:hover {
                background-color: white;
                color: black;
                border-color: #ddd;
                backdrop-filter: blur(0px);
            }

            .navBar > div:not(#cta):hover {
                border: 1px solid rgba(0, 0, 0, 0.67);
            }

            .navBar:hover #cta {
                background-color: black;
                color: white;
                mix-blend-mode: normal;
                border: 1px solid black;
            }

            #cta:hover {
                background-color: white !important;
                color: black !important;
                border: 1px solid black !important;
                mix-blend-mode: normal !important;
            }
        </style>
    </head>
    <body>
        <nav class="navBar">
            <div>home</div>
            <div>features</div>
            <div>pricing</div>
            <div>about</div>
            <div id="cta">get started</div>
        </nav>
    </body>
</html>
`,
  },

  "Glass Surface": {
    title: "Glass Surface",
    category: "components",
    image: glassSurface,
    description:
      "liquid glass effect with dynamic distortion using SVG filters. Perfect for modern UI designs.",
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>

      .liquid-glass-wrapper {
        position: relative;
        width: 460px;
        height: 120px;
        border-radius: 20px;
        overflow: hidden;
        backdrop-filter: blur(3px);
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.25);
      }

      .liquid-glass-effect {
        position: absolute;
        inset: 0;
        backdrop-filter: blur(3px);
        filter: url(#glass-distortion);
        pointer-events: none;
      }

    

     

      .liquid-glass-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 22px;
        font-weight: 600;
        z-index: 3;
      }
    </style>
  </head>

  <body>
    <div class="liquid-glass-wrapper">
      <div class="liquid-glass-effect"></div>
      <div class="liquid-glass-shine"></div>

      <div class="liquid-glass-content">
        Liquid Glass UI
      </div>

      <svg>
        <filter id="glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.01"
            numOctaves="2"
            seed="3"
            result="turb"
          />
          <feGaussianBlur in="turb" stdDeviation="10" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="60"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  </body>
</html>`,
  },

};
