

export default {
  createRequire: 'jiti',
  buildModules: [
    '@nuxt/typescript-build',
  ],
  serverMiddleware: [
    {
      path: '/api/js',
      handler: require.resolve('./api/js.js')
    },
    {
      path: '/api/ts',
      handler: require.resolve('./api/ts.ts')
    }
  ]
}
