'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  ExternalLink, 
  Radio, 
  Tv, 
  Globe2 
} from 'lucide-react';
import { CATEGORIES, LOCATION_INFO } from '@/utils/constants';
import { useLanguage } from '@/app/context/LanguageContext';
import { LocationMap } from './LocationMap';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full bg-[#004225] border-t border-[#002816] text-[#F5F5DC]">
      {/* 1. Location & Interactive Map Section in Footer */}
      <section className="border-b border-[#002816] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#FFCF9D] text-xs font-black uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-[#FFB000]" />
                <span>{t.ui.findUs}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F5F5DC] tracking-tight">
                Visit Our Central Studios & Offices in Addis Ababa
              </h2>
              <p className="text-xs sm:text-sm text-[#FFCF9D] max-w-2xl">
                Located in the heart of Kazanchis near UNECA, welcoming visitors, researchers, and partners for media production and sacred archive visits.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#002816] hover:bg-[#001c10] border border-[#FFCF9D]/30 text-[#F5F5DC] font-bold text-xs flex items-center gap-2 transition-colors shadow-md"
            >
              <span>Full Contact & Inquiry Form</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FFB000]" />
            </Link>
          </div>

          {/* Interactive Google Map of HQ */}
          <LocationMap showDetails={true} />
        </div>
      </section>

      {/* 2. Main Footer Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-[#002816] border border-[#FFCF9D]/30 flex items-center justify-center text-[#FFB000] font-black shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-[#F5F5DC] tracking-tight">
                  ZEMA <span className="text-[#FFCF9D]">MEDIA</span>
                </span>
                <span className="text-[10px] font-bold text-[#FFCF9D]/80 uppercase tracking-wider">
                  Spiritual & Heritage Portal
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#F5F5DC]/85 leading-relaxed max-w-md">
              Zema Spiritual Media is dedicated to broadcasting sacred Ethiopian Christian liturgical heritage, inter-religious dialogue for national peace, and authentic reporting from Addis Ababa and historical holy sites across Ethiopia.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#F5F5DC]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#002816] border border-[#FFCF9D]/20">
                <Globe2 className="w-3.5 h-3.5 text-[#FFB000]" />
                <span>4 Languages Supported</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#002816] border border-[#FFCF9D]/20">
                <Radio className="w-3.5 h-3.5 text-[#FFB000]" />
                <span>24/7 Global Audio</span>
              </div>
            </div>
          </div>

          {/* Col 2: Content Hubs */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-[#FFCF9D] uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href={cat === 'Home' ? '/' : `/?category=${cat}`}
                    className="hover:text-[#FFCF9D] text-[#F5F5DC]/90 transition-colors"
                  >
                    {t.categories[cat] || cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Media & Broadcast */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-[#FFCF9D] uppercase tracking-wider">Media & Broadcast</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#FFCF9D] text-[#F5F5DC]/90 transition-colors">
                  Live TV Stream
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFCF9D] text-[#F5F5DC]/90 transition-colors">
                  Liturgical Chants Audio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFCF9D] text-[#F5F5DC]/90 transition-colors">
                  Sacred Echoes Podcast
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFCF9D] text-[#F5F5DC]/90 transition-colors">
                  Ancient Ge'ez Manuscripts
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFCF9D] text-[#F5F5DC]/90 transition-colors">
                  Holy Synod Announcements
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & HQ Direct */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-[#FFCF9D] uppercase tracking-wider">Headquarters</h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-[#F5F5DC]">
                <MapPin className="w-3.5 h-3.5 text-[#FFB000] shrink-0 mt-0.5" />
                <span>{LOCATION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-[#F5F5DC]">
                <Phone className="w-3.5 h-3.5 text-[#FFB000] shrink-0" />
                <span>{LOCATION_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[#F5F5DC]">
                <Mail className="w-3.5 h-3.5 text-[#FFB000] shrink-0" />
                <span>{LOCATION_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 text-[#F5F5DC]">
                <Clock className="w-3.5 h-3.5 text-[#FFB000] shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-[#002816] bg-[#002816] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFCF9D]/80">
          <p>© 2026 Zema Spiritual Media Association. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#F5F5DC] transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-[#F5F5DC] transition-colors">Terms of Broadcast</Link>
            <Link href="/contact" className="hover:text-[#F5F5DC] transition-colors">Editorial Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
