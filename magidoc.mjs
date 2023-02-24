import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    introspection: {
      type: 'sdl',
      paths: ['./schema.graphqls'],
    },
    website: {
      staticAssets: path.join(__dirname, 'assets'),
      template: 'carbon-multi-page',
      output: './assets',
      type: 'url',
      /**
       * Your API URL.
       */
      url: 'https://your-graphql-api-url.com/graphql',
      /**
       * The HTTP Method to use.
       *
       * @default 'POST'
       */
      method: 'POST',
      options: {
        appTitle: 'Diseases events scrapping API',
        appLogo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sierrainstruments.com%2Fimages%2Flogo%2Fsierra-logo-black-print.jpg&f=1&nofb=1&ipt=9d9409e106120e1f754645b9e8c02a352b00003afcbe28aceef412ae81f54b98&ipo=images',
        pages: [{
          title: 'Diseases events scrapping API',
          content: `
  Our API provides ability to scrap evenets data from known trustworthy website such as CDC and WHO. Users can easily use the query demonstrated on the left side of webpage to obtain events data.
  - Users can be authenticated and authorised to use our API after obtaining a API key from us
  - Development contact info: [EMAIL PLACEHOLDER]
  `
        }],
      },
    },
  }