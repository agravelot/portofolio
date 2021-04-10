import { motion } from 'framer-motion'

export default function SocialMedia({
  link,
  icon,
  label,
}: {
  link: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <motion.a
      className="relative flex items-center justify-center text-xl focus:outline-none hover:text-white"
      aria-label={label}
      href={link}
      target="_blank"
      rel="noreferrer"
      initial="idle"
      variants={{ idle: {}, hover: {} }}
      whileHover="hover"
      whileFocus="hover"
    >
      <motion.span
        className="relative"
        variants={{ idle: { rotate: 0 }, hover: { rotate: -20 } }}
      >
        {icon}
      </motion.span>
    </motion.a>
  )
}
