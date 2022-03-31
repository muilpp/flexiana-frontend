goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34902){
var map__34904 = p__34902;
var map__34904__$1 = cljs.core.__destructure_map(map__34904);
var m = map__34904__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34904__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34914_35360 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34915_35361 = null;
var count__34916_35362 = (0);
var i__34917_35363 = (0);
while(true){
if((i__34917_35363 < count__34916_35362)){
var f_35364 = chunk__34915_35361.cljs$core$IIndexed$_nth$arity$2(null,i__34917_35363);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35364], 0));


var G__35365 = seq__34914_35360;
var G__35366 = chunk__34915_35361;
var G__35367 = count__34916_35362;
var G__35368 = (i__34917_35363 + (1));
seq__34914_35360 = G__35365;
chunk__34915_35361 = G__35366;
count__34916_35362 = G__35367;
i__34917_35363 = G__35368;
continue;
} else {
var temp__5753__auto___35369 = cljs.core.seq(seq__34914_35360);
if(temp__5753__auto___35369){
var seq__34914_35370__$1 = temp__5753__auto___35369;
if(cljs.core.chunked_seq_QMARK_(seq__34914_35370__$1)){
var c__4679__auto___35371 = cljs.core.chunk_first(seq__34914_35370__$1);
var G__35372 = cljs.core.chunk_rest(seq__34914_35370__$1);
var G__35373 = c__4679__auto___35371;
var G__35374 = cljs.core.count(c__4679__auto___35371);
var G__35375 = (0);
seq__34914_35360 = G__35372;
chunk__34915_35361 = G__35373;
count__34916_35362 = G__35374;
i__34917_35363 = G__35375;
continue;
} else {
var f_35376 = cljs.core.first(seq__34914_35370__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35376], 0));


var G__35377 = cljs.core.next(seq__34914_35370__$1);
var G__35378 = null;
var G__35379 = (0);
var G__35380 = (0);
seq__34914_35360 = G__35377;
chunk__34915_35361 = G__35378;
count__34916_35362 = G__35379;
i__34917_35363 = G__35380;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35381 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35381], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35381)))?cljs.core.second(arglists_35381):arglists_35381)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34946_35387 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34947_35388 = null;
var count__34948_35389 = (0);
var i__34949_35390 = (0);
while(true){
if((i__34949_35390 < count__34948_35389)){
var vec__34990_35394 = chunk__34947_35388.cljs$core$IIndexed$_nth$arity$2(null,i__34949_35390);
var name_35395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35394,(0),null);
var map__34993_35396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35394,(1),null);
var map__34993_35397__$1 = cljs.core.__destructure_map(map__34993_35396);
var doc_35398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34993_35397__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34993_35397__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35395], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35399], 0));

if(cljs.core.truth_(doc_35398)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35398], 0));
} else {
}


var G__35403 = seq__34946_35387;
var G__35404 = chunk__34947_35388;
var G__35405 = count__34948_35389;
var G__35406 = (i__34949_35390 + (1));
seq__34946_35387 = G__35403;
chunk__34947_35388 = G__35404;
count__34948_35389 = G__35405;
i__34949_35390 = G__35406;
continue;
} else {
var temp__5753__auto___35407 = cljs.core.seq(seq__34946_35387);
if(temp__5753__auto___35407){
var seq__34946_35408__$1 = temp__5753__auto___35407;
if(cljs.core.chunked_seq_QMARK_(seq__34946_35408__$1)){
var c__4679__auto___35415 = cljs.core.chunk_first(seq__34946_35408__$1);
var G__35416 = cljs.core.chunk_rest(seq__34946_35408__$1);
var G__35417 = c__4679__auto___35415;
var G__35418 = cljs.core.count(c__4679__auto___35415);
var G__35419 = (0);
seq__34946_35387 = G__35416;
chunk__34947_35388 = G__35417;
count__34948_35389 = G__35418;
i__34949_35390 = G__35419;
continue;
} else {
var vec__35003_35421 = cljs.core.first(seq__34946_35408__$1);
var name_35422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35003_35421,(0),null);
var map__35006_35423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35003_35421,(1),null);
var map__35006_35424__$1 = cljs.core.__destructure_map(map__35006_35423);
var doc_35425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35006_35424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35006_35424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35422], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35426], 0));

if(cljs.core.truth_(doc_35425)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35425], 0));
} else {
}


var G__35430 = cljs.core.next(seq__34946_35408__$1);
var G__35431 = null;
var G__35432 = (0);
var G__35433 = (0);
seq__34946_35387 = G__35430;
chunk__34947_35388 = G__35431;
count__34948_35389 = G__35432;
i__34949_35390 = G__35433;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35017 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35018 = null;
var count__35019 = (0);
var i__35020 = (0);
while(true){
if((i__35020 < count__35019)){
var role = chunk__35018.cljs$core$IIndexed$_nth$arity$2(null,i__35020);
var temp__5753__auto___35439__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35439__$1)){
var spec_35441 = temp__5753__auto___35439__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35441)], 0));
} else {
}


var G__35442 = seq__35017;
var G__35443 = chunk__35018;
var G__35444 = count__35019;
var G__35445 = (i__35020 + (1));
seq__35017 = G__35442;
chunk__35018 = G__35443;
count__35019 = G__35444;
i__35020 = G__35445;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35017);
if(temp__5753__auto____$1){
var seq__35017__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35017__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35017__$1);
var G__35446 = cljs.core.chunk_rest(seq__35017__$1);
var G__35447 = c__4679__auto__;
var G__35448 = cljs.core.count(c__4679__auto__);
var G__35449 = (0);
seq__35017 = G__35446;
chunk__35018 = G__35447;
count__35019 = G__35448;
i__35020 = G__35449;
continue;
} else {
var role = cljs.core.first(seq__35017__$1);
var temp__5753__auto___35453__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35453__$2)){
var spec_35455 = temp__5753__auto___35453__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35455)], 0));
} else {
}


var G__35459 = cljs.core.next(seq__35017__$1);
var G__35460 = null;
var G__35461 = (0);
var G__35462 = (0);
seq__35017 = G__35459;
chunk__35018 = G__35460;
count__35019 = G__35461;
i__35020 = G__35462;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35468 = cljs.core.ex_cause(t);
via = G__35467;
t = G__35468;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35181 = datafied_throwable;
var map__35181__$1 = cljs.core.__destructure_map(map__35181);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35181__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35181__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35181__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35182 = cljs.core.last(via);
var map__35182__$1 = cljs.core.__destructure_map(map__35182);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35183 = data;
var map__35183__$1 = cljs.core.__destructure_map(map__35183);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35184 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35184__$1 = cljs.core.__destructure_map(map__35184);
var top_data = map__35184__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35193 = phase;
var G__35193__$1 = (((G__35193 instanceof cljs.core.Keyword))?G__35193.fqn:null);
switch (G__35193__$1) {
case "read-source":
var map__35194 = data;
var map__35194__$1 = cljs.core.__destructure_map(map__35194);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35194__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35194__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35200 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35200__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35200,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35200);
var G__35200__$2 = (cljs.core.truth_((function (){var fexpr__35205 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35205.cljs$core$IFn$_invoke$arity$1 ? fexpr__35205.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35205.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35200__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35200__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35200__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35200__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35207 = top_data;
var G__35207__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35207);
var G__35207__$2 = (cljs.core.truth_((function (){var fexpr__35209 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35209.cljs$core$IFn$_invoke$arity$1 ? fexpr__35209.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35209.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35207__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35207__$1);
var G__35207__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35207__$2);
var G__35207__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35207__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35207__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35214 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(3),null);
var G__35222 = top_data;
var G__35222__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35222,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35222);
var G__35222__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35222__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35222__$1);
var G__35222__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35222__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35222__$2);
var G__35222__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35222__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35222__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35222__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35222__$4;
}

break;
case "execution":
var vec__35232 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35171_SHARP_){
var or__4253__auto__ = (p1__35171_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35237 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35237.cljs$core$IFn$_invoke$arity$1 ? fexpr__35237.cljs$core$IFn$_invoke$arity$1(p1__35171_SHARP_) : fexpr__35237.call(null,p1__35171_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35239 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35239__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35239);
var G__35239__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35239__$1);
var G__35239__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35239__$2);
var G__35239__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35239__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35239__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35193__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35257){
var map__35258 = p__35257;
var map__35258__$1 = cljs.core.__destructure_map(map__35258);
var triage_data = map__35258__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35272 = phase;
var G__35272__$1 = (((G__35272 instanceof cljs.core.Keyword))?G__35272.fqn:null);
switch (G__35272__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35276 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35278 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35279 = loc;
var G__35280 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35283_35525 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35284_35526 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35285_35527 = true;
var _STAR_print_fn_STAR__temp_val__35286_35528 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35285_35527);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35286_35528);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35247_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35247_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35284_35526);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35283_35525);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35276,G__35278,G__35279,G__35280) : format.call(null,G__35276,G__35278,G__35279,G__35280));

break;
case "macroexpansion":
var G__35294 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35295 = cause_type;
var G__35296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35297 = loc;
var G__35298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35294,G__35295,G__35296,G__35297,G__35298) : format.call(null,G__35294,G__35295,G__35296,G__35297,G__35298));

break;
case "compile-syntax-check":
var G__35300 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35301 = cause_type;
var G__35302 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35303 = loc;
var G__35304 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35300,G__35301,G__35302,G__35303,G__35304) : format.call(null,G__35300,G__35301,G__35302,G__35303,G__35304));

break;
case "compilation":
var G__35314 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35315 = cause_type;
var G__35316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35317 = loc;
var G__35318 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35314,G__35315,G__35316,G__35317,G__35318) : format.call(null,G__35314,G__35315,G__35316,G__35317,G__35318));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35321 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35322 = symbol;
var G__35323 = loc;
var G__35324 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35329_35543 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35330_35544 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35331_35545 = true;
var _STAR_print_fn_STAR__temp_val__35332_35546 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35331_35545);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35332_35546);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35251_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35251_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35330_35544);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35329_35543);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35321,G__35322,G__35323,G__35324) : format.call(null,G__35321,G__35322,G__35323,G__35324));
} else {
var G__35338 = "Execution error%s at %s(%s).\n%s\n";
var G__35339 = cause_type;
var G__35340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35341 = loc;
var G__35342 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35338,G__35339,G__35340,G__35341,G__35342) : format.call(null,G__35338,G__35339,G__35340,G__35341,G__35342));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35272__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
