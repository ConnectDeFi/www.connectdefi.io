_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=a.cssRules();return a.flush(),e},t.default=void 0;var n,i=s("q1tI");var a=new(((n=s("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,s;function n(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=n).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,n.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return a.computeId(t,s)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){a.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=o},"577m":function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");t.default=o},"5rCv":function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=o},"6IG3":function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement(a.Fragment,null,a.createElement("circle",{cx:"7.2",cy:"14.4",r:"3.2"}),a.createElement("circle",{cx:"14.8",cy:"18",r:"2"}),a.createElement("circle",{cx:"15.2",cy:"8.8",r:"4.8"})),"BubbleChart");t.default=o},"8oxB":function(e,t){var s,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(s===setTimeout)return setTimeout(e,0);if((s===a||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:a}catch(e){s=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],h=!1,d=-1;function u(){h&&c&&(h=!1,c.length?l=c.concat(l):d=-1,l.length&&m())}function m(){if(!h){var e=r(u);h=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,h=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];l.push(new f(e,t)),1!==l.length||h||r(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},HsiY:function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.default=o},MX0m:function(e,t,s){e.exports=s("3niX")},"Mx+2":function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");t.default=o},RNiq:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return F}));var n=s("MX0m"),i=s.n(n),a=s("q1tI"),o=s.n(a),r=s("5bCC"),c=s("Z7RV"),l=s.n(c),h=s("577m"),d=s.n(h),u=s("HsiY"),m=s.n(u),f=s("oGIZ"),v=s.n(f),p=s("yxaJ"),S=s.n(p),x=s("S+8A"),g=s.n(x),j=s("fgxa"),N=s.n(j),y=s("6IG3"),C=s.n(y),_=s("Mx+2"),b=s.n(_),P=s("5rCv"),w=s.n(P),T=o.a.createElement;function F(){return T(r.a,null,T("div",{id:"home",className:"jsx-1493855170 "+(l.a.firstSection||"")},T("div",{className:"jsx-1493855170 "+(l.a.firstSectionTitle||"")},T("h1",{className:"jsx-1493855170 "+(l.a.title||"")},"ConnectDeFi"),T("h2",{className:"jsx-1493855170 "+(l.a.firstSectionSubTitle||"")},"Fully decentralized and community-led platform."),T("button",{className:"jsx-1493855170 "+(l.a.startButton||"")},T("a",{href:"#aboutus",className:"jsx-1493855170 "+(l.a.startButtonLink||"")},"Get Started >")," "))),T("div",{id:"aboutus",className:"jsx-1493855170 "+(l.a.secondSection||"")},T("div",{className:"jsx-1493855170 "+(l.a.secondSectionTitle||"")},T("h1",{className:"jsx-1493855170 "+(l.a.secondSectionTitleH1||"")},"Who we are?"),T("div",{className:"jsx-1493855170 "+(l.a.secondSectionWho||"")},T("div",{className:"jsx-1493855170 "+(l.a.secondSectionWho1||"")},T("p",{className:"jsx-1493855170"},"Decentralized Finance (DeFi) has brought with it many benefits to the holistic cryptocurrency ecosystem, as well as a lot of demands. The DeFi ecosystem needs platforms that will capture exchange and liquidity demands, yield farming and staking, as well as portfolio management."),T("p",{className:"jsx-1493855170"},"While there are several platforms filling these individual needs, it is cumbersome and sometimes impossible to use them efficiently since each is specific and narrow in what it offers. The fragmented nature of these services continues to be a major obstacle to the adoption of DeFi."),T("p",{className:"jsx-1493855170"},"ConnectDeFi aims to bridge these gaps by providing a single gateway, combining all these services into one easy-to-use platform. ConnectDeFi will function as an aggregator for decentralized exchanges (DEX),covering liquidity, yield farming and staking, while implementing a dedicated portfolio manager, and multichain decentralized wallet.")),T("div",{className:"jsx-1493855170 "+(l.a.secondSectionWho2||"")},T("img",{src:"/abstract.png",className:"jsx-1493855170 "+(l.a.secondSectionWho2Img||"")}))),T("div",{className:"jsx-1493855170 "+(l.a.secondSectionFooter||"")},T("div",{className:"jsx-1493855170 "+(l.a.secondSectionFooterContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.secondSectionFooterTitle||"")},T(d.a,{className:l.a.secondSectionIcons}),T("h2",{className:"jsx-1493855170"},"Market ")),T("p",{className:"jsx-1493855170 "+(l.a.secondSectionFooterContentP||"")},"According to Facts and Factors, the crypto market capitalization is expected to triple in the next five years, driven by the continued push of institutional and retail adoption.")),T("div",{className:"jsx-1493855170 "+(l.a.secondSectionFooterContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.secondSectionFooterTitle||"")},T(m.a,{className:l.a.secondSectionIcons}),T("h2",{className:"jsx-1493855170"},"Problems ")),T("p",{className:"jsx-1493855170 "+(l.a.secondSectionFooterContentP||"")},"There are multiple variables a trader needs to consider for any individual trade, such as safety, price, liquidity, slippage. It is virtually impossible to identify the best combination of these factors without the assistance of a reliable aggregator.")),T("div",{className:"jsx-1493855170 "+(l.a.secondSectionFooterContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.secondSectionFooterTitle||"")},T(v.a,{className:l.a.secondSectionIcons}),T("h2",{className:"jsx-1493855170"},"Solution ")),T("p",{className:"jsx-1493855170 "+(l.a.secondSectionFooterContentP||"")},"ConnectDeFi aims to become the go-to decentralized exchange, liquidity aggregator, and more."))))),T("div",{id:"services",className:"jsx-1493855170 "+(l.a.thirdSection||"")},T("h1",{className:"jsx-1493855170 "+(l.a.thirdSectionTitle||"")},"Our Services"),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentPart1||"")},T(S.a,{className:l.a.thirdSectionIcon1}),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentDetail||"")},T("h2",{className:"jsx-1493855170 "+(l.a.thirdSectionContentTitle||"")},"Decentralized exchange and Liquidity Aggregator"),T("p",{className:"jsx-1493855170 "+(l.a.thirdSectionContentP||"")},"ConnectDeFi will compare liquidity pools of every decentralized exchange to provide traders with both best price and liquidity depth allowing users to easily decide the best way to trade tokens."))),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentPart2||"")},T(C.a,{className:l.a.thirdSectionIcon2}),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentDetail||"")},T("h2",{className:"jsx-1493855170 "+(l.a.thirdSectionContentTitle||"")},"Yield Farming and Staking Aggregator"),T("p",{className:"jsx-1493855170 "+(l.a.thirdSectionContentP||"")},"ConnectDeFi is designed to collect data points from various DeFi protocols with respect to individual ROI, allowing users to decide what is more profitable, almost effortlessly.")))),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentPart3||"")},T(g.a,{className:l.a.thirdSectionIcon3}),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentDetail||"")},T("h2",{className:"jsx-1493855170 "+(l.a.thirdSectionContentTitle||"")},"Portfolio Management"),T("p",{className:"jsx-1493855170 "+(l.a.thirdSectionContentP||"")},"ConnectDeFi assists by tracking assets across multiple wallets, while providing the exact value of all holdings."))),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentPart4||"")},T(N.a,{className:l.a.thirdSectionIcon4}),T("div",{className:"jsx-1493855170 "+(l.a.thirdSectionContentDetail||"")},T("h2",{className:"jsx-1493855170 "+(l.a.thirdSectionContentTitle||"")},"Multichain Wallet"),T("p",{className:"jsx-1493855170 "+(l.a.thirdSectionContentP||"")},"ConnectDeFi will function as a wallet, supporting multiple assets, including Bitcoin, various Ethereum standards, and various other public blockchains."))))),T("div",{id:"framework",className:"jsx-1493855170 "+(l.a.fourthSection||"")},T("h1",{className:"jsx-1493855170 "+(l.a.fourthSectionTitle||"")},"Operational Framework"),T("h5",{className:"jsx-1493855170 "+(l.a.fourthSectionSubTitle||"")},"The ConnectDeFi platform is powered by the Polkadot Network."),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1||"")},T("h3",{className:"jsx-1493855170"},"Benefits of Building on the Polkadot Network "),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Headers||"")},T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Icons||"")},T(b.a,{className:l.a.fourthSectionContentIcons})),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Title||"")},"True Interoperability")),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Paragraph||"")},T("p",{className:"jsx-1493855170"}," ","There are multiple methods to achieve interoperability but Polkadot is unparalleled in this area. The structure includes a central relay chain that all individual blockchains connect to, the parachains run in parallel, while also utilizing bridges that connect to blockchains that do not use Polkadot protocols.")),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Headers||"")},T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Icons||"")},T(b.a,{className:l.a.fourthSectionContentIcons})),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Title||"")},"Economic Scalability:")),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Paragraph||"")},T("p",{className:"jsx-1493855170"},"Polkadot achieves high scalability by enabling a common set of validators to secure multiple blockchains. This shared security strategy is reliable compared to first generation smart contract platforms such as Ethereum 1.0 that is prone to significant network congestion and scaling frictions.")),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Headers||"")},T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Icons||"")},T(b.a,{className:l.a.fourthSectionContentIcons})),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Title||"")},"Open-Source")),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Paragraph||"")},T("p",{className:"jsx-1493855170"},"Polkadot Network is powered by Substrate, an open-source framework that allows for building configurable blockchains in a minimal time.")),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Headers||"")},T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Icons||"")},T(b.a,{className:l.a.fourthSectionContentIcons})),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Title||"")},"Decentralized Governance")),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart1Paragraph||"")},T("p",{className:"jsx-1493855170"},"Polkadot\u2019s governance is based on a Decentralized Autonomous Organization (DAO), which democratically confers on shareholders the rights to form a consensus on critical decisions."))),T("div",{className:"jsx-1493855170 "+(l.a.fourthSectionContentPart2||"")},T("img",{src:"./polkadot_img.png",className:"jsx-1493855170 "+(l.a.fourthSectionContentPart2Img||"")})))),T("div",{className:"jsx-1493855170 "+(l.a.fifthSection||"")},T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart1||"")},T("h1",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart1Title||"")},"Token &"),T("p",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart1Paragraph||"")},T("span",{className:"jsx-1493855170 "+(l.a.fifthSectionInnerTitleHolder||"")},T("span",{className:"jsx-1493855170 "+(l.a.fifthSectionInnerTitleLine||"")}),T("span",{className:"jsx-1493855170 "+(l.a.fifthSectionInnerTitle||"")},"Token")),"The platform issues its own native utility token, $CDF. This token powers the entire ConnectDeFi ecosystem, where it\u2019s used for transaction fees and incentives, as well as governance.")),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2||"")},T("h1",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2Title||"")},"Governance"),T("p",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2Paragraph||"")},"ConnectDeFi is a fully decentralized and community-led platform; hence the DAO makes all major decisions for the platform. Examples of such decisions include:"),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2Footer||"")},T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInner||"")},T(w.a,{className:l.a.fifthSectionIcons}),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInnerTitle||"")},"Proposals and voting")),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInner||"")},T(w.a,{className:l.a.fifthSectionIcons}),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInnerTitle||"")},"Adjusting yield distribution and interest rates")),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInner||"")},T(w.a,{className:l.a.fifthSectionIcons}),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInnerTitle||"")},"Review of other important rules")),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInner||"")},T(w.a,{className:l.a.fifthSectionIcons}),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInnerTitle||"")},"Modifying the DAO Structure")),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInner||"")},T(w.a,{className:l.a.fifthSectionIcons}),T("div",{className:"jsx-1493855170 "+(l.a.fifthSectionContentPart2FooterInnerTitle||"")},"Suggesting new features to be implemented")))))),T("div",{className:"jsx-1493855170 "+(l.a.sixthSection||"")},T("h1",{className:"jsx-1493855170 "+(l.a.sixthSectionTitle||"")},"Token Metrics"),T("h3",{className:"jsx-1493855170 "+(l.a.sixthSectionSubTitle||"")},"1 billion $CDFCONNECT tokens will be minted at TGE."),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContent||"")},T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentValues||"")},T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentPercent||"")},"40%"),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentTitle||"")},"Community incentives and farming allocation")),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentValues||"")},T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentPercent||"")},"12%"),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentTitle||"")},"Token Sale")),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentValues||"")},T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentPercent||"")},"17%"),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentTitle||"")},"Team members")),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentValues||"")},T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentPercent||"")},"10%"),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentTitle||"")},"Marketing")),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentValues||"")},T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentPercent||"")},"3%"),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentTitle||"")},"Advisors")),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentValues||"")},T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentPercent||"")},"18%"),T("div",{className:"jsx-1493855170 "+(l.a.sixthSectionContentTitle||"")},"Future project development")))),T("div",{id:"roadmap",className:"jsx-1493855170 "+(l.a.seventhSection||"")},T("h1",{className:"jsx-1493855170 "+(l.a.seventhSectionTitle||"")},"Roadmap"),T("div",{className:"jsx-1493855170 "+(l.a.seventhSectionBorder||"")}),T("div",{className:"jsx-1493855170 "+(l.a.seventhSectionContents||"")},T("div",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1||"")},T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1Detail||"")},"Team Establishment"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1Detail||"")},"Feasibility with regards to roadmap targets"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1Detail||"")},"Official website online"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1Detail||"")},"Refinement of ConnectDeFi Architecture"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1Detail||"")},"Initial Marketing Activities"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1Detail||"")},"Asset management security Audit"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart1Detail||"")},"Initialization of Development: Liquidity and DEX aggregators")),T("div",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2||"")},T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2Detail||"")},"Conceptualization of the Idea"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2Detail||"")},"Initial feasibility and testing of concept"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2Detail||"")},"Feature architecture and rollout timelines"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2Detail||"")},"Private sale fundraising round"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2Detail||"")},"Development of the Asset/Portfolio management tool(s)"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2Detail||"")},"Launch of Asset Management tool MVP"),T("h5",{className:"jsx-1493855170 "+(l.a.seventhSectionContentPart2Detail||"")},"Updated landing page app (Asset Management tool)"))),T("div",{className:"jsx-1493855170 "+(l.a.seventhSectionMore||"")},T("h6",{className:"jsx-1493855170 "+(l.a.seventhSectionMoreValue||"")},"More... "))),T("div",{id:"contact",className:"jsx-1493855170 "+(l.a.eighthSection||"")},T("div",{className:"jsx-1493855170 "+(l.a.eighthSectionPanel||"")},T("h3",{className:"jsx-1493855170 "+(l.a.eighthSectionPanelTitle||"")},"Join us in building the efficiency of decentralized finance together!"),T("p",{className:"jsx-1493855170"},"The referral program aims to drive widespread adoption of the platform by rewarding users accordingly. Anyone can take advantage of this program by generating unique links to invite others."),T("p",{className:"jsx-1493855170"},"By joining this lucrative referral program, you help promote not just the platform, but the entire DeFi ecosystem."))),T(i.a,{id:"1493855170"},["html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}"]))}},"S+8A":function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"CenterFocusWeak");t.default=o},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var n=a(s("9kyW")),i=a(s("bVZc"));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,n=void 0===s?null:s,a=t.optimizeForSpeed,o=void 0!==a&&a,r=t.isBrowser,c=void 0===r?"undefined"!==typeof window:r;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),n=s.styleId,i=s.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var a=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=a,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var n=this._fromServer&&this._fromServer[s];n?(n.parentNode.removeChild(n),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var i=String(s),a=t+i;return e[a]||(e[a]="jsx-"+(0,n.default)(t+"-"+i)),e[a]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=s+n;return t[i]||(t[i]=n.replace(e,s)),t[i]}},t.getIdAndRules=function(e){var t=this,s=e.children,n=e.dynamic,i=e.id;if(n){var a=this.computeId(i,n);return{styleId:a,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(a,e)})):[this.computeSelector(a,s)]}}return{styleId:this.computeId(i),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,s=t.name,a=void 0===s?"stylesheet":s,r=t.optimizeForSpeed,c=void 0===r?n:r,l=t.isBrowser,h=void 0===l?"undefined"!==typeof window:l;o(i(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#"+a+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=h,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,a,r,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(r){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var a=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,a))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(a){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,s){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var a=document.head||document.getElementsByTagName("head")[0];return s?a.insertBefore(n,s):a.appendChild(n),n},t=e,(a=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,a),r&&s(t,r),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=a}).call(this,s("8oxB"))},fgxa:function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"}),"Layers");t.default=o},oGIZ:function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}),"Build");t.default=o},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])},yxaJ:function(e,t,s){"use strict";var n=s("TqRt"),i=s("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("q1tI")),o=(0,n(s("8/g6")).default)(a.createElement("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree");t.default=o}},[["vlRD",0,2,5,1,3,4]]]);