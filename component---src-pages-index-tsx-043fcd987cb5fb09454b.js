"use strict";(self.webpackChunkmodino_website=self.webpackChunkmodino_website||[]).push([[245],{2079:function(e,t,a){a.d(t,{A:function(){return g}});var n={};a.r(n),a.d(n,{ctaAccentButton:function(){return r},highlight:function(){return i},mArticleChip:function(){return l},mArticleChipBlue:function(){return s},mArticleChipGreen:function(){return m},mArticleChipRed:function(){return d},mdcButton:function(){return u},mdcButton__ripple:function(){return p},mdcRippleUpgradedBackgroundFocused:function(){return h}});var c=a(4810),o=a(6540),r="article-chip-component-module--cta-accent-button--7b186",i="article-chip-component-module--highlight--2f6c4",l="article-chip-component-module--mArticleChip--9fc60",s="article-chip-component-module--mArticleChipBlue--b4fb3",m="article-chip-component-module--mArticleChipGreen--50425",d="article-chip-component-module--mArticleChipRed--6c41a",u="article-chip-component-module--mdc-button--3a692",p="article-chip-component-module--mdc-button__ripple--7e2a1",h="article-chip-component-module--mdc-ripple-upgraded--background-focused--85c65";var b=e=>{var t;let{type:a,children:c}=e;const r=e=>`${e[0].toUpperCase()}${e.slice(1,e.length)}`;return o.createElement("div",{className:`${l} ${n[`mArticleChip${r(a)}`]}`},r(null!==(t=null==c?void 0:c.toString())&&void 0!==t?t:""))},f=a(2532);var g=e=>{let{title:t,date:a,summary:n,thumbnailPhotoUrl:r,slug:i,categories:l}=e;const s=(0,f.c)(r),m=e=>{switch(e.toLowerCase()){case"blog":default:return"red";case"case study":return"green";case"press":return"blue"}};return o.createElement(c.N_,{to:`/articles/${i}`,className:"article-tile-component-module--mArticleTile--c8868"},o.createElement(f.G,{image:s,className:"article-tile-component-module--mArticleTileImage--60c72",alt:"article thumbnail photo"}),o.createElement("div",{className:"article-tile-component-module--mArticleTileContent--ec490"},o.createElement("div",{className:"article-tile-component-module--mArticleTileChips--9e673"},l.split(", ").map((e=>o.createElement(b,{type:m(e),key:`${e}`},e)))),o.createElement("h3",{className:"article-tile-component-module--mArticleTileTitle--f165d"},t),o.createElement("i",{className:"article-tile-component-module--mArticleTileDate--34184"}," ",a," "),o.createElement("p",{className:"article-tile-component-module--mArticleTileDescription--f3504"},n)))}},9918:function(e,t,a){a.r(t),a.d(t,{Head:function(){return B},default:function(){return q}});var n={};a.r(n),a.d(n,{carousel:function(){return m},carouselButtonNext:function(){return d},carouselButtonPrev:function(){return u},carouselContent:function(){return p},carouselContentScrolledTo0:function(){return h},carouselContentScrolledTo1:function(){return b},carouselContentScrolledTo2:function(){return f},carouselControls:function(){return g},carouselPageButton:function(){return w},carouselPageButtonActive:function(){return v},ctaAccentButton:function(){return _},highlight:function(){return E},mArticlesTeaser__carouselPageButtonActive:function(){return y},mdcButton:function(){return N},mdcButton__label:function(){return x},mdcButton__ripple:function(){return C},mdcRippleUpgradedBackgroundFocused:function(){return k}});var c=a(6540),o=a(4810),r=a(7397),i=a(8564),l=a(2079),s=a(3540),m="carousel-component-module--carousel--ffbbc",d="carousel-component-module--carouselButtonNext--268fb",u="carousel-component-module--carouselButtonPrev--20595",p="carousel-component-module--carouselContent--9197d",h="carousel-component-module--carouselContentScrolledTo0--f96c1",b="carousel-component-module--carouselContentScrolledTo1--f3424",f="carousel-component-module--carouselContentScrolledTo2--a4cc7",g="carousel-component-module--carouselControls--5fe05",w="carousel-component-module--carouselPageButton--d1497",v="carousel-component-module--carouselPageButtonActive--055ed",_="carousel-component-module--cta-accent-button--80b01",E="carousel-component-module--highlight--06d34",y="carousel-component-module--m-articles-teaser__carousel-page-button--active--6250a",N="carousel-component-module--mdc-button--8078e",x="carousel-component-module--mdc-button__label--3b1a7",C="carousel-component-module--mdc-button__ripple--72f38",k="carousel-component-module--mdc-ripple-upgraded--background-focused--af85a";var S=e=>{let{articles:t}=e;const{0:a,1:o}=(0,c.useState)(0);return c.createElement("div",{className:m},c.createElement("div",{className:`${p} ${n["carouselContentScrolledTo"+a]}`},t.map((e=>c.createElement(l.A,Object.assign({},e,{key:e.slug}))))),c.createElement("div",{className:g},c.createElement(s.$,{dense:!0,className:u,onClick:()=>(()=>{const e=a-1<0?(a-1+t.length)%t.length:(a-1)%t.length;o(e)})()},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},c.createElement("path",{d:"m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"}))),t.map(((e,t)=>c.createElement("button",{className:`${w} ${t===a?v:""}`,onClick:()=>{return void 0===(e=t)&&(e=0),void o(e);var e},key:e.slug}))),c.createElement(s.$,{dense:!0,className:d,onClick:()=>{o((a+1)%t.length)}},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},c.createElement("path",{d:"M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"})))))},A=a(2532),T="index-module--mAwardsContent--37c62";var q=e=>{let t,{data:n}=e;const{0:r,1:l}=(0,c.useState)(!0),m=()=>{var e,a;l((null===(e=t)||void 0===e?void 0:e.getBoundingClientRect().y)>(null===(a=t)||void 0===a?void 0:a.clientHeight))};return(0,c.useEffect)((()=>{t=document.getElementById("main-cta-button"),document.addEventListener("scroll",m)}),[]),c.createElement(i.A,{isMenuButtonAMainCtaButton:!r},c.createElement("main",{className:"m-main"},c.createElement("section",{className:"m-section m-top-hero index-module--mHomeHero--23a8e"},c.createElement("div",{className:"m-section__content"},c.createElement("div",{className:"m-top-hero__wrapper"},c.createElement("h1",{className:"m-header m-top-hero__title"},"Keep your",c.createElement("br",null),"IoT devices",c.createElement("br",null),c.createElement("span",{className:"m-top-hero__title-highlight"},"out of harm’s way")),c.createElement("p",{className:"m-top-hero__description"},"Deliver new software and configuration settings securely, remotely, and risk-free"),c.createElement(s.$,{id:"main-cta-button",unelevated:!0,className:"m-top-hero__action-button cta-accent-button",onClick:()=>window.location.href="./get-in-touch"},"Get in touch")))),c.createElement("section",{className:"m-section index-module--mMission--f680e"},c.createElement("h2",{className:"m-section__header"},"Our mission"),c.createElement("div",{className:"m-section__content"},c.createElement("div",{className:"index-module--mQuote--f7b4d"},c.createElement("blockquote",{className:"index-module--mQuoteText--da2ae"},c.createElement("span",{className:"highlight"},"Modino.io",c.createElement("div",{className:"index-module--mQuoteImage--18d57"},c.createElement("svg",{width:"12.7mm",height:"12.7mm",viewBox:"0 0 12.7 12.7",version:"1.1",id:"svg5480",xmlns:"http://www.w3.org/2000/svg"},c.createElement("defs",{id:"defs5477"}),c.createElement("g",{id:"layer1",transform:"translate(-262.61319,-107.698)"},c.createElement("path",{d:"m 271.83393,116.95842 q -0.33073,0 -0.49609,-0.2712 -0.16537,-0.2712 -0.0199,-0.56224 l 0.635,-1.28323 h -1.66687 q -0.33073,0 -0.56224,-0.23151 -0.23151,-0.23151 -0.23151,-0.56224 v -2.11667 q 0,-0.33073 0.23151,-0.56224 0.23151,-0.23151 0.56224,-0.23151 h 2.11666 q 0.33073,0 0.56224,0.23151 0.23151,0.23151 0.23151,0.56224 v 2.83105 q 0,0.0926 -0.0198,0.1852 -0.0198,0.0926 -0.0595,0.17198 l -0.76729,1.52136 q -0.0661,0.14552 -0.20506,0.23151 -0.1389,0.086 -0.31088,0.086 z m -4.7625,0 q -0.33073,0 -0.49609,-0.2712 -0.16537,-0.2712 -0.0198,-0.56224 l 0.635,-1.28323 h -1.66687 q -0.33073,0 -0.56224,-0.23151 -0.23151,-0.23151 -0.23151,-0.56224 v -2.11667 q 0,-0.33073 0.23151,-0.56224 0.23151,-0.23151 0.56224,-0.23151 h 2.11666 q 0.33073,0 0.56224,0.23151 0.23151,0.23151 0.23151,0.56224 v 2.83105 q 0,0.0926 -0.0198,0.1852 -0.0198,0.0926 -0.0595,0.17198 l -0.76729,1.52136 q -0.0661,0.14552 -0.20506,0.23151 -0.1389,0.086 -0.31088,0.086 z",id:"path4683",style:{strokeWidth:.264583}})))))," ","is a platform for IoT vulnerability management and over-the-air update orchestration at scale. A platform that is both safe and secure.",c.createElement("br",null),c.createElement("br",null),"Our mission is to keep our clients' IoT devices secure and online by providing stressless over-the-air update experience.",c.createElement("cite",{className:"index-module--mQuoteAuthor--d6fac"},c.createElement(A.S,{className:"index-module--mQuoteAuthorImage--3ed2e",src:"./../images/people/Blazej.webp",alt:"Błażej Pawlak - Modino CEO profile image",__imageData:a(4151)})," ","Błażej Pawlak, CEO & Co-Founder"))))),c.createElement("section",{className:"m-section index-module--mExplanation--d0e9b"},c.createElement("div",{className:"m-section__content index-module--mExplanationContent--2749a"},c.createElement("div",{className:"index-module--mExplanationImage--15712"},c.createElement("img",{src:"img/modino-man.svg",alt:"modino man"})),c.createElement("div",{className:"index-module--mExplanationText--2cfd3"},c.createElement("p",{className:"index-module--mExplanationTitle--38d85"},"/moˈdiːno/"),c.createElement("p",{className:"index-module--mExplanationDescription--581d9"},"“Modino” is an Italian word used for misbehaving children, which roughly translates to “behave yourself”.",c.createElement("br",null),c.createElement("br",null),"We imagine our system as a guardian for various small IoT devices that keeps them in check and makes sure that they all behave as they should.")))),c.createElement("section",{className:"m-section"},c.createElement("h2",{className:"m-section__header"},"About Modino"),c.createElement("div",{className:"m-section__content"},c.createElement("div",{className:"index-module--mSolutionContainer--705ea"},c.createElement("div",{className:"index-module--mSolutionText--50b87"},c.createElement("p",null,c.createElement("span",{className:"index-module--highlight--b740a"},"Modino.io")," creates holistic deployable packages with your software and provides its safe and secure delivery to your IoT devices – in both private cloud and On-premise models."),c.createElement("p",null,"Stay in control by monitoring update deployment status and automatic vulnerability detection."),c.createElement("p",null,"Trust Modino.io to keep your devices up-to-date and protected."),c.createElement(o.N_,{className:"index-module--mSolutionSolutionLink--d7170",to:"/solution"},"Check our solution",c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},c.createElement("path",{d:"M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z"})))),c.createElement("div",{className:"index-module--mSolutionVideo--dad76"},c.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},c.createElement("iframe",{title:"Modino.io demo video",src:"https://player.vimeo.com/video/510677701?dnt=1",allow:"autoplay; fullscreen; picture-in-picture"})))))),c.createElement("section",{className:"m-section"},c.createElement("h2",{className:"m-section__header"},"Awards & Recognitions"),c.createElement("div",{className:`m-section__content ${T}`},c.createElement("div",{className:"index-module--mAwardsCybersecurityBanner--def81"},c.createElement("a",{href:"https://ecs-org.eu/return-of-ecsos-polish-edition-of-cyber-investor-days-in-katowice/",target:"_blank",rel:"noopener"},c.createElement(A.S,{layout:"fullWidth",src:"./../images/cybersecurity-award-banner.jpeg",alt:"European Cybersecurity STARTup Award for Modino.io",__imageData:a(335)}))),c.createElement("div",{className:"index-module--mAwardsCyberSummit--0c29b"},c.createElement("a",{href:"https://www.inncyberinnovationhub.com/",target:"_blank",rel:"noopener"},c.createElement(A.S,{src:"./../images/certificate_cyber_summit.jpg",alt:"Inncyber innovation hub award for Modino.io project",__imageData:a(4438)}))),c.createElement("div",{className:"index-module--mAwardsEaglesOfInnovation--1b05f"},c.createElement("a",{href:"https://www.rp.pl/orzel-innowacji/art40569821-poznalismy-laureatow-nagrod-rzeczpospolitej",target:"_blank",rel:"noopener"},c.createElement(A.S,{src:"./../images/eagles_of_innovation.png",alt:"Eagles of Innovation honorable award for Modino.io",__imageData:a(3646)}))))),c.createElement("section",{className:"m-section"},c.createElement("h2",{className:"m-section__header"},"Partnerships"),c.createElement("div",{className:`m-section__content ${T}`},c.createElement("div",{className:"index-module--mAwardsOVH--b0577"},c.createElement(A.S,{src:"./../images/ovh_startup_program.png",alt:"OVH Cloud Startup Program",__imageData:a(2408)})))),c.createElement("section",{className:"m-section index-module--mArticlesTeaser--e88c1"},c.createElement("h2",{className:"m-section__header"},"Latest insights"),c.createElement("div",{className:"m-section__content"},c.createElement(o.N_,{to:"/articles",className:"index-module--mArticlesTeaserSeeAll--4d4bf"},"See all articles",c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},c.createElement("path",{d:"M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z"}))),c.createElement(S,{articles:(d=n.allMdx.nodes,d.map((e=>({title:e.frontmatter.tile_title,date:e.frontmatter.date,slug:e.frontmatter.slug,thumbnailPhotoUrl:e.frontmatter.thumbnail,summary:e.frontmatter.summary,categories:e.frontmatter.category}))))}))),c.createElement("section",{className:"m-section index-module--mSummary--d7ae5"},c.createElement("div",{className:"m-section__content index-module--mSummaryContent--9ec3c"},c.createElement("div",{className:"index-module--mWrapper--c2ce7"},c.createElement("h2",{className:"m-section__header"},"Put your ",c.createElement("br",null),"IoT devices ",c.createElement("br",null),c.createElement("span",{className:"highlight"},"in good hands")),c.createElement(s.$,{unelevated:!0,className:"cta-accent-button index-module--mSummaryActionButton--24321",onClick:()=>window.location.href="./get-in-touch",id:"summary-cta-btn"},"Get in touch")),c.createElement("img",{alt:"Modino update guard illustration",src:(0,o.Fe)("/img/Illustration.svg"),className:"index-module--mSecurityImg--58b62"})))));var d};const B=()=>c.createElement(r.A,{pageTitle:"Modino.io - Safe and secure updates for IoT devices",description:"Modino.io will help you keep your IoT devices up and running with safe and secure over-the-air updates.",link:"https://modino.io/"})},4151:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#888868","images":{"fallback":{"src":"/static/e46bd9985ef0e7fa9e6cd85656685494/b61c8/Blazej.webp","srcSet":"/static/e46bd9985ef0e7fa9e6cd85656685494/9bbe1/Blazej.webp 545w,\\n/static/e46bd9985ef0e7fa9e6cd85656685494/3b0fb/Blazej.webp 1090w,\\n/static/e46bd9985ef0e7fa9e6cd85656685494/b61c8/Blazej.webp 2179w","sizes":"(min-width: 2179px) 2179px, 100vw"},"sources":[]},"width":2179,"height":2178}')},335:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#283888","images":{"fallback":{"src":"/static/3904d490681741977b828df5934a345a/e24b9/cybersecurity-award-banner.jpg","srcSet":"/static/3904d490681741977b828df5934a345a/56262/cybersecurity-award-banner.jpg 750w,\\n/static/3904d490681741977b828df5934a345a/8edcf/cybersecurity-award-banner.jpg 1080w,\\n/static/3904d490681741977b828df5934a345a/e24b9/cybersecurity-award-banner.jpg 1200w","sizes":"100vw"},"sources":[{"srcSet":"/static/3904d490681741977b828df5934a345a/2bcfc/cybersecurity-award-banner.webp 750w,\\n/static/3904d490681741977b828df5934a345a/51b2f/cybersecurity-award-banner.webp 1080w,\\n/static/3904d490681741977b828df5934a345a/ce914/cybersecurity-award-banner.webp 1200w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7150000000000001}')},4438:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#587868","images":{"fallback":{"src":"/static/1892ce4111f6a77600f03126e01588eb/2ff34/certificate_cyber_summit.jpg","srcSet":"/static/1892ce4111f6a77600f03126e01588eb/b4f07/certificate_cyber_summit.jpg 256w,\\n/static/1892ce4111f6a77600f03126e01588eb/0cb7c/certificate_cyber_summit.jpg 512w,\\n/static/1892ce4111f6a77600f03126e01588eb/2ff34/certificate_cyber_summit.jpg 1024w","sizes":"(min-width: 1024px) 1024px, 100vw"},"sources":[{"srcSet":"/static/1892ce4111f6a77600f03126e01588eb/eabe0/certificate_cyber_summit.webp 256w,\\n/static/1892ce4111f6a77600f03126e01588eb/931b8/certificate_cyber_summit.webp 512w,\\n/static/1892ce4111f6a77600f03126e01588eb/4c1e7/certificate_cyber_summit.webp 1024w","type":"image/webp","sizes":"(min-width: 1024px) 1024px, 100vw"}]},"width":1024,"height":727}')},3646:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/16923a03b32ce389f4a2e7074f6e0184/8b2a3/eagles_of_innovation.png","srcSet":"/static/16923a03b32ce389f4a2e7074f6e0184/35332/eagles_of_innovation.png 412w,\\n/static/16923a03b32ce389f4a2e7074f6e0184/53c23/eagles_of_innovation.png 823w,\\n/static/16923a03b32ce389f4a2e7074f6e0184/8b2a3/eagles_of_innovation.png 1646w","sizes":"(min-width: 1646px) 1646px, 100vw"},"sources":[{"srcSet":"/static/16923a03b32ce389f4a2e7074f6e0184/4a5b9/eagles_of_innovation.webp 412w,\\n/static/16923a03b32ce389f4a2e7074f6e0184/fccd4/eagles_of_innovation.webp 823w,\\n/static/16923a03b32ce389f4a2e7074f6e0184/59c1a/eagles_of_innovation.webp 1646w","type":"image/webp","sizes":"(min-width: 1646px) 1646px, 100vw"}]},"width":1646,"height":2201}')},2408:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7c88bef567c170b48890daa8e178add4/af9c3/ovh_startup_program.png","srcSet":"/static/7c88bef567c170b48890daa8e178add4/45867/ovh_startup_program.png 287w,\\n/static/7c88bef567c170b48890daa8e178add4/d1e1c/ovh_startup_program.png 573w,\\n/static/7c88bef567c170b48890daa8e178add4/af9c3/ovh_startup_program.png 1146w","sizes":"(min-width: 1146px) 1146px, 100vw"},"sources":[{"srcSet":"/static/7c88bef567c170b48890daa8e178add4/2f9ac/ovh_startup_program.webp 287w,\\n/static/7c88bef567c170b48890daa8e178add4/2e8a6/ovh_startup_program.webp 573w,\\n/static/7c88bef567c170b48890daa8e178add4/7c26b/ovh_startup_program.webp 1146w","type":"image/webp","sizes":"(min-width: 1146px) 1146px, 100vw"}]},"width":1146,"height":182}')}}]);