import SearchBar from "@/components/SearchBar/SearchBar";
import ImageService from "@/services/ImageService";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./ImageFinder.module.scss";

const ImageFinder = (props) => {
  const { getImage } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState();

  const fetchImages = async () => {
    try {
      const response = await ImageService.getAllImages();
      console.log(response.data);
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const chooseImage = (image) => {
    getImage(image.filename);
    setCurrentImage(image.id);
  };

  return (
    <div>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.search}
      />
      <div className={styles.images}>
        {images.map((image) => (
          <div
            className={`${styles.image} ${
              image.id === currentImage ? styles.imageActive : undefined
            }`}
            key={image.id}
            onClick={() => chooseImage(image)}
          >
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageFinder;
