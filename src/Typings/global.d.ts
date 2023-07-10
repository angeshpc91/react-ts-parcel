import { CssVarsTheme, Theme } from '@mui/material';

declare global {
  interface Window {
    theme?: Omit<Theme, 'palette'> & CssVarsTheme;
    opera?: any;
  }
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}
declare module '*.scss';
declare module 'react-dom/client';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}
declare module '*.json' {
  const content: string;
  export default content;
}
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
// export {};
