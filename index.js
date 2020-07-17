const fs = require('fs');

const executable = () => {
  return {
    name: 'executable',
    writeBundle: (options, bundle) => {
        fs.chmodSync(options.file, '755');
        console.log(
            'Marking output executable: chmod 755', 
            options.file
        );
    },
  };
};

module.exports = executable;