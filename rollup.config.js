export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/bundle.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'bundle',
    globals: {
        '@angular/router': 'ng.router'
    },
    external: ['@angular/router']
}