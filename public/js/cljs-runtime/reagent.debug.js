goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36178__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36180__i = 0, G__36180__a = new Array(arguments.length -  0);
while (G__36180__i < G__36180__a.length) {G__36180__a[G__36180__i] = arguments[G__36180__i + 0]; ++G__36180__i;}
  args = new cljs.core.IndexedSeq(G__36180__a,0,null);
} 
return G__36178__delegate.call(this,args);};
G__36178.cljs$lang$maxFixedArity = 0;
G__36178.cljs$lang$applyTo = (function (arglist__36181){
var args = cljs.core.seq(arglist__36181);
return G__36178__delegate(args);
});
G__36178.cljs$core$IFn$_invoke$arity$variadic = G__36178__delegate;
return G__36178;
})()
);

(o.error = (function() { 
var G__36182__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36183__i = 0, G__36183__a = new Array(arguments.length -  0);
while (G__36183__i < G__36183__a.length) {G__36183__a[G__36183__i] = arguments[G__36183__i + 0]; ++G__36183__i;}
  args = new cljs.core.IndexedSeq(G__36183__a,0,null);
} 
return G__36182__delegate.call(this,args);};
G__36182.cljs$lang$maxFixedArity = 0;
G__36182.cljs$lang$applyTo = (function (arglist__36184){
var args = cljs.core.seq(arglist__36184);
return G__36182__delegate(args);
});
G__36182.cljs$core$IFn$_invoke$arity$variadic = G__36182__delegate;
return G__36182;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
