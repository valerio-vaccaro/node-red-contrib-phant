/**
 * phant.js
 * Phant client node
 * Requires phant-client: https://github.com/dpjanes/iotdb-phant-client
 * Copyright 2015 Valerio Vaccaro - www.valeriovaccaro.it
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var RED = require(process.env.NODE_RED_HOME+"/red/red");

var Phant = require('phant-client').Phant
var phant = new Phant()

function PhantClient(n) {
    RED.nodes.createNode(this,n);

    var msg = {};
    var publicKey;
	  var privateKey;
	  var deleteKey;
    var node = this;


    // Get varables from the node
    this.publicKey = n.publicKey;
    this.privateKey = n.privateKey;
	  this.deleteKey = n.deleteKey;

    var streamd = {
        manageUrl: "https://data.sparkfun.com/streams/"+this.publicKey,
        outputUrl: "https://data.sparkfun.com/output/"+this.publicKey,
        inputUrl: "https://data.sparkfun.com/input/"+this.publicKey,
        publicKey: this.publicKey,
        privateKey: this.privateKey,
        deleteKey: this.deleteKey
    }

    // Status icon
    this.status({fill:"grey",shape:"dot",text:"not scanning"});

    this.on("input", function(msg){
        phant.connect(streamd, function(error, streamd) {
            if (error) {
                this.status({fill:"red",shape:"dot",text:"Error in connection"});
            } else {
                this.status({fill:"green",shape:"dot",text:"Connected"});
                //phant.save("stream.json", streamd)
                phant.add(streamd, msg.payload , function(error, rd) {
                    if (error == null)
                         this.status({fill:"green",shape:"dot",text:"Published"});
                    else
                        this.status({fill:"red",shape:"dot",text:error});
                })
            }
        })
    });

    this.on("close", function() {

    });
}

// Register the node by name. This must be called before overriding any of the
// Node functions.
RED.nodes.registerType("phantClient", PhantClient);
