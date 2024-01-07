import { useRouteError } from "react-router-dom";
import './error.scss';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <h2>{error?.status} : {error?.statusText}</h2>
      <h4>{error?.error?.message}</h4>
      <div className="errorStack">
        <code>{error?.error?.stack}</code>
      </div>
    </div>
  );
};

export default Error;
