const Spinner = (WrappedComp) => ({ isloading, ...otherProps }) => {
  return isloading ? (
    <div style={{ width: '100%', height: '100vh' }}>
      <h1>Loading data</h1>
    </div>
  ) : (
    <WrappedComp {...otherProps} />
  );
};

export default Spinner;
