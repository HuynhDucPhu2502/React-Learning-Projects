const LoadingIndicator = () => {
  console.log("LoadingIndicator");
  return (
    <div style={{ textAlign: "center" }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
