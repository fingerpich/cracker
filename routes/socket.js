/*
 * Serve content over a socket
 */

var EventEmitter = require('events').EventEmitter;
var spawn = require('child_process').spawn;
var Scanner = require('network-scanner');
var Sniffer = require('network-sniffer');

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'Bob'
  });

  var scanner = Scanner();
  var sniffer = Sniffer();
  setInterval(function () {
    // socket.emit('send:time', {
    //   time: (new Date()).toString()
    // });
    scanner.scan(function(err, networks) {
      if (err) {
        socket.emit('error:list', {
          errors: [err.message]
        });
        return;
      }
      socket.emit('network:list', {
        networks: networks
      });
    });
  }, 10000);

};
