"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38489],{959866:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-455afe1e","path":"/devices/ZBDongle-E.html","title":"SONOFF ZBDongle-E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBDongle-E control via MQTT","description":"Integrate your SONOFF ZBDongle-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"How to create a SONOFF ZBDongle-E Router","slug":"how-to-create-a-sonoff-zbdongle-e-router","link":"#how-to-create-a-sonoff-zbdongle-e-router","children":[]},{"level":3,"title":"Hints","slug":"hints","link":"#hints","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light indicator level (numeric)","slug":"light-indicator-level-numeric","link":"#light-indicator-level-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702237881000},"filePathRelative":"devices/ZBDongle-E.md"}')},362403:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var o=i(166252);const l=i.p+"assets/img/putty-bootloader-1.0c50b302.png",n=i.p+"assets/img/putty-bootloader-2.b39ba5a6.png",r=(0,o._)("h1",{id:"sonoff-zbdongle-e",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#sonoff-zbdongle-e","aria-hidden":"true"},"#"),(0,o.Uk)(" SONOFF ZBDongle-E")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZBDongle-E")],-1),d=(0,o._)("td",null,"Vendor",-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Sonoff Zigbee 3.0 USB Dongle Plus (EFR32MG21) with router firmware")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"light_indicator_level, linkquality")],-1),g=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.jpg",alt:"SONOFF ZBDongle-E"})])],-1),c=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),p=(0,o._)("h3",{id:"how-to-create-a-sonoff-zbdongle-e-router",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#how-to-create-a-sonoff-zbdongle-e-router","aria-hidden":"true"},"#"),(0,o.Uk)(" How to create a SONOFF ZBDongle-E Router")],-1),f={href:"https://sonoff.tech/wp-content/uploads/2022/11/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router",target:"_blank",rel:"noopener noreferrer"},b={href:"https://darkxst.github.io/silabs-firmware-builder/",target:"_blank",rel:"noopener noreferrer"},w=(0,o._)("strong",null,"Google Chrome",-1),_=(0,o._)("strong",null,"Microsoft Edge",-1),k=(0,o._)("h3",{id:"hints",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#hints","aria-hidden":"true"},"#"),(0,o.Uk)(" Hints")],-1),v=(0,o._)("p",null,"The guide from SONOFF is not very detailed. Here are some additional hints:",-1),F=(0,o._)("li",null,[(0,o.Uk)("First, you have to disassemble the device and pull the logic board out of its housing. You need a "),(0,o._)("strong",null,"J00 Phillips screwdriver"),(0,o.Uk)(" for this. "),(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-screws.jpg",width:"130",height:"129"}),(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-board-in-housing.jpg",width:"130",height:"117"})],-1),O={href:"https://en.wikipedia.org/wiki/XMODEM",target:"_blank",rel:"noopener noreferrer"},y=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("p",null,"install XMODEM transfer protocol and terminal emulator Putty with"),(0,o._)("p",null,[(0,o._)("code",null,"sudo apt install lrzsz putty")])]),(0,o._)("li",null,[(0,o._)("p",null,"user needs to be in dialout group in order to access serial ports"),(0,o._)("p",null,[(0,o._)("code",null,"sudo adduser $USER dialout")])]),(0,o._)("li",null,[(0,o._)("p",null,"log in and out so that group membership comes into effect")])],-1),E=(0,o.uE)('<li>Third, you must operate on the naked logic board while it is plugged in. This is a lot easier if you use a <strong>USB extension cable</strong>.</li><li>Forth, to enter the Bootloader Mode, you have to <ul><li><p>Plug the device in</p></li><li><p>Connect to the device with the serial software (for serial connection parameters, see guide)</p><p><code>putty -serial -sercfg 115200,8,n,1 /dev/ttyACM0</code><br><img src="'+l+'" width="350" height="250"></p></li><li><p>Press and hold the &quot;BOOT&quot; button (upper button in the lower right corner next to the USB plug in the photo below)</p></li><li><p>and then press the &quot;RST.&quot; button (lower button in the lower right corner next to the USB plug in the photo below) to restart the device <img src="https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-naked.jpg" width="648" height="242"></p></li></ul></li><li>Fifth, to upload the file, in the bootloader terminal press &#39;1&#39; to initiate the upload<br><img src="'+n+'" width="350" height="250"><ul><li><p>Open another terminal on the host system to send the file through XMODEM</p><p><code>sx Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl &lt; /dev/ttyACM0 &gt; /dev/ttyACM0</code></p></li><li><p>Wait for &#39;Serial upload complete&#39;, then press &#39;2&#39; in the Bootloader Terminal to restart the dongle.</p></li></ul></li><li>Finally, the dongle LED blinks green, inidicating it is in paring mode. Pair as usual with Z2M.</li>',4),S=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light-indicator-level-numeric" tabindex="-1"><a class="header-anchor" href="#light-indicator-level-numeric" aria-hidden="true">#</a> Light indicator level (numeric)</h3><p>Brightness of the indicator light. Value can be found in the published state on the <code>light_indicator_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),D={},N=(0,i(983744).Z)(D,[["render",function(e,t){const i=(0,o.up)("RouterLink"),l=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),r,(0,o._)("table",null,[a,(0,o._)("tbody",null,[s,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=SONOFF"},{default:(0,o.w5)((()=>[(0,o.Uk)("SONOFF")])),_:1})])]),u,h,g])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,p,(0,o._)("p",null,[(0,o.Uk)('You can create a powerful Zigbee router from an ordinary Sonoff Zigbee 3.0 USB Dongle Plus (Model "ZBDongle-E" with EFR32MG21 chip) by flashing a router firmware onto the device. You can find the official guide for flashing the device here: '),(0,o._)("a",f,[(0,o.Uk)("SONOFF Zigbee 3.0 USB dongle plus firmware flashing"),(0,o.Wm)(l)]),(0,o.Uk)(". The guide also contains the link to the official "),(0,o._)("a",m,[(0,o.Uk)("SONOFF Router Firmware for the ZBDongle-E"),(0,o.Wm)(l)]),(0,o.Uk)(".")]),(0,o._)("p",null,[(0,o.Uk)("As an alternative to disassembling the device, you can also use the browser-based "),(0,o._)("a",b,[(0,o.Uk)("Silabs Firmware Flasher"),(0,o.Wm)(l)]),(0,o.Uk)(". Before flashing, download the router firmware and plug the dongle into a USB port on your computer. A browser supporting the WebSerial API is required; if in doubt, use "),w,(0,o.Uk)(" or "),_,(0,o.Uk)(". After the flashing is done, the dongle will immediately reboot into pairing mode. Pair as usual with Z2M.")]),k,v,(0,o._)("ul",null,[F,(0,o._)("li",null,[(0,o.Uk)("Second, you need a "),(0,o._)("strong",null,[(0,o.Uk)("software supporting the "),(0,o._)("a",O,[(0,o.Uk)("XMODEM file transfer protocol"),(0,o.Wm)(l)])]),(0,o.Uk)(" for sending the firmware image to the device. On Debian Linux like Ubuntu you can use lrzsz, "),y]),E]),(0,o.kq)(" Notes END: Do not edit below this line "),S])}]])}}]);