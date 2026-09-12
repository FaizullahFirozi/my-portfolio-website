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
    link: "https://github.com/faizllahfirozi",
  },
  {
    name: "LinkedIn",
    username: "Faizllah Firozi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/faizllahfirozi",
  },
  {
    name: "Twitter",
    username: "@faizullahfirozi",
    icon: Icons.twitter,
    link: "https://twitter.com/faizllahfirozi",
  },
  {
    name: "Gmail",
    username: "faiuzllah.firozi@gmail.com",
    icon: Icons.gmail,
    link: "mailto:faiuzllah.firozi@gmail.com",
  },
];
