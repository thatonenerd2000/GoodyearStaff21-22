try{
s_a("syrv");
var s_cdb=function(a){s_h.call(this,a)};s_n(s_cdb,s_h);s_=s_cdb.prototype;s_.getValue=function(){return s_z(this,1)};s_.setValue=function(a){return s_i(this,1,a)};s_.Dg=function(){return s_v(this,1)};s_.getType=function(){return s_7e(this,2,1)};s_.Ya="zPXzie";

s_b();

}catch(e){_DumpException(e)}
try{
s_a("syrt");
var s_vm=function(a){s_k.call(this,a.Ja);this.data=a.Pa.VZc;this.root=this.Ha().el()};s_n(s_vm,s_k);s_vm.Fa=function(){return{Pa:{VZc:s_cdb}}};s_=s_vm.prototype;s_.KFa=function(){return this.root};s_.Ie=function(){return this.root};s_.getType=function(){return this.data.getType()};s_.iFb=function(){var a=this.data.getType();return!s_ddb.includes(a)};s_.isEnabled=function(){return!this.root.getAttribute("disabled")};s_.f7b=function(){return s_x(this.data,3)};s_.Rka=function(){return 4===this.data.getType()};
s_.E5a=function(){return 4!==this.data.getType()&&6!==this.data.getType()};s_.setEnabled=function(a){a?this.root.removeAttribute("disabled"):this.root.setAttribute("disabled","true");s_gl(this.root,"disabled",a?"false":"true")};s_.isSelected=function(){return s_Ug(this.root,"fbKdEb")};
s_.Jl=function(a){a?this.iFb()&&this.isEnabled()&&!s_Ug(this.root,"fbKdEb")&&s_Vg(this.root,"fbKdEb"):s_Xg(this.root,"fbKdEb");if(this.iFb()&&this.isEnabled()){var b=this.f7b()?"selected":"checked";s_gl(this.root,b,a?"true":"false")}};s_.INb=function(a){a?this.isEnabled()&&s_Vg(this.root,"gvybPb"):s_Xg(this.root,"gvybPb")};s_.getContent=function(){return s_cg(s_G(this,"ibnC6b").el())};s_.zja=function(){return s_f(this.root,"shortLabel")};s_.getValue=function(){return this.data.getValue()};
s_H(s_vm.prototype,"HvnK2b",function(){return this.getValue});s_H(s_vm.prototype,"TINwZb",function(){return this.zja});s_H(s_vm.prototype,"aDGs4d",function(){return this.getContent});s_H(s_vm.prototype,"KKjvXb",function(){return this.isSelected});s_H(s_vm.prototype,"ezx81e",function(){return this.E5a});s_H(s_vm.prototype,"BnKdQ",function(){return this.Rka});s_H(s_vm.prototype,"I9FNke",function(){return this.f7b});s_H(s_vm.prototype,"yXgmRe",function(){return this.isEnabled});
s_H(s_vm.prototype,"pxaUTb",function(){return this.iFb});s_H(s_vm.prototype,"SbhtCf",function(){return this.getType});s_H(s_vm.prototype,"t4aLLd",function(){return this.Ie});s_H(s_vm.prototype,"xdy80",function(){return this.KFa});s_J(s_yza,s_vm);var s_ddb=[1,4,5,6,7];

s_b();

}catch(e){_DumpException(e)}
try{
s_a("CnSW2d");

s_b();

}catch(e){_DumpException(e)}
try{
s_a("sy98");

s_b();

}catch(e){_DumpException(e)}
try{
s_a("dBuwMe");
var s_a_g={duration:200,easing:"cubic-bezier(.4,0,.2,1)"};
var s_b_g=[.001,1],s_xK=function(a){s_k.call(this,a.Ja);var b=this;this.qh=!1;this.Ba=null;this.Aa=!1;this.Ea=s_id(function(){return b.Ha().el()});this.oa=s_id(function(){return b.Da("NQBQ7d").el()});this.wa=s_id(function(){return b.Da("pwYex").el()});this.getData("userInitiatedAutoplay").Hb()&&this.uDb();a=.36;this.getData("textOpacityOn").Hb()&&(a=this.getData("textOpacityOn").number());var c=.87;this.getData("textOpacityOff").Hb()&&(c=this.getData("textOpacityOff").number());this.Ca=[a,c]};
s_n(s_xK,s_k);s_xK.Fa=s_k.Fa;s_=s_xK.prototype;s_.$4c=function(){return this.qh};s_.B3c=function(){return this.wa};s_.A3c=function(){return this.oa};s_.uDb=function(){var a=this;this.Aa||(this.Aa=!0,s_C(this.oa(),"visibility","visible"),this.Ba=s_dpa(this.Ea(),"click",function(b){return a.Zd(b)}))};s_.Zd=function(a){this.qh||(s_ui(a),s_Mk(a),a=this.Ea(),s_7b(a,s_tOg,void 0,void 0,void 0))};
var s_c_g=function(a,b,c,d,e){var f=[];b!==c&&f.push((new s_2o(a.wa(),s_a_g)).opacity(b,c));d!==e&&a.Aa&&f.push((new s_2o(a.oa(),s_a_g)).opacity(d,e));return new s_cp(f)},s_d_g=function(a,b){b=(a.qh=b)?1:0;var c=1-b;return s_c_g(a,a.Ca[b],a.Ca[c],s_b_g[b],s_b_g[c])};s_xK.prototype.R0b=function(){return s_d_g(this,!0)};s_xK.prototype.Q0b=function(){return s_d_g(this,!1)};
s_xK.prototype.handleError=function(){null!=this.Ba&&s_epa(this.Ea(),this.Ba);s_$f(this.wa(),"Preview unavailable");s_$f(this.oa(),"Preview unavailable");this.wa().setAttribute("aria-label","Preview unavailable");var a=s_Jsb(this.wa()),b=this.Aa?s_Jsb(this.oa()):0;return s_c_g(this,""===a?1:a,this.Ca[0],""===b?1:b,s_b_g[0])};s_H(s_xK.prototype,"JqRO3d",function(){return this.handleError});s_H(s_xK.prototype,"J8ZKk",function(){return this.Q0b});s_H(s_xK.prototype,"F9rNV",function(){return this.R0b});
s_H(s_xK.prototype,"TfYVvf",function(){return this.uDb});s_H(s_xK.prototype,"qZJZOd",function(){return this.A3c});s_H(s_xK.prototype,"v477ce",function(){return this.B3c});s_H(s_xK.prototype,"VCOkNc",function(){return this.$4c});s_J(s_2za,s_xK);


s_b();

}catch(e){_DumpException(e)}
try{
s_a("syiz");
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s_gx=function(a,b,c){s_fd.call(this);this.hF=null!=c?s_ha(a,c):a;this.Ea=b;this.Xm=s_ha(this.Mwc,this);this.wa=!1;this.Aa=0;this.Ba=this.oa=null;this.Ca=[]};s_dd(s_gx,s_fd);s_=s_gx.prototype;s_.Oq=function(a){this.Ca=arguments;this.wa=!1;this.oa?this.Ba=s_cd()+this.Ea:this.oa=s_Ng(this.Xm,this.Ea)};s_.stop=function(){this.oa&&(s_Og(this.oa),this.oa=null);this.Ba=null;this.wa=!1;this.Ca=[]};s_.pause=function(){++this.Aa};
s_.resume=function(){this.Aa&&(--this.Aa,!this.Aa&&this.wa&&(this.wa=!1,this.hF.apply(null,this.Ca)))};s_.Wb=function(){this.stop();s_gx.Vc.Wb.call(this)};s_.Mwc=function(){this.oa&&(s_Og(this.oa),this.oa=null);this.Ba?(this.oa=s_Ng(this.Xm,this.Ba-s_cd()),this.Ba=null):this.Aa?this.wa=!0:(this.wa=!1,this.hF.apply(null,this.Ca))};

s_b();

}catch(e){_DumpException(e)}
try{
s_a("sysg");
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

s_b();

}catch(e){_DumpException(e)}
try{
s_a("sy11i");

s_b();

}catch(e){_DumpException(e)}
try{
s_a("yuKjYb");
var s_e_g=function(){this.oa=this.Aa=this.Ba=null;this.wa=new s_ora};s_e_g.prototype.reset=function(){this.oa=this.Aa=this.Ba=null};var s_f_g=function(a,b){if(s_3g(a,"ved")){b=s_2a(s_I7a(b),4);var c={};s_K(a,{data:(c.vpp=b,c)})}};s_e_g.prototype.En=function(){};var s_g_g=function(a,b){if(null!=a.oa)a.En("Unable to log preview play start");else{a.wa.reset();a.oa=Date.now();a.wa.start();var c=new s_A7a;c=s_i(c,1,a.Aa);c=s_i(c,2,a.Ba);a=s_i(c,3,a.oa);a=s_E7a(new s_2k,a);s_f_g(b,a)}};
var s_h_g=function(a){s_h.call(this,a)};s_n(s_h_g,s_h);s_h_g.prototype.getUrl=function(){return s_m(this,1)};s_h_g.prototype.Ya="ZQsE3e";
var s_i_g=null,s_j_g=!1,s_yK=function(a){s_k.call(this,a.Ja);var b=this;this.container=null;this.Aa=!1;this.wa=this.Ba=null;this.ub=!1;this.Ca=this.oa=null;this.Ab="";this.Ga=this.Na=this.Xa=!1;this.Ta=this.Ra=null;this.Ea=!1;this.Ma=!0;this.hb=this.Ia=null;this.Qa=!1;this.data=a.Pa.U$d;this.Wd=new s_Ji(this);this.Bb=this.getData("hp").Hb();"complete"===document.readyState?s_k_g(this):this.hb=s_Hg(s_Sf(),"load",function(){return s_k_g(b)})};s_n(s_yK,s_k);s_yK.Fa=function(){return{Pa:{U$d:s_h_g}}};
s_=s_yK.prototype;s_.c9c=function(){return this.Ga};s_.Vlb=function(){return this.wa};s_.okb=function(){return this.Ea};s_.N5c=function(){return this.Wd};s_.x4c=function(){return this.Aa};s_.X8c=function(){return this.Ca};s_.Y8c=function(){return this.Ba};s_.klb=function(){return this.Xa};s_.$N=function(){return this.container};s_.Tlb=function(){return this.oa};s_.b9c=function(){return this.Ga};
var s_k_g=function(a){try{a.container=a.Da("haAclf").el(),a.Ba=s_G(a,"kyCLBb").el()}catch(b){s_ji(function(){return s_k_g(a)},200);return}a.wa=s_7e(a.data,5,3);s_6m(a.Ha().el(),"prevreg");a.oa=new s_l_g(a);a.Qc(a.oa);a.Ab=a.data.getUrl();a.Na=!!s_x(a.data,2,!0);a.Ia=new s_gx(function(){a.Na&&s_m_g(a)},50);1!==a.wa&&(a.Wd.listen(s_Sf(),"scroll",function(){return a.Ia.Oq()}),s_3b(function(){return a.Ia.Oq()}));a.Ra=function(){s_n_g(a);s_o_g(a);s_zK(a,3)};a.Ta=function(){s_Wb().hJ()?(s_n_g(a),s_zK(a,
3)):(s_p_g(a),a.oa.wa.reset(),s_m_g(a))};a.Ca=null;a.Ba&&a.Hc(a.Ba).then(function(b){a.Ca=b;null==s_i_g&&(s_i_g=[]);s_i_g.push(a);s_j_g&&s_q_g(a);a.Ma=!1;a.Qa&&(s_r_g(a),a.Qa=!1)})},s_t_g=function(a){if(!a.ub){s_s_g(a.oa,a.getData("posterUri"));if(!s_x(a.data,2,!0)&&s_x(a.data,3,!0)){var b=s_Tf("DIV");s_Vg(b,"mRYBec");s_ab(s_ab(a.container)).appendChild(b)}a.ub=!0}};s_yK.prototype.F2a=function(){var a;(null===(a=this.oa)||void 0===a?0:a.qh())||(this.Aa||1===this.wa)&&s_u_g(this)};
var s_u_g=function(a){return a.oa.play().then(function(){if(a.Ga)s_zK(a,1);else{s_g_g(a.oa.wa,a.container);var b=[s_3o(new s_2o(a.oa.VK(),s_a_g),1),a.Ca.R0b()];s_3g(a.container,"ved")&&!a.Xa&&(a.Xa=!0,s_3k([new s_E(a.container,"show")]));s_p_g(a);s_v_g(a);a.trigger(s_wOg);return(new s_cp(b)).play().then(function(){a.Ga&&s_zK(a,1)})}},function(b){return a.handleError(b)})};s_yK.prototype.UDb=function(){return s_u_g(this)};
var s_y_g=function(a){a.oa&&s_w_g(a.oa,a.wa);s_t_g(a);a.oa.load();s_x_g(a.oa)&&s_u_g(a)};s_yK.prototype.VDb=function(){s_y_g(this)};var s_p_g=function(a){a.Wd.listen(s_Sf(),"pagehide",a.Ra)},s_n_g=function(a){a.Wd.Xe(s_Sf(),"pagehide",a.Ra)},s_v_g=function(a){a.Wd.listen(s_Wb(),"visibilitychange",a.Ta)};s_yK.prototype.lcb=function(){s_v_g(this)};
var s_o_g=function(a){a.Wd.Xe(s_Wb(),"visibilitychange",a.Ta)},s_zK=function(a,b){s_n_g(a);s_o_g(a);a.oa.pause(b);b=[s_3o(new s_2o(a.oa.VK(),s_a_g),.001)];a.Ca&&b.push(a.Ca.Q0b());return(new s_cp(b)).play().then(function(){return a.oa.reset()})};s_yK.prototype.qh=function(){return this.oa.qh()};s_yK.prototype.Urb=function(){return this.qh()};s_yK.prototype.isPaused=function(){return this.oa.isPaused()};
var s_m_g=function(a){if(1===a.wa)return s_Nb();var b=a.container.getBoundingClientRect(),c=s_Nf();if((new s_gh(0,0,c.width,c.height)).contains(b)&&b.left<=c.width/2&&b.right>=c.width/2){if(a.Aa)return s_Nb();s_y_g(a);a.Aa=!0}else if(a.Aa)return a.Aa=!1,s_zK(a,1);return s_Nb()};s_=s_yK.prototype;s_.A9d=function(){return s_m_g(this)};s_.jld=function(a){var b=a.targetElement.el();s_3g(b,"ved")&&s_K(b);s_y_g(this);a.event&&(s_Mk(a.event),s_ui(a.event))};
s_.$kd=function(){this.Bb&&this.Ba&&s_C(this.Ba,"visibility","hidden");s_r_g(this)};s_.bld=function(){s_r_g(this,2)};s_.ald=function(){s_r_g(this,3)};var s_r_g=function(a,b){if(b=void 0===b?null:b)a.wa=b;a.Ma?a.Qa=!0:a.Ea||a.qh()||(a.Ga=!1,a.Aa=!0,s_y_g(a))};s_yK.prototype.jnd=function(){this.Ma?this.Qa=!1:!this.Ea&&this.Aa&&(s_zK(this,1),this.Ga=!0,this.Bb&&this.Ba&&s_C(this.Ba,"visibility",""))};
s_yK.prototype.Oja=function(a){this.Ma||this.Ea||1===this.wa||(null!==a&&(a=a.event,null!=a&&s_Mk(a)),this.Ia&&this.Ia.Oq())};s_yK.prototype.FGa=function(){this.Na=!0;this.Ea||(s_t_g(this),1!==this.wa&&s_m_g(this))};s_yK.prototype.nZa=function(){this.Na=!1;this.Ea||1===this.wa||s_m_g(this)};var s_q_g=function(a){1!==a.wa&&(a.Ca.uDb(),a.wa=1,s_z_g(a.oa),s_n_g(a),s_o_g(a))};
s_yK.prototype.handleError=function(a){if(a&&("AbortError"!==a.name||!this.isPaused()))if("NotAllowedError"===a.name||"AbortError"===a.name){if(s_j_g=!0,null!=s_i_g){a=s_e(s_i_g);for(var b=a.next();!b.done;b=a.next())s_q_g(b.value);a=this.container;b=s_G7a(new s_2k,!0);s_f_g(a,b)}}else this.Ea=!0,this.Wd.removeAll(),s_zK(this,4),this.Ca.handleError().play()};
s_yK.prototype.play=function(){var a=this,b=this;return new s_wg(function(c){var d=function(){null!==b.oa&&b.oa.loaded()&&s_x_g(b.oa)?b.qh()?c():s_u_g(b).then(c):(null===b.oa||b.oa.loaded()||(s_t_g(a),a.oa.load()),s_ji(d,100))};d()})};s_yK.prototype.stop=function(){return this.qh()?s_zK(this,3):null};s_yK.prototype.nb=function(){s_n_g(this);s_o_g(this);null!=this.hb&&s_Jg(this.hb);s_k.prototype.nb.call(this)};s_H(s_yK.prototype,"k4Iseb",function(){return this.nb});s_H(s_yK.prototype,"QKiGd",function(){return this.stop});
s_H(s_yK.prototype,"NziyQe",function(){return this.play});s_H(s_yK.prototype,"UGmjbd",function(){return this.nZa});s_H(s_yK.prototype,"PojOWc",function(){return this.FGa});s_H(s_yK.prototype,"bR1Pxb",function(){return this.Oja});s_H(s_yK.prototype,"sAbFSb",function(){return this.jnd});s_H(s_yK.prototype,"QnYmUe",function(){return this.ald});s_H(s_yK.prototype,"FhYbAb",function(){return this.bld});s_H(s_yK.prototype,"dB6bid",function(){return this.$kd});s_H(s_yK.prototype,"qLTW5e",function(){return this.jld});
s_H(s_yK.prototype,"vKqVve",function(){return this.A9d});s_H(s_yK.prototype,"lSuz7d",function(){return this.isPaused});s_H(s_yK.prototype,"fQV4Od",function(){return this.Urb});s_H(s_yK.prototype,"nuM91e",function(){return this.qh});s_H(s_yK.prototype,"hoE5Od",function(){return this.lcb});s_H(s_yK.prototype,"casA0c",function(){return this.VDb});s_H(s_yK.prototype,"sw8RG",function(){return this.UDb});s_H(s_yK.prototype,"ARH9bb",function(){return this.F2a});s_H(s_yK.prototype,"nZU0Cf",function(){return this.b9c});
s_H(s_yK.prototype,"xfZxVe",function(){return this.Tlb});s_H(s_yK.prototype,"QYIAte",function(){return this.$N});s_H(s_yK.prototype,"IAmvMb",function(){return this.klb});s_H(s_yK.prototype,"SMMwV",function(){return this.Y8c});s_H(s_yK.prototype,"Gn9Pkc",function(){return this.X8c});s_H(s_yK.prototype,"aadByb",function(){return this.x4c});s_H(s_yK.prototype,"sHFmqe",function(){return this.N5c});s_H(s_yK.prototype,"vVPI5b",function(){return this.okb});s_H(s_yK.prototype,"DpMiYc",function(){return this.Vlb});
s_H(s_yK.prototype,"t23eF",function(){return this.c9c});s_J(s_3za,s_yK);var s_l_g=function(a){s_fd.call(this);this.controller=a;this.Ba=this.Dn=this.Ca=this.Aa=!1;this.oa=null;this.wa=new s_e_g;this.U6=new s_Ji(this)};s_n(s_l_g,s_fd);s_l_g.prototype.VK=function(){return this.oa};s_l_g.prototype.load=function(){if(!this.Dn){this.Dn=!0;var a=this.wa;null!=a.Ba||null!=a.Aa||null!=a.oa?a.En("Unable to log preview load start"):(a.wa.reset(),a.Ba=Date.now(),a.wa.start())}this.loaded()||(this.Ca=!0,this.oa.load())};
var s_x_g=function(a){var b;return(null===(b=a.oa)||void 0===b?void 0:b.readyState)===HTMLMediaElement.HAVE_ENOUGH_DATA};s_=s_l_g.prototype;s_.play=function(){var a=this;this.Dn=!1;this.Aa=!0;this.Ba=!1;return new s_wg(function(b,c){var d=a.oa.play();null!=d?d.catch(c).then(b):b()})};
s_.pause=function(a){if(this.Aa){this.Aa=!1;this.Ba=!0;var b=this.wa,c=this.controller.container;if(null!==b.oa){var d=Date.now(),e=s_pra(b.wa),f=new s_x7a;a=s_i(f,1,a);d=s_i(a,2,d);e=s_i(d,3,e);e=s_F7a(new s_2k,e);s_f_g(c,e)}b.reset();this.oa.pause()}};s_.reset=function(){this.oa.currentTime=0};s_.qh=function(){return this.Aa};s_.isPaused=function(){return this.Ba};s_.loaded=function(){return this.Ca};
var s_z_g=function(a){null!=a.oa&&(a.oa.removeAttribute("loop"),a.wa.reset())},s_s_g=function(a,b){if(null==a.oa){var c=s_Tf("VIDEO");c.src=s_Ta(s_Kd(a.controller.Ab));s_Vg(c,"HnGAzc");c.setAttribute("preload","none");a.oa=c;c.muted=!0;c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");(null===b||void 0===b?0:b.Hb())&&c.setAttribute("poster",null===b||void 0===b?void 0:b.Sa());c.onloadeddata=function(){var d=a.wa;null===d.Ba||null!=d.Aa?d.En("Unable to log preview load end"):
d.Aa=s_pra(d.wa);a.controller.F2a()};a.U6.listen(c,"error",function(d){var e;a.oa.error?e=Error("Mh`"+a.oa.error.code):e=d.error||d.ue.error;e||(e=Error("Nh"));a.controller.handleError(e)});s_w_g(a,a.controller.wa);1===a.controller.wa&&s_z_g(a);Date.now();a.controller.container.appendChild(c)}},s_w_g=function(a,b){a.oa&&(3===b?(a.oa.setAttribute("loop","true"),a.oa.onended=null):(a.oa.removeAttribute("loop"),a.oa.onended=function(){return s_zK(a.controller,2)}))};
s_l_g.prototype.Wb=function(){this.U6.dispose();s_fd.prototype.Wb.call(this)};

s_b();

}catch(e){_DumpException(e)}
// Google Inc.
