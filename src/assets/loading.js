import Spinner from "../assets/images/spinner.svg";

export const Loading = () => {
  return (
    <div className="loading-container">
      <img src={Spinner} alt="loading" width={100} />
    </div>
  );
};
