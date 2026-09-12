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
    link: "https://github.com/faiuzllahfirozi",
  },
  {
    name: "LinkedIn",
    username: "Faiuzllah Firozi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/faiuzllahfirozi",
  },
  {
    name: "Twitter",
    username: "@faizullahfirozi",
    icon: Icons.twitter,
    link: "https://twitter.com/faiuzllahfirozi",
  },
  {
    name: "Gmail",
    username: "faiuzllah.firozi@gmail.com",
    icon: Icons.gmail,
    link: "mailto:faiuzllah.firozi@gmail.com",
  },
];
