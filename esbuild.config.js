const { build } = require('esbuild');

build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'build/bundle.js',
  loader: {
    '.tsx': 'tsx', // Handle .tsx files as TypeScript with JSX syntax
    '.ts': 'ts'    // Handle .ts files as TypeScript without JSX syntax
  },
  // Other esbuild options...
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
