import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useGetGalleryPhotosQuery } from "../services/tourApi";
import Arrows from "../Carousels/arrows";

// export const GalleryPlaces = () => {
//   const { id } = useParams();
//   const {data:galleryImages,isLoading,isError} = useGetGalleryPhotosQuery(id);

//   useEffect(() => {
//     let lightbox = new PhotoSwipeLightbox({
//       gallery: "#carousel_container",
//       children: "a.pswp-link",
//       pswpModule: () => import("photoswipe"),
//     });

//     lightbox.init();

//     return () => {
//       lightbox.destroy();
//       lightbox = null;
//     };
//   }, [galleryImages]);
//   const handleDownloadTrigger = (downloadUrl) => {
//     fetch(`${downloadUrl}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`);
//   };
//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return {isError}
//   if (!galleryImages) return null;

//   return (
//     <section>
//       <section className="carousel_header">
//         <h3>Gallery</h3>
//         <Arrows/>
//       </section>

//       <section
//         id="carousel_container"
//         style={{ display: "flex", gap: "1.4em" }}
//         key={galleryImages.id}
//       >
//         <a
//           href={galleryImages.image1_url}
//           data-pswp-width="1400"
//           data-pswp-height="933"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             style={{ width: "700px", height: "500px" }}
//             src={galleryImages.image1_url}
//             alt="place 1"
//           />
//         </a>

//         <section
//           style={{ display: "flex", flexDirection: "column", gap: "1.4em" }}
//         >
//           <a
//             href={galleryImages.image2_url}
//             data-pswp-width="1400"
//             data-pswp-height="933"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img
//               style={{ width: "340px", height: "202px" }}
//               src={galleryImages.image2_url}
//               alt="place 2"
//             />
//           </a>
//           <a
//             href={galleryImages.image3_url}
//             data-pswp-width="1400"
//             data-pswp-height="933"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img
//               style={{ width: "340px", height: "202px" }}
//               src={galleryImages.image3_url}
//               alt="place 3"
//             />
//           </a>
//         </section>

//         <a
//           href={galleryImages.image4_url}
//           data-pswp-width="1400"
//           data-pswp-height="933"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             style={{ width: "340px", height: "500px" }}
//             src={galleryImages.image4_url}
//             alt="place 4"
//           />
//         </a>
//       </section>
//     </section>
//   );
// };
export const GalleryPlaces = ({location}) => {
  // const { id } = useParams();
  const { data: galleryData, isLoading, isError } = useGetGalleryPhotosQuery(location);

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
        <h3>Gallery: {galleryData.location}</h3>
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
              Photo by{" "}
              <a 
                href={`${photo.user.links.html}?utm_source=ToursToTuscany&utm_medium=referral`} 
                target="_blank" 
                rel="noreferrer"
              >
                {photo.user.name}
              </a>{" "}
              on{" "}
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