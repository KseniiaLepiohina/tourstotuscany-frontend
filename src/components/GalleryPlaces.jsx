import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import leftarrow from "../assets/home/icons/test_left.svg";
import rightarr from "../assets/home/icons/test_right.svg";

export const GalleryPlaces = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:5000/gallery/${id}`
        );
        setTour(response.data);
      } catch (error) {
        setError(error.message || "Error to fetch tour");
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);
  console.log("All images",tour);
  

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#carousel_container",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!tour) return null;

  return (
    <section>
      <section className="carousel_header">
        <h3>Gallery</h3>
        <section className="arrows">
          <button className="prev btn">
            <img src={leftarrow} alt="back to previous place" />
          </button>
          <button className="next btn">
            <img src={rightarr} alt="go to the next place" />
          </button>
        </section>
      </section>

      <section
        id="carousel_container"
        style={{ display: "flex", gap: "1.4em" }}
        key={tour.id}
      >
        <a
          href={tour.image1_url}
          data-pswp-width="1400"
          data-pswp-height="933"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "700px", height: "500px" }}
            src={tour.image1_url}
            alt="place 1"
          />
        </a>

        <section
          style={{ display: "flex", flexDirection: "column", gap: "1.4em" }}
        >
          <a
            href={tour.image2_url}
            data-pswp-width="1400"
            data-pswp-height="933"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "340px", height: "202px" }}
              src={tour.image2_url}
              alt="place 2"
            />
          </a>
          <a
            href={tour.image3_url}
            data-pswp-width="1400"
            data-pswp-height="933"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "340px", height: "202px" }}
              src={tour.image3_url}
              alt="place 3"
            />
          </a>
        </section>

        <a
          href={tour.image4_url}
          data-pswp-width="1400"
          data-pswp-height="933"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "340px", height: "500px" }}
            src={tour.image4_url}
            alt="place 4"
          />
        </a>
      </section>
    </section>
  );
};
