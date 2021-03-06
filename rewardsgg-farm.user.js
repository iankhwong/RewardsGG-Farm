// ==UserScript==
// @name         RewardsGG Farm [v1.2.1b1 TESTED]
// @namespace    https://github.com/DeathMiner/RewardsGG-Farm
// @version      1.5
// @description  Want to participate in some giveaways but you're lazy, enjoy this automatic ticket farm!
// @author       Death_Miner
// @license      MIT
// @run-at       document-start
// @match        https://rewards.gg/get-tickets
// @match        http://rewards.gg/get-tickets
// @grant        none
// @updateURL    https://github.com/DeathMiner/RewardsGG-Farm/raw/master/rewardsgg-farm.user.js
// @downloadURL  https://github.com/DeathMiner/RewardsGG-Farm/raw/master/rewardsgg-farm.user.js
// @supportURL   https://github.com/DeathMiner/RewardsGG-Farm/issues
// ==/UserScript==

/**
 * BLISS.JS SHY v1.0.1
 * Heavenly JavaScript
 * By LeaVerou, MIT licensied
 *
 * http://blissfuljs.com/
 **/
!function(){"use strict";function t(e,r,s){return r=void 0===r?1:r,s=s||r+1,1>=s-r?function(){if(arguments.length<=r||"string"===n.type(arguments[r]))return e.apply(this,arguments);var t,s=arguments[r];for(var i in s){var o=Array.from(arguments);o.splice(r,1,i,s[i]),t=e.apply(this,o)}return t}:t(t(e,r+1,s),r,s-1)}function e(t,e,r){for(var s in e){if(r){var i=n.type(r);if("own"===r&&!e.hasOwnProperty(s)||"array"===i&&-1===r.indexOf(s)||"regexp"===i&&!r.test(s)||"function"===i&&!r.call(e,s))continue}var o=Object.getOwnPropertyDescriptor(e,s);!o||o.writable&&o.configurable&&o.enumerable&&!o.get&&!o.set?t[s]=e[s]:(delete t[s],Object.defineProperty(t,s,o))}return t}var n=self.Bliss=e(function(t,e){return"string"===n.type(t)?(e||document).querySelector(t):t||null},self.Bliss);e(n,{extend:e,overload:t,property:n.property||"_",sources:{},noop:function(){},$:function(t,e){return t instanceof Node||t instanceof Window?[t]:Array.from("string"==typeof t?(e||document).querySelectorAll(t):t||[])},type:function(t){if(null===t)return"null";if(void 0===t)return"undefined";var e=(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase();return"number"==e&&isNaN(t)?"nan":e},defined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},create:function(t,e){return t instanceof Node?n.set(t,e):(1===arguments.length&&("string"===n.type(t)?e={}:(e=t,t=e.tag,e=n.extend({},e,function(t){return"tag"!==t}))),n.set(document.createElement(t||"div"),e))},each:function(t,e,n){n=n||{};for(var r in t)n[r]=e.call(t,r,t[r]);return n},ready:function(t){return t=t||document,new Promise(function(e,n){"loading"!==t.readyState?e():t.addEventListener("DOMContentLoaded",function(){e()})})},Class:function(t){var e=n.noop;t.hasOwnProperty("constructor")&&(e=t.constructor,delete t.constructor);var r=t["abstract"];delete t["abstract"];var s=function(){if(r&&this.constructor===s)throw new Error("Abstract classes cannot be directly instantiated.");return this.constructor["super"]&&this.constructor["super"]!=s&&this.constructor["super"].apply(this,arguments),e.apply(this,arguments)};s["super"]=t["extends"]||null,delete t["extends"],s.prototype=n.extend(Object.create(s["super"]?s["super"].prototype:Object),{constructor:s}),n.extend(s,t["static"]),delete t["static"];for(var i in t)i in n.classProps&&(n.classProps[i].call(s,s.prototype,t[i]),delete t[i]);return n.extend(s.prototype,t),s.prototype["super"]=s["super"]?s["super"].prototype:null,s},classProps:{lazy:t(function(t,e,n){return Object.defineProperty(t,e,{get:function(){var t=n.call(this);return Object.defineProperty(this,e,{value:t,configurable:!0,enumerable:!0,writable:!0}),t},configurable:!0,enumerable:!0}),t}),live:t(function(t,e,r){return"function"===n.type(r)&&(r={set:r}),Object.defineProperty(t,e,{get:function(){var t=this["_"+e],n=r.get&&r.get.call(this,t);return void 0!==n?n:t},set:function(t){var n=this["_"+e],s=r.set&&r.set.call(this,t,n);this["_"+e]=void 0!==s?s:t},configurable:r.configurable,enumerable:r.enumerable}),t})},include:function(){var t=arguments[arguments.length-1],e=2===arguments.length?arguments[0]:!1,r=document.createElement("script");return e?Promise.resolve():new Promise(function(e,s){n.set(r,{async:!0,onload:function(){e(),n.remove(r)},onerror:function(){s()},src:t,inside:document.head})})},fetch:function(t,r){if(!t)throw new TypeError("URL parameter is mandatory and cannot be "+t);var s=e({url:new URL(t,location),data:"",method:"GET",headers:{},xhr:new XMLHttpRequest},r);s.method=s.method.toUpperCase(),n.hooks.run("fetch-args",s),"GET"===s.method&&s.data&&(s.url.search+=s.data),document.body.setAttribute("data-loading",s.url),s.xhr.open(s.method,s.url.href,s.async!==!1,s.user,s.password);for(var i in r)if(i in s.xhr)try{s.xhr[i]=r[i]}catch(o){self.console&&console.error(o)}"GET"===s.method||s.headers["Content-type"]||s.headers["Content-Type"]||s.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(var a in s.headers)s.xhr.setRequestHeader(a,s.headers[a]);return new Promise(function(t,e){s.xhr.onload=function(){document.body.removeAttribute("data-loading"),0===s.xhr.status||s.xhr.status>=200&&s.xhr.status<300||304===s.xhr.status?t(s.xhr):e(Error(s.xhr.statusText))},s.xhr.onerror=function(){document.body.removeAttribute("data-loading"),e(Error("Network Error"))},s.xhr.send("GET"===s.method?null:s.data)})},value:function(t){var e="string"!==n.type(t);return $$(arguments).slice(+e).reduce(function(t,e){return t&&t[e]},e?t:self)}}),n.Hooks=new n.Class({add:function(t,e){this[t]=this[t]||[],this[t].push(e)},run:function(t,e){(this[t]||[]).forEach(function(t){t(e)})}}),n.hooks=new n.Hooks;var r=n.property;n.Element=function(t){this.subject=t,this.data={},this.bliss={}},n.Element.prototype={set:t(function(t,e){t in n.setProps?n.setProps[t].call(this,e):t in this?this[t]=e:this.setAttribute(t,e)},0),transition:function(t,e){return e=+e||400,new Promise(function(r,s){if("transition"in this.style){var i=n.extend({},this.style,/^transition(Duration|Property)$/);n.style(this,{transitionDuration:(e||400)+"ms",transitionProperty:Object.keys(t).join(", ")}),n.once(this,"transitionend",function(){clearTimeout(o),n.style(this,i),r(this)});var o=setTimeout(r,e+50,this);n.style(this,t)}else n.style(this,t),r(this)}.bind(this))},fire:function(t,e){var r=document.createEvent("HTMLEvents");return r.initEvent(t,!0,!0),this.dispatchEvent(n.extend(r,e))},unbind:t(function(t,e){(t||"").split(/\s+/).forEach(function(t){if(r in this&&(t.indexOf(".")>-1||!e)){t=(t||"").split(".");var n=t[1];t=t[0];var s=this[r].bliss.listeners=this[r].bliss.listeners||{};for(var i in s)if(!t||i===t)for(var o,a=0;o=s[i][a];a++)n&&n!==o.className||e&&e!==o.callback||(this.removeEventListener.call(this,i,o.callback,o.capture),a--)}else this.removeEventListener(t,e)},this)},0)},n.setProps={style:function(t){n.extend(this.style,t)},attributes:function(t){for(var e in t)this.setAttribute(e,t[e])},properties:function(t){n.extend(this,t)},events:function(t){if(t&&t.addEventListener){var e=this;if(t[r]&&t[r].bliss){var s=t[r].bliss.listeners;for(var i in s)s[i].forEach(function(t){e.addEventListener(i,t.callback,t.capture)})}for(var o in t)0===o.indexOf("on")&&(this[o]=t[o])}else if(arguments.length>1&&"string"===n.type(t)){var a=arguments[1],u=arguments[2];t.split(/\s+/).forEach(function(t){this.addEventListener(t,a,u)},this)}else for(var c in t)n.events(this,c,t[c])},once:t(function(t,e){t=t.split(/\s+/);var n=this,r=function(){return t.forEach(function(t){n.removeEventListener(t,r)}),e.apply(n,arguments)};t.forEach(function(t){n.addEventListener(t,r)})},0),delegate:t(function(t,e,n){this.addEventListener(t,function(t){t.target.closest(e)&&n.call(this,t)})},0,2),contents:function(t){(t||0===t)&&(Array.isArray(t)?t:[t]).forEach(function(t){var e=n.type(t);/^(string|number)$/.test(e)?t=document.createTextNode(t+""):"object"===e&&(t=n.create(t)),t instanceof Node&&this.appendChild(t)},this)},inside:function(t){t.appendChild(this)},before:function(t){t.parentNode.insertBefore(this,t)},after:function(t){t.parentNode.insertBefore(this,t.nextSibling)},start:function(t){t.insertBefore(this,t.firstChild)},around:function(t){t.parentNode&&n.before(this,t),(/^template$/i.test(this.nodeName)?this.content||this:this).appendChild(t)}},n.Array=function(t){this.subject=t},n.Array.prototype={all:function(t){var e=$$(arguments).slice(1);return this[t].apply(this,e)}},n.add=t(function(t,e,r,s){r=n.extend({$:!0,element:!0,array:!0},r),"function"==n.type(e)&&(!r.element||t in n.Element.prototype&&s||(n.Element.prototype[t]=function(){return this.subject&&n.defined(e.apply(this.subject,arguments),this.subject)}),!r.array||t in n.Array.prototype&&s||(n.Array.prototype[t]=function(){var t=arguments;return this.subject.map(function(r){return r&&n.defined(e.apply(r,t),r)})}),r.$&&(n.sources[t]=n[t]=e,(r.array||r.element)&&(n[t]=function(){var e=[].slice.apply(arguments),s=e.shift(),i=r.array&&Array.isArray(s)?"Array":"Element";return n[i].prototype[t].apply({subject:s},e)})))},0),n.add(n.Array.prototype,{element:!1}),n.add(n.Element.prototype),n.add(n.setProps),n.add(n.classProps,{element:!1,array:!1});var s=document.createElement("_");n.add(n.extend({},HTMLElement.prototype,function(t){return"function"===n.type(s[t])}),null,!0)}();

/**
 * FUCK FUCKADBLOCK v5
 * Acts like FuckAdBlock.js but always says that no adblock was detected.
 * By Mechazawa, WTFPl licensied
 *
 * https://github.com/Mechazawa/FuckFuckAdblock
 **/
!function(a){var b=!1,c=function(c){void 0!==c&&this.setOption(c);var d=this;a.addEventListener("load",function(){setTimeout(function(){d._options.checkOnLoad===!0&&d.check(!1)},1)},!1);var d=this;this.debug={set:function(a){return b=!!a,d},get:function(){return b}}};c.prototype={setOption:function(a,b){if(void 0!==b){var c=a;a={},a[c]=b}for(option in a)this._options[option]=a[option];return this},_options:{checkOnLoad:!0,resetOnEnd:!0},_var:{triggers:[]},check:function(a){return this.emitEvent(!1),!0},clearEvent:function(){this._var.triggers=[]},emitEvent:function(a){if(a===!1){for(var b=this._var.triggers,c=0;c<b.length;c+=1)b[c]instanceof Function&&b[c]();this._options.resetOnEnd===!0&&this.clearEvent()}return this},on:function(a,b){return a===!1&&this._var.triggers.push(b),this},onDetected:function(a){return this},onNotDetected:function(a){return this.on(!1,a)}};var d=new c;for(var e in d)Object.defineProperty(d,e,{value:d[e],configurable:!1});Object.defineProperties(a,{fuckAdBlock:{value:d,enumerable:!0,writable:!1}}),Object.defineProperties(a,{blockAdBlock:{value:d,enumerable:!0,writable:!1}})}(window);

/**
 * REWARDSGG FARM v1.5
 * Automatic ticket farm system. [v1.2.1b1 TESTED]
 * By Death_Miner, MIT licensied
 *
 * https://github.com/DeathMiner/RewardsGG-Farm
 **/

// --------------------------------------------
// Wrap console to detect DEV MODE console logs
// --------------------------------------------
(function(window) {

    // Save previous console
    var previousConsole = window.console || {},
        events = {};

    // Replace console with custom one
    window.console = {

        // Log
        log:function(msg){
            events[msg] && events[msg]();
            previousConsole.log && previousConsole.log(msg);
        },

        // Warning
        warn:function(msg){
            events[msg] && events[msg]();
           previousConsole.warn && previousConsole.warn(msg);
        },

        // Error
        error:function(msg){
            events[msg] && events[msg]();
            previousConsole.error && previousConsole.error(msg);
        },

        // When => Callback when a specific message was logged
        when: function(msg, callback){
            events[msg] = callback;
        },

        // Disable callback for this message
        off: function(msg){
            delete events[msg];
        }
    }
})(window);

// ------------
// Main runtime
// ------------
(function(window, document, $, $$){

    // STATS TRACKER
    var s={config:{host:"//444a.tk/s/rewardsgg-farm/",hash:"unknown",username:"Anonymous",version:1},encode_data:function(a){var b="",c=0;return Object.keys(a).forEach(function(d){c>0&&(b+="&"),b+=d+"="+encodeURIComponent(a[d]),c++}),b},request:function(a,b,c){var b=b||{},d=$.extend({username:s.config.username},b),e={hash:s.config.hash,action:a,data:JSON.stringify(d),v:s.config.version};$.fetch(s.config.host,{method:"POST",responseType:"json",headers:{"X-Requested-With":"XMLHttpRequest"},data:s.encode_data(e)}).then(function(a){var b=a.response;b.hash&&b.hash!=s.config.hash&&(s.config.hash=b.hash,localStorage.setItem("_s_rewardsgg-farm_hash",s.config.hash)),c&&c(b)})},init:function(){var a=localStorage.getItem("_s_rewardsgg-farm_privacy");null==a?s.privacy():"true"===a?s.get_username():s.config.username="Anonymous";var b=localStorage.getItem("_s_rewardsgg-farm_hash");null!=b&&(s.config.hash=b)},hit:function(){s.request("hit")},tickets:function(a){s.request("tickets",{count:a})},privacy:function(){window.swal({title:"["+info.name+"]",text:"Do you want to show your username in the farm-leaderboards?\nIf you don't, you will be showed as 'Anonymous'.",showCancelButton:!0,imageUrl:!1,type:"info",confirmButtonColor:"#e74c3c",confirmButtonText:"Yes, show it!",cancelButtonText:"No",closeOnConfirm:!1,closeOnCancel:!1},function(a){window.swal({title:"["+info.name+"]",text:"Your privacy settings were saved!",imageUrl:!1,type:"success"});var b=a===!0?"true":"false";localStorage.setItem("_s_rewardsgg-farm_privacy",b),"true"===b?s.get_username():s.config.username="Anonymous",s.request("none")})},get_username:function(){var a=$(".profile-dropdown > a").innerText;s.config.username=a}};

    // CHANGE THE TITLE OF THE PAGE
    var title = function(message){
            document.title = "["+info.short_name+"] "+message;
            console.log("["+info.name+"] "+message);

            var title = $("#x-rewardsgg-title");
            if(title != null) title.innerText = message;
        },

        // REFRESHES ON ERROR
        error_refresh = function(){
            window.swal({
                title: '['+info.name+']',
                text:  'Error! Refreshing...',
                imageUrl: false,
                type: "error"
            })

            setTimeout(function(){
                window.location.reload();
            }, 5000);
        },

        // CLEANS THE PAGE MARKUP
        clean_page = function(){
            $.style($('#flashTester'), {
                display: "block",
                position: "absolute",
                top: "-9999px",
                left: "-9999px",
                visibility: "hidden"
            })
            $("#streamChat").setAttribute("src", "https://kiwiirc.com/client/irc.kiwiirc.com/?nick="+encodeURIComponent(s.config.username)+"&theme=mini#RewardsGG-Farm");
            $.once($("#streamChat"), {load:function(){
                $("#x-rewardsgg-chat-loading").remove();
            }})
            $.style($("#chatContent"), {
                "border-left": "1px #CCC solid",
                position: "relative"
            });
            $.contents($("#chatContent"), [{
                tag: "div",
                id: "x-rewardsgg-chat-loading",
                style: {
                    "text-align": "center",
                    position: "absolute",
                    top:"0",
                    left:"0",
                    width:"100%"
                },
                textContent: "Loading chat..."
            }])
            $("#videoStreamPlayer").setAttribute("src", s.config.host+"widget/");
            $.once($("#videoStreamPlayer"), {load:function(){
                $("#x-rewardsgg-farm-stats-loading").remove();
            }})
            $$("#reloadPlayerMsg, #videoControls, .notification-bar, #advIframe, #partner-block, footer, #menu-nav").forEach(function($el){
                $el.remove();
            })
            $(".video-iframe-wrapper").style.backgroundColor = "#FFF";
            $.contents($(".video-iframe-wrapper"), [
                {
                    tag: "div",
                    id: "x-rewardsgg-farm-stats-loading",
                    style: {
                        "text-align": "center"
                    },
                    textContent: "Loading stats..."
                },
                {
                    tag: "button",
                    attributes: {
                        type: "button"
                    },
                    style: {
                        position: "absolute",
                        bottom: "5px",
                        right: "20px",
                        background: "#E74C3C",
                        border: "none",
                        "box-shadow": "none",
                        color: "#FFF",
                        "font-size": "15px",
                        "font-weight": "500",
                        padding: "7.5px 24px",
                        cursor: "pointer"
                    },
                    textContent: "Privacy settings",
                    events: {
                        click: s.privacy
                    }
                }
            ])
            $("#menuTheaterChat").innerHTML = '<ul class="nav navbar-nav navbar-right"><li id="x-rewardsgg-tickets-farmed">0</li><li class="darker">Tickets farmed</li></ul>';
            $(".getTickets-adv-panel h3").innerHTML = "About this farm<span class=\"fa fa-shopping-bag pull-right\"></span>";
            $.contents($(".getTickets-adv-panel"), [
                {
                    tag: "p",
                    contents: ["Want to participate in some giveaways but you're lazy, enjoy this automatic ticket farm!", {tag:"br"}, "Brought to you with love by Death_Miner."]
                },
                {
                    tag: "p",
                    contents: [
                        "If you love this farm, please show me some support by adding a star on GitHub!",
                        {tag:"br"},
                        {
                            tag: "a",
                            attributes: {
                                class: "github-button",
                                href: "//github.com/DeathMiner/RewardsGG-Farm",
                                "data-icon": "octicon-star",
                                "data-style": "mega",
                                "data-count-href": "/DeathMiner/RewardsGG-Farm/stargazers",
                                "data-count-api": "/repos/DeathMiner/RewardsGG-Farm#stargazers_count",
                                "data-count-aria-label": "# stargazers on GitHub",
                                "aria-label": "Star DeathMiner/RewardsGG-Farm on GitHub"
                            },
                            contents: ["Star"]
                        }
                    ]
                },
                {
                    tag: "p",
                    contents: [
                        "If you've found a weird bug, or if you have suggestions, create an issue on GitHub!",
                        {tag:"br"},
                        {
                            tag: "a",
                            attributes: {
                                class: "github-button",
                                href: "//github.com/DeathMiner/RewardsGG-Farm/issues",
                                "data-icon": "octicon-issue-opened",
                                "data-style": "mega",
                                "data-count-api": "/repos/DeathMiner/RewardsGG-Farm#open_issues_count",
                                "data-count-aria-label": "# issues on GitHub",
                                "aria-label": "Issue DeathMiner/RewardsGG-Farm on GitHub"
                            },
                            contents: ["Issue"]
                        }
                    ]
                }
            ])
            $.contents($("body"), [
                {
                    tag: "script",
                    attributes: {
                        async: "async",
                        defer: "defer",
                        id: "github-bjs",
                        src: "https://buttons.github.io/buttons.js"
                    }
                },
                {
                    tag: "style",
                    attributes: {
                        id: "x-rewardsgg-farm-tweaks"
                    },
                    contents: ".getTickets-adv-panel iframe{margin:0 !important;}.getTickets-adv-panel p{color:#000 !important;padding:0 20px !important;margin:10px 0 !important;}#x-rewardsgg-progress{background-color:#2ecc71;border-radius:10px;}"
                }
            ])
            var tested_on = info.site_version != info.tested ? " (tested on v"+info.tested+")" : "";
            $.start($.create("h1", {innerHTML: "["+info.name+" v"+info.version+"] <span id='x-rewardsgg-title'></span><br><small>Site v"+info.site_version+tested_on+"</small>"}), $("#get-tickets .container"))
            $.contents($(".navbar-brand"), [{tag: "h1", contents:["FARM"]}])
            $.style($(".navbar-brand img"), {
                float: "left",
                "margin-right": "5px"
            })
            $(".get-tickets-progress-bar").id = "x-rewardsgg-progress";
            $("#x-rewardsgg-progress").classList.remove("get-tickets-progress-bar");
            $("#theaterCounterContainer").id = "x-rewardsgg-counter-container";
            $("#x-rewardsgg-counter-container h4").innerHTML = "Receiving <span id='x-rewardsgg-counter-earning'>some</span> tickets in <span id='x-rewardsgg-counter-seconds'>some</span> seconds";
        },

        // REQUEST THE REWARDS.GG API
        request = function(endpoint, callback){
            $.fetch(window.Routing.generate(endpoint)+"?preventCache="+new Date().getTime(), {
                method: 'GET',
                responseType: "json",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
            .then(callback)
            .catch(function() {
                error_refresh();
            });
        },

        // UPDATE TICKET COUNT
        add_tickets = function(ticketsEarned){
            var ticketsEarned = parseInt(ticketsEarned),
                previousTickets = parseInt($ticketCount.innerText),
                newTickets = previousTickets + ticketsEarned;

            // Animate earned tickets
            window.getTicket.animTicketAdded(ticketsEarned, 100);
            // Increment tickets number
            $ticketCount.innerText = newTickets;
            $('#ticketsCountDropdown').innerText = newTickets;
            
            title("+"+ticketsEarned+" tickets")

            farmed_tickets += ticketsEarned;
            $("#x-rewardsgg-tickets-farmed").innerText = farmed_tickets;


            s.tickets(ticketsEarned);
        },

        // TRY TO GET TICKETS FROM THE JOB OFFER
        try_job_offer = function(){
            request('app_job_offer_ticket', function(xhr){
                var data = xhr.response;

                if(data.message.status === 'success' && data.message.ticket){
                    add_tickets(data.message.ticket);
                }
            })
        },

        // TRY TO GET TICKETS FROM THE AD
        try_ad = function(){
            request('app_add_adv_click_tickets', function(xhr){
                var data = xhr.response;

                if(data.msg){
                    if(data.ticket){
                        add_tickets(data.ticket);

                        // Update ticket timer panel
                        var now = new Date(),
                            nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
                        window.app.data.lastTicketEarningTimes.stream_adv_click.lastTicketEarningTime = {updated: nowUtc};
                        window.getTicket.updateTicketTimerPanel();
                    }
                }
                else{
                    error_refresh();
                }
            })
        },

        // TRY TO GET THE TICKETS FROM WAITING
        try_tickets = function(){
            request('app_add_tickets', function(xhr){
                var data = xhr.response;

                if(data.msg){
                    if (data.msg === 'Added' || data.msg === 'Updated') {
                        add_tickets(data.ticket);

                        $("#x-rewardsgg-counter-earning").innerText = data.ticket;
                    }
                    else if(data.msg === 'Error Code: Langur'){
                        counter_difference = data.difference;
                        counter_interval = parseInt(data.interval, 10);
                    }
                }
                else{
                    error_refresh();
                }
            })
        },

        // Elements (added at DOMContentLoaded)
        $ticketCount,
        $ticketNumber,
        $moreSeconds,

        // Farm infos
        info = {
            version: "1.5",
            tested: "1.2.1b1",
            name: "REWARDS.GG FARM",
            short_name: "FARM",
            site_version: "x.x.x"
        },

        // CHECKS IF AN UPDATE IS AVAILABLE
        check_updates = function(){

            $.fetch("//api.github.com/repos/DeathMiner/RewardsGG-Farm/releases/latest", {
                method: 'GET',
                responseType: "json",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
            .then(function(xhr){
                var data = xhr.response,
                    version = data.tag_name.substr(1);

                if(info.version != version){
                    window.swal({
                        title: '['+info.name+']',
                        text: "A new update is available!\n\n"+data.name+"\n\nUpdate infos:\n"+data.body,
                        showCancelButton: true,
                        imageUrl: false,
                        type: "info",
                        confirmButtonColor: '#e74c3c',
                        confirmButtonText: "Update now!",
                        cancelButtonText: "Later",
                        closeOnConfirm: false,
                        closeOnCancel: true
                    },
                    function(result){

                        if(result){
                            window.swal({
                                title: '['+info.name+']',
                                text: "Updating script...",
                                imageUrl: false,
                                type: "success"
                            });
                            window.location = "https://github.com/DeathMiner/RewardsGG-Farm/raw/"+data.tag_name+"/rewardsgg-farm.user.js"
                        }
                    });
                }
            })
        },

        counter_difference = 0,
        counter_interval = 780,
        farmed_tickets = 0;

    // Show we're loading
    title("Loading...");

    // Wait for DOMContentLoaded
    $.ready().then(function(){

        // Replace FlashBlockDetect with custom one
        window.flashBlockDetect = function(callback){
            callback(0);
        };

        // Get elements from the DOM
        $ticketCount = $(".tickets-count"),
        $ticketNumber = $(".ticket-number"),
        $moreSeconds = $(".more-seconds");

        // Get site version
        info.site_version = $(".footer-copyrights").innerText.split(" | v")[1].replace(/\s/g, "");

        // Force DEV MODE to listen to console.log
        if(typeof window.app != "object") window.app = {};
        if(typeof window.app.data != "object") window.app.data = {};
        window.app.data.devMod = true;

        // Fake adframe.js
        window.adblock = false;

        // Show we're waiting for app init
        title("Waiting...")

        // When the get tickets app init
        window.console.when("get ticket init ", function(){

            s.init();

            // Replace recurringFunc, deleting stock ticket verification (and also Langur error alerts !)
            window.getTicket.recurringFunc = function(){};

            // Show we've loaded
            title("Loaded!")

            // Show an alert when user is not logged
            window.console.when("user must be connected", function(){
                title("Please login!")
                window.swal({
                    title: '['+info.name+']',
                    text:  'Please login first to farm tickets!',
                    imageUrl: false,
                    type: "warning"
                })

                clean_page();
            })
            
            // When user is logged
            window.console.when("user is connected", function(){

                // Farm started
                title("Started!")
                s.hit();

                // Clean page
                clean_page();

                var $progress = $("#x-rewardsgg-progress"),
                    $counter = $("#x-rewardsgg-counter-seconds");

                // Each seconds, set counter in title & spam server
                setInterval(function(){
                    title((counter_interval - counter_difference)+"/"+counter_interval);

                    if((counter_interval - counter_difference) > 0){
                        $progress.style.width = (counter_difference / counter_interval * 100)+"%";
                        $counter.innerText = (counter_interval - counter_difference);
                    }
                    else{
                        $progress.style.width = "100%";
                        $counter.innerText = "some";
                    }

                    try_tickets();
                }, 1000);

                // Prevent user from leaving
                $.delegate($("body"), "click", "a:not([href^='#'])", function(event){
                    if(!confirm("Do you want to stop farming?")){
                        event.preventDefault();
                    }
                });

                // Check updates
                check_updates();
            })

            // Triggers each minute
            window.console.when("interval", function(){
                // Try offers
                try_job_offer();
                try_ad();
            })
        })
    })

})(window, document, Bliss, Bliss.$);