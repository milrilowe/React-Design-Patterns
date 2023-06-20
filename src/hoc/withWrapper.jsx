import React from "react";

const withWrapper = (WrapperComponent) => (WrappedComponent) => {
  return (props) => (
    <WrapperComponent {...props}>
      <WrappedComponent {...props} />
    </WrapperComponent>
  );
};

export default withWrapper;