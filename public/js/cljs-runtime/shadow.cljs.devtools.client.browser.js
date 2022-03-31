goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37943 = arguments.length;
var i__4865__auto___37944 = (0);
while(true){
if((i__4865__auto___37944 < len__4864__auto___37943)){
args__4870__auto__.push((arguments[i__4865__auto___37944]));

var G__37945 = (i__4865__auto___37944 + (1));
i__4865__auto___37944 = G__37945;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37532){
var G__37533 = cljs.core.first(seq37532);
var seq37532__$1 = cljs.core.next(seq37532);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37533,seq37532__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37557 = cljs.core.seq(sources);
var chunk__37558 = null;
var count__37559 = (0);
var i__37560 = (0);
while(true){
if((i__37560 < count__37559)){
var map__37598 = chunk__37558.cljs$core$IIndexed$_nth$arity$2(null,i__37560);
var map__37598__$1 = cljs.core.__destructure_map(map__37598);
var src = map__37598__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37599){var e_37946 = e37599;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37946);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37946.message)].join('')));
}

var G__37947 = seq__37557;
var G__37948 = chunk__37558;
var G__37949 = count__37559;
var G__37950 = (i__37560 + (1));
seq__37557 = G__37947;
chunk__37558 = G__37948;
count__37559 = G__37949;
i__37560 = G__37950;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37557);
if(temp__5753__auto__){
var seq__37557__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37557__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37557__$1);
var G__37951 = cljs.core.chunk_rest(seq__37557__$1);
var G__37952 = c__4679__auto__;
var G__37953 = cljs.core.count(c__4679__auto__);
var G__37954 = (0);
seq__37557 = G__37951;
chunk__37558 = G__37952;
count__37559 = G__37953;
i__37560 = G__37954;
continue;
} else {
var map__37600 = cljs.core.first(seq__37557__$1);
var map__37600__$1 = cljs.core.__destructure_map(map__37600);
var src = map__37600__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37602){var e_37955 = e37602;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37955);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37955.message)].join('')));
}

var G__37956 = cljs.core.next(seq__37557__$1);
var G__37957 = null;
var G__37958 = (0);
var G__37959 = (0);
seq__37557 = G__37956;
chunk__37558 = G__37957;
count__37559 = G__37958;
i__37560 = G__37959;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37606 = cljs.core.seq(js_requires);
var chunk__37607 = null;
var count__37608 = (0);
var i__37609 = (0);
while(true){
if((i__37609 < count__37608)){
var js_ns = chunk__37607.cljs$core$IIndexed$_nth$arity$2(null,i__37609);
var require_str_37960 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37960);


var G__37961 = seq__37606;
var G__37962 = chunk__37607;
var G__37963 = count__37608;
var G__37964 = (i__37609 + (1));
seq__37606 = G__37961;
chunk__37607 = G__37962;
count__37608 = G__37963;
i__37609 = G__37964;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37606);
if(temp__5753__auto__){
var seq__37606__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37606__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37606__$1);
var G__37965 = cljs.core.chunk_rest(seq__37606__$1);
var G__37966 = c__4679__auto__;
var G__37967 = cljs.core.count(c__4679__auto__);
var G__37968 = (0);
seq__37606 = G__37965;
chunk__37607 = G__37966;
count__37608 = G__37967;
i__37609 = G__37968;
continue;
} else {
var js_ns = cljs.core.first(seq__37606__$1);
var require_str_37969 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37969);


var G__37970 = cljs.core.next(seq__37606__$1);
var G__37971 = null;
var G__37972 = (0);
var G__37973 = (0);
seq__37606 = G__37970;
chunk__37607 = G__37971;
count__37608 = G__37972;
i__37609 = G__37973;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37611){
var map__37612 = p__37611;
var map__37612__$1 = cljs.core.__destructure_map(map__37612);
var msg = map__37612__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37612__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37612__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37613(s__37614){
return (new cljs.core.LazySeq(null,(function (){
var s__37614__$1 = s__37614;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37614__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37619 = cljs.core.first(xs__6308__auto__);
var map__37619__$1 = cljs.core.__destructure_map(map__37619);
var src = map__37619__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37619__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37619__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37614__$1,map__37619,map__37619__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37612,map__37612__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37613_$_iter__37615(s__37616){
return (new cljs.core.LazySeq(null,((function (s__37614__$1,map__37619,map__37619__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37612,map__37612__$1,msg,info,reload_info){
return (function (){
var s__37616__$1 = s__37616;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37616__$1);
if(temp__5753__auto____$1){
var s__37616__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37616__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37616__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37618 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37617 = (0);
while(true){
if((i__37617 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37617);
cljs.core.chunk_append(b__37618,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37974 = (i__37617 + (1));
i__37617 = G__37974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37618),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37613_$_iter__37615(cljs.core.chunk_rest(s__37616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37618),null);
}
} else {
var warning = cljs.core.first(s__37616__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37613_$_iter__37615(cljs.core.rest(s__37616__$2)));
}
} else {
return null;
}
break;
}
});})(s__37614__$1,map__37619,map__37619__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37612,map__37612__$1,msg,info,reload_info))
,null,null));
});})(s__37614__$1,map__37619,map__37619__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37612,map__37612__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37613(cljs.core.rest(s__37614__$1)));
} else {
var G__37975 = cljs.core.rest(s__37614__$1);
s__37614__$1 = G__37975;
continue;
}
} else {
var G__37976 = cljs.core.rest(s__37614__$1);
s__37614__$1 = G__37976;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37622_37977 = cljs.core.seq(warnings);
var chunk__37623_37978 = null;
var count__37624_37979 = (0);
var i__37625_37980 = (0);
while(true){
if((i__37625_37980 < count__37624_37979)){
var map__37628_37981 = chunk__37623_37978.cljs$core$IIndexed$_nth$arity$2(null,i__37625_37980);
var map__37628_37982__$1 = cljs.core.__destructure_map(map__37628_37981);
var w_37983 = map__37628_37982__$1;
var msg_37984__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37628_37982__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37628_37982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37628_37982__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37628_37982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37987)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37985),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37986),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37984__$1)].join(''));


var G__37988 = seq__37622_37977;
var G__37989 = chunk__37623_37978;
var G__37990 = count__37624_37979;
var G__37991 = (i__37625_37980 + (1));
seq__37622_37977 = G__37988;
chunk__37623_37978 = G__37989;
count__37624_37979 = G__37990;
i__37625_37980 = G__37991;
continue;
} else {
var temp__5753__auto___37992 = cljs.core.seq(seq__37622_37977);
if(temp__5753__auto___37992){
var seq__37622_37993__$1 = temp__5753__auto___37992;
if(cljs.core.chunked_seq_QMARK_(seq__37622_37993__$1)){
var c__4679__auto___37994 = cljs.core.chunk_first(seq__37622_37993__$1);
var G__37995 = cljs.core.chunk_rest(seq__37622_37993__$1);
var G__37996 = c__4679__auto___37994;
var G__37997 = cljs.core.count(c__4679__auto___37994);
var G__37998 = (0);
seq__37622_37977 = G__37995;
chunk__37623_37978 = G__37996;
count__37624_37979 = G__37997;
i__37625_37980 = G__37998;
continue;
} else {
var map__37629_37999 = cljs.core.first(seq__37622_37993__$1);
var map__37629_38000__$1 = cljs.core.__destructure_map(map__37629_37999);
var w_38001 = map__37629_38000__$1;
var msg_38002__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629_38000__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629_38000__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629_38000__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629_38000__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38005)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38003),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38004),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38002__$1)].join(''));


var G__38006 = cljs.core.next(seq__37622_37993__$1);
var G__38007 = null;
var G__38008 = (0);
var G__38009 = (0);
seq__37622_37977 = G__38006;
chunk__37623_37978 = G__38007;
count__37624_37979 = G__38008;
i__37625_37980 = G__38009;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37610_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37610_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37635){
var map__37636 = p__37635;
var map__37636__$1 = cljs.core.__destructure_map(map__37636);
var msg = map__37636__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37641 = cljs.core.seq(updates);
var chunk__37644 = null;
var count__37645 = (0);
var i__37646 = (0);
while(true){
if((i__37646 < count__37645)){
var path = chunk__37644.cljs$core$IIndexed$_nth$arity$2(null,i__37646);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37807_38010 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37812_38011 = null;
var count__37813_38012 = (0);
var i__37814_38013 = (0);
while(true){
if((i__37814_38013 < count__37813_38012)){
var node_38014 = chunk__37812_38011.cljs$core$IIndexed$_nth$arity$2(null,i__37814_38013);
if(cljs.core.not(node_38014.shadow$old)){
var path_match_38015 = shadow.cljs.devtools.client.browser.match_paths(node_38014.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38015)){
var new_link_38016 = (function (){var G__37847 = node_38014.cloneNode(true);
G__37847.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38015),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37847;
})();
(node_38014.shadow$old = true);

(new_link_38016.onload = ((function (seq__37807_38010,chunk__37812_38011,count__37813_38012,i__37814_38013,seq__37641,chunk__37644,count__37645,i__37646,new_link_38016,path_match_38015,node_38014,path,map__37636,map__37636__$1,msg,updates,reload_info){
return (function (e){
var seq__37848_38017 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37850_38018 = null;
var count__37851_38019 = (0);
var i__37852_38020 = (0);
while(true){
if((i__37852_38020 < count__37851_38019)){
var map__37856_38021 = chunk__37850_38018.cljs$core$IIndexed$_nth$arity$2(null,i__37852_38020);
var map__37856_38022__$1 = cljs.core.__destructure_map(map__37856_38021);
var task_38023 = map__37856_38022__$1;
var fn_str_38024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37856_38022__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37856_38022__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38026 = goog.getObjectByName(fn_str_38024,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38025)].join(''));

(fn_obj_38026.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38026.cljs$core$IFn$_invoke$arity$2(path,new_link_38016) : fn_obj_38026.call(null,path,new_link_38016));


var G__38027 = seq__37848_38017;
var G__38028 = chunk__37850_38018;
var G__38029 = count__37851_38019;
var G__38030 = (i__37852_38020 + (1));
seq__37848_38017 = G__38027;
chunk__37850_38018 = G__38028;
count__37851_38019 = G__38029;
i__37852_38020 = G__38030;
continue;
} else {
var temp__5753__auto___38031 = cljs.core.seq(seq__37848_38017);
if(temp__5753__auto___38031){
var seq__37848_38032__$1 = temp__5753__auto___38031;
if(cljs.core.chunked_seq_QMARK_(seq__37848_38032__$1)){
var c__4679__auto___38033 = cljs.core.chunk_first(seq__37848_38032__$1);
var G__38034 = cljs.core.chunk_rest(seq__37848_38032__$1);
var G__38035 = c__4679__auto___38033;
var G__38036 = cljs.core.count(c__4679__auto___38033);
var G__38037 = (0);
seq__37848_38017 = G__38034;
chunk__37850_38018 = G__38035;
count__37851_38019 = G__38036;
i__37852_38020 = G__38037;
continue;
} else {
var map__37857_38038 = cljs.core.first(seq__37848_38032__$1);
var map__37857_38039__$1 = cljs.core.__destructure_map(map__37857_38038);
var task_38040 = map__37857_38039__$1;
var fn_str_38041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37857_38039__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37857_38039__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38043 = goog.getObjectByName(fn_str_38041,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38042)].join(''));

(fn_obj_38043.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38043.cljs$core$IFn$_invoke$arity$2(path,new_link_38016) : fn_obj_38043.call(null,path,new_link_38016));


var G__38044 = cljs.core.next(seq__37848_38032__$1);
var G__38045 = null;
var G__38046 = (0);
var G__38047 = (0);
seq__37848_38017 = G__38044;
chunk__37850_38018 = G__38045;
count__37851_38019 = G__38046;
i__37852_38020 = G__38047;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38014);
});})(seq__37807_38010,chunk__37812_38011,count__37813_38012,i__37814_38013,seq__37641,chunk__37644,count__37645,i__37646,new_link_38016,path_match_38015,node_38014,path,map__37636,map__37636__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38015], 0));

goog.dom.insertSiblingAfter(new_link_38016,node_38014);


var G__38048 = seq__37807_38010;
var G__38049 = chunk__37812_38011;
var G__38050 = count__37813_38012;
var G__38051 = (i__37814_38013 + (1));
seq__37807_38010 = G__38048;
chunk__37812_38011 = G__38049;
count__37813_38012 = G__38050;
i__37814_38013 = G__38051;
continue;
} else {
var G__38052 = seq__37807_38010;
var G__38053 = chunk__37812_38011;
var G__38054 = count__37813_38012;
var G__38055 = (i__37814_38013 + (1));
seq__37807_38010 = G__38052;
chunk__37812_38011 = G__38053;
count__37813_38012 = G__38054;
i__37814_38013 = G__38055;
continue;
}
} else {
var G__38056 = seq__37807_38010;
var G__38057 = chunk__37812_38011;
var G__38058 = count__37813_38012;
var G__38059 = (i__37814_38013 + (1));
seq__37807_38010 = G__38056;
chunk__37812_38011 = G__38057;
count__37813_38012 = G__38058;
i__37814_38013 = G__38059;
continue;
}
} else {
var temp__5753__auto___38060 = cljs.core.seq(seq__37807_38010);
if(temp__5753__auto___38060){
var seq__37807_38061__$1 = temp__5753__auto___38060;
if(cljs.core.chunked_seq_QMARK_(seq__37807_38061__$1)){
var c__4679__auto___38062 = cljs.core.chunk_first(seq__37807_38061__$1);
var G__38063 = cljs.core.chunk_rest(seq__37807_38061__$1);
var G__38064 = c__4679__auto___38062;
var G__38065 = cljs.core.count(c__4679__auto___38062);
var G__38066 = (0);
seq__37807_38010 = G__38063;
chunk__37812_38011 = G__38064;
count__37813_38012 = G__38065;
i__37814_38013 = G__38066;
continue;
} else {
var node_38067 = cljs.core.first(seq__37807_38061__$1);
if(cljs.core.not(node_38067.shadow$old)){
var path_match_38068 = shadow.cljs.devtools.client.browser.match_paths(node_38067.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38068)){
var new_link_38069 = (function (){var G__37858 = node_38067.cloneNode(true);
G__37858.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38068),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37858;
})();
(node_38067.shadow$old = true);

(new_link_38069.onload = ((function (seq__37807_38010,chunk__37812_38011,count__37813_38012,i__37814_38013,seq__37641,chunk__37644,count__37645,i__37646,new_link_38069,path_match_38068,node_38067,seq__37807_38061__$1,temp__5753__auto___38060,path,map__37636,map__37636__$1,msg,updates,reload_info){
return (function (e){
var seq__37859_38070 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37861_38071 = null;
var count__37862_38072 = (0);
var i__37863_38073 = (0);
while(true){
if((i__37863_38073 < count__37862_38072)){
var map__37867_38074 = chunk__37861_38071.cljs$core$IIndexed$_nth$arity$2(null,i__37863_38073);
var map__37867_38075__$1 = cljs.core.__destructure_map(map__37867_38074);
var task_38076 = map__37867_38075__$1;
var fn_str_38077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37867_38075__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37867_38075__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38079 = goog.getObjectByName(fn_str_38077,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38078)].join(''));

(fn_obj_38079.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38079.cljs$core$IFn$_invoke$arity$2(path,new_link_38069) : fn_obj_38079.call(null,path,new_link_38069));


var G__38080 = seq__37859_38070;
var G__38081 = chunk__37861_38071;
var G__38082 = count__37862_38072;
var G__38083 = (i__37863_38073 + (1));
seq__37859_38070 = G__38080;
chunk__37861_38071 = G__38081;
count__37862_38072 = G__38082;
i__37863_38073 = G__38083;
continue;
} else {
var temp__5753__auto___38084__$1 = cljs.core.seq(seq__37859_38070);
if(temp__5753__auto___38084__$1){
var seq__37859_38085__$1 = temp__5753__auto___38084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37859_38085__$1)){
var c__4679__auto___38086 = cljs.core.chunk_first(seq__37859_38085__$1);
var G__38087 = cljs.core.chunk_rest(seq__37859_38085__$1);
var G__38088 = c__4679__auto___38086;
var G__38089 = cljs.core.count(c__4679__auto___38086);
var G__38090 = (0);
seq__37859_38070 = G__38087;
chunk__37861_38071 = G__38088;
count__37862_38072 = G__38089;
i__37863_38073 = G__38090;
continue;
} else {
var map__37868_38091 = cljs.core.first(seq__37859_38085__$1);
var map__37868_38092__$1 = cljs.core.__destructure_map(map__37868_38091);
var task_38093 = map__37868_38092__$1;
var fn_str_38094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868_38092__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868_38092__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38096 = goog.getObjectByName(fn_str_38094,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38095)].join(''));

(fn_obj_38096.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38096.cljs$core$IFn$_invoke$arity$2(path,new_link_38069) : fn_obj_38096.call(null,path,new_link_38069));


var G__38097 = cljs.core.next(seq__37859_38085__$1);
var G__38098 = null;
var G__38099 = (0);
var G__38100 = (0);
seq__37859_38070 = G__38097;
chunk__37861_38071 = G__38098;
count__37862_38072 = G__38099;
i__37863_38073 = G__38100;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38067);
});})(seq__37807_38010,chunk__37812_38011,count__37813_38012,i__37814_38013,seq__37641,chunk__37644,count__37645,i__37646,new_link_38069,path_match_38068,node_38067,seq__37807_38061__$1,temp__5753__auto___38060,path,map__37636,map__37636__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38068], 0));

goog.dom.insertSiblingAfter(new_link_38069,node_38067);


var G__38101 = cljs.core.next(seq__37807_38061__$1);
var G__38102 = null;
var G__38103 = (0);
var G__38104 = (0);
seq__37807_38010 = G__38101;
chunk__37812_38011 = G__38102;
count__37813_38012 = G__38103;
i__37814_38013 = G__38104;
continue;
} else {
var G__38105 = cljs.core.next(seq__37807_38061__$1);
var G__38106 = null;
var G__38107 = (0);
var G__38108 = (0);
seq__37807_38010 = G__38105;
chunk__37812_38011 = G__38106;
count__37813_38012 = G__38107;
i__37814_38013 = G__38108;
continue;
}
} else {
var G__38109 = cljs.core.next(seq__37807_38061__$1);
var G__38110 = null;
var G__38111 = (0);
var G__38112 = (0);
seq__37807_38010 = G__38109;
chunk__37812_38011 = G__38110;
count__37813_38012 = G__38111;
i__37814_38013 = G__38112;
continue;
}
}
} else {
}
}
break;
}


var G__38113 = seq__37641;
var G__38114 = chunk__37644;
var G__38115 = count__37645;
var G__38116 = (i__37646 + (1));
seq__37641 = G__38113;
chunk__37644 = G__38114;
count__37645 = G__38115;
i__37646 = G__38116;
continue;
} else {
var G__38117 = seq__37641;
var G__38118 = chunk__37644;
var G__38119 = count__37645;
var G__38120 = (i__37646 + (1));
seq__37641 = G__38117;
chunk__37644 = G__38118;
count__37645 = G__38119;
i__37646 = G__38120;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37641);
if(temp__5753__auto__){
var seq__37641__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37641__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37641__$1);
var G__38121 = cljs.core.chunk_rest(seq__37641__$1);
var G__38122 = c__4679__auto__;
var G__38123 = cljs.core.count(c__4679__auto__);
var G__38124 = (0);
seq__37641 = G__38121;
chunk__37644 = G__38122;
count__37645 = G__38123;
i__37646 = G__38124;
continue;
} else {
var path = cljs.core.first(seq__37641__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37869_38125 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37873_38126 = null;
var count__37874_38127 = (0);
var i__37875_38128 = (0);
while(true){
if((i__37875_38128 < count__37874_38127)){
var node_38129 = chunk__37873_38126.cljs$core$IIndexed$_nth$arity$2(null,i__37875_38128);
if(cljs.core.not(node_38129.shadow$old)){
var path_match_38130 = shadow.cljs.devtools.client.browser.match_paths(node_38129.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38130)){
var new_link_38131 = (function (){var G__37901 = node_38129.cloneNode(true);
G__37901.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38130),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37901;
})();
(node_38129.shadow$old = true);

(new_link_38131.onload = ((function (seq__37869_38125,chunk__37873_38126,count__37874_38127,i__37875_38128,seq__37641,chunk__37644,count__37645,i__37646,new_link_38131,path_match_38130,node_38129,path,seq__37641__$1,temp__5753__auto__,map__37636,map__37636__$1,msg,updates,reload_info){
return (function (e){
var seq__37902_38132 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37904_38133 = null;
var count__37905_38134 = (0);
var i__37906_38135 = (0);
while(true){
if((i__37906_38135 < count__37905_38134)){
var map__37910_38136 = chunk__37904_38133.cljs$core$IIndexed$_nth$arity$2(null,i__37906_38135);
var map__37910_38137__$1 = cljs.core.__destructure_map(map__37910_38136);
var task_38138 = map__37910_38137__$1;
var fn_str_38139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37910_38137__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37910_38137__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38141 = goog.getObjectByName(fn_str_38139,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38140)].join(''));

(fn_obj_38141.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38141.cljs$core$IFn$_invoke$arity$2(path,new_link_38131) : fn_obj_38141.call(null,path,new_link_38131));


var G__38142 = seq__37902_38132;
var G__38143 = chunk__37904_38133;
var G__38144 = count__37905_38134;
var G__38145 = (i__37906_38135 + (1));
seq__37902_38132 = G__38142;
chunk__37904_38133 = G__38143;
count__37905_38134 = G__38144;
i__37906_38135 = G__38145;
continue;
} else {
var temp__5753__auto___38146__$1 = cljs.core.seq(seq__37902_38132);
if(temp__5753__auto___38146__$1){
var seq__37902_38147__$1 = temp__5753__auto___38146__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37902_38147__$1)){
var c__4679__auto___38148 = cljs.core.chunk_first(seq__37902_38147__$1);
var G__38149 = cljs.core.chunk_rest(seq__37902_38147__$1);
var G__38150 = c__4679__auto___38148;
var G__38151 = cljs.core.count(c__4679__auto___38148);
var G__38152 = (0);
seq__37902_38132 = G__38149;
chunk__37904_38133 = G__38150;
count__37905_38134 = G__38151;
i__37906_38135 = G__38152;
continue;
} else {
var map__37911_38153 = cljs.core.first(seq__37902_38147__$1);
var map__37911_38154__$1 = cljs.core.__destructure_map(map__37911_38153);
var task_38155 = map__37911_38154__$1;
var fn_str_38156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911_38154__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911_38154__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38158 = goog.getObjectByName(fn_str_38156,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38157)].join(''));

(fn_obj_38158.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38158.cljs$core$IFn$_invoke$arity$2(path,new_link_38131) : fn_obj_38158.call(null,path,new_link_38131));


var G__38159 = cljs.core.next(seq__37902_38147__$1);
var G__38160 = null;
var G__38161 = (0);
var G__38162 = (0);
seq__37902_38132 = G__38159;
chunk__37904_38133 = G__38160;
count__37905_38134 = G__38161;
i__37906_38135 = G__38162;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38129);
});})(seq__37869_38125,chunk__37873_38126,count__37874_38127,i__37875_38128,seq__37641,chunk__37644,count__37645,i__37646,new_link_38131,path_match_38130,node_38129,path,seq__37641__$1,temp__5753__auto__,map__37636,map__37636__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38130], 0));

goog.dom.insertSiblingAfter(new_link_38131,node_38129);


var G__38163 = seq__37869_38125;
var G__38164 = chunk__37873_38126;
var G__38165 = count__37874_38127;
var G__38166 = (i__37875_38128 + (1));
seq__37869_38125 = G__38163;
chunk__37873_38126 = G__38164;
count__37874_38127 = G__38165;
i__37875_38128 = G__38166;
continue;
} else {
var G__38167 = seq__37869_38125;
var G__38168 = chunk__37873_38126;
var G__38169 = count__37874_38127;
var G__38170 = (i__37875_38128 + (1));
seq__37869_38125 = G__38167;
chunk__37873_38126 = G__38168;
count__37874_38127 = G__38169;
i__37875_38128 = G__38170;
continue;
}
} else {
var G__38171 = seq__37869_38125;
var G__38172 = chunk__37873_38126;
var G__38173 = count__37874_38127;
var G__38174 = (i__37875_38128 + (1));
seq__37869_38125 = G__38171;
chunk__37873_38126 = G__38172;
count__37874_38127 = G__38173;
i__37875_38128 = G__38174;
continue;
}
} else {
var temp__5753__auto___38175__$1 = cljs.core.seq(seq__37869_38125);
if(temp__5753__auto___38175__$1){
var seq__37869_38176__$1 = temp__5753__auto___38175__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37869_38176__$1)){
var c__4679__auto___38177 = cljs.core.chunk_first(seq__37869_38176__$1);
var G__38178 = cljs.core.chunk_rest(seq__37869_38176__$1);
var G__38179 = c__4679__auto___38177;
var G__38180 = cljs.core.count(c__4679__auto___38177);
var G__38181 = (0);
seq__37869_38125 = G__38178;
chunk__37873_38126 = G__38179;
count__37874_38127 = G__38180;
i__37875_38128 = G__38181;
continue;
} else {
var node_38182 = cljs.core.first(seq__37869_38176__$1);
if(cljs.core.not(node_38182.shadow$old)){
var path_match_38183 = shadow.cljs.devtools.client.browser.match_paths(node_38182.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38183)){
var new_link_38184 = (function (){var G__37912 = node_38182.cloneNode(true);
G__37912.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38183),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37912;
})();
(node_38182.shadow$old = true);

(new_link_38184.onload = ((function (seq__37869_38125,chunk__37873_38126,count__37874_38127,i__37875_38128,seq__37641,chunk__37644,count__37645,i__37646,new_link_38184,path_match_38183,node_38182,seq__37869_38176__$1,temp__5753__auto___38175__$1,path,seq__37641__$1,temp__5753__auto__,map__37636,map__37636__$1,msg,updates,reload_info){
return (function (e){
var seq__37913_38185 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37915_38186 = null;
var count__37916_38187 = (0);
var i__37917_38188 = (0);
while(true){
if((i__37917_38188 < count__37916_38187)){
var map__37921_38189 = chunk__37915_38186.cljs$core$IIndexed$_nth$arity$2(null,i__37917_38188);
var map__37921_38190__$1 = cljs.core.__destructure_map(map__37921_38189);
var task_38191 = map__37921_38190__$1;
var fn_str_38192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37921_38190__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37921_38190__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38194 = goog.getObjectByName(fn_str_38192,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38193)].join(''));

(fn_obj_38194.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38194.cljs$core$IFn$_invoke$arity$2(path,new_link_38184) : fn_obj_38194.call(null,path,new_link_38184));


var G__38195 = seq__37913_38185;
var G__38196 = chunk__37915_38186;
var G__38197 = count__37916_38187;
var G__38198 = (i__37917_38188 + (1));
seq__37913_38185 = G__38195;
chunk__37915_38186 = G__38196;
count__37916_38187 = G__38197;
i__37917_38188 = G__38198;
continue;
} else {
var temp__5753__auto___38199__$2 = cljs.core.seq(seq__37913_38185);
if(temp__5753__auto___38199__$2){
var seq__37913_38200__$1 = temp__5753__auto___38199__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37913_38200__$1)){
var c__4679__auto___38201 = cljs.core.chunk_first(seq__37913_38200__$1);
var G__38202 = cljs.core.chunk_rest(seq__37913_38200__$1);
var G__38203 = c__4679__auto___38201;
var G__38204 = cljs.core.count(c__4679__auto___38201);
var G__38205 = (0);
seq__37913_38185 = G__38202;
chunk__37915_38186 = G__38203;
count__37916_38187 = G__38204;
i__37917_38188 = G__38205;
continue;
} else {
var map__37922_38206 = cljs.core.first(seq__37913_38200__$1);
var map__37922_38207__$1 = cljs.core.__destructure_map(map__37922_38206);
var task_38208 = map__37922_38207__$1;
var fn_str_38209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922_38207__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922_38207__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38211 = goog.getObjectByName(fn_str_38209,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38210)].join(''));

(fn_obj_38211.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38211.cljs$core$IFn$_invoke$arity$2(path,new_link_38184) : fn_obj_38211.call(null,path,new_link_38184));


var G__38212 = cljs.core.next(seq__37913_38200__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__37913_38185 = G__38212;
chunk__37915_38186 = G__38213;
count__37916_38187 = G__38214;
i__37917_38188 = G__38215;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38182);
});})(seq__37869_38125,chunk__37873_38126,count__37874_38127,i__37875_38128,seq__37641,chunk__37644,count__37645,i__37646,new_link_38184,path_match_38183,node_38182,seq__37869_38176__$1,temp__5753__auto___38175__$1,path,seq__37641__$1,temp__5753__auto__,map__37636,map__37636__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38183], 0));

goog.dom.insertSiblingAfter(new_link_38184,node_38182);


var G__38216 = cljs.core.next(seq__37869_38176__$1);
var G__38217 = null;
var G__38218 = (0);
var G__38219 = (0);
seq__37869_38125 = G__38216;
chunk__37873_38126 = G__38217;
count__37874_38127 = G__38218;
i__37875_38128 = G__38219;
continue;
} else {
var G__38220 = cljs.core.next(seq__37869_38176__$1);
var G__38221 = null;
var G__38222 = (0);
var G__38223 = (0);
seq__37869_38125 = G__38220;
chunk__37873_38126 = G__38221;
count__37874_38127 = G__38222;
i__37875_38128 = G__38223;
continue;
}
} else {
var G__38224 = cljs.core.next(seq__37869_38176__$1);
var G__38225 = null;
var G__38226 = (0);
var G__38227 = (0);
seq__37869_38125 = G__38224;
chunk__37873_38126 = G__38225;
count__37874_38127 = G__38226;
i__37875_38128 = G__38227;
continue;
}
}
} else {
}
}
break;
}


var G__38228 = cljs.core.next(seq__37641__$1);
var G__38229 = null;
var G__38230 = (0);
var G__38231 = (0);
seq__37641 = G__38228;
chunk__37644 = G__38229;
count__37645 = G__38230;
i__37646 = G__38231;
continue;
} else {
var G__38232 = cljs.core.next(seq__37641__$1);
var G__38233 = null;
var G__38234 = (0);
var G__38235 = (0);
seq__37641 = G__38232;
chunk__37644 = G__38233;
count__37645 = G__38234;
i__37646 = G__38235;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37923){
var map__37924 = p__37923;
var map__37924__$1 = cljs.core.__destructure_map(map__37924);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37925){
var map__37926 = p__37925;
var map__37926__$1 = cljs.core.__destructure_map(map__37926);
var _ = map__37926__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37927,done,error){
var map__37928 = p__37927;
var map__37928__$1 = cljs.core.__destructure_map(map__37928);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37929,done,error){
var map__37930 = p__37929;
var map__37930__$1 = cljs.core.__destructure_map(map__37930);
var msg = map__37930__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37931){
var map__37932 = p__37931;
var map__37932__$1 = cljs.core.__destructure_map(map__37932);
var src = map__37932__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37932__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37933 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37933) : done.call(null,G__37933));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37934){
var map__37935 = p__37934;
var map__37935__$1 = cljs.core.__destructure_map(map__37935);
var msg__$1 = map__37935__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37935__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37936){var ex = e37936;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37937){
var map__37938 = p__37937;
var map__37938__$1 = cljs.core.__destructure_map(map__37938);
var env = map__37938__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37938__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37939){
var map__37940 = p__37939;
var map__37940__$1 = cljs.core.__destructure_map(map__37940);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37940__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37940__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37941){
var map__37942 = p__37941;
var map__37942__$1 = cljs.core.__destructure_map(map__37942);
var svc = map__37942__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
