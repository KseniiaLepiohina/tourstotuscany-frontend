import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useGetMainGalleryPhotosQuery } from "../services/tourApi";

export const MainGallery = () => {
  const { id } = useParams();
const {data:gallery,isLoading,isError} = useGetMainGalleryPhotosQuery(id);
console.log("Gallery",gallery);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#main-gallery",
      children: "a",
      showHideAnimationType: "zoom",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError}</p>;
  if (!gallery) return null;

  return (
    <section className="main_gallery" id="main-gallery">
      <a
        href={gallery.image_main_url}
        data-pswp-width="1400"
        data-pswp-height="933"
        target="_blank"
        rel="noreferrer"
        style={{ display: "contents" }}
      >
        <img
          src={gallery.image_main_url}
          style={{ height: "600px", width: "700px", borderRadius: "0.8em" }}
          alt="Main"
        />
      </a>

      <section style={{ display: "flex", gap: "1.4em" }}>
        {[gallery.image1_url, gallery.image2_url, gallery.image3_url].map((src, idx) => (
          <a
            key={idx}
            href={src}
            data-pswp-width="1400"
            data-pswp-height="933"
            target="_blank"
            rel="noreferrer"
            style={{ display: "contents" }}
          >
            <img
              src={src}
              style={{ height: "140px", width: "220px", borderRadius: "0.8em" }}
              alt={`Gallery ${idx + 1}`}
            />
          </a>
        ))}
      </section>
    </section>
  );
};

