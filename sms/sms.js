module.exports = function(RED) {
    function sms(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {

            msg.method ="GET";
            msg.payload="";
            //use http or https depends how server is configured
            var protocol = "http";
            var username = this.credentials.username;
            var password = this.credentials.password;
            var ip = this.ip
            var port = this.port;
            var recipient = this.recipient;
            var message = this.message;
            var myurl =  protocol+"://"+username+":"+password+"@"+ip+":"+port+"/send.html?smsto="+recipient+"&smsbody="+message;
            msg.url=myurl;
            node.send(msg);

        });
    }
    RED.nodes.registerType("sms",SMSNode);
}