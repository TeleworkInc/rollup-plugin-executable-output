const executable = () => {
  return {
    name: 'executable',
    writeBundle: (options, bundle) => {
      fs.chmodSync(options.file, '755');
      console.log('done', options.file);
    },
  };
};

module.exports = executable;