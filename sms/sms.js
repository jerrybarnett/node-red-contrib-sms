module.exports = function (RED) {
  function SMSNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    this.on('input', function (msg) {

      msg.method = "GET";
      msg.payload = "";
      var protocol = "http";
      this.username = config.username;
      this.password = config.password;
      this.ip = config.ip;
      this.port = config.port;
      this.recipient = config.recipient;
      this.message = config.message;

      var myurl = protocol + "://" + this.username + ":" + this.password + "@" + this.ip + ":" + this.port + "/send.html?smsto=" + this.recipient + "&smsbody=" + this.message;
      msg.url = myurl;
      node.send(msg);

    });
  }
  RED.nodes.registerType("sms", SMSNode);
}