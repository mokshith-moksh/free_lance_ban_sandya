"use client";

import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import album from "@/album.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BATCH_SIZE = 20;

export default function Page() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

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
    <div className="min-h-screen bg-[#faf7f2] text-[#3b2f2f]">
      {/* NAV BAR */}
      <nav className="sticky top-0 z-50 bg-[#4a1c1c] text-[#f5e6c8] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-lg font-semibold tracking-widest">
            mokshith_studio
          </span>

          <div className="text-sm mt-1 sm:mt-0 flex gap-4">
            <span>📞 9480363199</span>
            <span>✉️ shivakumarb748@gmail.com</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-4 py-14 text-center bg-gradient-to-b from-[#f5e6c8] to-[#faf7f2]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b5a2b] mb-3">
          Wedding Celebration
        </p>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4a1c1c]">
          Sandhya J
        </h1>

        <p className="my-3 text-xl md:text-2xl font-serif text-[#6b3f2b]">
          weds
        </p>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4a1c1c]">
          Keerthi Raj T
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-md md:text-lg text-[#5a4636] font-medium">
          With the blessings of elders and the love of family & friends, we
          invite you to relive the sacred and joyous moments of our wedding.
        </p>

        <Button
          className="mt-8 bg-[#8b5a2b] hover:bg-[#6f451f] text-[#fff7e6] shadow-xl px-8 py-6 text-lg font-serif tracking-wide"
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
        >
          View Wedding Album
        </Button>
      </section>

      {/* GALLERY */}
      <main className="px-4 py-10 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {album.slides.slice(0, visibleCount).map((ele, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden bg-white border border-[#e6d3b1] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              <CardContent className="p-0">
                <img
                  src={ele.src}
                  alt={`Wedding Photo ${idx + 1}`}
                  loading="lazy"
                  className="h-48 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={loaderRef}
          className="h-14 mt-10 flex items-center justify-center"
        >
          {visibleCount < album.slides.length && (
            <p className="text-md text-[#8b5a2b] font-serif">
              Loading more cherished moments…
            </p>
          )}

          {visibleCount === album.slides.length && (
            <p className="text-sm text-[#a0896c] font-serif">
              — End of Wedding Album —
            </p>
          )}
        </div>
      </main>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={album.slides}
      />
    </div>
  );
}
