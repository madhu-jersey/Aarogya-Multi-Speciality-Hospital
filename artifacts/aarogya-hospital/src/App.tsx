import { type ReactNode, useEffect, useLayoutEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Hero } from './components/Hero';
import { Header } from './components/common';
import { About, Doctors, FAQ, Facilities, HospitalGallery, Reviews, Services, Visit, WhyChooseUs } from './components/Sections';
import { Footer } from './components/Footer';
import { updateSearchMetadata } from './lib/seo';
import './index.css';

const queryClient = new QueryClient();

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function SearchHead() {
  const [location] = useLocation();
  useEffect(() => {
    updateSearchMetadata(location, import.meta.env.VITE_SITE_URL);
  }, [location]);
  return null;
}

function App() {
  useLayoutEffect(() => {
    const elements = [...document.querySelectorAll('.reveal')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    document.documentElement.classList.add('has-reveal-observer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('has-reveal-observer');
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <SearchHead />
          <RoutedErrorBoundary>
            <Switch>
              <Route path="/">
                <>
                  <div className="top-progress" aria-hidden="true" />
                  <Header />
                  <main>
                    <Hero />
                    <About />
                    <Services />
                    <Doctors />
                    <WhyChooseUs />
                    <HospitalGallery />
                    <Reviews />
                    <Facilities />
                    <Visit />
                    <FAQ />
                  </main>
                  <Footer />
                </>
              </Route>
              <Route component={NotFound} />
            </Switch>
          </RoutedErrorBoundary>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
