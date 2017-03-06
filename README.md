# node-red-contrib-phant
A [Node-RED](http://nodered.org) nodes for upload tuples of data on a phant storage service - https://data.sparkfun.com/.

## Install
Use npm to command to install this package locally in the Node-RED modules directory
```bash
npm install node-red-contrib-phant
```
or install in it globally with the command
```bash
npm install node-red-contrib-phant -g
```

## Nodes included in the package
**phant** allow to push a simple javascript object on phant public service.

## Usage example
Simple example of usage based on a public phant db available on https://data.sparkfun.com/streams/1noWDWZAJ4fp34z9aLqb (don't delete the phant stream pls :) ).
```json
[{"id":"c4293487.71a078","type":"phantClient","z":"2c308945.22f5b6","name":"","publicKey":"1noWDWZAJ4fp34z9aLqb","privateKey":"0mwpJplPEbFjJdkPw1rK","deleteKey":"KVBRXRLYJNiVgW4x2pbR","x":1130,"y":280,"wires":[["c144cd5f.f6afd"]]},{"id":"d08535d7.30c228","type":"inject","z":"2c308945.22f5b6","name":"Test","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":890,"y":80,"wires":[["7312316b.dacf5"]]},{"id":"c144cd5f.f6afd","type":"debug","z":"2c308945.22f5b6","name":"","active":true,"console":"false","complete":"payload","x":1390,"y":280,"wires":[]},{"id":"9ff67ba6.9f5298","type":"function","z":"2c308945.22f5b6","name":"connection ","func":"msg.object.ip = msg.payload.ip;\nreturn msg;","outputs":"1","noerr":0,"x":910,"y":280,"wires":[["442186ba.310f38"]]},{"id":"3ec3f64.cce1d0a","type":"comment","z":"2c308945.22f5b6","name":"Phant ","info":"#Public URL\nhttp://data.sparkfun.com/streams/1noWDWZAJ4fp34z9aLqb\n\n#Public Key\n1noWDWZAJ4fp34z9aLqb\n\n#Private Key\n0mwpJplPEbFjJdkPw1rK\n\n#Delete Key\nKVBRXRLYJNiVgW4x2pbR","x":870,"y":40,"wires":[]},{"id":"32022519.f6676a","type":"http request","z":"2c308945.22f5b6","name":"","method":"GET","ret":"txt","url":"https://api.ipify.org?format=json","tls":"","x":910,"y":160,"wires":[["afa070aa.6193e"]]},{"id":"afa070aa.6193e","type":"json","z":"2c308945.22f5b6","name":"","x":890,"y":220,"wires":[["9ff67ba6.9f5298"]]},{"id":"442186ba.310f38","type":"random","z":"2c308945.22f5b6","name":"","low":"1","high":"100","inte":"true","x":1120,"y":160,"wires":[["16f79c95.72ba13"]]},{"id":"16f79c95.72ba13","type":"function","z":"2c308945.22f5b6","name":"connection ","func":"msg.object.random = msg.payload;\nmsg.object.temperature = 10+msg.payload/10;\nmsg.payload = msg.object;\nreturn msg;","outputs":"1","noerr":0,"x":1130,"y":220,"wires":[["c4293487.71a078"]]},{"id":"7312316b.dacf5","type":"function","z":"2c308945.22f5b6","name":"connection ","func":"var object = { \n    ip:1,  \n    random:1, \n    temperature:1, \n    timestamp:1\n}\n\nmsg.object = object;\nmsg.object.timestamp = msg.payload;\nreturn msg;","outputs":"1","noerr":0,"x":1030,"y":80,"wires":[["32022519.f6676a"]]},{"id":"66a6ffad.d2e0d","type":"comment","z":"2c308945.22f5b6","name":"https://data.sparkfun.com/streams/1noWDWZAJ4fp34z9aLqb","info":"","x":1260,"y":40,"wires":[]}]
```

## History
- 0.0.7 - March 2017 : Some minor updates
- 0.0.6 - June 2015 : Stable version
- 0.0.5 - June 2015 : Debug version
- 0.0.4 - June 2015 : Debug version
- 0.0.3 - June 2015 : Debug version
- 0.0.2 - June 2015 : Debug version
- 0.0.1 - June 2015 : Initial Release

## Authors
* Valerio Vaccaro (https://github.com/valerio-vaccaro)

## Credits
Node-RED has been made possible by the hard work of Nick O'Leary @knolleary and Dave Conway-Jones @ceejay at IBM Emerging Technology. Much thanks to them and other supporters for advancing this platform.
This module is developed by Valerio Vaccaro (http://www.valeriovaccaro.it) on Raspberry Pi embedded board.

## License
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
