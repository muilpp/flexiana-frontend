goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36037 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36037(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36042 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36042(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34774 = coll;
var G__34775 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34774,G__34775) : shadow.dom.lazy_native_coll_seq.call(null,G__34774,G__34775));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34804 = arguments.length;
switch (G__34804) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34809 = arguments.length;
switch (G__34809) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34821 = arguments.length;
switch (G__34821) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34834 = arguments.length;
switch (G__34834) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34850 = arguments.length;
switch (G__34850) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34868 = arguments.length;
switch (G__34868) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34880){if((e34880 instanceof Object)){
var e = e34880;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34880;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34891 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34892 = null;
var count__34893 = (0);
var i__34894 = (0);
while(true){
if((i__34894 < count__34893)){
var el = chunk__34892.cljs$core$IIndexed$_nth$arity$2(null,i__34894);
var handler_36087__$1 = ((function (seq__34891,chunk__34892,count__34893,i__34894,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34891,chunk__34892,count__34893,i__34894,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36087__$1);


var G__36088 = seq__34891;
var G__36089 = chunk__34892;
var G__36090 = count__34893;
var G__36091 = (i__34894 + (1));
seq__34891 = G__36088;
chunk__34892 = G__36089;
count__34893 = G__36090;
i__34894 = G__36091;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34891);
if(temp__5753__auto__){
var seq__34891__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34891__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34891__$1);
var G__36095 = cljs.core.chunk_rest(seq__34891__$1);
var G__36096 = c__4679__auto__;
var G__36097 = cljs.core.count(c__4679__auto__);
var G__36098 = (0);
seq__34891 = G__36095;
chunk__34892 = G__36096;
count__34893 = G__36097;
i__34894 = G__36098;
continue;
} else {
var el = cljs.core.first(seq__34891__$1);
var handler_36100__$1 = ((function (seq__34891,chunk__34892,count__34893,i__34894,el,seq__34891__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34891,chunk__34892,count__34893,i__34894,el,seq__34891__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36100__$1);


var G__36105 = cljs.core.next(seq__34891__$1);
var G__36106 = null;
var G__36107 = (0);
var G__36108 = (0);
seq__34891 = G__36105;
chunk__34892 = G__36106;
count__34893 = G__36107;
i__34894 = G__36108;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34930 = arguments.length;
switch (G__34930) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34956 = cljs.core.seq(events);
var chunk__34957 = null;
var count__34958 = (0);
var i__34959 = (0);
while(true){
if((i__34959 < count__34958)){
var vec__34986 = chunk__34957.cljs$core$IIndexed$_nth$arity$2(null,i__34959);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36120 = seq__34956;
var G__36121 = chunk__34957;
var G__36122 = count__34958;
var G__36123 = (i__34959 + (1));
seq__34956 = G__36120;
chunk__34957 = G__36121;
count__34958 = G__36122;
i__34959 = G__36123;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34956);
if(temp__5753__auto__){
var seq__34956__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34956__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34956__$1);
var G__36125 = cljs.core.chunk_rest(seq__34956__$1);
var G__36126 = c__4679__auto__;
var G__36127 = cljs.core.count(c__4679__auto__);
var G__36128 = (0);
seq__34956 = G__36125;
chunk__34957 = G__36126;
count__34958 = G__36127;
i__34959 = G__36128;
continue;
} else {
var vec__34998 = cljs.core.first(seq__34956__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36130 = cljs.core.next(seq__34956__$1);
var G__36131 = null;
var G__36132 = (0);
var G__36133 = (0);
seq__34956 = G__36130;
chunk__34957 = G__36131;
count__34958 = G__36132;
i__34959 = G__36133;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35008 = cljs.core.seq(styles);
var chunk__35009 = null;
var count__35010 = (0);
var i__35011 = (0);
while(true){
if((i__35011 < count__35010)){
var vec__35041 = chunk__35009.cljs$core$IIndexed$_nth$arity$2(null,i__35011);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35041,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36139 = seq__35008;
var G__36140 = chunk__35009;
var G__36141 = count__35010;
var G__36142 = (i__35011 + (1));
seq__35008 = G__36139;
chunk__35009 = G__36140;
count__35010 = G__36141;
i__35011 = G__36142;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35008);
if(temp__5753__auto__){
var seq__35008__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35008__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35008__$1);
var G__36143 = cljs.core.chunk_rest(seq__35008__$1);
var G__36144 = c__4679__auto__;
var G__36145 = cljs.core.count(c__4679__auto__);
var G__36146 = (0);
seq__35008 = G__36143;
chunk__35009 = G__36144;
count__35010 = G__36145;
i__35011 = G__36146;
continue;
} else {
var vec__35061 = cljs.core.first(seq__35008__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35061,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36148 = cljs.core.next(seq__35008__$1);
var G__36149 = null;
var G__36150 = (0);
var G__36151 = (0);
seq__35008 = G__36148;
chunk__35009 = G__36149;
count__35010 = G__36150;
i__35011 = G__36151;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35110_36153 = key;
var G__35110_36154__$1 = (((G__35110_36153 instanceof cljs.core.Keyword))?G__35110_36153.fqn:null);
switch (G__35110_36154__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36164 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_36164,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_36164,"aria-");
}
})())){
el.setAttribute(ks_36164,value);
} else {
(el[ks_36164] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35195){
var map__35198 = p__35195;
var map__35198__$1 = cljs.core.__destructure_map(map__35198);
var props = map__35198__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35198__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35201 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35201,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35201,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35201,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35206 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35206,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35206;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35213 = arguments.length;
switch (G__35213) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35238){
var vec__35240 = p__35238;
var seq__35241 = cljs.core.seq(vec__35240);
var first__35242 = cljs.core.first(seq__35241);
var seq__35241__$1 = cljs.core.next(seq__35241);
var nn = first__35242;
var first__35242__$1 = cljs.core.first(seq__35241__$1);
var seq__35241__$2 = cljs.core.next(seq__35241__$1);
var np = first__35242__$1;
var nc = seq__35241__$2;
var node = vec__35240;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35243 = nn;
var G__35244 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35243,G__35244) : create_fn.call(null,G__35243,G__35244));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35245 = nn;
var G__35246 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35245,G__35246) : create_fn.call(null,G__35245,G__35246));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35248 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35248,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35248,(1),null);
var seq__35253_36185 = cljs.core.seq(node_children);
var chunk__35254_36186 = null;
var count__35255_36187 = (0);
var i__35256_36188 = (0);
while(true){
if((i__35256_36188 < count__35255_36187)){
var child_struct_36189 = chunk__35254_36186.cljs$core$IIndexed$_nth$arity$2(null,i__35256_36188);
var children_36190 = shadow.dom.dom_node(child_struct_36189);
if(cljs.core.seq_QMARK_(children_36190)){
var seq__35348_36191 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36190));
var chunk__35350_36192 = null;
var count__35351_36193 = (0);
var i__35352_36194 = (0);
while(true){
if((i__35352_36194 < count__35351_36193)){
var child_36196 = chunk__35350_36192.cljs$core$IIndexed$_nth$arity$2(null,i__35352_36194);
if(cljs.core.truth_(child_36196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36196);


var G__36197 = seq__35348_36191;
var G__36198 = chunk__35350_36192;
var G__36199 = count__35351_36193;
var G__36200 = (i__35352_36194 + (1));
seq__35348_36191 = G__36197;
chunk__35350_36192 = G__36198;
count__35351_36193 = G__36199;
i__35352_36194 = G__36200;
continue;
} else {
var G__36201 = seq__35348_36191;
var G__36202 = chunk__35350_36192;
var G__36203 = count__35351_36193;
var G__36204 = (i__35352_36194 + (1));
seq__35348_36191 = G__36201;
chunk__35350_36192 = G__36202;
count__35351_36193 = G__36203;
i__35352_36194 = G__36204;
continue;
}
} else {
var temp__5753__auto___36205 = cljs.core.seq(seq__35348_36191);
if(temp__5753__auto___36205){
var seq__35348_36206__$1 = temp__5753__auto___36205;
if(cljs.core.chunked_seq_QMARK_(seq__35348_36206__$1)){
var c__4679__auto___36207 = cljs.core.chunk_first(seq__35348_36206__$1);
var G__36208 = cljs.core.chunk_rest(seq__35348_36206__$1);
var G__36209 = c__4679__auto___36207;
var G__36210 = cljs.core.count(c__4679__auto___36207);
var G__36211 = (0);
seq__35348_36191 = G__36208;
chunk__35350_36192 = G__36209;
count__35351_36193 = G__36210;
i__35352_36194 = G__36211;
continue;
} else {
var child_36212 = cljs.core.first(seq__35348_36206__$1);
if(cljs.core.truth_(child_36212)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36212);


var G__36213 = cljs.core.next(seq__35348_36206__$1);
var G__36214 = null;
var G__36215 = (0);
var G__36216 = (0);
seq__35348_36191 = G__36213;
chunk__35350_36192 = G__36214;
count__35351_36193 = G__36215;
i__35352_36194 = G__36216;
continue;
} else {
var G__36217 = cljs.core.next(seq__35348_36206__$1);
var G__36218 = null;
var G__36219 = (0);
var G__36220 = (0);
seq__35348_36191 = G__36217;
chunk__35350_36192 = G__36218;
count__35351_36193 = G__36219;
i__35352_36194 = G__36220;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36190);
}


var G__36221 = seq__35253_36185;
var G__36222 = chunk__35254_36186;
var G__36223 = count__35255_36187;
var G__36224 = (i__35256_36188 + (1));
seq__35253_36185 = G__36221;
chunk__35254_36186 = G__36222;
count__35255_36187 = G__36223;
i__35256_36188 = G__36224;
continue;
} else {
var temp__5753__auto___36225 = cljs.core.seq(seq__35253_36185);
if(temp__5753__auto___36225){
var seq__35253_36226__$1 = temp__5753__auto___36225;
if(cljs.core.chunked_seq_QMARK_(seq__35253_36226__$1)){
var c__4679__auto___36227 = cljs.core.chunk_first(seq__35253_36226__$1);
var G__36228 = cljs.core.chunk_rest(seq__35253_36226__$1);
var G__36229 = c__4679__auto___36227;
var G__36230 = cljs.core.count(c__4679__auto___36227);
var G__36231 = (0);
seq__35253_36185 = G__36228;
chunk__35254_36186 = G__36229;
count__35255_36187 = G__36230;
i__35256_36188 = G__36231;
continue;
} else {
var child_struct_36232 = cljs.core.first(seq__35253_36226__$1);
var children_36233 = shadow.dom.dom_node(child_struct_36232);
if(cljs.core.seq_QMARK_(children_36233)){
var seq__35409_36234 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36233));
var chunk__35411_36235 = null;
var count__35412_36236 = (0);
var i__35413_36237 = (0);
while(true){
if((i__35413_36237 < count__35412_36236)){
var child_36238 = chunk__35411_36235.cljs$core$IIndexed$_nth$arity$2(null,i__35413_36237);
if(cljs.core.truth_(child_36238)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36238);


var G__36239 = seq__35409_36234;
var G__36240 = chunk__35411_36235;
var G__36241 = count__35412_36236;
var G__36242 = (i__35413_36237 + (1));
seq__35409_36234 = G__36239;
chunk__35411_36235 = G__36240;
count__35412_36236 = G__36241;
i__35413_36237 = G__36242;
continue;
} else {
var G__36244 = seq__35409_36234;
var G__36245 = chunk__35411_36235;
var G__36246 = count__35412_36236;
var G__36247 = (i__35413_36237 + (1));
seq__35409_36234 = G__36244;
chunk__35411_36235 = G__36245;
count__35412_36236 = G__36246;
i__35413_36237 = G__36247;
continue;
}
} else {
var temp__5753__auto___36248__$1 = cljs.core.seq(seq__35409_36234);
if(temp__5753__auto___36248__$1){
var seq__35409_36249__$1 = temp__5753__auto___36248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35409_36249__$1)){
var c__4679__auto___36250 = cljs.core.chunk_first(seq__35409_36249__$1);
var G__36251 = cljs.core.chunk_rest(seq__35409_36249__$1);
var G__36252 = c__4679__auto___36250;
var G__36253 = cljs.core.count(c__4679__auto___36250);
var G__36254 = (0);
seq__35409_36234 = G__36251;
chunk__35411_36235 = G__36252;
count__35412_36236 = G__36253;
i__35413_36237 = G__36254;
continue;
} else {
var child_36255 = cljs.core.first(seq__35409_36249__$1);
if(cljs.core.truth_(child_36255)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36255);


var G__36256 = cljs.core.next(seq__35409_36249__$1);
var G__36257 = null;
var G__36258 = (0);
var G__36259 = (0);
seq__35409_36234 = G__36256;
chunk__35411_36235 = G__36257;
count__35412_36236 = G__36258;
i__35413_36237 = G__36259;
continue;
} else {
var G__36260 = cljs.core.next(seq__35409_36249__$1);
var G__36261 = null;
var G__36262 = (0);
var G__36263 = (0);
seq__35409_36234 = G__36260;
chunk__35411_36235 = G__36261;
count__35412_36236 = G__36262;
i__35413_36237 = G__36263;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36233);
}


var G__36264 = cljs.core.next(seq__35253_36226__$1);
var G__36265 = null;
var G__36266 = (0);
var G__36267 = (0);
seq__35253_36185 = G__36264;
chunk__35254_36186 = G__36265;
count__35255_36187 = G__36266;
i__35256_36188 = G__36267;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35499 = cljs.core.seq(node);
var chunk__35500 = null;
var count__35501 = (0);
var i__35502 = (0);
while(true){
if((i__35502 < count__35501)){
var n = chunk__35500.cljs$core$IIndexed$_nth$arity$2(null,i__35502);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36272 = seq__35499;
var G__36273 = chunk__35500;
var G__36274 = count__35501;
var G__36275 = (i__35502 + (1));
seq__35499 = G__36272;
chunk__35500 = G__36273;
count__35501 = G__36274;
i__35502 = G__36275;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35499);
if(temp__5753__auto__){
var seq__35499__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35499__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35499__$1);
var G__36280 = cljs.core.chunk_rest(seq__35499__$1);
var G__36281 = c__4679__auto__;
var G__36282 = cljs.core.count(c__4679__auto__);
var G__36283 = (0);
seq__35499 = G__36280;
chunk__35500 = G__36281;
count__35501 = G__36282;
i__35502 = G__36283;
continue;
} else {
var n = cljs.core.first(seq__35499__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36287 = cljs.core.next(seq__35499__$1);
var G__36288 = null;
var G__36289 = (0);
var G__36290 = (0);
seq__35499 = G__36287;
chunk__35500 = G__36288;
count__35501 = G__36289;
i__35502 = G__36290;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35531 = arguments.length;
switch (G__35531) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35549 = arguments.length;
switch (G__35549) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35578 = arguments.length;
switch (G__35578) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36295 = arguments.length;
var i__4865__auto___36296 = (0);
while(true){
if((i__4865__auto___36296 < len__4864__auto___36295)){
args__4870__auto__.push((arguments[i__4865__auto___36296]));

var G__36297 = (i__4865__auto___36296 + (1));
i__4865__auto___36296 = G__36297;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35595_36298 = cljs.core.seq(nodes);
var chunk__35596_36299 = null;
var count__35597_36300 = (0);
var i__35598_36301 = (0);
while(true){
if((i__35598_36301 < count__35597_36300)){
var node_36302 = chunk__35596_36299.cljs$core$IIndexed$_nth$arity$2(null,i__35598_36301);
fragment.appendChild(shadow.dom._to_dom(node_36302));


var G__36304 = seq__35595_36298;
var G__36305 = chunk__35596_36299;
var G__36306 = count__35597_36300;
var G__36307 = (i__35598_36301 + (1));
seq__35595_36298 = G__36304;
chunk__35596_36299 = G__36305;
count__35597_36300 = G__36306;
i__35598_36301 = G__36307;
continue;
} else {
var temp__5753__auto___36309 = cljs.core.seq(seq__35595_36298);
if(temp__5753__auto___36309){
var seq__35595_36310__$1 = temp__5753__auto___36309;
if(cljs.core.chunked_seq_QMARK_(seq__35595_36310__$1)){
var c__4679__auto___36312 = cljs.core.chunk_first(seq__35595_36310__$1);
var G__36313 = cljs.core.chunk_rest(seq__35595_36310__$1);
var G__36314 = c__4679__auto___36312;
var G__36315 = cljs.core.count(c__4679__auto___36312);
var G__36316 = (0);
seq__35595_36298 = G__36313;
chunk__35596_36299 = G__36314;
count__35597_36300 = G__36315;
i__35598_36301 = G__36316;
continue;
} else {
var node_36317 = cljs.core.first(seq__35595_36310__$1);
fragment.appendChild(shadow.dom._to_dom(node_36317));


var G__36318 = cljs.core.next(seq__35595_36310__$1);
var G__36319 = null;
var G__36320 = (0);
var G__36321 = (0);
seq__35595_36298 = G__36318;
chunk__35596_36299 = G__36319;
count__35597_36300 = G__36320;
i__35598_36301 = G__36321;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35589){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35589));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35621_36323 = cljs.core.seq(scripts);
var chunk__35622_36324 = null;
var count__35623_36325 = (0);
var i__35624_36326 = (0);
while(true){
if((i__35624_36326 < count__35623_36325)){
var vec__35646_36328 = chunk__35622_36324.cljs$core$IIndexed$_nth$arity$2(null,i__35624_36326);
var script_tag_36329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35646_36328,(0),null);
var script_body_36330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35646_36328,(1),null);
eval(script_body_36330);


var G__36332 = seq__35621_36323;
var G__36333 = chunk__35622_36324;
var G__36334 = count__35623_36325;
var G__36335 = (i__35624_36326 + (1));
seq__35621_36323 = G__36332;
chunk__35622_36324 = G__36333;
count__35623_36325 = G__36334;
i__35624_36326 = G__36335;
continue;
} else {
var temp__5753__auto___36336 = cljs.core.seq(seq__35621_36323);
if(temp__5753__auto___36336){
var seq__35621_36337__$1 = temp__5753__auto___36336;
if(cljs.core.chunked_seq_QMARK_(seq__35621_36337__$1)){
var c__4679__auto___36339 = cljs.core.chunk_first(seq__35621_36337__$1);
var G__36340 = cljs.core.chunk_rest(seq__35621_36337__$1);
var G__36341 = c__4679__auto___36339;
var G__36342 = cljs.core.count(c__4679__auto___36339);
var G__36343 = (0);
seq__35621_36323 = G__36340;
chunk__35622_36324 = G__36341;
count__35623_36325 = G__36342;
i__35624_36326 = G__36343;
continue;
} else {
var vec__35656_36344 = cljs.core.first(seq__35621_36337__$1);
var script_tag_36345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656_36344,(0),null);
var script_body_36346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656_36344,(1),null);
eval(script_body_36346);


var G__36348 = cljs.core.next(seq__35621_36337__$1);
var G__36349 = null;
var G__36350 = (0);
var G__36351 = (0);
seq__35621_36323 = G__36348;
chunk__35622_36324 = G__36349;
count__35623_36325 = G__36350;
i__35624_36326 = G__36351;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35664){
var vec__35667 = p__35664;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35667,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35686 = arguments.length;
switch (G__35686) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35714 = cljs.core.seq(style_keys);
var chunk__35715 = null;
var count__35716 = (0);
var i__35717 = (0);
while(true){
if((i__35717 < count__35716)){
var it = chunk__35715.cljs$core$IIndexed$_nth$arity$2(null,i__35717);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36354 = seq__35714;
var G__36355 = chunk__35715;
var G__36356 = count__35716;
var G__36357 = (i__35717 + (1));
seq__35714 = G__36354;
chunk__35715 = G__36355;
count__35716 = G__36356;
i__35717 = G__36357;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35714);
if(temp__5753__auto__){
var seq__35714__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35714__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35714__$1);
var G__36359 = cljs.core.chunk_rest(seq__35714__$1);
var G__36360 = c__4679__auto__;
var G__36361 = cljs.core.count(c__4679__auto__);
var G__36362 = (0);
seq__35714 = G__36359;
chunk__35715 = G__36360;
count__35716 = G__36361;
i__35717 = G__36362;
continue;
} else {
var it = cljs.core.first(seq__35714__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36363 = cljs.core.next(seq__35714__$1);
var G__36364 = null;
var G__36365 = (0);
var G__36366 = (0);
seq__35714 = G__36363;
chunk__35715 = G__36364;
count__35716 = G__36365;
i__35717 = G__36366;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35730,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35745 = k35730;
var G__35745__$1 = (((G__35745 instanceof cljs.core.Keyword))?G__35745.fqn:null);
switch (G__35745__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35730,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35752){
var vec__35754 = p__35752;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35729){
var self__ = this;
var G__35729__$1 = this;
return (new cljs.core.RecordIter((0),G__35729__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35731,other35732){
var self__ = this;
var this35731__$1 = this;
return (((!((other35732 == null)))) && ((((this35731__$1.constructor === other35732.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35731__$1.x,other35732.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35731__$1.y,other35732.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35731__$1.__extmap,other35732.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35730){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35778 = k35730;
var G__35778__$1 = (((G__35778 instanceof cljs.core.Keyword))?G__35778.fqn:null);
switch (G__35778__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35730);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35729){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35779 = cljs.core.keyword_identical_QMARK_;
var expr__35780 = k__4511__auto__;
if(cljs.core.truth_((pred__35779.cljs$core$IFn$_invoke$arity$2 ? pred__35779.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35780) : pred__35779.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35780)))){
return (new shadow.dom.Coordinate(G__35729,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35779.cljs$core$IFn$_invoke$arity$2 ? pred__35779.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35780) : pred__35779.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35780)))){
return (new shadow.dom.Coordinate(self__.x,G__35729,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35729),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35729){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35729,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35734){
var extmap__4542__auto__ = (function (){var G__35782 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35734,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35734)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35782);
} else {
return G__35782;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35734),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35734),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35797,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35803 = k35797;
var G__35803__$1 = (((G__35803 instanceof cljs.core.Keyword))?G__35803.fqn:null);
switch (G__35803__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35797,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35805){
var vec__35807 = p__35805;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35807,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35807,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35796){
var self__ = this;
var G__35796__$1 = this;
return (new cljs.core.RecordIter((0),G__35796__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35798,other35799){
var self__ = this;
var this35798__$1 = this;
return (((!((other35799 == null)))) && ((((this35798__$1.constructor === other35799.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35798__$1.w,other35799.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35798__$1.h,other35799.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35798__$1.__extmap,other35799.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35797){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35818 = k35797;
var G__35818__$1 = (((G__35818 instanceof cljs.core.Keyword))?G__35818.fqn:null);
switch (G__35818__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35797);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35796){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35820 = cljs.core.keyword_identical_QMARK_;
var expr__35821 = k__4511__auto__;
if(cljs.core.truth_((pred__35820.cljs$core$IFn$_invoke$arity$2 ? pred__35820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35821) : pred__35820.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35821)))){
return (new shadow.dom.Size(G__35796,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35820.cljs$core$IFn$_invoke$arity$2 ? pred__35820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35821) : pred__35820.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35821)))){
return (new shadow.dom.Size(self__.w,G__35796,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35796),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35796){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35796,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35800){
var extmap__4542__auto__ = (function (){var G__35835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35800,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35800)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35835);
} else {
return G__35835;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35800),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35800),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36405 = (i + (1));
var G__36406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36405;
ret = G__36406;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35851){
var vec__35855 = p__35851;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35855,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35860 = arguments.length;
switch (G__35860) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36413 = ps;
var G__36414 = (i + (1));
el__$1 = G__36413;
i = G__36414;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35870 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35875_36417 = cljs.core.seq(props);
var chunk__35876_36418 = null;
var count__35877_36419 = (0);
var i__35878_36420 = (0);
while(true){
if((i__35878_36420 < count__35877_36419)){
var vec__35898_36421 = chunk__35876_36418.cljs$core$IIndexed$_nth$arity$2(null,i__35878_36420);
var k_36422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898_36421,(0),null);
var v_36423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898_36421,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36422);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36422),v_36423);


var G__36425 = seq__35875_36417;
var G__36426 = chunk__35876_36418;
var G__36427 = count__35877_36419;
var G__36428 = (i__35878_36420 + (1));
seq__35875_36417 = G__36425;
chunk__35876_36418 = G__36426;
count__35877_36419 = G__36427;
i__35878_36420 = G__36428;
continue;
} else {
var temp__5753__auto___36429 = cljs.core.seq(seq__35875_36417);
if(temp__5753__auto___36429){
var seq__35875_36430__$1 = temp__5753__auto___36429;
if(cljs.core.chunked_seq_QMARK_(seq__35875_36430__$1)){
var c__4679__auto___36431 = cljs.core.chunk_first(seq__35875_36430__$1);
var G__36432 = cljs.core.chunk_rest(seq__35875_36430__$1);
var G__36433 = c__4679__auto___36431;
var G__36434 = cljs.core.count(c__4679__auto___36431);
var G__36435 = (0);
seq__35875_36417 = G__36432;
chunk__35876_36418 = G__36433;
count__35877_36419 = G__36434;
i__35878_36420 = G__36435;
continue;
} else {
var vec__35908_36436 = cljs.core.first(seq__35875_36430__$1);
var k_36437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35908_36436,(0),null);
var v_36438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35908_36436,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36437);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36437),v_36438);


var G__36440 = cljs.core.next(seq__35875_36430__$1);
var G__36441 = null;
var G__36442 = (0);
var G__36443 = (0);
seq__35875_36417 = G__36440;
chunk__35876_36418 = G__36441;
count__35877_36419 = G__36442;
i__35878_36420 = G__36443;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35927 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35927,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35927,(1),null);
var seq__35932_36445 = cljs.core.seq(node_children);
var chunk__35934_36446 = null;
var count__35935_36447 = (0);
var i__35936_36448 = (0);
while(true){
if((i__35936_36448 < count__35935_36447)){
var child_struct_36450 = chunk__35934_36446.cljs$core$IIndexed$_nth$arity$2(null,i__35936_36448);
if((!((child_struct_36450 == null)))){
if(typeof child_struct_36450 === 'string'){
var text_36452 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36452),child_struct_36450].join(''));
} else {
var children_36453 = shadow.dom.svg_node(child_struct_36450);
if(cljs.core.seq_QMARK_(children_36453)){
var seq__35967_36454 = cljs.core.seq(children_36453);
var chunk__35969_36455 = null;
var count__35970_36456 = (0);
var i__35971_36457 = (0);
while(true){
if((i__35971_36457 < count__35970_36456)){
var child_36458 = chunk__35969_36455.cljs$core$IIndexed$_nth$arity$2(null,i__35971_36457);
if(cljs.core.truth_(child_36458)){
node.appendChild(child_36458);


var G__36459 = seq__35967_36454;
var G__36460 = chunk__35969_36455;
var G__36461 = count__35970_36456;
var G__36462 = (i__35971_36457 + (1));
seq__35967_36454 = G__36459;
chunk__35969_36455 = G__36460;
count__35970_36456 = G__36461;
i__35971_36457 = G__36462;
continue;
} else {
var G__36467 = seq__35967_36454;
var G__36468 = chunk__35969_36455;
var G__36469 = count__35970_36456;
var G__36470 = (i__35971_36457 + (1));
seq__35967_36454 = G__36467;
chunk__35969_36455 = G__36468;
count__35970_36456 = G__36469;
i__35971_36457 = G__36470;
continue;
}
} else {
var temp__5753__auto___36472 = cljs.core.seq(seq__35967_36454);
if(temp__5753__auto___36472){
var seq__35967_36474__$1 = temp__5753__auto___36472;
if(cljs.core.chunked_seq_QMARK_(seq__35967_36474__$1)){
var c__4679__auto___36475 = cljs.core.chunk_first(seq__35967_36474__$1);
var G__36476 = cljs.core.chunk_rest(seq__35967_36474__$1);
var G__36477 = c__4679__auto___36475;
var G__36478 = cljs.core.count(c__4679__auto___36475);
var G__36479 = (0);
seq__35967_36454 = G__36476;
chunk__35969_36455 = G__36477;
count__35970_36456 = G__36478;
i__35971_36457 = G__36479;
continue;
} else {
var child_36480 = cljs.core.first(seq__35967_36474__$1);
if(cljs.core.truth_(child_36480)){
node.appendChild(child_36480);


var G__36481 = cljs.core.next(seq__35967_36474__$1);
var G__36482 = null;
var G__36483 = (0);
var G__36484 = (0);
seq__35967_36454 = G__36481;
chunk__35969_36455 = G__36482;
count__35970_36456 = G__36483;
i__35971_36457 = G__36484;
continue;
} else {
var G__36485 = cljs.core.next(seq__35967_36474__$1);
var G__36486 = null;
var G__36487 = (0);
var G__36488 = (0);
seq__35967_36454 = G__36485;
chunk__35969_36455 = G__36486;
count__35970_36456 = G__36487;
i__35971_36457 = G__36488;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36453);
}
}


var G__36489 = seq__35932_36445;
var G__36490 = chunk__35934_36446;
var G__36491 = count__35935_36447;
var G__36492 = (i__35936_36448 + (1));
seq__35932_36445 = G__36489;
chunk__35934_36446 = G__36490;
count__35935_36447 = G__36491;
i__35936_36448 = G__36492;
continue;
} else {
var G__36493 = seq__35932_36445;
var G__36494 = chunk__35934_36446;
var G__36495 = count__35935_36447;
var G__36496 = (i__35936_36448 + (1));
seq__35932_36445 = G__36493;
chunk__35934_36446 = G__36494;
count__35935_36447 = G__36495;
i__35936_36448 = G__36496;
continue;
}
} else {
var temp__5753__auto___36497 = cljs.core.seq(seq__35932_36445);
if(temp__5753__auto___36497){
var seq__35932_36498__$1 = temp__5753__auto___36497;
if(cljs.core.chunked_seq_QMARK_(seq__35932_36498__$1)){
var c__4679__auto___36499 = cljs.core.chunk_first(seq__35932_36498__$1);
var G__36501 = cljs.core.chunk_rest(seq__35932_36498__$1);
var G__36502 = c__4679__auto___36499;
var G__36503 = cljs.core.count(c__4679__auto___36499);
var G__36504 = (0);
seq__35932_36445 = G__36501;
chunk__35934_36446 = G__36502;
count__35935_36447 = G__36503;
i__35936_36448 = G__36504;
continue;
} else {
var child_struct_36505 = cljs.core.first(seq__35932_36498__$1);
if((!((child_struct_36505 == null)))){
if(typeof child_struct_36505 === 'string'){
var text_36507 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36507),child_struct_36505].join(''));
} else {
var children_36508 = shadow.dom.svg_node(child_struct_36505);
if(cljs.core.seq_QMARK_(children_36508)){
var seq__35984_36509 = cljs.core.seq(children_36508);
var chunk__35986_36510 = null;
var count__35987_36511 = (0);
var i__35988_36512 = (0);
while(true){
if((i__35988_36512 < count__35987_36511)){
var child_36513 = chunk__35986_36510.cljs$core$IIndexed$_nth$arity$2(null,i__35988_36512);
if(cljs.core.truth_(child_36513)){
node.appendChild(child_36513);


var G__36514 = seq__35984_36509;
var G__36515 = chunk__35986_36510;
var G__36516 = count__35987_36511;
var G__36517 = (i__35988_36512 + (1));
seq__35984_36509 = G__36514;
chunk__35986_36510 = G__36515;
count__35987_36511 = G__36516;
i__35988_36512 = G__36517;
continue;
} else {
var G__36518 = seq__35984_36509;
var G__36519 = chunk__35986_36510;
var G__36520 = count__35987_36511;
var G__36521 = (i__35988_36512 + (1));
seq__35984_36509 = G__36518;
chunk__35986_36510 = G__36519;
count__35987_36511 = G__36520;
i__35988_36512 = G__36521;
continue;
}
} else {
var temp__5753__auto___36522__$1 = cljs.core.seq(seq__35984_36509);
if(temp__5753__auto___36522__$1){
var seq__35984_36523__$1 = temp__5753__auto___36522__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35984_36523__$1)){
var c__4679__auto___36524 = cljs.core.chunk_first(seq__35984_36523__$1);
var G__36525 = cljs.core.chunk_rest(seq__35984_36523__$1);
var G__36526 = c__4679__auto___36524;
var G__36527 = cljs.core.count(c__4679__auto___36524);
var G__36528 = (0);
seq__35984_36509 = G__36525;
chunk__35986_36510 = G__36526;
count__35987_36511 = G__36527;
i__35988_36512 = G__36528;
continue;
} else {
var child_36529 = cljs.core.first(seq__35984_36523__$1);
if(cljs.core.truth_(child_36529)){
node.appendChild(child_36529);


var G__36530 = cljs.core.next(seq__35984_36523__$1);
var G__36531 = null;
var G__36532 = (0);
var G__36533 = (0);
seq__35984_36509 = G__36530;
chunk__35986_36510 = G__36531;
count__35987_36511 = G__36532;
i__35988_36512 = G__36533;
continue;
} else {
var G__36534 = cljs.core.next(seq__35984_36523__$1);
var G__36535 = null;
var G__36536 = (0);
var G__36537 = (0);
seq__35984_36509 = G__36534;
chunk__35986_36510 = G__36535;
count__35987_36511 = G__36536;
i__35988_36512 = G__36537;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36508);
}
}


var G__36538 = cljs.core.next(seq__35932_36498__$1);
var G__36539 = null;
var G__36540 = (0);
var G__36541 = (0);
seq__35932_36445 = G__36538;
chunk__35934_36446 = G__36539;
count__35935_36447 = G__36540;
i__35936_36448 = G__36541;
continue;
} else {
var G__36542 = cljs.core.next(seq__35932_36498__$1);
var G__36543 = null;
var G__36544 = (0);
var G__36545 = (0);
seq__35932_36445 = G__36542;
chunk__35934_36446 = G__36543;
count__35935_36447 = G__36544;
i__35936_36448 = G__36545;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36546 = arguments.length;
var i__4865__auto___36547 = (0);
while(true){
if((i__4865__auto___36547 < len__4864__auto___36546)){
args__4870__auto__.push((arguments[i__4865__auto___36547]));

var G__36548 = (i__4865__auto___36547 + (1));
i__4865__auto___36547 = G__36548;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35994){
var G__35995 = cljs.core.first(seq35994);
var seq35994__$1 = cljs.core.next(seq35994);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35995,seq35994__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35997 = arguments.length;
switch (G__35997) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32513__auto___36558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_36002){
var state_val_36003 = (state_36002[(1)]);
if((state_val_36003 === (1))){
var state_36002__$1 = state_36002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36002__$1,(2),once_or_cleanup);
} else {
if((state_val_36003 === (2))){
var inst_35999 = (state_36002[(2)]);
var inst_36000 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36002__$1 = (function (){var statearr_36004 = state_36002;
(statearr_36004[(7)] = inst_35999);

return statearr_36004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36002__$1,inst_36000);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31973__auto__ = null;
var shadow$dom$state_machine__31973__auto____0 = (function (){
var statearr_36005 = [null,null,null,null,null,null,null,null];
(statearr_36005[(0)] = shadow$dom$state_machine__31973__auto__);

(statearr_36005[(1)] = (1));

return statearr_36005;
});
var shadow$dom$state_machine__31973__auto____1 = (function (state_36002){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_36002);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e36006){var ex__31976__auto__ = e36006;
var statearr_36007_36560 = state_36002;
(statearr_36007_36560[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_36002[(4)]))){
var statearr_36008_36561 = state_36002;
(statearr_36008_36561[(1)] = cljs.core.first((state_36002[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36562 = state_36002;
state_36002 = G__36562;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
shadow$dom$state_machine__31973__auto__ = function(state_36002){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31973__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31973__auto____1.call(this,state_36002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31973__auto____0;
shadow$dom$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31973__auto____1;
return shadow$dom$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_36009 = f__32514__auto__();
(statearr_36009[(6)] = c__32513__auto___36558);

return statearr_36009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
