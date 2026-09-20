"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import { MAIN_NAV, PRIMARY_CTA } from "@/config/navigation";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

/**
 * Sticky site header with a subtle scroll transition (translucent over the
 * hero, solid + shadow once scrolled). Manages the mobile drawer and closes it
 * on route change. Only background/shadow transition — no layout animation.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-shadow duration-300",
        // Solid surface so the dark logo + nav stay readable over the dark
        // hero/page-hero sections. Shadow deepens once scrolled.
        scrolled
          ? "border-border bg-surface shadow-md"
          : "border-border bg-surface shadow-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href !== "/" &&
                  !item.href.startsWith("/#") &&
                  pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-[44px] items-center rounded-md px-3 text-bodySm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      isActive
                        ? "text-accent-dark"
                        : "text-content hover:text-accent-dark",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={PRIMARY_CTA.href} variant="primary" size="sm">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="inline-flex size-11 items-center justify-center rounded-md text-content transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
        >
          <Menu className="size-6" aria-hidden />
        </button>
      </Container>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
