import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingOverlay}>
      <p>Carregando...</p>
    </div>
  );
}

export default Loading;