var fs = require('fs');
var archiver = require('archiver');

var timestamp = new Date();

if (!fs.existsSync(__dirname +  `/awsPackages`)){
    fs.mkdirSync(__dirname +  `/awsPackages`);
}

// create a file to stream archive data to.
var output = fs.createWriteStream(__dirname +  `/awsPackages/bankular${ ''+timestamp.getHours() + timestamp.getMinutes()+ '-' +timestamp.getDate() +timestamp.getMonth()+ timestamp.getYear()}.zip`);
var archive = archiver('zip', {
  zlib: { level: 1 } // Sets the compression level.
});

// listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on('close', function() {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  // This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on('end', function() {
    console.log('Data has been drained');
  });

  // good practice to catch this error explicitly
archive.on('error', function(err) {
    throw err;
  });

  // pipe archive data to the file
archive.pipe(output);

archive.directory('dist/', false);
archive.finalize();