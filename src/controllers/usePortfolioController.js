import { useEffect, useState } from 'react';
import { profile, projects, skillGroups, socials } from '../models/portfolio';
export function usePortfolioController() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All projects');
  const [activeSection, setActiveSection] = useState('home');
  const [photoFailed, setPhotoFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { if (!copied) return; const timer = setTimeout(() => setCopied(false), 2500); return () => clearTimeout(timer); }, [copied]);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); }
    catch { window.location.href = `mailto:${profile.email}`; }
  }
  return { profile, skillGroups, socials, projects: projects.filter(p => filter === 'All projects' || p.category === filter), filter, setFilter, menuOpen, setMenuOpen, activeSection, photoFailed, setPhotoFailed, copied, copyEmail };
}
