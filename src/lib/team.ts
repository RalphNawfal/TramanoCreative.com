/**
 * The two founders, and the portraits of them.
 *
 * Shared because both the homepage and /about/ show this pair. It lived in
 * the about page first; the homepage had a build-time `fs.existsSync` check
 * for a single combined `/team/founders.jpg` that never got shot, so it spent
 * its life rendering a gradient placeholder instead.
 *
 * Both files are cropped to an identical 4:5 at 720x900 so any grid built
 * from this list lines up. See the crop note in src/app/about/page.tsx.
 */
export type Founder = {
  name: string;
  role: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const founders: Founder[] = [
  {
    name: "Ralph Nawfal",
    role: "Co-founder",
    src: "/team/ralph-nawfal.webp",
    width: 720,
    height: 900,
    alt: "Ralph Nawfal, co-founder of Tramano Creative, photographed in Beirut at night.",
  },
  {
    name: "Ramy Al Housary",
    role: "Co-founder",
    src: "/team/ramy-al-housary.webp",
    width: 720,
    height: 900,
    alt: "Ramy Al Housary, co-founder of Tramano Creative, photographed in Beirut at night.",
  },
];
