# A simple node that sends a SMS message using the android Play app:
##      SMS Gateway Ultimate.
   **Instructions:**
   1. Install [SMS Gateway Ultimate] (https://play.google.com/store/apps/details?id=com.icecoldapps.smsgatewayultimate&hl=en) from google play
   2. Setup server on android phone (username,password,port,protocol,port)
   3. Start the server on android phone and press info where you will get local ip
   4. Phone and node-red must be on the same network or correct routes must
      be used or router forwarding must be applied
   5. Enter information into the SMS parameter node
   6. In httprequest node enter username and password

Inspired by a flow from @github/srakovec 'Sending SMS from your own local Gateway'