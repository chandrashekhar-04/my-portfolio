import Hero from './HeroSocial/Hero';
import SocialSidebar from './HeroSocial/SocialSideBar';

export default function HeroSocial({ darkMode }) {
  return (
    <>
      <SocialSidebar darkMode={darkMode} />
      <Hero darkMode={darkMode} />
    </>
  );
}
