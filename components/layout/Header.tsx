// components/layout/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  GraduationCap,
  Users,
  HelpCircle,
  Tag,
  LogIn,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/consultants', label: 'Consultants', icon: Users, desc: 'Browse expert professors' },
  { href: '/how-it-works', label: 'How It Works', icon: HelpCircle, desc: 'Learn about our process' },
  { href: '/pricing', label: 'Pricing', icon: Tag, desc: 'Flexible plans for everyone' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate in after open, animate out before close
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      const t = setTimeout(() => {
        document.body.style.overflow = '';
      }, 350);
      return () => clearTimeout(t);
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          'bg-card border-b border-border',
          isScrolled ? 'shadow-sm' : 'shadow-none'
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:opacity-85 transition-opacity">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                Sham<span className="text-accent">ademics</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-foreground/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Full-Screen Mobile Menu Overlay ── */}
      {isMenuOpen && (
        <div
          className={cn(
            'fixed inset-0 z-[100] flex flex-col md:hidden',
            'bg-background transition-all duration-350',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>

          {/* Top bar */}
          <div className="relative flex items-center justify-between px-6 h-16 border-b border-border flex-shrink-0">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                Sham<span className="text-accent">ademics</span>
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              aria-label="Close menu"
              className="rounded-full"
            >
              <X size={22} />
            </Button>
          </div>

          {/* Nav links — center stage */}
          <div className="relative flex-1 flex flex-col justify-center px-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
              Navigation
            </p>
            <nav className="space-y-2">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: isVisible ? `${80 + i * 60}ms` : '0ms',
                    }}
                    className={cn(
                      'group flex items-center gap-5 px-5 py-4 rounded-2xl',
                      'border border-transparent hover:border-border hover:bg-card',
                      'transition-all duration-300',
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-6'
                    )}
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xl font-bold text-foreground">{link.label}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{link.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom — auth actions */}
          <div
            className={cn(
              'relative px-8 pb-10 space-y-3 flex-shrink-0 transition-all duration-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: isVisible ? '240ms' : '0ms' }}
          >
            <div className="h-px bg-border mb-5" />
            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link href="/auth/login" onClick={closeMenu}>
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
            </Button>
            <Button variant="default" size="lg" className="w-full" asChild>
              <Link href="/auth/register" onClick={closeMenu}>
                <Rocket className="w-4 h-4" />
                Get Started — It&apos;s Free
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
