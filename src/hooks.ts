import * as React from "react";

// check if component is visible
export const useIsVisible = (ref: any) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  React.useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
