(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9937:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(8231)}])},8396:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(5893),a=n(9008),i=n.n(a),o=n(1163);function u(t){var e=(0,o.useRouter)(),n=t.title?t.title+" | LAION":"LAION",a=t.desc?t.desc:"LAION, Large-scale Artificial Intelligence Open Network, is a non-profit organization making machine learning resources available to the general public.",u=t.image?t.img:"/social.png",s=t.alt?t.alt:"The text: LAION. Large-scale Artificial Intelligence Open Network, TRULY OPEN AI. 100% NON-PROFIT. 100% FREE.",c=t.slug?t.slug:e.route;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"twitter:description",content:a}),(0,r.jsx)("meta",{property:"og:image",content:u}),(0,r.jsx)("meta",{property:"twitter:image",content:u}),(0,r.jsx)("meta",{name:"twitter:image:alt",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://laion.ai"+c}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://laion.ai"+c}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"theme-color",content:"#1D374E"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon.png"})]})}},8231:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return s},default:function(){return c}});var r=n(5893),a=n(9980),i=n.n(a),o=n(8396),u=n(1280),s=!0;function c(t){var e=t.frontmatter,n=t.content,a=t.date,s=t.slug;return(0,r.jsxs)("div",{className:"w-full flex justify-center py-5 pt-16 md:pt-5",children:[(0,r.jsx)(o.Z,{title:e.title,desc:i()().render(n).replace(/<[^>]+>/g,"").slice(0,157)+"...",image:e.previewImg,slug:"/blog/"+s}),(0,r.jsxs)("div",{className:"container px-5",children:[(0,r.jsx)("h1",{className:"text-8xl md:text-8xl font-bold",children:e.title.toUpperCase()}),(0,r.jsxs)("p",{className:"text-2xl pb-2",children:["by: ",e.author,", ",(0,u.ZP)(a,"m mmm, yyyy")]}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"pt-2 article",dangerouslySetInnerHTML:{__html:i()().render(n)}})]})]})}},1280:function(t,e,n){"use strict";n.d(e,{ZP:function(){return o}});var r=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,a=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,i=/[^-+\dA-Z]/g;function o(t,e,n,a){if(1!==arguments.length||"string"!==typeof t||/\d/.test(t)||(e=t,t=void 0),(t=t||0===t?t:new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var i=(e=String(u[e]||e||u.default)).slice(0,4);"UTC:"!==i&&"GMT:"!==i||(e=e.slice(4),n=!0,"GMT:"===i&&(a=!0));var o=function(){return n?"getUTC":"get"},f=function(){return t[o()+"Date"]()},g=function(){return t[o()+"Day"]()},p=function(){return t[o()+"Month"]()},h=function(){return t[o()+"FullYear"]()},M=function(){return t[o()+"Hours"]()},T=function(){return t[o()+"Minutes"]()},N=function(){return t[o()+"Seconds"]()},D=function(){return t[o()+"Milliseconds"]()},x=function(){return n?0:t.getTimezoneOffset()},v=function(){return d(t)},w=function(){return l(t)},j={d:function(){return f()},dd:function(){return c(f())},ddd:function(){return s.dayNames[g()]},DDD:function(){return m({y:h(),m:p(),d:f(),_:o(),dayName:s.dayNames[g()],short:!0})},dddd:function(){return s.dayNames[g()+7]},DDDD:function(){return m({y:h(),m:p(),d:f(),_:o(),dayName:s.dayNames[g()+7]})},m:function(){return p()+1},mm:function(){return c(p()+1)},mmm:function(){return s.monthNames[p()]},mmmm:function(){return s.monthNames[p()+12]},yy:function(){return String(h()).slice(2)},yyyy:function(){return c(h(),4)},h:function(){return M()%12||12},hh:function(){return c(M()%12||12)},H:function(){return M()},HH:function(){return c(M())},M:function(){return T()},MM:function(){return c(T())},s:function(){return N()},ss:function(){return c(N())},l:function(){return c(D(),3)},L:function(){return c(Math.floor(D()/10))},t:function(){return M()<12?s.timeNames[0]:s.timeNames[1]},tt:function(){return M()<12?s.timeNames[2]:s.timeNames[3]},T:function(){return M()<12?s.timeNames[4]:s.timeNames[5]},TT:function(){return M()<12?s.timeNames[6]:s.timeNames[7]},Z:function(){return a?"GMT":n?"UTC":y(t)},o:function(){return(x()>0?"-":"+")+c(100*Math.floor(Math.abs(x())/60)+Math.abs(x())%60,4)},p:function(){return(x()>0?"-":"+")+c(Math.floor(Math.abs(x())/60),2)+":"+c(Math.floor(Math.abs(x())%60),2)},S:function(){return["th","st","nd","rd"][f()%10>3?0:(f()%100-f()%10!=10)*f()%10]},W:function(){return v()},WW:function(){return c(v())},N:function(){return w()}};return e.replace(r,(function(t){return t in j?j[t]():t.slice(1,t.length-1)}))}var u={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(t).padStart(e,"0")},m=function(t){var e=t.y,n=t.m,r=t.d,a=t._,i=t.dayName,o=t.short,u=void 0!==o&&o,s=new Date,c=new Date;c.setDate(c[a+"Date"]()-1);var m=new Date;m.setDate(m[a+"Date"]()+1);return s[a+"FullYear"]()===e&&s[a+"Month"]()===n&&s[a+"Date"]()===r?u?"Tdy":"Today":c[a+"FullYear"]()===e&&c[a+"Month"]()===n&&c[a+"Date"]()===r?u?"Ysd":"Yesterday":m[a+"FullYear"]()===e&&m[a+"Month"]()===n&&m[a+"Date"]()===r?u?"Tmw":"Tomorrow":i},d=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var a=(e-n)/6048e5;return 1+Math.floor(a)},l=function(t){var e=t.getDay();return 0===e&&(e=7),e},y=function(t){return(String(t).match(a)||[""]).pop().replace(i,"").replace(/GMT\+0000/g,"UTC")}}},function(t){t.O(0,[286,774,888,179],(function(){return e=9937,t(t.s=e);var e}));var e=t.O();_N_E=e}]);