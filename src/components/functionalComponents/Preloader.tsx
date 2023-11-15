import { PreloaderProps } from "../../Types";
import LoaderStyle from "../styledComponents/LoaderStyle";
import loaderImg from "../../assets/load.gif";

const Preloader = ({ load }: PreloaderProps) => {
  return (
    <>
      {load && (
        <LoaderStyle>
          <img src={loaderImg} alt="loading Image" />
        </LoaderStyle>
      )}
    </>
  );
};

export default Preloader;
