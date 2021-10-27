import { ThreeDots } from "react-loading-icons";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <h1 id="heading">Books Library Created by Chaitanya</h1>
      <div className="section-2">
        <h2 id="sub-heading">Loading....</h2>
        <ThreeDots
          id="loading-icon"
          stroke="#000000"
          strokeOpacity={1}
          strokeWidth={6}
          fill="#9999ff"
          speed={0.75}
        />
      </div>
    </div>
  );
}

export default LoadingPage;
