(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{3299:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(16),r=a(25),l=a(24),s=a(26),o=a(32),i=a(0),d=a.n(i),m=a(3),u=a(2625),p=a(277),b=a(461),E=a(2),v=a.n(E),y=a(5),f=a(2626);function _(e){var t=e.address,n=e.privateKey,c=e.addressQRCode,r=e.privateKeyQRCode,l=a(314);return d.a.createElement("div",{className:"card d-inline-block"},d.a.createElement("div",{className:"card-body d-flex"},d.a.createElement("div",{className:"col text-center"},d.a.createElement("div",{className:"font-weight-bold"},"Address"),d.a.createElement("img",{src:c,style:h.qr})),d.a.createElement("div",{className:"col"},d.a.createElement("img",{src:l,style:h.logo})),d.a.createElement("div",{className:"col text-center"},d.a.createElement("div",{className:"font-weight-bold"},"Private Key"),d.a.createElement("img",{src:r,style:h.qr}),d.a.createElement("br",null))),d.a.createElement("div",{className:"card-body p-0 text-center"},d.a.createElement("table",{className:"table m-0"},d.a.createElement("tr",null,d.a.createElement("th",null,"Address"),d.a.createElement("td",null,t)),d.a.createElement("tr",null,d.a.createElement("th",{style:h.th},"Private Key"),d.a.createElement("td",null,n)))))}var h={logo:{height:150,marginTop:50},qr:{height:200},th:{width:200}},g=a(2e3),w=a.n(g);function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:260;return w.a.toDataURL(e,{width:t})}var j=function(e){return'<link rel="stylesheet" href="'.concat(e,'" type="text/css" />')};function O(){return(O=Object(y.a)(v.a.mark(function e(t,n){var c,r,l,s,o,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:return c=e.sent,e.next=5,N(n);case 5:r=e.sent,l=Object(f.renderToString)(d.a.createElement(_,{addressQRCode:c,privateKeyQRCode:r,address:t,privateKey:n})),"",s=[a(2628)],o=s.map(function(e){return j(e)}).join(""),i="\n    <html>\n      <head>\n        ".concat(o,'\n      </head>\n      <body style="background-color: white;">\n        <div id="app">').concat(l,"</div>\n          <style>").concat("",'</style>\n            \n          <script type="text/javascript">\n            setTimeout(function () { window.print(); }, 2000);\n          <\/script>\n      </body>\n    </html>\n  '),window.open("about:blank","_blank").document.write(i);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}var k=a(50),x=a(20),K=a(116),S=a(2629),C=a.n(S),P=a(89),A=a(62),R=a(2630),V=a(325);function T(e){var t=e.icon,a=e.completed,n=void 0!==a&&a,c=e.first,r=void 0!==c&&c;return d.a.createElement("div",{className:"col step d-flex justify-content-center "+(n?"completed":"")},r&&d.a.createElement("div",{className:"progress first-progress"},d.a.createElement("div",{className:"progress-bar bg-danger"})),d.a.createElement("div",{className:"step-icon"},d.a.createElement("i",{className:t+" icon-waiting"}),d.a.createElement("i",{className:"fa fa-check icon-complete"})),d.a.createElement("div",{className:"progress"},d.a.createElement("div",{className:"progress-bar bg-danger"})))}function W(e){var t=e.children;return d.a.createElement("div",null,t)}var D=function(e){function t(e){var a;e.isOpen;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this))).generateAccount=function(){var e=Object(u.generateAccount)();a.setState({address:e.address,privateKey:e.privateKey,salt:R()})},a.hideModal=function(){var e=a.props.onClose;e&&e()},a.onPasswordChanged=function(e){var t=e.password,n=e.isValid;a.setState({fieldPassword:t,passwordValid:n})},a.printPaperWallet=function(){var e=a.state;!function(e,t){O.apply(this,arguments)}(e.address,e.privateKey)},a.nextStep=function(){var e=a.state,t=e.step,n=e.privateKey,c=t<3?t+1:3;switch(c){case 1:var r=a.encryptData();a.setState({encryptedKey:r.hex});break;case 3:a.props.login(n)}a.setState({step:c})},a.previousStep=function(){a.setState(function(e){var t=e.step;return{step:t>0?t-1:0}})},a.downloadEncryptedKeyFile=function(){var e=a.state.address;Object(b.a)(a.buildEncryptedKeyStore(),e+".txt")},a.isStepValid=function(){var e=a.state,t=e.step,n=e.passwordValid;switch(t){case 0:return n}return!0},a.state={step:0,fieldPassword:"",fieldEncryptedKey:"",passwordValid:!1},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.generateAccount()}},{key:"encryptData",value:function(){var e=this.state,t=e.fieldPassword,a=e.privateKey,n=e.salt,c=Object(p.b)(t,n),r=Object(p.c)(c,a);return{encryptedKey:c,hex:r.hex,bytes:r.bytes}}},{key:"buildEncryptedKeyStore",value:function(){var e=this.state,t={version:1,key:e.encryptedKey,address:e.address,salt:e.salt};return Object(P.byteArray2hexStr)(Object(A.stringToBytes)(JSON.stringify(t)))}},{key:"componentWillReceiveProps",value:function(e){var t=e.isOpen;this.setState({isOpen:t})}},{key:"renderPage",value:function(){var e=this.state,t=e.step,a=e.privateKey;switch(t){case 0:return d.a.createElement(W,null,d.a.createElement("div",{className:"d-flex justify-content-center text-center"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement("h5",null,Object(m.c)("new_wallet")),d.a.createElement("p",null,Object(m.c)("password_encr_key_message_0")),d.a.createElement("p",null,Object(m.c)("password_encr_key_message_1")))),d.a.createElement("div",{className:"d-flex justify-content-center"},d.a.createElement("div",{className:"col-md-5"},d.a.createElement("div",{className:"text-center"},d.a.createElement("label",null,Object(m.c)("password")),d.a.createElement(C.a,{minLength:8,tooShortWord:Object(m.b)("too_short"),changeCallback:this.onPasswordChanged,minScore:2,scoreWords:[Object(m.b)("weak"),Object(m.b)("okay"),Object(m.b)("good"),Object(m.b)("strong"),Object(m.b)("secure")],inputProps:{name:"password_input",autoComplete:"off",className:""}}),d.a.createElement("div",{className:"text-muted"},Object(m.c)("strong_password_info"))))));case 1:return d.a.createElement(W,null,d.a.createElement("div",{className:"d-flex justify-content-center text-center"},d.a.createElement("div",{className:"col-md-6"},d.a.createElement("h5",null,Object(m.c)("save_keystore_file")),d.a.createElement("p",null,d.a.createElement("button",{className:"btn btn-lg btn-block",onClick:this.downloadEncryptedKeyFile},d.a.createElement("i",{className:"fa fa-download mr-2"}),Object(m.c)("download_keystore_file"))))),d.a.createElement("p",{className:"text-center"},d.a.createElement("b",null,Object(m.c)("do_not_lose_it"))," ",Object(m.c)("do_not_lose_it_message_0")," ",d.a.createElement("br",null),d.a.createElement("b",null,Object(m.c)("do_not_share_it"))," ",Object(m.c)("do_not_share_it_message_0")," ",d.a.createElement("br",null),d.a.createElement("b",null,Object(m.c)("make_a_backup"))," ",Object(m.c)("make_a_backup_message_0")," ",d.a.createElement("br",null)));case 2:return d.a.createElement(W,null,d.a.createElement("div",{className:"d-flex justify-content-center text-center"},d.a.createElement("div",{className:"col-md-6"},d.a.createElement("h5",null,Object(m.c)("save_private_key")),d.a.createElement("p",null,d.a.createElement("div",{className:"input-group mb-3"},d.a.createElement("input",{type:"text",readOnly:!0,className:"form-control",value:a}),d.a.createElement("div",{className:"input-group-append"},d.a.createElement(K.CopyToClipboard,{text:a},d.a.createElement("button",{className:"btn btn-outline-secondary",type:"button"},d.a.createElement("i",{className:"fa fa-paste"})))))),d.a.createElement("p",null,d.a.createElement("button",{className:"btn btn-lg btn-block",onClick:this.printPaperWallet},d.a.createElement("i",{className:"fa fa-print mr-2"}),Object(m.c)("print_paper_wallet"))))),d.a.createElement("p",{className:"text-center"},d.a.createElement("b",null,Object(m.c)("do_not_lose_it"))," ",Object(m.c)("do_not_lose_it_message_0")," ",d.a.createElement("br",null),d.a.createElement("b",null,Object(m.c)("do_not_share_it"))," ",Object(m.c)("do_not_share_it_message_0")," ",d.a.createElement("br",null),d.a.createElement("b",null,Object(m.c)("make_a_backup"))," ",Object(m.c)("make_a_backup_message_0")," ",d.a.createElement("br",null)));case 3:return d.a.createElement(W,null,d.a.createElement("div",{className:"text-center"},d.a.createElement("p",{className:"font-weight-bold"},Object(m.c)("new_wallet_ready_message")),d.a.createElement(k.a,{className:"btn btn-success",to:"/account"},Object(m.c)("go_to_account_page"))))}}},{key:"render",value:function(){var e=this.state.step;return d.a.createElement("main",{className:"container wallet-wizard header-overlap"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"text-center p-5 bg-dark"},d.a.createElement("img",{className:"wallet-wizard-logo",src:V})),d.a.createElement("div",{className:"card-body d-flex wizard-steps"},d.a.createElement(T,{completed:e>0,first:!0,icon:"fa fa-key"}),d.a.createElement(T,{completed:e>1,icon:"fa fa-save"}),d.a.createElement(T,{completed:e>2,icon:"fa fa-lock"})),d.a.createElement("div",{className:"card-body"},this.renderPage()),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"row d-flex px-3"},e<3&&d.a.createElement("button",{disabled:!this.isStepValid(),className:"btn btn-dark btn-lg ml-auto",onClick:this.nextStep},Object(m.c)("next"))))))}}]),t}(d.a.PureComponent);var Q={login:x.v};t.default=Object(o.connect)(function(e){return{account:e.app.account}},Q)(D)}}]);