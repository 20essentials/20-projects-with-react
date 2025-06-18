// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  build: {
    assets: 'static'
  },
  //Deploy 20 Projects
  site: 'https://20essentials.github.io/20-projects-with-react/'

  //Localhost
  // site: 'http://localhost:4321/'
});
