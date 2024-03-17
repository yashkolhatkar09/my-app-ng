import './polyfills.server.mjs';
import{C as W,E as $,F as j,I as z,O as F,a as O,b as g,c as v,d as y,e as E,f as k,g as s,h as S,i as P,j as r,k as i,l as m,m as I,n as d,o as _,p as b,q as a,r as w,s as u,t as C,u as D,v as f}from"./chunk-6HDK236I.mjs";import{h as T}from"./chunk-VVCT4QZE.mjs";var x=(()=>{let o=class o{constructor(){this.typeTemp=new O(""),this.type$=this.typeTemp.asObservable(),this.typeTemp.next("C")}setTempType(e){this.typeTemp.next(e)}getTempType(){return this.typeTemp.getValue()}};o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"});let l=o;return l})();var N=(()=>{let o=class o{constructor(e){this.TestServiceService=e,this.title="WeatherWise",this.temp="C"}Changetemp(){this.temp=this.temp==="C"?"F":"C",this.TestServiceService.setTempType(this.temp)}};o.\u0275fac=function(n){return new(n||o)(S(x))},o.\u0275cmp=g({type:o,selectors:[["app-navbr"]],standalone:!0,features:[f],decls:20,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid"],["src","https://cdn.iconscout.com/icon/free/png-512/free-cloudy-weather-11-1147979.png?f=webp&w=256","alt","",2,"height","30px","margin-right","3px"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","/",1,"nav-link","active"],["href","/","aria-current","page",1,"nav-link","active"],["role","search",1,"d-flex"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input",3,"click"],["for","flexSwitchCheckDefault",1,"form-check-label","text-light"]],template:function(n,t){n&1&&(r(0,"nav",0)(1,"div",1),m(2,"img",2),r(3,"a",3),a(4),i(),r(5,"button",4),m(6,"span",5),i(),r(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),a(11,"Home"),i()(),r(12,"li",8)(13,"a",10),a(14,"Forecast"),i()()(),r(15,"form",11)(16,"div",12)(17,"input",13),d("click",function(){return t.Changetemp()}),i(),r(18,"label",14),a(19),i()()()()()()),n&2&&(s(4),w(t.title),s(15),u(" \xB0",t.temp," "))}});let l=o;return l})();var A=(()=>{let o=class o{constructor(e){this.TestServiceService=e,this.typeTemp="",this.now=new Date,this.i=1,this.hours=this.now.getHours(),this.meridiem=this.AmorPm(this.hours),this.formattedHours=this.Makeit12hr(this.hours).toString().padStart(2,"0"),this.minutes=this.now.getMinutes().toString().padStart(2,"0"),this.timeIn12HourFormat=this.formattedHours+":"+this.minutes+" "+this.meridiem,this.dayOfWeek=this.now.getDay(),this.date=this.now.getDate(),this.month=this.now.getMonth(),this.year=this.now.getFullYear()-2e3,this.dayornight="",this.weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.months=["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],this.mothName=this.months[this.month],this.weekdayName=this.weekdays[this.dayOfWeek],this.timezoneOffsetSec=19800,this.timezoneOffsetMs=this.timezoneOffsetSec*1e3,this.localTimeMs=this.now.getTime()+this.timezoneOffsetMs,this.localTime=new Date(this.localTimeMs),this.formattedLocalTime=`${this.localTime.getHours().toString().padStart(2,"0")}:${this.localTime.getMinutes().toString().padStart(2,"0")}`,this.apikey="1ccbda8b761658c716c51b4287213df7",this.city="New Delhi",this.units="metric",this.url=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`,this.weather="",this.temp=0,this.humidity=0,this.wind=0,this.pressure=0,this.feelslike=0,this.windUnit="km/h",this.sunrise="",this.sunset="",this.img="",this.gojo="",this.gojoStyle="",this.LastCitySearched=""}ngOnInit(){this.TestServiceService.type$.subscribe(),this.TestServiceService.type$.subscribe(e=>{this.typeTemp=e,this.units=this.typeTemp==="C"?"metric":"imperial",this.windUnit=this.units==="metric"?"km/h":"mph",this.url=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`,this.getWeatherData()})}Makeit12hr(e){return e%12||12}AmorPm(e){return e>=12?"PM":"AM"}DayorNight(){let e=this.now.getHours();return e>=19||e<7?"Night":"Day"}ChangeMins(){let e=new Date;this.minutes=e.getMinutes().toString().padStart(2,"0"),this.minutes=="00"&&(this.hours=e.getHours(),this.meridiem=this.AmorPm(this.hours),this.formattedHours=this.Makeit12hr(this.hours).toString().padStart(2,"0")),this.timeIn12HourFormat=this.formattedHours+":"+this.minutes+" "+this.meridiem}calculateLocalTime(e,n){let t=e*1e3,c=new Date(t);c.setUTCMinutes(c.getUTCMinutes()+n/60);let p=c.getUTCHours(),h=c.getUTCMinutes(),B=this.Makeit12hr(p.toString().padStart(2,"0")),q=h.toString().padStart(2,"0");return`${B}:${q}`}updateTime(){this.ChangeMins(),this.timeInterval=setInterval(()=>{this.ChangeMins()},6e4)}RoundtheNum(e){return Math.ceil(e)}getWeatherData(){return T(this,null,function*(){try{let n=yield(yield fetch(this.url)).json();return n.cod===404||!n.main||!n.main.temp?void 0:(this.city=="Shibuya"&&(this.gojo="",this.gojoStyle=""),this.city=n.name,this.city=="Shibuya"&&(this.gojo="../../../assets/Images/Extras/Gojo.gif",this.gojoStyle="margin-left: 7px;margin-right: -7px;margin-top: -12px;width: 40px"),this.temp=n.main.temp,this.feelslike=n.main.feels_like,this.humidity=n.main.humidity,this.wind=n.wind.speed,this.weather=n.weather[0].main,this.img=`../../../assets/Images/${this.DayorNight()}/${this.weather}.png`,this.pressure=n.main.pressure,this.sunrise=this.calculateLocalTime(n.sys.sunrise,n.timezone),this.sunset=this.calculateLocalTime(n.sys.sunset,n.timezone),this.updateTime(),!0)}catch{return!1}})}SearchCity(e){e.trim()===""||this.LastCitySearched===e||(this.LastCitySearched=e,this.url=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${this.apikey}&units=${this.units}`,this.getWeatherData())}};o.\u0275fac=function(n){return new(n||o)(S(x))},o.\u0275cmp=g({type:o,selectors:[["app-weather-card"]],standalone:!0,features:[f],decls:80,vars:22,consts:[[1,"body-container"],[1,"snippet-body"],[1,"container-fluid","px-1","px-sm-3","py-5","mx-auto"],[1,"row","d-flex","justify-content-center"],[1,"row","card0"],[1,"card1","col-lg-8","col-md-7"],[1,"text-center"],["src","https://i.imgur.com/M8VyA2h.png",1,"image","mt-5"],[1,"row","px-3","mt-3","mb-1"],[1,"large-font","mr-3"],[1,"container"],[1,"row","align-items-center"],[1,"col-auto"],["alt","",2,"width","50px","margin-right","-20px","margin-bottom","10px",3,"src"],[1,"col"],[2,"width","10rem"],[1,"d-flex","flex-column","mr-3"],[1,"d-flex","mr-3",2,"display","inline-block","width","200px"],["sizes","","srcset","",3,"src"],[1,"d-flex","flex-column","text-center"],[1,"card2","col-lg-4","col-md-5"],[1,"row","px-3"],["type","text","name","location","placeholder","Another location","autocomplete","off",1,"mb-5","SearchCity",3,"keyup.enter"],["box",""],[1,"fa","fa-search","mb-5","mr-0","text-center",3,"click"],[1,"mr-5"],[1,"light-text","suggestion",3,"click"],[1,"line","my-5"],[1,"col-6"],[1,"light-text","suggestion"],[1,"ml-auto"],[1,"ml-auto","suggestion"],[1,"line","mt-3"],["src","https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-07-512.png","alt","","srcset","",2,"height","60px"],[1,"light-text","suggestion",2,"display","inline-block"],["src","https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-09-512.png","alt","","srcset","",2,"height","60px"]],template:function(n,t){if(n&1){let c=I();r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),m(7,"img",7),i(),r(8,"div",8)(9,"h1",9),a(10),i(),r(11,"div",10)(12,"div",11)(13,"div",12),m(14,"img",13),i(),r(15,"div",14)(16,"h2",15),a(17),i()()()(),r(18,"div",16)(19,"div",17)(20,"h5"),a(21),i(),m(22,"img",18),i(),r(23,"small"),a(24),i()(),m(25,"div",19),i()(),r(26,"div",20)(27,"div",21)(28,"input",22,23),d("keyup.enter",function(){v(c);let h=b(29);return y(t.SearchCity(h.value))})("keyup.enter",function(){v(c);let h=b(29);return y(h.value="")}),i(),r(30,"div",24),d("click",function(){v(c);let h=b(29);return y(t.SearchCity(h.value))})("click",function(){v(c);let h=b(29);return y(h.value="")}),i()(),r(31,"div",25)(32,"p",26),d("click",function(){return t.SearchCity("London")}),a(33," London "),i(),r(34,"p",26),d("click",function(){return t.SearchCity("Manchester")}),a(35," Manchester "),i(),r(36,"p",26),d("click",function(){return t.SearchCity("Kolkata")}),a(37," Kolkata "),i(),r(38,"p",26),d("click",function(){return t.SearchCity("California")}),a(39," California "),i(),m(40,"div",27),r(41,"div",10)(42,"p"),a(43,"Weather Details"),i(),r(44,"div",21)(45,"div",28)(46,"p",29),a(47,"Feels Like"),i()(),r(48,"div",28)(49,"p",30),a(50),i()()(),r(51,"div",21)(52,"div",28)(53,"p",29),a(54,"Humidity"),i()(),r(55,"div",28)(56,"p",30),a(57),i()()(),r(58,"div",21)(59,"div",28)(60,"p",29),a(61,"Wind"),i()(),r(62,"div",28)(63,"p",31),a(64),i()()(),r(65,"div",21)(66,"div",28)(67,"p",29),a(68,"Pressure"),i()(),r(69,"div",28)(70,"p",30),a(71),i()()()(),m(72,"div",32)(73,"img",33),r(74,"p",34),a(75),i(),m(76,"p")(77,"img",35),r(78,"p",34),a(79),i()()()()()()()()}n&2&&(s(10),C(" ",t.RoundtheNum(t.temp),"\xB0",t.typeTemp," "),s(4),_("src",t.img,k),s(3),w(t.weather),s(4),w(t.city),s(),P(t.gojoStyle),_("src",t.gojo,k),s(2),D("",t.timeIn12HourFormat," - ",t.weekdayName,", ",t.date," ",t.mothName," '",t.year,""),s(26),C(" ",t.RoundtheNum(t.feelslike),"\xB0",t.typeTemp," "),s(7),u("",t.humidity," %"),s(7),C("",t.wind," ",t.windUnit,""),s(7),u("",t.pressure," mbar"),s(4),u(" Sunrise : ",t.sunrise," AM "),s(4),u(" Sunset : ",t.sunset," PM "))},styles:["*[_ngcontent-%COMP%]{transition:all .4s}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}.body-container[_ngcontent-%COMP%]{color:#fff;overflow-x:hidden;height:100%;background-image:linear-gradient(#81d4fa,#2196f3);background-repeat:no-repeat}.card0[_ngcontent-%COMP%]{width:94%;height:100%}img[_ngcontent-%COMP%]{pointer-events:none}img.no-select[_ngcontent-%COMP%]{user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.card1[_ngcontent-%COMP%]{background-image:linear-gradient(#2196f3,#81d4fa);padding:30px 20px 30px 50px}.image[_ngcontent-%COMP%]{width:300px;height:300px}.large-font[_ngcontent-%COMP%]{font-size:70px;font-family:Arial}.fa-sun-o[_ngcontent-%COMP%]{font-size:22px}.card2[_ngcontent-%COMP%]{background-color:#607d8b;padding:0 0 40px 40px}input[_ngcontent-%COMP%]{background-color:#607d8b;padding:24px 0 12px!important;width:80%;box-sizing:border-box;border:none!important;border-bottom:1px solid #cfd8dc!important;font-size:16px!important;color:#fff!important}input[_ngcontent-%COMP%]:focus{-moz-box-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;border-bottom:1px solid #fff!important;outline-width:0;font-weight:400}[_ngcontent-%COMP%]::placeholder{color:#b0bec5!important;opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#b0bec5!important}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#b0bec5!important}.fa-search[_ngcontent-%COMP%]{color:#607d8b;background-color:#e1f5fe;font-size:20px;padding:20px;width:20%;cursor:pointer}.light-text[_ngcontent-%COMP%]{color:#b0bec5}.suggestion[_ngcontent-%COMP%]:hover{color:#fff;cursor:default}.line[_ngcontent-%COMP%]{height:1px;background-color:#b0bec5}@media screen and (max-width: 500px){.card1[_ngcontent-%COMP%]{padding-left:26px}}"]});let l=o;return l})();var V=(()=>{let o=class o{constructor(){this.selectedCity=""}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=g({type:o,selectors:[["app-root"]],standalone:!0,features:[f],decls:2,vars:0,template:function(n,t){n&1&&m(0,"app-navbr")(1,"app-weather-card")},dependencies:[N,A],styles:["*[_ngcontent-%COMP%]{transition:all .4s}"]});let l=o;return l})();var L=[];var U={providers:[F(L),j()]};var J={providers:[z()]},R=W(U,J);var K=()=>$(V,R),ue=K;export{ue as a};
