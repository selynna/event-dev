webpackJsonp([0xc23565d713b7],{14:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,u,c=a(e),i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var d in n)l.call(n,d)&&(c[d]=n[d]);if(r){u=r(n);for(var s=0;s<u.length;s++)o.call(n,u[s])&&(c[u[s]]=n[u[s]])}}return c}},385:function(e,t,a){e.exports=a.p+"static/baker.41491214.png"},386:function(e,t,a){e.exports=a.p+"static/bottomGrass.0e6b7904.png"},387:function(e,t,a){e.exports=a.p+"static/game.44a2e677.png"},388:function(e,t,a){e.exports=a.p+"static/hardware.3a7fc7ec.png"},389:function(e,t,a){e.exports=a.p+"static/machine.e7843d71.png"},139:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(385),u=n(o),c=a(200),i=n(c),d=function(){function e(){return l.default.createElement("div",{className:i.default.baker},l.default.createElement("img",{className:i.default.baker_image,src:u.default,alt:"baker"}))}return e}();t.default=d,e.exports=t.default},200:function(e,t){e.exports={baker:"src-components----Baker-module---baker---3uK1O",baker_image:"src-components----Baker-module---baker_image---2UGlI"}},140:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(201),u=n(o),c=a(28),i=n(c),d=a(86),s=n(d),f=a(29),m=n(f),p=a(44),h=n(p),g=a(252),y=n(g),b=function(){function e(){function e(e){var t=y.default.body;return t[e].questions.map(function(e){return l.default.createElement("div",{className:u.default.question},l.default.createElement(h.default,{fontSize:"1.25rem",color:"black"},e.title),l.default.createElement(m.default,{fontSize:"1.25rem",color:"black"},e.answer))})}return l.default.createElement("div",{className:u.default.faq},l.default.createElement(i.default,{fontSize:"4.5rem",color:"black"},"FAQ"),l.default.createElement("div",{className:u.default.faqWrapper},l.default.createElement("section",{className:u.default.faqSection},l.default.createElement(s.default,null,e(0))),l.default.createElement("section",{className:u.default.faqSection},l.default.createElement(s.default,null,e(1)))))}return e}();t.default=b,e.exports=t.default},201:function(e,t){e.exports={faq:"src-components----FAQ-module---faq---m2j0G",faqWrapper:"src-components----FAQ-module---faqWrapper---2kOJr",faqSection:"src-components----FAQ-module---faqSection---2_GyA",question:"src-components----FAQ-module---question---aPMtP"}},141:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(28),u=n(o),c=a(144),i=n(c),d=a(29),s=n(d),f=a(202),m=n(f),p=function(){function e(){return l.default.createElement("div",{className:m.default.history},l.default.createElement("section",{className:m.default.historyContainer},l.default.createElement("div",{className:m.default.historyHeader},l.default.createElement(u.default,{fontSize:"4.5rem",color:"#67778e"},"We Are SLO ",l.default.createElement("br",null),"Hacks."),l.default.createElement(i.default,{fontSize:"1.8rem",color:"#67778e",borderRadius:"1.25em"},"Learn More")),l.default.createElement("div",{className:m.default.historyText},l.default.createElement(s.default,{fontSize:"1.3rem",color:"#67778e"},"Founded in 2017, SLO Hacks is an entirely student-run organization. We host multiple hackathon events year-round and we pride ourselves on giving students the opportunity to bring ideas to life with collaboration, technology, and hacking!"))))}return e}();t.default=p,e.exports=t.default},202:function(e,t){e.exports={history:"src-components----History-module---history---Bn49B",historyContainer:"src-components----History-module---historyContainer---3XyVH",historyHeader:"src-components----History-module---historyHeader---2OdTF",historyText:"src-components----History-module---historyText---2jWN3"}},142:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(28),u=n(o),c=a(86),i=n(c),d=a(29),s=n(d),f=a(44),m=n(f),p=a(203),h=n(p),g=a(253),y=n(g),b=a(386),v=n(b),E=function(){function e(){function e(e){var t=y.default.body;return t[e].events.map(function(e){return l.default.createElement("div",{className:h.default.event},l.default.createElement(m.default,{fontSize:"1.25rem",color:"black"},e.title),l.default.createElement(s.default,{fontSize:"1.25rem",color:"black"},e.location))})}return l.default.createElement("div",{className:h.default.schedule},l.default.createElement(u.default,{fontSize:"4.5rem",color:"white"},"Schedule"),l.default.createElement("div",{className:h.default.scheduleWrapper},l.default.createElement("section",{className:h.default.scheduleSection},l.default.createElement("div",{className:h.default.dayHeader},l.default.createElement(m.default,null,"Saturday")),l.default.createElement(i.default,null,e(0))),l.default.createElement("section",{className:h.default.scheduleSection},l.default.createElement("div",{className:h.default.dayHeader},l.default.createElement(m.default,null,"Sunday")),l.default.createElement(i.default,null,e(1)))),l.default.createElement("img",{className:h.default.bottomGrass_image,src:v.default,alt:"grass"}))}return e}();t.default=E,e.exports=t.default},203:function(e,t){e.exports={schedule:"src-components----Schedule-module---schedule---3LZPQ",scheduleWrapper:"src-components----Schedule-module---scheduleWrapper---2ulcX",event:"src-components----Schedule-module---event---1M4iw",scheduleSection:"src-components----Schedule-module---scheduleSection---3886N",dayHeader:"src-components----Schedule-module---dayHeader---1XJkB",bottomGrass_image:"src-components----Schedule-module---bottomGrass_image---3qdlN"}},143:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(28),u=n(o),c=a(44),i=n(c),d=a(29),s=n(d),f=a(204),m=n(f),p=a(387),h=n(p),g=a(389),y=n(g),b=a(388),v=n(b),E=function(){function e(){return l.default.createElement("div",{className:m.default.tracks},l.default.createElement(u.default,{color:"white",fontSize:"4rem"},"Technical Tracks"),l.default.createElement("div",{className:m.default.track},l.default.createElement("div",{className:m.default.trackContainer},l.default.createElement("img",{className:m.default.image,src:h.default,alt:h.default}),l.default.createElement(i.default,{fontSize:"2rem",color:"white"},"Game"),l.default.createElement(i.default,{fontSize:"2rem",color:"white"},"Design"),l.default.createElement(s.default,{color:"white"},"A hackathon is an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming.")),l.default.createElement("div",{className:m.default.trackContainer},l.default.createElement("img",{className:m.default.image,src:y.default,alt:y.default}),l.default.createElement(i.default,{fontSize:"2rem",color:"white"},"AI + Machine"),l.default.createElement(i.default,{fontSize:"2rem",color:"white"},"Learning"),l.default.createElement(s.default,{color:"white"},"A hackathon is an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming.")),l.default.createElement("div",{className:m.default.trackContainer},l.default.createElement("img",{className:m.default.image,src:v.default,alt:v.default}),l.default.createElement(i.default,{fontSize:"2rem",color:"white"},"IoT +"),l.default.createElement(i.default,{fontSize:"2rem",color:"white"},"Hardware"),l.default.createElement(s.default,{color:"white"},"A hackathon is an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming."))))}return e}();t.default=E,e.exports=t.default},204:function(e,t){e.exports={tracks:"src-components----Tracks-module---tracks---RRfF0",track:"src-components----Tracks-module---track---1sW9p",trackContainer:"src-components----Tracks-module---trackContainer---1ce7n",image:"src-components----Tracks-module---image---hAvV0"}},144:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(2),u=n(o),c=a(205),i=n(c),d=function(){function e(e){var t=e.children,a=e.color,n=e.fontSize,r=e.borderRadius,o="3px solid "+a,u={color:a,border:o,fontSize:n,borderRadius:r};return l.default.createElement("div",{style:u,className:i.default.button},l.default.createElement("span",null,t))}return e}();d.propTypes={children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]).isRequired,color:u.default.string.isRequired,fontSize:u.default.string.isRequired,borderRadius:u.default.string.isRequired},t.default=d,e.exports=t.default},205:function(e,t){e.exports={button:"src-components-common----Button-module---button---wpv50"}},86:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(2),u=n(o),c=a(206),i=n(c),d=function(){function e(e){var t=e.children;return l.default.createElement("div",{className:i.default.column},t)}return e}();d.propTypes={children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]).isRequired},t.default=d,e.exports=t.default},206:function(e,t){e.exports={column:"src-components-common----Column-module---column---ER0Ef"}},28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(2),u=n(o),c=a(207),i=n(c),d=function(){function e(e){var t=e.children,a=e.color,n=e.fontSize,r={color:a,fontSize:n};return l.default.createElement("h1",{style:r,className:i.default.header},t)}return e}();d.propTypes={children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]).isRequired,color:u.default.string.isRequired,fontSize:u.default.string.isRequired},t.default=d,e.exports=t.default},207:function(e,t){e.exports={header:"src-components-common----Header-module---header---3BVZh"}},44:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(2),u=n(o),c=function(){function e(e){var t=e.children,a=e.fontSize,n=e.fontWeight,r=e.color,o={fontSize:a,fontWeight:n,color:r};return l.default.createElement("h2",{style:o},t)}return e}();c.propTypes={children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]).isRequired,fontSize:u.default.string.isRequired,fontWeight:u.default.number.isRequired,color:u.default.string.isRequired},t.default=c,e.exports=t.default},29:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(2),u=n(o),c=function(){function e(e){var t=e.children,a=e.fontWeight,n=e.fontSize,r=e.color,o={fontWeight:a,fontSize:n,color:r};return l.default.createElement("p",{style:o},t)}return e}();c.propTypes={children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]).isRequired,fontSize:u.default.string.isRequired,fontWeight:u.default.number.isRequired,color:u.default.string.isRequired},t.default=c,e.exports=t.default},252:function(e,t){e.exports={body:[{questions:[{title:"What is a hackathon?",answer:"A hackathon is an event where students with common interests from all over the nation come together and collaborate on a project over a 24-hour period."},{title:"Who can come?",answer:"All college students (both graduate and undergraduate) are welcome! No prior experience is necessary."},{title:"What can I build?",answer:"If you can think it, you can build it. We encourage students to build technological projects, whether they be software or hardware."},{title:"What if I don't have a team or idea?",answer:"Not a problem. There will be time to find other students who don't have a team yet!"},{title:"Still have questions?",answer:"Feel free to shoot us an email at team@slohacks.com or contact us on Facebook!"}]},{questions:[{title:"What should I bring?",answer:"Bring your ID, computer, and sleeping bag (optional). All the necessary equipment for hardware projects will be provided."},{title:"How much does it cost?",answer:"Food and admission are absolutely FREE! Commute will be free for students traveling within California."},{title:"Is there a code of conduct?",answer:"Please refer to the MLH website."},{title:"What should I bring?",answer:"We will be reimbursing hackers for their transportation within California. Check your email upon acceptance for more details!"},{title:"What should I bring?",answer:"Feel free to shoot us an email at team@slohacks.com or contact us on Facebook."}]}]}},253:function(e,t){e.exports={body:[{events:[{title:"Paper Airplane Activity",location:"TBD"},{title:"Late Night Campus Tour",location:"TBD"},{title:"Breakfast",location:"TBD"},{title:"Android Workshop",location:"TBD"},{title:"Shirts Distribution",location:"TBD"},{title:"Lunchn",location:"TBD"},{title:"Raffles",location:"TBD"}]},{events:[{title:"Cup Stackking Challenge",location:"TBD"},{title:"Breakfast",location:"TBD"},{title:"Hacking Ends",location:"TBD"},{title:"Prep for Expo",location:"TBD"},{title:"Expo",location:"TBD"}]}]}},147:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(143),u=n(o),c=a(141),i=n(c),d=a(139),s=n(d),f=a(142),m=n(f),p=a(140),h=n(p),g=a(208),y=n(g),b=function(){function e(){return l.default.createElement("div",{className:y.default.layout},l.default.createElement(u.default,null),l.default.createElement(i.default,null),l.default.createElement(s.default,null),l.default.createElement(m.default,null),l.default.createElement(h.default,null))}return e}();t.default=b,e.exports=t.default},208:function(e,t){e.exports={layout:"src-pages----index-module---layout---1tgzZ"}}});
//# sourceMappingURL=component---src-pages-index-jsx-8c85f6135a2127ad6580.js.map