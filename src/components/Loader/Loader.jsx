import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
      }}
      wrapperClass="vortex-wrapper"
      colors={[
        "#e6e6fa",
        "#bfb7e0",
        "#d1cdeb",
        "#e6e6fa",
        "#bfb7e0",
        "#d1cdeb",
      ]}
    />
  );
};

export default Loader;
