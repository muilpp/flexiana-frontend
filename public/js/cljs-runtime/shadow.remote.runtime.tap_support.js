goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35867,p__35868){
var map__35873 = p__35867;
var map__35873__$1 = cljs.core.__destructure_map(map__35873);
var svc = map__35873__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35874 = p__35868;
var map__35874__$1 = cljs.core.__destructure_map(map__35874);
var msg = map__35874__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35874__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35874__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35874__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35874__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35891,p__35892){
var map__35893 = p__35891;
var map__35893__$1 = cljs.core.__destructure_map(map__35893);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35894 = p__35892;
var map__35894__$1 = cljs.core.__destructure_map(map__35894);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35894__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35902,p__35903){
var map__35905 = p__35902;
var map__35905__$1 = cljs.core.__destructure_map(map__35905);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35906 = p__35903;
var map__35906__$1 = cljs.core.__destructure_map(map__35906);
var msg = map__35906__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35906__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35911,tid){
var map__35912 = p__35911;
var map__35912__$1 = cljs.core.__destructure_map(map__35912);
var svc = map__35912__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35923 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35924 = null;
var count__35925 = (0);
var i__35926 = (0);
while(true){
if((i__35926 < count__35925)){
var vec__35952 = chunk__35924.cljs$core$IIndexed$_nth$arity$2(null,i__35926);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35973 = seq__35923;
var G__35974 = chunk__35924;
var G__35975 = count__35925;
var G__35976 = (i__35926 + (1));
seq__35923 = G__35973;
chunk__35924 = G__35974;
count__35925 = G__35975;
i__35926 = G__35976;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35923);
if(temp__5753__auto__){
var seq__35923__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35923__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35923__$1);
var G__35977 = cljs.core.chunk_rest(seq__35923__$1);
var G__35978 = c__4679__auto__;
var G__35979 = cljs.core.count(c__4679__auto__);
var G__35980 = (0);
seq__35923 = G__35977;
chunk__35924 = G__35978;
count__35925 = G__35979;
i__35926 = G__35980;
continue;
} else {
var vec__35955 = cljs.core.first(seq__35923__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35990 = cljs.core.next(seq__35923__$1);
var G__35991 = null;
var G__35992 = (0);
var G__35993 = (0);
seq__35923 = G__35990;
chunk__35924 = G__35991;
count__35925 = G__35992;
i__35926 = G__35993;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35913_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35913_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35914_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35914_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35917_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35917_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35918_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35918_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35965){
var map__35966 = p__35965;
var map__35966__$1 = cljs.core.__destructure_map(map__35966);
var svc = map__35966__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35966__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35966__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
