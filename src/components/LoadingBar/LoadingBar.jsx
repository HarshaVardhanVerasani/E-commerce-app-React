const LoadingBar = ({ data }) => {
  return (
    (data === undefined || data.length === 0) && (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  );
};
export default LoadingBar;
