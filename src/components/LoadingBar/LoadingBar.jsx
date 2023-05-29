

const LoadingBar = ({value}) => {
    return (
      (value.length === 0 || value === undefined) && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    );
}
export default LoadingBar;