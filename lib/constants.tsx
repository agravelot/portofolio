import { IconType } from 'react-icons'
import {
  FaFileAlt,
  FaGithub,
  FaGitlab,
  FaLinkedinIn,
  FaPaperPlane,
  FaTwitter,
} from 'react-icons/fa'

export const email = 'antoine.gravelot@hotmail.fr'

interface SocialMediaItem {
  label: string
  link: string
  icon: IconType
}

export const socialMediaList: SocialMediaItem[] = [
  {
    label: 'Resume',
    link: '/resume.pdf',
    icon: FaFileAlt,
  },
  {
    label: `Mail to ${email}`,
    link: `mailto:${email}`,
    icon: FaPaperPlane,
  },
  {
    label: 'Github',
    link: 'https://github.com/agravelot',
    icon: FaGithub,
  },
  {
    label: 'Gitlab',
    link: 'https://gitlab.com/Nevax',
    icon: FaGitlab,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/antoine-gravelot-bb56b3138/',
    icon: FaLinkedinIn,
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/NevaX07',
    icon: FaTwitter,
  },
]
