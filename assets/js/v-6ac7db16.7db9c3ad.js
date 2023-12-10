"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[95567],{803644:(e,o,t)=>{t.r(o),t.d(o,{data:()=>d});const d=JSON.parse('{"key":"v-6ac7db16","path":"/devices/HT-SLM-2.html","title":"Heimgard Technologies HT-SLM-2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Heimgard Technologies HT-SLM-2 control via MQTT","description":"Integrate your Heimgard Technologies HT-SLM-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-27T17:39:27.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Pin code (composite)","slug":"pin-code-composite","link":"#pin-code-composite","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Sound volume (enum)","slug":"sound-volume-enum","link":"#sound-volume-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702237881000},"filePathRelative":"devices/HT-SLM-2.md"}')},250576:(e,o,t)=>{t.r(o),t.d(o,{default:()=>g});var d=t(166252);const i=(0,d._)("h1",{id:"heimgard-technologies-ht-slm-2",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#heimgard-technologies-ht-slm-2","aria-hidden":"true"},"#"),(0,d.Uk)(" Heimgard Technologies HT-SLM-2")],-1),l=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),a=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"HT-SLM-2")],-1),c=(0,d._)("td",null,"Vendor",-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Doorlock with fingerprint")],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"lock (state, lock_state), pin_code, battery, sound_volume, linkquality")],-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HT-SLM-2.jpg",alt:"Heimgard Technologies HT-SLM-2"})])],-1),r=(0,d._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,d.Uk)(" OTA updates")],-1),h=(0,d._)("h2",{id:"options",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,d.Uk)(" Options")],-1),p=(0,d.uE)('<ul><li><code>expose_pin</code>: Expose pin of this lock in the published payload (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite" aria-hidden="true">#</a> Pin code (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pin_code&quot;: &quot;&quot;}</code>.</p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear</li></ul><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum" aria-hidden="true">#</a> Sound volume (enum)</h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),m={},g=(0,t(983744).Z)(m,[["render",function(e,o){const t=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[l,(0,d._)("tbody",null,[a,(0,d._)("tr",null,[c,(0,d._)("td",null,[(0,d.Wm)(t,{to:"/supported-devices/#v=Heimgard%20Technologies"},{default:(0,d.w5)((()=>[(0,d.Uk)("Heimgard Technologies")])),_:1})])]),s,n,u])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),r,(0,d._)("p",null,[(0,d.Uk)("This device supports OTA updates, for more information see "),(0,d.Wm)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,d.w5)((()=>[(0,d.Uk)("OTA updates")])),_:1}),(0,d.Uk)(".")]),h,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[(0,d.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);