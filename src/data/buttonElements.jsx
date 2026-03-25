export const BUTTON_ELEMENTS = [
  {
    id: "btn-hover-me",
    title: "Hover Me",
    author: "uiverse.io",
    views: 136000,
    likes: 1897,
    description: "A beautiful animated button with hover effects",
    tags: ["button", "hover", "animated", "cyan"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        HOVER ME
      </button>
    ),
    code: `<button
  type="button"
  className="
    inline-flex items-center justify-center
    h-10 px-4
    rounded-full border-2
    border-cyan-400 text-cyan-400
    font-semibold text-sm
    bg-transparent
    transition-colors duration-300
    hover:bg-cyan-400 hover:text-black
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
  "
>
  Hover me
</button>`,
    html: `<button type="button" class="hover-button">HOVER ME</button>`,
    css: `/* Exact match to preview: 40px height, 24px horizontal padding, pill (9999px), cyan-400 #22d3ee */
.hover-button {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  border: 2px solid #22d3ee;
  color: #22d3ee;
  background: transparent;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hover-button:hover {
  background: #22d3ee;
  color: #000;
}`,
  },
  {
    id: "btn-get-started",
    title: "Get Started",
    author: "buttonlab",
    views: 214000,
    likes: 2134,
    description: "Primary CTA button",
    tags: ["button", "primary", "blue"],
preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-blue-500 text-[#e7e3e4] rounded-full hover:bg-blue-600 transition-colors font-semibold text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Get Started
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-blue-500 text-[#e7e3e4] rounded-full hover:bg-blue-600 transition-colors font-semibold text-sm px-3"
>
  Get Started
</button>`,
    html: `<button type="button" class="btn-primary">Get Started</button>`,
    css: `/* Exact match to preview: 40px height, 24px padding, pill shape, blue-500/600 */
.btn-primary {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: #3b82f6;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-primary:hover {
  background: #2563eb;
}`,
  },
  {
    id: "btn-app-store",
    title: "Download",
    author: "appbuttons",
    views: 189000,
    likes: 1567,
    description: "App store style download button",
    tags: ["button", "download", "app"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-black text-[#e7e3e4] rounded-full hover:bg-zinc-900 transition-colors text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        <div className="text-left">
          <div className="text-xs">Download on the</div>
          <div className="font-semibold">Google Play</div>
        </div>
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-black text-[#e7e3e4] rounded-full hover:bg-zinc-900 transition-colors text-sm px-3"
>
  <div className="text-left">
    <div className="text-xs">Download on the</div>
    <div className="font-semibold">Google Play</div>
  </div>
</button>`,
    html: `<button type="button" class="btn-download">
  <div class="btn-download-inner">
    <span class="btn-download-label">Download on the</span>
    <span class="btn-download-title">Google Play</span>
  </div>
</button>`,
    css: `/* Exact match to preview: black bg, two-line label, 40px height, 24px padding, pill */
.btn-download {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: #000000;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-download:hover {
  background: #18181b;
}
.btn-download-inner {
  text-align: left;
}
.btn-download-label {
  display: block;
  font-size: 12px;
  line-height: 1.25;
}
.btn-download-title {
  display: block;
  font-weight: 600;
  line-height: 1.25;
}`,
  },
  {
    id: "btn-hover",
    title: "Hover",
    author: "gradientpro",
    views: 178000,
    likes: 1890,
    description: "Gradient hover button",
    tags: ["button", "gradient", "hover"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-pink-500 to-orange-400 text-[#e7e3e4] font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Hover
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-pink-500 to-orange-400 text-[#e7e3e4] font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm px-3"
>
  Hover
</button>`,
    html: `<button type="button" class="btn-gradient-hover">Hover</button>`,
    css: `/* Exact match: pink-500 to orange-400 gradient, 40px, 24px padding, pill, hover scale 1.05 + shadow-xl */
.btn-gradient-hover {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: linear-gradient(to right, #ec4899, #fb923c);
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.btn-gradient-hover:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}`,
  },
  {
    id: "btn-super-button",
    title: "SuperButton",
    author: "btnmaster",
    views: 234000,
    likes: 2487,
    description: "Bold yellow button",
    tags: ["button", "yellow", "bold"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-yellow-200 to-yellow-300 text-zinc-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        PRESS IN
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-yellow-200 to-yellow-300 text-zinc-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-sm px-3"
>
  PRESS IN
</button>`,
    html: `<button type="button" class="btn-super">PRESS IN</button>`,
    css: `/* Exact match: yellow-200 to yellow-300, zinc-900 text, hover gradient yellow-300 to yellow-400 */
.btn-super {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: linear-gradient(to right, #fef08a, #fde047);
  color: #18181b;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease;
}
.btn-super:hover {
  background: linear-gradient(to right, #fde047, #facc15);
}`,
  },
  {
    id: "btn-back-to-top",
    title: "Back to Top",
    author: "navigationui",
    views: 156000,
    likes: 1234,
    description: "Back to top navigation button",
    tags: ["button", "navigation"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-zinc-800 text-[#e7e3e4] rounded-full hover:bg-zinc-700 transition-colors gap-2 text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Back to Top <span>↑</span>
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-zinc-800 text-[#e7e3e4] rounded-full hover:bg-zinc-700 transition-colors gap-2 text-sm px-3"
>
  Back to Top <span>↑</span>
</button>`,
    html: `<button type="button" class="btn-back-top">Back to Top <span>↑</span></button>`,
    css: `/* Exact match: zinc-800 bg, 40px, 24px padding, gap-2 (8px), pill */
.btn-back-top {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  background: #27272a;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-back-top:hover {
  background: #3f3f46;
}`,
  },
  {
    id: "btn-get-a-job",
    title: "Get a job",
    author: "careerbtn",
    views: 98000,
    likes: 945,
    description: "Purple CTA with arrow",
    tags: ["button", "purple", "cta"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-purple-600 text-[#e7e3e4] rounded-full hover:bg-purple-700 transition-colors gap-2 text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Get a job <span className="text-xl">→</span>
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-purple-600 text-[#e7e3e4] rounded-full hover:bg-purple-700 transition-colors gap-2 text-sm px-3"
>
  Get a job <span className="text-xl">→</span>
</button>`,
    html: `<button type="button" class="btn-job">Get a job <span class="btn-job-arrow">→</span></button>`,
    css: `/* Exact match: purple-600, 40px, 24px padding, arrow text-xl (20px) */
.btn-job {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  background: #9333ea;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-job:hover {
  background: #7e22ce;
}
.btn-job-arrow {
  font-size: 20px;
}`,
  },
  {
    id: "btn-glitch",
    title: "GLITCH",
    author: "effectslab",
    views: 167000,
    likes: 1678,
    description: "Inverted hover button",
    tags: ["button", "outline", "glitch"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-zinc-900 text-[#e7e3e4] font-bold rounded-full border-2 border-white hover:bg-white hover:text-zinc-900 transition-all duration-300 text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        GLITCH
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-zinc-900 text-[#e7e3e4] font-bold rounded-full border-2 border-white hover:bg-white hover:text-zinc-900 transition-all duration-300 text-sm px-3"
>
  GLITCH
</button>`,
    html: `<button type="button" class="btn-glitch">GLITCH</button>`,
    css: `/* Exact match: zinc-900 bg, white border 2px, hover invert */
.btn-glitch {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: #18181b;
  color: #e7e3e4;
  border: 2px solid #ffffff;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-glitch:hover {
  background: #ffffff;
  color: #18181b;
}`,
  },
  {
    id: "btn-explore",
    title: "Explore",
    author: "ctadesigns",
    views: 145000,
    likes: 1456,
    description: "Minimal black button",
    tags: ["button", "minimal"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-black text-[#e7e3e4] font-semibold rounded-full hover:bg-zinc-900 transition-colors text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Explore
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-black text-[#e7e3e4] font-semibold rounded-full hover:bg-zinc-900 transition-colors text-sm px-3"
>
  Explore
</button>`,
    html: `<button type="button" class="btn-explore">Explore</button>`,
    css: `/* Exact match: black bg, 40px, 24px padding, pill */
.btn-explore {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: #000000;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-explore:hover {
  background: #18181b;
}`,
  },
  {
    id: "btn-gradient",
    title: "Gradient",
    author: "colormaster",
    views: 192000,
    likes: 1789,
    description: "Blue gradient button",
    tags: ["button", "gradient", "blue"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-blue-600 to-blue-400 text-[#e7e3e4] font-semibold rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Gradient
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-blue-600 to-blue-400 text-[#e7e3e4] font-semibold rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 text-sm px-3"
>
  Gradient
</button>`,
    html: `<button type="button" class="btn-gradient-blue">Gradient</button>`,
    css: `/* Exact match: blue-600 to blue-400, hover blue-700 to blue-500 */
.btn-gradient-blue {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: linear-gradient(to right, #2563eb, #60a5fa);
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}
.btn-gradient-blue:hover {
  background: linear-gradient(to right, #1d4ed8, #3b82f6);
}`,
  },
  {
    id: "btn-button",
    title: "Button",
    author: "simpleui",
    views: 267000,
    likes: 2890,
    description: "Simple green button",
    tags: ["button", "green", "simple"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-green-500 text-[#e7e3e4] font-semibold rounded-full hover:bg-green-600 transition-colors text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Button
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-green-500 text-[#e7e3e4] font-semibold rounded-full hover:bg-green-600 transition-colors text-sm px-3"
>
  Button
</button>`,
    html: `<button type="button" class="btn-green">Button</button>`,
    css: `/* Exact match: green-500/600, 40px, 24px padding, pill */
.btn-green {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: #22c55e;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-green:hover {
  background: #16a34a;
}`,
  },
  {
    id: "btn-submit",
    title: "Submit",
    author: "formbuttons",
    views: 189000,
    likes: 1567,
    description: "Outlined submit button",
    tags: ["button", "outline", "form"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-[#e7e3e4] transition-all duration-300 font-semibold text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Submit
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-[#e7e3e4] transition-all duration-300 font-semibold text-sm px-3"
>
  Submit
</button>`,
    html: `<button type="button" class="btn-submit-outline">Submit</button>`,
    css: `/* Exact match: transparent, blue-500 border/text 2px, hover fill */
.btn-submit-outline {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-submit-outline:hover {
  background: #3b82f6;
  color: #e7e3e4;
}`,
  },
  {
    id: "btn-outlined",
    title: "Outlined",
    author: "minimaldesign",
    views: 134000,
    likes: 1123,
    description: "Outlined dark button",
    tags: ["button", "outline"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-transparent border-2 border-zinc-900 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-[#e7e3e4] transition-all duration-300 text-sm dark:border-white dark:text-[#e7e3e4] dark:hover:bg-white dark:hover:text-zinc-900" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Button
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-transparent border-2 border-zinc-900 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-[#e7e3e4] transition-all duration-300 text-sm px-3 dark:border-white dark:text-[#e7e3e4] dark:hover:bg-white dark:hover:text-zinc-900"
>
  Button
</button>`,
    html: `<button type="button" class="btn-outlined">Button</button>`,
    css: `/* Exact match: transparent, zinc-900 border/text 2px, hover fill (light theme) */
.btn-outlined {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: transparent;
  color: #18181b;
  border: 2px solid #18181b;
  border-radius: 9999px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-outlined:hover {
  background: #18181b;
  color: #e7e3e4;
}`,
  },
  {
    id: "btn-rounded",
    title: "Rounded",
    author: "modernui",
    views: 178000,
    likes: 1678,
    description: "Pill-shaped button",
    tags: ["button", "rounded", "pill"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-zinc-900 text-[#e7e3e4] font-semibold rounded-full hover:bg-zinc-800 transition-colors text-sm dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Button
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-zinc-900 text-[#e7e3e4] font-semibold rounded-full hover:bg-zinc-800 transition-colors text-sm px-3 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
>
  Button
</button>`,
    html: `<button type="button" class="btn-rounded">Button</button>`,
    css: `/* Exact match: zinc-900, 40px, 24px padding, pill (light theme) */
.btn-rounded {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: #18181b;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-rounded:hover {
  background: #27272a;
}`,
  },
  {
    id: "btn-hover-me-2",
    title: "Hover Me 2",
    author: "interactivebtns",
    views: 156000,
    likes: 1456,
    description: "Purple gradient with scale",
    tags: ["button", "gradient", "purple"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-purple-500 to-purple-700 text-[#e7e3e4] font-bold rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 text-sm" style={{ paddingLeft: 12, paddingRight: 12 }}>
        Hover me
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-gradient-to-r from-purple-500 to-purple-700 text-[#e7e3e4] font-bold rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 text-sm px-3"
>
  Hover me
</button>`,
    html: `<button type="button" class="btn-hover-me-2">Hover me</button>`,
    css: `/* Exact match: purple-500 to purple-700 gradient, hover scale-110 + shadow-2xl */
.btn-hover-me-2 {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  background: linear-gradient(to right, #a855f7, #7e22ce);
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.btn-hover-me-2:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.1);
}`,
  },
  {
    id: "btn-code",
    title: "Code",
    author: "devbuttons",
    views: 123000,
    likes: 967,
    description: "Developer code button",
    tags: ["button", "code", "dev"],
    preview: (
      <button type="button" className="inline-flex items-center justify-center h-10 bg-black text-[#e7e3e4] rounded-full hover:bg-zinc-900 transition-colors gap-2 font-mono text-sm dark:bg-white dark:text-black dark:hover:bg-zinc-200" style={{ paddingLeft: 12, paddingRight: 12 }}>
        <span className="text-green-400">{"</>"}</span> Code
      </button>
    ),
    code: `<button
  type="button"
  className="inline-flex items-center justify-center h-10 bg-black text-[#e7e3e4] rounded-full hover:bg-zinc-900 transition-colors gap-2 font-mono text-sm px-3 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
>
  <span className="text-green-400">{"</>"}</span> Code
</button>`,
    html: `<button type="button" class="btn-code"><span class="btn-code-icon">&lt;/&gt;</span> Code</button>`,
    css: `/* Exact match: black bg, green-400 icon </>, monospace, 40px, 24px padding */
.btn-code {
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  background: #000000;
  color: #e7e3e4;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-family: ui-monospace, monospace;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-code:hover {
  background: #18181b;
}
.btn-code-icon {
  color: #4ade80;
}`,
  },
]
