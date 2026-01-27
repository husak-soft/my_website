const ACCENT_GREEN = "#39FF14";
const ACCENT_GREEN_RGB = "57, 255, 20";

export default `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #0A0A0A;
            color: #F0F0F0;
            scroll-behavior: smooth;
        }

        .text-accent { color: ${ACCENT_GREEN} !important; }
        .bg-accent { background-color: ${ACCENT_GREEN} !important; }
        .border-accent { border-color: ${ACCENT_GREEN} !important; }
        .hover-text-accent:hover { color: ${ACCENT_GREEN} !important; }
        .hover-border-accent:hover { border-color: ${ACCENT_GREEN} !important; }

        .hero-tech-bg {
            background: linear-gradient(135deg, #0A0A0A 0%, #0d1209 50%, #0A0A0A 100%);
            position: relative;
        }

        .hero-tech-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
              radial-gradient(circle at 20% 30%, rgba(57, 255, 20, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(57, 255, 20, 0.02) 0%, transparent 50%);
            pointer-events: none;
        }

        .reveal-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .reveal-on-scroll.active {
            opacity: 1;
            transform: translateY(0);
        }

        .glow-hover {
            transition: all 0.3s ease-out;
            box-shadow: 0 0 0px #0A0A0A;
            border: 1px solid transparent;
        }
        .glow-hover:hover {
            box-shadow: 0 0 15px rgba(${ACCENT_GREEN_RGB}, 0.4), 0 0 5px rgba(${ACCENT_GREEN_RGB}, 0.2);
            transform: translateY(-2px);
            border-color: ${ACCENT_GREEN};
        }
      `