
# Executable Rollup bundles

Mark bundles as executable with `chmod 755`. Existing plugins had bugs or used outdated APIs. Recommended to use alongside [`rollup-plugin-preserve-shebang`](https://www.npmjs.com/package/rollup-plugin-preserve-shebang).

## Example
In `rollup.config.js`:

```javascript
export default [
  {
    input: 'config/exports.js',
    output: [
      {
        file: 'dist/exports.cjs',
        format: 'cjs',
      },
      {
        file: 'dist/exports.mjs',
        format: 'esm',
      },
    ],
  },
  {
    input: 'lib/cli.js',
    output: [
      {
        file: 'dist/cli.mjs',
        format: 'esm',
      },
      {
        file: 'dist/cli.cjs',
        format: 'cjs',
      },
    ],
    plugins: [
      shebang(),
      executable(),
    ],
  },
];
```
This example shows a complex config which generates multiple bundles and multiple
outputs per bundle; the `cli.mjs` and `cli.cjs` outputs from the second bundle are passed the `shebang`
and `executable` plugins, and the first bundle (consisting of two outputs as well) is passed none. 