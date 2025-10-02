

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, Newspaper, Briefcase, Package, FolderOpen, Info, Mail, Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './components/common/LanguageToggle';
import { LanguageProvider, useLanguage } from './components/i18n/LanguageContext';
import { useTranslation } from './components/i18n/translations';

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // This effect should only run when the location.pathname changes.
    // Its purpose is to close the mobile sidebar automatically when the user navigates to a new page.
    setSidebarOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: t.nav.home, icon: Home, path: 'Home' },
    { name: t.nav.news, icon: Newspaper, path: 'News' },
    { name: t.nav.services, icon: Briefcase, path: 'Services' },
    { name: t.nav.products, icon: Package, path: 'Products' },
    { name: t.nav.portfolio, icon: FolderOpen, path: 'Portfolio' },
    { name: t.nav.about, icon: Info, path: 'About' },
    { name: t.nav.contact, icon: Mail, path: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary-blue: #2563eb;
          --secondary-cyan: #0ea5e9;
          --light-blue: #60a5fa;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden"
                >
                  {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              )}
              <Link to={createPageUrl('Home')} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-gray-900">Innovalogic.ai</div>
                  <div className="text-xs text-gray-500">LLC</div>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-blue-600 hover:bg-blue-700 hidden sm:flex">
                  {t.common.contactUs}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block fixed left-0 top-20 bottom-0 w-72 bg-white border-r border-gray-200 z-40 overflow-y-auto">
        <nav className="p-6 space-y-2">
          {navItems.map((item) => {
            const pageUrl = createPageUrl(item.path);
            const isActive = location.pathname === pageUrl || (location.pathname.startsWith(createPageUrl(item.path + 'Detail')) && item.path !== 'Home');
            return (
              <Link
                key={item.path}
                to={pageUrl}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Sidebar - Mobile */}
      {isMobile && sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed left-0 top-20 bottom-0 w-72 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl">
            <nav className="p-6 space-y-2">
              {navItems.map((item) => {
                const pageUrl = createPageUrl(item.path);
                const isActive = location.pathname === pageUrl;
                return (
                  <Link
                    key={item.path}
                    to={pageUrl}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="pt-20 lg:pl-72 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="lg:pl-72 bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Innovalogic.ai</div>
                  <div className="text-sm text-gray-400">LLC</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.path}>
                    <Link
                      to={createPageUrl(item.path)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.legal}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">{t.footer.social}</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Innovalogic.ai LLC. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <MainLayout>{children}</MainLayout>
    </LanguageProvider>
  );
}

