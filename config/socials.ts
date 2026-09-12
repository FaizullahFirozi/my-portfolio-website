import { SiFacebook, SiWhatsapp, SiYoutube } from "react-icons/si";

import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@faizullahfirozi",
    icon: Icons.gitHub,
    link: "https://github.com/faizullahfirozi",
  },
  {
    name: "LinkedIn",
    username: "Faizllah Firozi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/faizullahfirozi",
  },
  {
    name: "Twitter",
    username: "@faizullahfirozi",
    icon: Icons.twitter,
    link: "https://twitter.com/faizullahfirozi",
  },
  {
    name: "Facebook",
    username: "@faizullahfirozi",
    icon: SiFacebook,
    link: "https://www.facebook.com/faizullahfirozi",
  },
  {
    name: "YouTube",
    username: "@faizullahfirozi",
    icon: SiYoutube,
    link: "https://www.youtube.com/@faizullahfirozi",
  },
  {
    name: "WhatsApp",
    username: "+93 780 002 528",
    icon: SiWhatsapp,
    link: "https://wa.me/93780002528",
  },
  {
    name: "Gmail",
    username: "faizullah.firozi@gmail.com",
    icon: Icons.gmail,
    link: "mailto:faizullah.firozi@gmail.com",
  },
];
