import React from "react";

const Screen = (props: any) => {
  return (
    <React.StrictMode>
      <div className="w-screen h-screen overflow-hidden prose max-w-none">
        {props.children}
      </div>
    </React.StrictMode>
  );
};

export default Screen;
