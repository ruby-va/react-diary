import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.notFound}>
      <h1>
        Resource Was Not Found, You will be redirected to main page after 3 seconds...
      </h1>
    </div>
  );
};

export default Index;
