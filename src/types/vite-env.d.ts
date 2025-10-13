/// <reference types="vite/client" />
/// <reference types="vite-imagetools" />

interface OutputMetadata {
  /* URL of the generated image */
  src: string;
  /* Width of the image */
  width: number;
  /* Height of the image */
  height: number;
  /* Format of the generated image */
  format: string;

  // The following options are the same as sharps input options
  /* Name of colour space interpretation */
  space: string;
  /* Number of bands e.g. 3 for sRGB, 4 for CMYK */
  channels: number;
  /*  Number of pixels per inch */
  density: number;
  /* Name of pixel depth format */
  depth: string;
  /* presence of an alpha transparency channel */
  hasAlpha: boolean;
  /* presence of an embedded ICC profile */
  hasProfile: boolean;
  /* indicating whether the image is interlaced using a progressive scan */
  isProgressive: boolean;
}

declare module "*&as=metadata&imagetools-gallery" {
  const outputs: Array<OutputMetadata>;
  export default outputs;
}

declare module "*&as=metadata&imagetools" {
  const outputs: OutputMetadata;
  export default outputs;
}

declare module "*&imagetools-gallery" {
  const outputs: Array<string>;
  export default outputs;
}

declare module "*&imagetools" {
  const outputs: string;
  export default outputs;
}
