import{u as K,d as e,ar as fe,i as r,as as xe,at as be,y as p,au as pe,av as $e,aw as _e,F,ax as we,ay as ye,az as Ce,aA as Pe,aB as B,L as x,aC as Se,aD as Te,aE as Le,aF as Ee,aG as q,aH as ge,aI as Z,aJ as X,$ as Ie,t as m,aK as Ne,aL as ne,S as R,aM as D,aN as ve,aO as G,a9 as A,M as J,ag as De,A as se,z as Me,a5 as ke,b as Oe,v as Ae,o as Fe,w as Ue,B as Y,ab as je,aP as Be,aQ as le,aR as ie,aS as ae,aT as ce,j as Re}from"./index-B3l_s7jA.js";import{f as He}from"./global-3OfJXwwp.js";import{C as O}from"./ConfigTitle-UIgRQej0.js";import{I as oe}from"./IconReload-B7j8_8S0.js";var Ye=m('<div class="flex flex-col gap-4"><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><input type=number class="input input-bordered w-full"></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><select class="select select-bordered w-full"></select></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><select class="select select-bordered w-full">'),ze=m('<option class="flex items-center gap-2">'),Qe=m("<option>");const Xe=l=>{const[n]=K();return e(Ie,{ref:t=>{var i;return(i=l.ref)==null?void 0:i.call(l,t)},get icon(){return e(fe,{size:24})},get title(){return n("proxiesSettings")},get children(){var t=Ye(),i=t.firstChild,c=i.firstChild,u=c.firstChild,g=i.nextSibling,y=g.firstChild,o=g.nextSibling,M=o.firstChild,b=o.nextSibling,P=b.firstChild,S=b.nextSibling,$=S.firstChild,v=S.nextSibling,T=v.firstChild,L=T.firstChild,C=v.nextSibling,E=C.firstChild,z=E.firstChild,Q=C.nextSibling,j=Q.firstChild;return r(i,e(O,{withDivider:!0,get children(){return n("autoCloseConns")}}),c),u.addEventListener("change",d=>xe(d.target.checked)),r(g,e(O,{withDivider:!0,get children(){return n("urlForLatencyTest")}}),y),y.addEventListener("change",d=>be(d.target.value)),r(o,e(O,{withDivider:!0,get children(){return[p(()=>n("latencyTestTimeoutDuration"))," (",p(()=>n("ms")),")"]}}),M),M.addEventListener("change",d=>pe(Number(d.target.value))),r(b,e(O,{withDivider:!0,get children(){return n("urlForIPv6SupportTest")}}),P),P.addEventListener("change",d=>{var f;return $e((f=d.target.value)==null?void 0:f.trim())}),r(S,e(O,{withDivider:!0,get children(){return n("proxiesSorting")}}),$),$.addEventListener("change",d=>_e(d.target.value)),r($,e(F,{get each(){return Object.values(we)},children:d=>(()=>{var f=ze();return f.value=d,r(f,()=>n(d)),f})()})),r(v,e(O,{withDivider:!0,get children(){return n("hideUnAvailableProxies")}}),T),L.addEventListener("change",d=>ye(d.target.checked)),r(C,e(O,{withDivider:!0,get children(){return n("renderInTwoColumns")}}),E),z.addEventListener("change",d=>Ce(d.target.checked)),r(Q,e(O,{withDivider:!0,get children(){return n("proxiesPreviewType")}}),j),j.addEventListener("change",d=>Pe(d.target.value)),r(j,e(F,{get each(){return Object.values(B)},children:d=>(()=>{var f=Qe();return f.value=d,r(f,()=>n(d)),f})()})),x(()=>u.checked=Se()),x(()=>y.value=Te()),x(()=>M.value=Le()),x(()=>P.value=Ee()),x(()=>$.value=q()),x(()=>L.checked=ge()),x(()=>z.checked=Z()),x(()=>j.value=X()),t}})},de=l=>{const n=()=>X()===B.OFF,t=p(()=>l.proxyNameList.length<=10),i=p(()=>{const u=X();return u===B.BAR||u===B.Auto&&!t()}),c=p(()=>{const u=X();return u===B.DOTS||u===B.Auto&&t()});return e(R,{get when(){return!n()},get children(){return e(Ne,{get children(){return[e(ne,{get when(){return i()},get children(){return e(Ke,{get proxyNameList(){return l.proxyNameList},get now(){return l.now}})}}),e(ne,{get when(){return c()},get children(){return e(Ze,{get proxyNameList(){return l.proxyNameList},get now(){return l.now}})}})]}})}})};var Je=m('<div class="flex items-center gap-2 py-2"><div class="my-2 flex flex-1 items-center justify-center overflow-hidden rounded-2xl [&amp;>*]:h-2"><div class=bg-success></div><div class=bg-warning></div><div class=bg-error></div><div class=bg-neutral>');const Ke=l=>{const{latencyMap:n}=G(),t=p(()=>l.proxyNameList.map(o=>n()[o])),i=p(()=>t().length),c=p(()=>t().filter(o=>o>D().NOT_CONNECTED&&o<=D().MEDIUM).length),u=p(()=>t().filter(o=>o>D().MEDIUM&&o<=D().HIGH).length),g=p(()=>t().filter(o=>o>D().HIGH).length),y=p(()=>t().filter(o=>o===D().NOT_CONNECTED).length);return(()=>{var o=Je(),M=o.firstChild,b=M.firstChild,P=b.nextSibling,S=P.nextSibling,$=S.nextSibling;return r(o,e(ve,{get name(){return l.now}}),null),x(v=>{var T=`${c()*100/i()}%`,L=`${u()*100/i()}%`,C=`${g()*100/i()}%`,E=`${y()*100/i()}%`;return T!==v.e&&((v.e=T)!=null?b.style.setProperty("width",T):b.style.removeProperty("width")),L!==v.t&&((v.t=L)!=null?P.style.setProperty("width",L):P.style.removeProperty("width")),C!==v.a&&((v.a=C)!=null?S.style.setProperty("width",C):S.style.removeProperty("width")),E!==v.o&&((v.o=E)!=null?$.style.setProperty("width",E):$.style.removeProperty("width")),v},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()};var Ve=m("<div>"),We=m('<div class="flex items-center gap-2 py-2"><div class="flex flex-1 flex-wrap items-center gap-1">');const qe=l=>{let n=l.selected?"bg-white border-4 border-success":"bg-success";return typeof l.latency!="number"||l.latency===D().NOT_CONNECTED?n=l.selected?"bg-white border-4 border-neutral":"bg-neutral":l.latency>D().HIGH?n=l.selected?"bg-white border-4 border-error":"bg-error":l.latency>D().MEDIUM&&(n=l.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{var t=Ve();return x(i=>{var c=A("h-4 w-4 rounded-full",n),u=l.name;return c!==i.e&&J(t,i.e=c),u!==i.t&&De(t,"title",i.t=u),i},{e:void 0,t:void 0}),t})()},Ze=l=>{const{latencyMap:n}=G();return(()=>{var t=We(),i=t.firstChild;return r(i,e(F,{get each(){return l.proxyNameList.map(c=>[c,n()[c]])},children:([c,u])=>{const g=l.now===c;return e(qe,{name:c,latency:u,selected:g})}})),r(t,e(ve,{get name(){return l.now}}),null),t})()};var Ge=m("<progress class=progress max=100>"),et=m('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),tt=m('<div class="text-sm text-slate-500">: ');const rt=l=>{const{Download:n=0,Upload:t=0,Total:i=0,Expire:c=0}=l,u=se(i,{units:"iec"}),g=se(n+t,{units:"iec"}),y=Me.toFinite(((n+t)/i*100).toFixed(2));return{total:u,used:g,percentage:y,expirePrefix:()=>{const[b]=K();return b("expire")},expireStr:()=>{const[b]=K();return c===0?b("noExpire"):ke(c*1e3).format("YYYY-MM-DD")}}},nt=l=>{if(!l.subscriptionInfo)return;const n=rt(l.subscriptionInfo);return[(()=>{var t=Ge();return x(()=>t.value=n.percentage),t})(),(()=>{var t=et(),i=t.firstChild,c=i.nextSibling,u=c.nextSibling,g=u.nextSibling;return g.nextSibling,r(t,()=>`${n.used}`,i),r(t,()=>`${n.total}`,c),r(t,()=>n.percentage,g),t})(),(()=>{var t=tt(),i=t.firstChild;return r(t,()=>n.expirePrefix(),i),r(t,()=>n.expireStr(),null),t})()]};var ue=m("<div>"),st=m('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class=ml-auto></div></div><div class="flex-1 overflow-y-auto">'),lt=m('<button><span></span><div class="badge badge-sm">'),it=m('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm">'),at=m('<div class="text-sm text-slate-500"> '),ct=m('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm"></div></div><div class="flex items-center gap-2">'),ot=m('<div class="text-sm text-slate-500"> :: <!> ');const ht=()=>{const l=Oe();if(!Ae())return l("/setup",{replace:!0}),null;let n;const[t]=K(),{fetchProxies:i,proxies:c,selectProxyInGroup:u,latencyMap:g,proxyGroupNames:y,proxyProviders:o,updateProviderByProviderName:M,updateAllProvider:b,proxyGroupLatencyTest:P,proxyProviderLatencyTest:S,collapsedMap:$,setCollapsedMap:v,proxyGroupLatencyTestingMap:T,proxyProviderLatencyTestingMap:L,isAllProviderUpdating:C,updatingMap:E}=G();Fe(i);const z=async(_,I)=>{_.stopPropagation(),P(I)},Q=(_,I)=>{_.stopPropagation(),S(I)},j=(_,I)=>{_.stopPropagation(),M(I)},d=async _=>{_.stopPropagation(),b()},[f,he]=Ue("proxies"),me=()=>[{type:"proxies",name:t("proxies"),count:c().length},{type:"proxyProviders",name:t("proxyProviders"),count:o().length}];return(()=>{var _=st(),I=_.firstChild,ee=I.firstChild,te=ee.nextSibling,re=I.nextSibling;return r(ee,e(F,{get each(){return me()},children:h=>(()=>{var s=lt(),k=s.firstChild,H=k.nextSibling;return s.$$click=()=>he(h.type),r(k,()=>h.name),r(H,()=>h.count),x(()=>J(s,A(f()===h.type&&"tab-active","tab-sm sm:tab-md tab gap-2 px-2"))),s})()})),r(I,e(R,{get when(){return f()==="proxyProviders"},get children(){return e(Y,{class:"btn btn-circle btn-sm",get disabled(){return C()},onClick:h=>d(h),get icon(){return e(oe,{get class(){return A(C()&&"animate-spin text-success")}})}})}}),te),r(te,e(Y,{class:"btn-circle btn-sm sm:btn-md",onClick:()=>n==null?void 0:n.showModal(),get icon(){return e(je,{})}})),r(re,e(R,{get when(){return f()==="proxies"},get children(){var h=ue();return r(h,e(F,{get each(){return c()},children:s=>{const k=p(()=>Be(le(s.all??[],g(),q(),y()),g(),y(),ge())),H=[(()=>{var a=it(),N=a.firstChild,w=N.firstChild,V=w.nextSibling;return r(w,()=>s.name),r(V,()=>{var U;return(U=s.all)==null?void 0:U.length}),r(a,e(Y,{class:"btn-circle btn-sm",get disabled(){return T()[s.name]},onClick:U=>z(U,s.name),get icon(){return e(ie,{get class(){return A(T()[s.name]&&"animate-pulse text-success")}})}}),null),a})(),(()=>{var a=at(),N=a.firstChild;return r(a,()=>s.type,N),r(a,()=>{var w;return((w=s.now)==null?void 0:w.length)>0&&` :: ${s.now}`},null),a})(),e(R,{get when(){return!$()[s.name]},get children(){return e(de,{get proxyNameList(){return k()},get now(){return s.now}})}})];return e(ae,{get isOpen(){return $()[s.name]},title:H,onCollapse:a=>v(s.name,a),get children(){return e(F,{get each(){return k()},children:a=>e(ce,{proxyName:a,get isSelected(){return s.now===a},onClick:()=>void u(s,a)})})}})}})),x(()=>J(h,A("grid grid-cols-1 place-items-start gap-2",Z()?"sm:grid-cols-2":"sm:grid-cols-1"))),h}}),null),r(re,e(R,{get when(){return f()==="proxyProviders"},get children(){var h=ue();return r(h,e(F,{get each(){return o()},children:s=>{const k=p(()=>le(s.proxies.map(a=>a.name)??[],g(),q(),void 0)),H=[(()=>{var a=ct(),N=a.firstChild,w=N.firstChild,V=w.nextSibling,U=N.nextSibling;return r(w,()=>s.name),r(V,()=>s.proxies.length),r(U,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return E()[s.name]},onClick:W=>j(W,s.name),get icon(){return e(oe,{get class(){return A(E()[s.name]&&"animate-spin text-success")}})}}),null),r(U,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return L()[s.name]},onClick:W=>Q(W,s.name),get icon(){return e(ie,{get class(){return A(L()[s.name]&&"animate-pulse text-success")}})}}),null),a})(),e(nt,{get subscriptionInfo(){return s.subscriptionInfo}}),(()=>{var a=ot(),N=a.firstChild,w=N.nextSibling;return w.nextSibling,r(a,()=>s.vehicleType,N),r(a,()=>t("updated"),w),r(a,()=>He(s.updatedAt),null),a})(),e(R,{get when(){return!$()[s.name]},get children(){return e(de,{get proxyNameList(){return k()}})}})];return e(ae,{get isOpen(){return $()[s.name]},title:H,onCollapse:a=>v(s.name,a),get children(){return e(F,{get each(){return k()},children:a=>e(ce,{proxyName:a})})}})}})),x(()=>J(h,A("grid grid-cols-1 place-items-start gap-2",Z()?"sm:grid-cols-2":"sm:grid-cols-1"))),h}}),null),r(_,e(Xe,{ref:h=>n=h}),null),_})()};Re(["click"]);export{ht as default};
