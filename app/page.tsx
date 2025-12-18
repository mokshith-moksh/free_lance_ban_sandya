"use client";

import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import albumData from "@/album.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ================= TYPES ================= */

interface Slide {
  src: string;
  width: number;
  height: number;
}

interface Album {
  slides: Slide[];
}

/* ================= DATA ================= */

const album = albumData as Album;
const BATCH_SIZE = 20;

/* ================= PAGE ================= */

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, album.slides.length),
          );
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f0] via-[#fef5e7] to-[#faf0e6] text-[#3b2f2f]">
      {/* NAV BAR - Traditional Mehendi inspired */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#5a2c1d] to-[#8b4513] text-[#ffedd5] shadow-xl border-b-2 border-[#d4a574]/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5e6c8] to-[#d4a574] flex items-center justify-center shadow-lg">
              <span className="text-[#5a2c1d] font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-wider">
              Mokshith Studio
            </span>
          </div>

          <div className="text-sm mt-2 sm:mt-0 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
            <a href="tel:9480363199" className="flex items-center gap-2 hover:text-[#d4a574] transition-colors">
              <span className="text-lg">📞</span>
              <span>+91 94803 63199</span>
            </a>
            <a href="mailto:shivakumarb748@gmail.com" className="flex items-center gap-2 hover:text-[#d4a574] transition-colors">
              <span className="text-lg">✉️</span>
              <span className="hidden sm:inline">shivakumarb748@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Traditional Indian Wedding Style */}
      <section className="relative px-4 py-16 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <div className="w-full h-full border-2 border-[#8b4513] rounded-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10 rotate-45">
          <div className="w-full h-full border-2 border-[#8b4513]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#d4a574]/20 to-[#f5e6c8]/20 rounded-full border border-[#d4a574]/30">
              <p className="text-sm uppercase tracking-[0.4em] text-[#8b4513] font-medium">
                Wedding Celebration
              </p>
            </div>
          </div>

          <div className="relative mb-8">
            {/* Decorative swag */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent"></div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#5a2c1d] mb-2 tracking-tight">
                  Sandhya
                </h1>
                <p className="text-sm text-[#8b4513] font-medium">Daughter of J Family</p>
              </div>

              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#d4a574] to-[#8b4513] flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,11H13V7H11V11H7V13H11V17H13V13H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <p className="mt-4 text-xl md:text-2xl font-serif text-[#8b4513] font-semibold">
                  weds
                </p>
              </div>

              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#5a2c1d] mb-2 tracking-tight">
                  Keerthi Raj
                </h1>
                <p className="text-sm text-[#8b4513] font-medium">Son of T Family</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-[#d4a574] to-[#8b4513] rounded-full"></div>
              <p className="text-lg md:text-xl text-[#5a4636] font-serif italic leading-relaxed pl-8">
                With the blessings of our elders and the love of family & friends,
                we invite you to relive the sacred and joyous moments of our union.
              </p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-[#8b4513] to-[#d4a574] rounded-full"></div>
            </div>
          </div>

          <Button
            className="mt-12 bg-gradient-to-r from-[#8b4513] to-[#d4a574] hover:from-[#6b3410] hover:to-[#b38b4d] text-[#fff7e6] shadow-2xl px-10 py-7 text-lg font-serif tracking-wider rounded-full border-2 border-[#ffedd5]/30 hover:scale-105 transition-transform duration-300"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          >
            <span className="mr-3">📸</span>
            View Wedding Album
            <span className="ml-3">💫</span>
          </Button>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <main className="px-4 py-12 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#5a2c1d] mb-4">
            Cherished Moments
          </h2>
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#f5e6c8]/30 to-[#ffedd5]/30 rounded-full">
            <span className="text-[#8b4513] font-semibold">Total Photos:</span>
            <span className="text-2xl font-bold text-[#5a2c1d]">{album.slides.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {album.slides.slice(0, visibleCount).map((ele, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden bg-gradient-to-b from-white to-[#ffedd5]/20 border-2 border-[#e6d3b1] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-xl hover:border-[#d4a574] relative"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d4a574] rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d4a574] rounded-tr-xl"></div>

              <CardContent className="p-0 relative">
                {/* Image number overlay */}
                <div className="absolute top-2 right-2 z-10 w-8 h-8 bg-[#5a2c1d]/80 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>

                <div className="overflow-hidden">
                  <img
                    src={ele.src}
                    alt={`Wedding Photo ${idx + 1}`}
                    loading="lazy"
                    className="h-52 sm:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a2c1d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white font-serif text-sm font-medium">
                    Click to view
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loading indicator */}
        <div
          ref={loaderRef}
          className="h-20 mt-12 flex items-center justify-center"
        >
          {visibleCount < album.slides.length && (
            <div className="text-center">
              <div className="w-10 h-10 border-3 border-[#d4a574] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-lg text-[#8b4513] font-serif">
                Loading more cherished moments…
              </p>
              <p className="text-sm text-[#a0896c] mt-2">
                {visibleCount} of {album.slides.length} photos loaded
              </p>
            </div>
          )}

          {visibleCount === album.slides.length && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#d4a574] to-[#8b4513] rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                </svg>
              </div>
              <p className="text-xl font-serif font-bold text-[#5a2c1d]">
                — End of Wedding Album —
              </p>
              <p className="text-md text-[#a0896c] font-serif mt-2">
                Thank you for reliving our special moments with us
              </p>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 py-8 bg-gradient-to-r from-[#5a2c1d] to-[#8b4513] text-[#ffedd5] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl font-serif mb-4">
            With Love & Gratitude
          </p>
          <p className="text-sm opacity-90">
            Sandhya & Keerthi Raj • November 2025
          </p>
          <p className="text-xs mt-6 opacity-70">
            Captured by Mokshith Studio • All rights reserved
          </p>
        </div>
      </footer>

      {/* LIGHTBOX WITH ZOOM */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={album.slides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: false,
        }}
        carousel={{
          finite: false,
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
        render={{
          iconPrev: () => (
            <div className="yal-slide-nav__icon yal-slide-nav__icon--prev">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
            </div>
          ),
          iconNext: () => (
            <div className="yal-slide-nav__icon yal-slide-nav__icon--next">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </div>
          ),
          iconClose: () => (
            <div className="yal-close">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </div>
          ),
        }}
        styles={{
          container: { backgroundColor: "rgba(90, 44, 29, 0.95)" },
          root: { "--yarl__color_backdrop": "rgba(90, 44, 29, 0.98)" },
        }}
      />
    </div>
  );
}
