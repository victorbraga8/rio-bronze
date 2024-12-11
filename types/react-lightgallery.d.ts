declare module "react-lightgallery" {
  import * as React from "react";

  interface LightGalleryProps {
    speed?: number;
    plugins?: string[];
    children?: React.ReactNode;
    elements?: string[];
  }

  const LightGallery: React.FC<LightGalleryProps>;

  export default LightGallery;
}
