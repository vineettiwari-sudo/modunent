# Modunent UI Library

Modunent is a scalable ecommerce UI component library.

Current goals:
- Clean ecommerce design system
- Strict spacing scale
- Consistent radius
- No random Tailwind usage
- Design driven by Figma references

Architecture Rules:

1. All components must use consistent sizing:
   - Button height: 48px
   - Radius: 12px
   - Padding: 24px horizontal
   - Font size: 16px
   - Font weight: 500

2. No glow shadows.
3. No arbitrary Tailwind values unless necessary.
4. Variants and states must be controlled via props.
5. forcedState is used for visual state preview in ComponentDetail.
6. No global CSS that overrides Tailwind button colors.

Future Plan:
- Extract design tokens to tokens.css
- Convert all primitives to token-based system
- Scale into full ecommerce system