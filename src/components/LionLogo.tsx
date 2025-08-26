import logoImage from '../assets/d42087fc41ca11ee93aec111c391bc9e8e9c169d.png';

export default function LionLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src={logoImage}
      alt="The Property Company Lion Logo"
      className={`${className} object-contain`}
      style={{ 
        backgroundColor: 'transparent',
        mixBlendMode: 'normal'
      }}
    />
  )
}