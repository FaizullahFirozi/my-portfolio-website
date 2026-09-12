import { GitHubStarBadge } from "@/components/common/github-star-badge";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { ScrollHeader } from "@/components/common/scroll-header";
import { routesConfig } from "@/config/routes";
import { LanguageSwitcher } from "@/providers/language-provider";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollHeader>
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <GitHubStarBadge className="w-full justify-center" />
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center gap-2">
            <LanguageSwitcher />
            <GitHubStarBadge />
            <ModeToggle />
          </nav>
        </div>
      </ScrollHeader>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
