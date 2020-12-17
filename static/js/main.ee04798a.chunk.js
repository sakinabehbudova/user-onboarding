(this["webpackJsonpuser-onboarding"]=this["webpackJsonpuser-onboarding"]||[]).push([[0],{122:function(e,t,s){},194:function(e,t,s){},526:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(0),a=s.n(i),l=s(14),n=s.n(l),d=(s(194),s(122),s(529)),o=s(532),r=s(17),j=s(172),h=s.n(j);s(195);var b=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"contactDetails",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-10 offset-1",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"steps col-4",children:"Step 1 of 3"}),Object(c.jsx)("div",{className:"details col-5",children:"Lost or have trouble?"}),Object(c.jsx)(r.b,{className:"help col",to:"",children:"Get help \u2192"})]})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-8 offset-1",children:[Object(c.jsx)("h1",{children:"Contact Details"}),Object(c.jsx)("div",{className:"details",children:"Welcome to United Properties, we are glad to see you! Let\u2019s get started by letting us know a little bit about you"}),Object(c.jsx)("div",{className:"box3",children:Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",name:"",required:!0}),Object(c.jsx)("label",{children:"Full Name"})]})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)(h.a,{country:"de",inputProps:{name:"phone",required:!0,autoFocus:!0}})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"email",name:"",required:!0}),Object(c.jsx)("label",{children:"E-mail Adress"})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("select",{children:[Object(c.jsx)("option",{value:"DE",children:"Germany"}),Object(c.jsx)("option",{value:"AZ",children:"Azerbaijan"}),Object(c.jsx)("option",{value:"AF",children:"Turkey"}),Object(c.jsx)("option",{value:"AX",children:"Aland Islands"}),Object(c.jsx)("option",{value:"AL",children:"Albania"}),Object(c.jsx)("option",{value:"DZ",children:"Algeria"}),Object(c.jsx)("option",{value:"AS",children:"American Samoa"})]}),Object(c.jsx)("label",{children:"Country"})]})]})}),Object(c.jsx)("h3",{children:"Privacy policy"}),Object(c.jsx)("div",{className:"details2",children:"We know you care about how your personal information is used and shared, so we take your privacy seriously"}),Object(c.jsx)("a",{className:"help",to:"",children:"Expand privacy policy \u2192"})]}),Object(c.jsx)("div",{className:"offset-3"}),Object(c.jsx)("div",{className:"footer col-10 offset-1",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("a",{className:"help back-to-home col",to:"",children:"\u2190Back to the homepage"}),Object(c.jsx)(o.a,{className:"skip-btn col-3",children:"Skip for now \u2192"}),Object(c.jsxs)(r.b,{to:"/user-onboarding/plans",className:"col-3",children:[" ",Object(c.jsx)(o.a,{className:"next-step-btn",children:"Next step"})," "]})]})}),Object(c.jsx)("div",{className:"offset-1"})]})]})})})},m=s(528);var x=function(){var e=m.a.Step;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{id:"sidebar",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-10 offset-1",children:[Object(c.jsxs)("div",{className:"row pl-3",children:[Object(c.jsx)("h3",{className:"united",children:"United"}),Object(c.jsx)("h3",{className:"properties",children:"Properties"})]}),Object(c.jsxs)(m.a,{id:"steps",direction:"vertical",size:"middle",current:0,children:[Object(c.jsx)(e,{title:"Contact details",description:""}),Object(c.jsx)(e,{title:"Investment plans",description:""}),Object(c.jsx)(e,{title:"Investment preferences",description:""})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{className:"text",children:"We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete"}),Object(c.jsx)("div",{className:"author",children:"William Mac"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"details",children:"CO-FOUNDER, INVESTOR"}),Object(c.jsx)("h4",{className:"up-icon1",children:"U"}),Object(c.jsx)("h4",{className:"up-icon2",children:"P"})]})]})})]})})})})})},u=s(11);s(222);var f=function(){return document.addEventListener("DOMContentLoaded",(function(e){e.preventDefault(),setTimeout(function(e,t,s,c,i,a){var l=document.getElementById(e),n=document.getElementById(t),d=document.getElementById(s),o=document.getElementById(c),r=document.getElementById(i),j=document.getElementById(a),h=r.min,b=r.max;m(l);function m(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}d.style.marginLeft="0px",o.style.marginLeft=l.offsetWidth-d.offsetWidth+"px",n.style.width=l.offsetWidth-d.offsetWidth+"px",r.value=h,j.value=b,r.onchange=function(e){if(parseInt(r.value)<h&&(r.value=h),parseInt(r.value)>b&&(r.value=b),parseInt(r.value)>parseInt(j.value)){var t=r.value;r.value=j.value,j.value=t}m(l);var s=100*parseInt(r.value-h)/(b-h),c=100*parseInt(j.value-h)/(b-h),i=s*(l.offsetWidth-d.offsetWidth)/100,a=c*(l.offsetWidth-d.offsetWidth)/100;d.style.marginLeft=i+"px",o.style.marginLeft=a+"px",i>a?(n.style.width=i-a+"px",n.style.marginLeft=a+"px"):(n.style.width=a-i+"px",n.style.marginLeft=i+"px")},j.onchange=function(e){if(parseInt(j.value)<h&&(j.value=h),parseInt(j.value)>b&&(j.value=b),parseInt(r.value)>parseInt(j.value)){var t=r.value;r.value=j.value,j.value=t}m(l);var s=100*parseInt(r.value-h)/(b-h),c=100*parseInt(j.value-h)/(b-h),i=s*(l.offsetWidth-d.offsetWidth)/100,a=c*(l.offsetWidth-d.offsetWidth)/100;d.style.marginLeft=i+"px",o.style.marginLeft=a+"px",i>a?(n.style.width=i-a+"px",n.style.marginLeft=a+"px"):(n.style.width=a-i+"px",n.style.marginLeft=i+"px")},d.onmousedown=function(e){var t=m(l),s=(m(n),m(d)),c=m(o),i=e.pageX-c.left,a=e.pageX-s.left;return document.onmousemove=function(e){var s=e.pageX-a-t.left,m=l.offsetWidth-d.offsetWidth;s<0&&(s=0),s>m&&(s=m),d.style.marginLeft=s+"px",i=e.pageX-c.left;var x=e.pageX-i-t.left,u=l.offsetWidth-o.offsetWidth;x<0&&(x=0),x>u&&(x=u);var f=0,p=0;s>x?(n.style.width=s-x+"px",n.style.marginLeft=x+"px",f=100*x/(l.offsetWidth-d.offsetWidth),p=100*s/(l.offsetWidth-d.offsetWidth)):(n.style.width=x-s+"px",n.style.marginLeft=s+"px",f=100*s/(l.offsetWidth-d.offsetWidth),p=100*x/(l.offsetWidth-d.offsetWidth)),r.value=parseInt(h)+Math.round((b-h)*f/100),j.value=parseInt(h)+Math.round((b-h)*p/100)},document.onmouseup=function(){document.onmousemove=document.onmouseup=null},!1},o.onmousedown=function(e){var t=m(l),s=(m(n),m(d)),c=m(o),i=e.pageX-c.left,a=e.pageX-s.left;return document.onmousemove=function(e){var c=e.pageX-i-t.left,m=l.offsetWidth-o.offsetWidth;c<0&&(c=0),c>m&&(c=m),o.style.marginLeft=c+"px",a=e.pageX-s.left;var x=e.pageX-a-t.left,u=l.offsetWidth-d.offsetWidth;x<0&&(x=0),x>u&&(x=u);var f=0,p=0;x>c?(n.style.width=x-c+"px",n.style.marginLeft=c+"px",f=100*c/(l.offsetWidth-d.offsetWidth),p=100*x/(l.offsetWidth-d.offsetWidth)):(n.style.width=c-x+"px",n.style.marginLeft=x+"px",f=100*x/(l.offsetWidth-d.offsetWidth),p=100*c/(l.offsetWidth-d.offsetWidth)),r.value=parseInt(h)+Math.round((b-h)*f/100),j.value=parseInt(h)+Math.round((b-h)*p/100)},document.onmouseup=function(){document.onmousemove=document.onmouseup=null},!1},d.ondragstart=function(){return!1},o.ondragstart=function(){return!1}}("id66","id66b","id661","id662","id66i1","id66i2"),0)}),!1),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"investmentPlans",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-10 offset-1",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"steps col-4",children:"Step 2 of 3"}),Object(c.jsx)("div",{className:"details col-5",children:"Lost or have trouble?"}),Object(c.jsx)(r.b,{className:"help col",to:"",children:"Get help \u2192"})]})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-8 offset-1",children:[Object(c.jsx)("h1",{children:"Investment plans"}),Object(c.jsx)("div",{className:"details",children:"Let us know about your investment plans. This will help us get you to the right expert who will help you further"}),Object(c.jsx)("h3",{className:"header2",children:"How much are you planning to invest in this year?"}),Object(c.jsxs)("div",{className:"number-range",children:[Object(c.jsxs)("div",{id:"id66",className:"range",children:[Object(c.jsx)("div",{id:"id66b",className:"range__between"}),Object(c.jsx)("button",{id:"id661",className:"range__button_1"}),Object(c.jsx)("button",{id:"id662",className:"range__button_2"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsxs)("div",{children:[" ",Object(c.jsx)("input",{id:"id66i1",className:"range_inpt1",type:"number",min:"100",max:"10000"}),Object(c.jsx)("label",{children:"From"})]})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{id:"id66i2",className:"range_inpt2",type:"number",min:"100",max:"10000"}),Object(c.jsx)("label",{children:"To"})]})})]})]})," "]}),Object(c.jsx)("h3",{className:"header2",children:"Are you an accredited investor?"}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Radio1",name:"Radios",type:"radio",value:"Option 1",defaultChecked:!0}),Object(c.jsx)("label",{htmlFor:"Radio1",children:"Yes"})]}),Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Radio2",name:"Radios",type:"radio",value:"Option 2"}),Object(c.jsx)("label",{htmlFor:"Radio2",children:"No"})]})]})]}),Object(c.jsx)("div",{className:"offset-3"}),Object(c.jsx)("div",{className:"footer col-10 offset-1",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(r.b,{className:"help back-to-home col",to:"/user-onboarding",children:"\u2190Back to the homepage"}),Object(c.jsx)(o.a,{className:"skip-btn col-3",children:"Skip for now \u2192"}),Object(c.jsxs)(r.b,{to:"/user-onboarding/prefences",className:"col-3",children:[" ",Object(c.jsx)(o.a,{className:"next-step-btn",children:"Next step"})," "]})]})}),Object(c.jsx)("div",{className:"offset-1"})]})]})})})},p=s(531);var O=function(){return m.a.Step,Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"investmentPrefences",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-10 offset-1",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"steps col-4",children:"Step 2 of 3"}),Object(c.jsx)("div",{className:"details col-5",children:"Lost or have trouble?"}),Object(c.jsx)(r.b,{className:"help col",to:"",children:"Get help \u2192"})]})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-8 offset-1",children:[Object(c.jsx)("h1",{children:"Investment preferences"}),Object(c.jsx)("div",{className:"details",children:"This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals"}),Object(c.jsx)("h3",{className:"header2",children:"What kind of real estate are you interested in?"}),Object(c.jsx)("div",{className:"boxes",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check1",name:"Checks",type:"checkbox"}),Object(c.jsx)("label",{for:"Check1",children:"Single family"})]})}),Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check2",name:"Checks",type:"checkbox"}),Object(c.jsx)("label",{for:"Check2",children:"Residential multifamily"})]})}),Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check3",name:"Checks",type:"checkbox"}),Object(c.jsx)("label",{for:"Check3",children:"Commercial retail"})]})}),Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check4",name:"Checks",type:"checkbox"}),Object(c.jsx)("label",{for:"Check4",children:"Commercial industrial"})]})}),Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check5",name:"Checks",type:"checkbox"}),Object(c.jsx)("label",{for:"Check5",children:"Commercial hospitality"})]})}),Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check6",name:"Checks",type:"checkbox"}),Object(c.jsx)("label",{for:"Check6",children:"Commercial warehousing"})]})}),Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check7",name:"Checks",type:"checkbox"}),Object(c.jsx)("label",{for:"Check7",children:"Commercial office"})]})}),Object(c.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("input",{id:"Check8",name:"Checks",type:"checkbox",value:"Item 2"}),Object(c.jsx)("label",{for:"Check8",children:"Other"})]})})]})})]}),Object(c.jsx)("div",{className:"offset-3"}),Object(c.jsx)("div",{className:"footer col-10 offset-1",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(r.b,{className:"help back-to-home col",to:"/user-onboarding/plans",children:"\u2190Back to the homepage"}),Object(c.jsx)(o.a,{className:"skip-btn col-3",children:"Skip for now \u2192"}),Object(c.jsxs)(r.b,{to:"/user-onboarding/prefences",className:"col-3",children:[" ",Object(c.jsx)(o.a,{onClick:function(){return p.b.success("Processing complete!")},className:"next-step-btn",children:"Finish"})," "]})]})}),Object(c.jsx)("div",{className:"offset-1"})]})]})})})};var v=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/user-onboarding",exact:!0,component:b}),Object(c.jsx)(u.a,{path:"/user-onboarding/plans",exact:!0,component:f}),Object(c.jsx)(u.a,{path:"/user-onboarding/prefences",exact:!0,component:O})]})})};var N=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{id:"user-onboarding",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-4 px-0",children:Object(c.jsx)(x,{})}),Object(c.jsx)("div",{className:"col-md-8 px-0",children:Object(c.jsx)(v,{})})]})})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,533)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,l=t.getTTFB;s(e),c(e),i(e),a(e),l(e)}))};s(524),s(525);n.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(r.a,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),g()}},[[526,1,2]]]);
//# sourceMappingURL=main.ee04798a.chunk.js.map