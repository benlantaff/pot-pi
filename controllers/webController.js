const osData = require('node:os');
const checkDiskSpace = require('check-disk-space').default;

exports.renderHomePage = (req, res) => {
  checkDiskSpace('/').then((ds) => {
    let uptime = secondsToDhms(osData.uptime());
    let freeMemory = formatBytes(osData.freemem());
    let diskSpace = formatBytes(ds.free);
    let os = osData.platform();

    let labels = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];

    let tempData = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90','100', '110',];
    let humData = ['0', '10', '20', '30', '40', '50', '60', '60', '50', '40','42', '45',];

    res.render('index', {
      uptime: uptime,
      freeMemory: freeMemory,
      diskSpace: diskSpace,
      os: os,
      labels: labels,
      tempData: tempData,
      humData: humData
    });
  });
};

function formatBytes(bytes) {
  var marker = 1024;
  var decimal = 2;
  var kiloBytes = marker;
  var megaBytes = marker * marker;
  var gigaBytes = marker * marker * marker;
  var teraBytes = marker * marker * marker * marker;

  if (bytes < kiloBytes) return bytes + ' Bytes';
  else if (bytes < megaBytes)
    return (bytes / kiloBytes).toFixed(decimal) + ' KB';
  else if (bytes < gigaBytes)
    return (bytes / megaBytes).toFixed(decimal) + ' MB';
  else return (bytes / gigaBytes).toFixed(decimal) + ' GB';
}

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
  var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
  var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes ') : '';
  return dDisplay + hDisplay + mDisplay;
}

function getds() {
  checkDiskSpace('/').then((ds) => {
    console.log(ds.free);
    this.diskSpace = ds.free;
    return; //formatBytes(ds.free);
  });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
