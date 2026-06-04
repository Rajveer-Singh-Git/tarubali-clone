# Taru Bali Website Reconstruction

This is a frontend reconstruction of the luxury wellness and skincare platform, **tarubali.com**. 

My goal with this project was to challenge myself with high-end editorial layouts, fine typography systems, and complex scroll-driven interactions. I wanted to see how closely I could match the visual pacing and sophisticated feel of the original site while maintaining solid performance under the hood.

---

##  Project Structure

Here is how the project is organized. All UI modules are broken down into self-contained React components:

```bash
TARUBALI-CLONE/
├── public/
└── src/
    ├── assets/
    │   ├── pattern.svg           # Custom SVG for background
    │   └── tarubali.webp         # Tarubali Herbal oil bottle image
    ├── components/
    │   ├── About.jsx             # Story and brand introductory section
    │   ├── BotanicalJournal.jsx  # 3-column blog grid with uniform layout cards
    │   ├── DailyBodyCare.jsx     # Pinned radial card-dealing animation
    │   ├── FAQ.jsx               # Tab-switched frequently asked questions
    │   ├── Footer.jsx            # Multi-column footer with visual certifications
    │   ├── Hero.jsx              # Landing fold with primary visuals
    │   ├── MoreThanNumber.jsx    # Self-drawing wireframe geometry with slow rotation
    │   ├── NaturalIngredients.jsx # Botanical ingredients focus slider/grid
    │   ├── NavBar.jsx            # Animated logo preloader + glassmorphism wrapper
    │   ├── PartnershipForm.jsx   # Double-bordered contact form with overlapping image
    │   ├── Principles.jsx        # Brand values and sourcing ethics section
    │   ├── Products.jsx          # Tarubali Herbal oil showcase
    │   ├── Producttwo.jsx        # Tarubali Herbal soap showcase
    │   ├── ResellerOpportunity.jsx # Split-screen overview for distributors
    │   ├── Ritual.jsx            # Recommended step-by-step application guide
    │   ├── SacredNumber.jsx      # Scroll-synced product zoom-out block
    │   └── Testimonial.jsx       # Elegant editorial quote showcase
    ├── App.jsx                   # Component orchestrator
    ├── index.css                   # Custom global stylings, transitions, and reset
    └── main.jsx                  # React application entry point
```

---

##  The Tech Stack (And Why I Chose It)

*   **React (Vite):** Vite gets the local dev environment running instantly. React's modular structure made it easy to break this long, single-page landing layout into clean, reusable files.
*   **Tailwind CSS:** Essential for matching the exact editorial spacing, custom grid alignments, and typography scales without writing thousands of lines of custom CSS.
*   **GSAP & `@gsap/react`:** The original site lives and breathes smooth animations. Standard CSS transitions or lightweight animation libraries weren't enough to handle complex scroll pinning and custom easing curves. I used the official `@gsap/react` hook to ensure clean animation cleanup and avoid memory leaks when components mount or unmount.

---

Here is the updated **Component-by-Component: Feature & Animation Directory** for your README. 

All component entries have been expanded to match the technical, editorial, and animation-focused depth of your highly detailed sections. Every description now thoroughly details layout structures, precise GSAP implementations (such as scroll-scrubbing, clip-paths, timeline staggers, and easing curves), and interactive states.

---

##  Component-by-Component: Feature & Animation Directory

### 1. `NavBar.jsx`
*   **Design & Features:** Full-screen menu overlay, a language switcher dropdown with `rounded-2xl` capsule buttons, centered branding logo, and call-to-actions ("Partnership", "Shop").
*   **Interactive Animations:**
    *   *Preloader*: On initial page load, the central logo starts scaled up at `2.5x` at `45vh` (dead-center of the screen) and gracefully moves up and scales down to `1x` to join the navbar.
    *   *Intro Stagger*: The other navbar buttons fade and slide down into view sequentially after the logo finishes its move.
    *   *Adaptive Glassmorphism*: Utilizing ScrollTrigger, the navbar is transparent at first, but automatically transitions to a blurry capsule (`backdrop-blur-md bg-[#193826]/80`) with defensive borders once the user scrolls past `50px`.

### 2. `Hero.jsx`
*   **Design & Features:** The immersive landing fold designed to establish the editorial aesthetic, presenting high-quality botanical imagery and primary typography.
*   **Interactive Animations:** 
    *   *Preloader Handoff*: Synchronized with the navbar load, the hero container fades in smoothly. 
    *   *Ken Burns Pan*: The hero background image executes a slow, continuous pan and scale (`scale: 1.0` to `scale: 1.1` over `15s`) to create an immediate cinematic, organic depth.
    *   *Guided Indicator*: A subtle "Scroll Down" prompt at the bottom boundary runs on an infinite yoyo-bounce loop utilizing a soft custom ease (`ease: "power1.inOut"`) to draw the eye downward without interfering with page load.

### 3. `About.jsx`
*   **Design & Features:** Brand story section focusing on Balinese wellness heritage and organic production philosophies.
*   **Interactive Animations:** 
    *   *Masked Text Reveal*: Text blocks utilize `overflow-hidden` wraps. On scroll entry, a GSAP timeline splits paragraphs into separate line segments, rising them up sequentially by animating `y: "100%"` to `y: "0%"`.
    *   *Scroll-Linked Slow Fade*: Sub-headings and secondary editorial texts fade in synchronously using ScrollTrigger with a gentle ease (`ease: "power2.out"`), pacing the narrative perfectly to match normal reading speeds.

### 4. `Principles.jsx`
*   **Design & Features:** Highlight grid focusing on ethical sourcing, vegan certification, and pure ingredients.
*   **Interactive Animations:** 
    *   *Lagged Column Stagger*: On entering the viewport, card columns rise from the bottom edge on a staggered timeline (`stagger: 0.15`).
    *   *Responsive Friction*: To simulate weight, each card features a subtle scale hover transition (`scale: 1.02`), combined with dynamic vertical shifts (`y` offset adjustments) controlled by viewport scroll momentum to keep card interactions lively yet elegant.

### 5. `Products.jsx`
*   **Design & Features:** Primary grid showcasing the tarubali herbal oil bottle collections.
*   **Interactive Animations:** 
    *   *Interactive Hotspots*: Three pulsating circular vector nodes overlaying the bottle fade and scale on viewport entry. Hovering over a hotspot reveals a descriptive, border-framed tooltip detailing individual structural components (Pump, Emblem, Protected Glass).
    *   *Responsive Gallery State*: Clicking any of the vertical thumbnails on the right triggers a clean, low-latency crossfade (`opacity: 0` to `1` over `0.4s`) that updates the main product showcase image while maintaining performance.

### 6. `Producttwo.jsx`
*   **Design & Features:** Detailed split showcase showcasing the brand's  Herbal soap, featuring an interactive asset frame and a descriptive text column.
*   **Interactive Animations:** 
    *   *Interactive Hotspots*: Three pulsating circular vector nodes overlaying the bottle fade and scale on viewport entry. Hovering over a hotspot reveals a descriptive, border-framed tooltip detailing individual structural components (Pump, Emblem, Protected Glass).
    *   *Responsive Gallery State*: Clicking any of the vertical thumbnails on the right triggers a clean, low-latency crossfade (`opacity: 0` to `1` over `0.4s`) that updates the main product showcase image while maintaining performance.

### 7. `Ritual.jsx`
*   **Design & Features:** Step-by-step interactive routine outlining how to apply the botanical oils.
*   **Interactive Animations:** 
    *   *Progressive Path Drawing*: A vertical SVG divider line traces down the center of the step layout on scroll, acting as a visual progress bar.
    *   *Step-by-Step Stagger*: Individual routine cards fade and slide in from alternating sides as the timeline draws past their positions, guiding the user through the wellness instructions sequentially.

### 8. `NaturalIngredients.jsx`
*   **Design & Features:** Focus grid highlighting Balinese botanical extractions (flowers, leaves, and essential oils).
*   **Interactive Animations:** 
    *   *Soft Zoom Reveal*: On scroll-in, the cards emerge with a slight scale and opacity rise. 
    *   *Hover Expansion*: Hovering over an ingredient card triggers a micro-interaction where the botanical image scales up by `6%`, the dark overlay dims, and a hidden textual breakdown of benefits rises smoothly from the bottom margin.

### 9. `SacredNumber.jsx`
*   **Design & Features:** Visual column layout highlighting the "Power of 108" behind the botanical formulas, complete with a massive faint background watermark.
*   **Interactive Animations:**
    *   *Parallax Scale-Down*: The central photo starts heavily zoomed (`scale: 1.8`) and scales down to `1.0` inside its `overflow-hidden` container to fit perfectly inside its golden border on a scrubbed ScrollTrigger timeline.
    *   *Synced Text Reveal*: The left heading and right description text blocks are triggered on a separate timeline that plays right as the image scaling is completing.

### 10. `MoreThanNumber.jsx`
*   **Design & Features:** Centered visual break featuring an abstract geometric gold wire circle and calligraphic subheadings.
*   **Interactive Animations:** 
    *   *Vector Tracing*: The overlapping SVG circles start invisible; as the user scrolls, they "draw" themselves into view by animating their `strokeDashoffset` dynamically to `0`.
    *   *Infinite Rotation*: Once drawn, a continuous, linear timeline gently spins the vector wireframe indefinitely to keep the screen dynamic.

### 11. `DailyBodyCare.jsx`
*   **Design & Features:** A scroll-pinned showcase displaying three distinct content cards (two image cards and a central descriptive card).
*   **Interactive Animations:**
    *   *The Radial Card Sweep*: To avoid a basic linear fade, the cards are "dealt" onto the screen in a soft, sweeping circular arc.
    *   *Implementation*: I shifted the `transformOrigin` of the absolute-positioned cards far below the screen bounds (`transformOrigin: "50% 200vh"`). By animating their rotations, the cards swing elegantly from off-screen right into their final positions, slightly overlapping the background text.

### 12. `Testimonial.jsx`
*   **Design & Features:** Elegant, spacious text block presenting quotes from spa clients and luxury partners.
*   **Interactive Animations:** 
    *   *Soft Vignette Fade*: As the quote approaches the center viewport, the surrounding elements dim slightly, drawing exclusive focus to the text.
    *   *Editorial Slide-Up*: The quote text and attribution fade and slide upward sequentially with a high scrub factor (`scrub: 1.5`), making the text emerge in a slow, elegant fashion.

### 13. `ResellerOpportunity.jsx`
*   **Design & Features:** Two-column landscape split layout detailing global distribution partnerships.
*   **Interactive Animations:** 
    *   *Asymmetric Slide-In*: The framed vertical portrait on the left slides in from the left margin, masked by a dynamic clip-path wipe (`clip-path: inset(0 100% 0 0)` transitioning to `inset(0 0 0 0)`).
    *   *Opposing Text Stagger*: Concurrently, the partner application criteria columns slide in softly from the opposite right margin, keeping the viewport movement balanced.

### 14. `PartnershipForm.jsx`
*   **Design & Features:** Form section wrapped in a double gold-line frame with dark green inputs that focus-highlight in gold. Features an overlapping model photo at the bottom-right corner.
*   **Interactive Animations:** 
    *   *Wipe Reveal*: The framed card slides up softly on scroll.
    *   *Corner Pop*: The overlapping image slides in independently at an angle from the bottom-right once the main form box settles, emphasizing the layered layout.

### 15. `BotanicalJournal.jsx`
*   **Design & Features:** 3-column editorial blog grid showing capsule-shaped tags. The cards use `mt-auto` on their "Continue Reading" links to ensure they stay aligned at the bottom regardless of the title length.
*   **Interactive Animations:** A staggered card reveal upon scroll, combined with an interactive scale zoom (`scale-105`) on the card image when hovered over.

### 16. `FAQ.jsx`
*   **Design & Features:** Two-column grid layout for frequently asked questions, toggleable by two text tabs ("PRODUCTS" and "PARTNERSHIP").
*   **Interactive Animations:** 
    *   *Tab Underline Slide*: The active tab's underline transitions smoothly to the newly selected tab.
    *   *Staggered List Refresh*: When switching tabs, a GSAP timeline animates the previous questions out and staggers the new list up and in with a quick fade.

### 17. `Footer.jsx`
*   **Design & Features:** Multi-column layout with indices, social links, custom SVG gold woven-rattan borders, and replacement-ready image placeholders for the brand's certifications (EU, red-ribbon, Halal). Features a perfectly centered bottom copyright row.
*   **Interactive Animations:** 
    *   *Smooth Ascent*: A sequential fade-up of link groups on scroll.
    *   *Back to Top*: A smooth-scroll window event attached to the back-to-top button.
    *   *Global "?" Button*: A sticky bottom-right button that floats comfortably above the page without extending the body height..

---

## ⚙️ How to Run This Project Locally

To get the project running on your local machine, follow these steps:

1.  **Clone the files:**
    ```bash
    git clone <your-repository-url>
    cd tarubali-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the local development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to the local address shown in your terminal (usually `http://localhost:5173`).