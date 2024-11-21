import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles['loading-overlay']}>
      <p>Carregando...</p>
    </div>
  );
}

export default Loading;