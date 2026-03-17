import { useGetMainImageQuery } from "../services/tourApi"; 

const Main_Img = ({ id }) => {
  const { data: gallery, isLoading, error } = useGetMainImageQuery(id, {
    skip: !id,
  });

  if (isLoading) return <div className="spinner">...</div>;
  
  // Якщо дані прийшли, але вони порожні (null або undefined)
  if (!gallery || !gallery.image_main_url) {
    return <div className="no-photo">No Photo</div>;
  }

  return (
    <img
      className="mainImg"
      src={gallery.image_main_url}
      alt="Tour"
      style={{ width: '100%', objectFit: 'cover' }}
    />
  );
};

export default Main_Img;