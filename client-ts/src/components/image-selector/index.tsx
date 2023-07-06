import { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';
import { IPostImage } from '@/types/IPostImage.ts';
import Searchbar from '@/components/searchbar';
import ImageService from '@/services/api/image-service.ts';

interface Props {
  getImage: (image: IPostImage) => void;
}

const Index = ({ getImage }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState<IPostImage[]>([]);
  const [currentImage, setCurrentImage] = useState('');

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

  const chooseImage = (image: IPostImage) => {
    getImage(image);
    setCurrentImage(image.id);
  };

  return (
    <div>
      <Searchbar
        // value={searchTerm}
        // onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
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
export default Index;
