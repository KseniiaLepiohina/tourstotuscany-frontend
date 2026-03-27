import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useGetGalleryPhotosQuery } from "../services/tourApi";
import Arrows from "../Carousels/arrows";

export const GalleryPlaces = ({locationQuery}) => {
  const { data: galleryData, isLoading, isError } = useGetGalleryPhotosQuery(locationQuery);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#carousel_container",
      children: "a.pswp-link", 
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryData]); 
  console.log("gallery data", galleryData);

  const handleDownloadTrigger = async (downloadLocation) => {
    try{
      await fetch(downloadLocation, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      },
    });
    }catch(error) {
      console.error("Failed to track download", error);
    }

  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading gallery</p>;
  if (!galleryData || !galleryData.photos) return null;

  return (
    <section>
      <section className="carousel_header">
        <h3>Gallery: {galleryData.locationQuery}</h3>
        <Arrows />
      </section>

      <div
        id="carousel_container"
        style={{ display: "flex", gap: "1.4em", flexWrap: "wrap" }}
      >
        {galleryData.photos.map((photo) => (
          <div key={photo.id} className="photo-wrapper">
            <a
              className="pswp-link"
              href={photo.urls.regular}
              data-pswp-width="1400"
              data-pswp-height="933"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleDownloadTrigger(photo.links.download_location)}
            >
              <img
                style={{ width: "340px", height: "250px", objectFit: "cover" }}
                src={photo.urls.small}
                alt={photo.alt_description}
              />
            </a>
            
            <div style={{ fontSize: "12px", marginTop: "5px" }}>
              Photo by
              <a 
                href={`${photo.user.links.html}?utm_source=ToursToTuscany&utm_medium=referral`} 
                target="_blank" 
                rel="noreferrer"
              >
                {photo.user.name}
              </a>
              on
              <a 
                href="https://unsplash.com/?utm_source=ToursToTuscany&utm_medium=referral" 
                target="_blank" 
                rel="noreferrer"
              >
                Unsplash
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};