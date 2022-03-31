goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32613 = arguments.length;
switch (G__32613) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32615 = (function (f,blockable,meta32616){
this.f = f;
this.blockable = blockable;
this.meta32616 = meta32616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32617,meta32616__$1){
var self__ = this;
var _32617__$1 = this;
return (new cljs.core.async.t_cljs$core$async32615(self__.f,self__.blockable,meta32616__$1));
}));

(cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32617){
var self__ = this;
var _32617__$1 = this;
return self__.meta32616;
}));

(cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32616","meta32616",1078555521,null)], null);
}));

(cljs.core.async.t_cljs$core$async32615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32615");

(cljs.core.async.t_cljs$core$async32615.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32615.
 */
cljs.core.async.__GT_t_cljs$core$async32615 = (function cljs$core$async$__GT_t_cljs$core$async32615(f__$1,blockable__$1,meta32616){
return (new cljs.core.async.t_cljs$core$async32615(f__$1,blockable__$1,meta32616));
});

}

return (new cljs.core.async.t_cljs$core$async32615(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32622 = arguments.length;
switch (G__32622) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32625 = arguments.length;
switch (G__32625) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32629 = arguments.length;
switch (G__32629) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34768 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34768) : fn1.call(null,val_34768));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34768) : fn1.call(null,val_34768));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32632 = arguments.length;
switch (G__32632) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34770 = n;
var x_34771 = (0);
while(true){
if((x_34771 < n__4741__auto___34770)){
(a[x_34771] = x_34771);

var G__34772 = (x_34771 + (1));
x_34771 = G__34772;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32634 = (function (flag,meta32635){
this.flag = flag;
this.meta32635 = meta32635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32636,meta32635__$1){
var self__ = this;
var _32636__$1 = this;
return (new cljs.core.async.t_cljs$core$async32634(self__.flag,meta32635__$1));
}));

(cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32636){
var self__ = this;
var _32636__$1 = this;
return self__.meta32635;
}));

(cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32635","meta32635",-1420870163,null)], null);
}));

(cljs.core.async.t_cljs$core$async32634.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32634");

(cljs.core.async.t_cljs$core$async32634.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32634");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32634.
 */
cljs.core.async.__GT_t_cljs$core$async32634 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32634(flag__$1,meta32635){
return (new cljs.core.async.t_cljs$core$async32634(flag__$1,meta32635));
});

}

return (new cljs.core.async.t_cljs$core$async32634(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32639 = (function (flag,cb,meta32640){
this.flag = flag;
this.cb = cb;
this.meta32640 = meta32640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32641,meta32640__$1){
var self__ = this;
var _32641__$1 = this;
return (new cljs.core.async.t_cljs$core$async32639(self__.flag,self__.cb,meta32640__$1));
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32641){
var self__ = this;
var _32641__$1 = this;
return self__.meta32640;
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32640","meta32640",384969228,null)], null);
}));

(cljs.core.async.t_cljs$core$async32639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32639");

(cljs.core.async.t_cljs$core$async32639.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32639.
 */
cljs.core.async.__GT_t_cljs$core$async32639 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32639(flag__$1,cb__$1,meta32640){
return (new cljs.core.async.t_cljs$core$async32639(flag__$1,cb__$1,meta32640));
});

}

return (new cljs.core.async.t_cljs$core$async32639(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32644_SHARP_){
var G__32647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32644_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32647) : fret.call(null,G__32647));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32645_SHARP_){
var G__32648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32645_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32648) : fret.call(null,G__32648));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34776 = (i + (1));
i = G__34776;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34777 = arguments.length;
var i__4865__auto___34778 = (0);
while(true){
if((i__4865__auto___34778 < len__4864__auto___34777)){
args__4870__auto__.push((arguments[i__4865__auto___34778]));

var G__34779 = (i__4865__auto___34778 + (1));
i__4865__auto___34778 = G__34779;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32652){
var map__32653 = p__32652;
var map__32653__$1 = cljs.core.__destructure_map(map__32653);
var opts = map__32653__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32650){
var G__32651 = cljs.core.first(seq32650);
var seq32650__$1 = cljs.core.next(seq32650);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32651,seq32650__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32656 = arguments.length;
switch (G__32656) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32513__auto___34784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_32683){
var state_val_32684 = (state_32683[(1)]);
if((state_val_32684 === (7))){
var inst_32679 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32687_34785 = state_32683__$1;
(statearr_32687_34785[(2)] = inst_32679);

(statearr_32687_34785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (1))){
var state_32683__$1 = state_32683;
var statearr_32688_34786 = state_32683__$1;
(statearr_32688_34786[(2)] = null);

(statearr_32688_34786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (4))){
var inst_32662 = (state_32683[(7)]);
var inst_32662__$1 = (state_32683[(2)]);
var inst_32663 = (inst_32662__$1 == null);
var state_32683__$1 = (function (){var statearr_32689 = state_32683;
(statearr_32689[(7)] = inst_32662__$1);

return statearr_32689;
})();
if(cljs.core.truth_(inst_32663)){
var statearr_32690_34787 = state_32683__$1;
(statearr_32690_34787[(1)] = (5));

} else {
var statearr_32691_34788 = state_32683__$1;
(statearr_32691_34788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (13))){
var state_32683__$1 = state_32683;
var statearr_32692_34789 = state_32683__$1;
(statearr_32692_34789[(2)] = null);

(statearr_32692_34789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (6))){
var inst_32662 = (state_32683[(7)]);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32683__$1,(11),to,inst_32662);
} else {
if((state_val_32684 === (3))){
var inst_32681 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32683__$1,inst_32681);
} else {
if((state_val_32684 === (12))){
var state_32683__$1 = state_32683;
var statearr_32694_34790 = state_32683__$1;
(statearr_32694_34790[(2)] = null);

(statearr_32694_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (2))){
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32683__$1,(4),from);
} else {
if((state_val_32684 === (11))){
var inst_32672 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32672)){
var statearr_32695_34791 = state_32683__$1;
(statearr_32695_34791[(1)] = (12));

} else {
var statearr_32696_34792 = state_32683__$1;
(statearr_32696_34792[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (9))){
var state_32683__$1 = state_32683;
var statearr_32697_34793 = state_32683__$1;
(statearr_32697_34793[(2)] = null);

(statearr_32697_34793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (5))){
var state_32683__$1 = state_32683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32698_34794 = state_32683__$1;
(statearr_32698_34794[(1)] = (8));

} else {
var statearr_32699_34796 = state_32683__$1;
(statearr_32699_34796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (14))){
var inst_32677 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32701_34797 = state_32683__$1;
(statearr_32701_34797[(2)] = inst_32677);

(statearr_32701_34797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (10))){
var inst_32669 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32702_34798 = state_32683__$1;
(statearr_32702_34798[(2)] = inst_32669);

(statearr_32702_34798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (8))){
var inst_32666 = cljs.core.async.close_BANG_(to);
var state_32683__$1 = state_32683;
var statearr_32703_34799 = state_32683__$1;
(statearr_32703_34799[(2)] = inst_32666);

(statearr_32703_34799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_32704 = [null,null,null,null,null,null,null,null];
(statearr_32704[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_32704[(1)] = (1));

return statearr_32704;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_32683){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_32683);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e32705){var ex__31976__auto__ = e32705;
var statearr_32706_34800 = state_32683;
(statearr_32706_34800[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_32683[(4)]))){
var statearr_32707_34801 = state_32683;
(statearr_32707_34801[(1)] = cljs.core.first((state_32683[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34803 = state_32683;
state_32683 = G__34803;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_32683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_32683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_32709 = f__32514__auto__();
(statearr_32709[(6)] = c__32513__auto___34784);

return statearr_32709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32711){
var vec__32712 = p__32711;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32712,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32712,(1),null);
var job = vec__32712;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32513__auto___34805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_32719){
var state_val_32720 = (state_32719[(1)]);
if((state_val_32720 === (1))){
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32719__$1,(2),res,v);
} else {
if((state_val_32720 === (2))){
var inst_32716 = (state_32719[(2)]);
var inst_32717 = cljs.core.async.close_BANG_(res);
var state_32719__$1 = (function (){var statearr_32723 = state_32719;
(statearr_32723[(7)] = inst_32716);

return statearr_32723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32719__$1,inst_32717);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0 = (function (){
var statearr_32724 = [null,null,null,null,null,null,null,null];
(statearr_32724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__);

(statearr_32724[(1)] = (1));

return statearr_32724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1 = (function (state_32719){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_32719);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e32725){var ex__31976__auto__ = e32725;
var statearr_32726_34807 = state_32719;
(statearr_32726_34807[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_32719[(4)]))){
var statearr_32727_34808 = state_32719;
(statearr_32727_34808[(1)] = cljs.core.first((state_32719[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34810 = state_32719;
state_32719 = G__34810;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = function(state_32719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1.call(this,state_32719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_32728 = f__32514__auto__();
(statearr_32728[(6)] = c__32513__auto___34805);

return statearr_32728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32729){
var vec__32730 = p__32729;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(1),null);
var job = vec__32730;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34811 = n;
var __34812 = (0);
while(true){
if((__34812 < n__4741__auto___34811)){
var G__32735_34813 = type;
var G__32735_34814__$1 = (((G__32735_34813 instanceof cljs.core.Keyword))?G__32735_34813.fqn:null);
switch (G__32735_34814__$1) {
case "compute":
var c__32513__auto___34816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34812,c__32513__auto___34816,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async){
return (function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = ((function (__34812,c__32513__auto___34816,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async){
return (function (state_32748){
var state_val_32749 = (state_32748[(1)]);
if((state_val_32749 === (1))){
var state_32748__$1 = state_32748;
var statearr_32750_34817 = state_32748__$1;
(statearr_32750_34817[(2)] = null);

(statearr_32750_34817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (2))){
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32748__$1,(4),jobs);
} else {
if((state_val_32749 === (3))){
var inst_32746 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32748__$1,inst_32746);
} else {
if((state_val_32749 === (4))){
var inst_32738 = (state_32748[(2)]);
var inst_32739 = process(inst_32738);
var state_32748__$1 = state_32748;
if(cljs.core.truth_(inst_32739)){
var statearr_32751_34819 = state_32748__$1;
(statearr_32751_34819[(1)] = (5));

} else {
var statearr_32752_34820 = state_32748__$1;
(statearr_32752_34820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (5))){
var state_32748__$1 = state_32748;
var statearr_32753_34822 = state_32748__$1;
(statearr_32753_34822[(2)] = null);

(statearr_32753_34822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (6))){
var state_32748__$1 = state_32748;
var statearr_32754_34824 = state_32748__$1;
(statearr_32754_34824[(2)] = null);

(statearr_32754_34824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (7))){
var inst_32744 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32755_34825 = state_32748__$1;
(statearr_32755_34825[(2)] = inst_32744);

(statearr_32755_34825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34812,c__32513__auto___34816,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async))
;
return ((function (__34812,switch__31972__auto__,c__32513__auto___34816,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1 = (function (state_32748){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_32748);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e32759){var ex__31976__auto__ = e32759;
var statearr_32760_34828 = state_32748;
(statearr_32760_34828[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_32748[(4)]))){
var statearr_32761_34829 = state_32748;
(statearr_32761_34829[(1)] = cljs.core.first((state_32748[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34830 = state_32748;
state_32748 = G__34830;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = function(state_32748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1.call(this,state_32748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__;
})()
;})(__34812,switch__31972__auto__,c__32513__auto___34816,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async))
})();
var state__32515__auto__ = (function (){var statearr_32762 = f__32514__auto__();
(statearr_32762[(6)] = c__32513__auto___34816);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
});})(__34812,c__32513__auto___34816,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async))
);


break;
case "async":
var c__32513__auto___34831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34812,c__32513__auto___34831,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async){
return (function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = ((function (__34812,c__32513__auto___34831,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async){
return (function (state_32775){
var state_val_32776 = (state_32775[(1)]);
if((state_val_32776 === (1))){
var state_32775__$1 = state_32775;
var statearr_32777_34832 = state_32775__$1;
(statearr_32777_34832[(2)] = null);

(statearr_32777_34832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (2))){
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32775__$1,(4),jobs);
} else {
if((state_val_32776 === (3))){
var inst_32773 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32775__$1,inst_32773);
} else {
if((state_val_32776 === (4))){
var inst_32765 = (state_32775[(2)]);
var inst_32766 = async(inst_32765);
var state_32775__$1 = state_32775;
if(cljs.core.truth_(inst_32766)){
var statearr_32778_34835 = state_32775__$1;
(statearr_32778_34835[(1)] = (5));

} else {
var statearr_32779_34836 = state_32775__$1;
(statearr_32779_34836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (5))){
var state_32775__$1 = state_32775;
var statearr_32780_34837 = state_32775__$1;
(statearr_32780_34837[(2)] = null);

(statearr_32780_34837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (6))){
var state_32775__$1 = state_32775;
var statearr_32781_34838 = state_32775__$1;
(statearr_32781_34838[(2)] = null);

(statearr_32781_34838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (7))){
var inst_32771 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
var statearr_32782_34839 = state_32775__$1;
(statearr_32782_34839[(2)] = inst_32771);

(statearr_32782_34839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34812,c__32513__auto___34831,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async))
;
return ((function (__34812,switch__31972__auto__,c__32513__auto___34831,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0 = (function (){
var statearr_32785 = [null,null,null,null,null,null,null];
(statearr_32785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__);

(statearr_32785[(1)] = (1));

return statearr_32785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1 = (function (state_32775){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_32775);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e32787){var ex__31976__auto__ = e32787;
var statearr_32788_34840 = state_32775;
(statearr_32788_34840[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_32775[(4)]))){
var statearr_32789_34841 = state_32775;
(statearr_32789_34841[(1)] = cljs.core.first((state_32775[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34842 = state_32775;
state_32775 = G__34842;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = function(state_32775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1.call(this,state_32775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__;
})()
;})(__34812,switch__31972__auto__,c__32513__auto___34831,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async))
})();
var state__32515__auto__ = (function (){var statearr_32793 = f__32514__auto__();
(statearr_32793[(6)] = c__32513__auto___34831);

return statearr_32793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
});})(__34812,c__32513__auto___34831,G__32735_34813,G__32735_34814__$1,n__4741__auto___34811,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32735_34814__$1)].join('')));

}

var G__34843 = (__34812 + (1));
__34812 = G__34843;
continue;
} else {
}
break;
}

var c__32513__auto___34844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_32818){
var state_val_32819 = (state_32818[(1)]);
if((state_val_32819 === (7))){
var inst_32814 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32824_34845 = state_32818__$1;
(statearr_32824_34845[(2)] = inst_32814);

(statearr_32824_34845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (1))){
var state_32818__$1 = state_32818;
var statearr_32825_34846 = state_32818__$1;
(statearr_32825_34846[(2)] = null);

(statearr_32825_34846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (4))){
var inst_32799 = (state_32818[(7)]);
var inst_32799__$1 = (state_32818[(2)]);
var inst_32800 = (inst_32799__$1 == null);
var state_32818__$1 = (function (){var statearr_32827 = state_32818;
(statearr_32827[(7)] = inst_32799__$1);

return statearr_32827;
})();
if(cljs.core.truth_(inst_32800)){
var statearr_32828_34847 = state_32818__$1;
(statearr_32828_34847[(1)] = (5));

} else {
var statearr_32831_34848 = state_32818__$1;
(statearr_32831_34848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (6))){
var inst_32799 = (state_32818[(7)]);
var inst_32804 = (state_32818[(8)]);
var inst_32804__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32806 = [inst_32799,inst_32804__$1];
var inst_32807 = (new cljs.core.PersistentVector(null,2,(5),inst_32805,inst_32806,null));
var state_32818__$1 = (function (){var statearr_32834 = state_32818;
(statearr_32834[(8)] = inst_32804__$1);

return statearr_32834;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32818__$1,(8),jobs,inst_32807);
} else {
if((state_val_32819 === (3))){
var inst_32816 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32818__$1,inst_32816);
} else {
if((state_val_32819 === (2))){
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32818__$1,(4),from);
} else {
if((state_val_32819 === (9))){
var inst_32811 = (state_32818[(2)]);
var state_32818__$1 = (function (){var statearr_32838 = state_32818;
(statearr_32838[(9)] = inst_32811);

return statearr_32838;
})();
var statearr_32840_34851 = state_32818__$1;
(statearr_32840_34851[(2)] = null);

(statearr_32840_34851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (5))){
var inst_32802 = cljs.core.async.close_BANG_(jobs);
var state_32818__$1 = state_32818;
var statearr_32843_34852 = state_32818__$1;
(statearr_32843_34852[(2)] = inst_32802);

(statearr_32843_34852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (8))){
var inst_32804 = (state_32818[(8)]);
var inst_32809 = (state_32818[(2)]);
var state_32818__$1 = (function (){var statearr_32845 = state_32818;
(statearr_32845[(10)] = inst_32809);

return statearr_32845;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32818__$1,(9),results,inst_32804);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0 = (function (){
var statearr_32849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__);

(statearr_32849[(1)] = (1));

return statearr_32849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1 = (function (state_32818){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_32818);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e32851){var ex__31976__auto__ = e32851;
var statearr_32852_34853 = state_32818;
(statearr_32852_34853[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_32818[(4)]))){
var statearr_32853_34854 = state_32818;
(statearr_32853_34854[(1)] = cljs.core.first((state_32818[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34855 = state_32818;
state_32818 = G__34855;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = function(state_32818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1.call(this,state_32818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_32855 = f__32514__auto__();
(statearr_32855[(6)] = c__32513__auto___34844);

return statearr_32855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


var c__32513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_32900){
var state_val_32901 = (state_32900[(1)]);
if((state_val_32901 === (7))){
var inst_32895 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32905_34856 = state_32900__$1;
(statearr_32905_34856[(2)] = inst_32895);

(statearr_32905_34856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (20))){
var state_32900__$1 = state_32900;
var statearr_32907_34857 = state_32900__$1;
(statearr_32907_34857[(2)] = null);

(statearr_32907_34857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (1))){
var state_32900__$1 = state_32900;
var statearr_32909_34858 = state_32900__$1;
(statearr_32909_34858[(2)] = null);

(statearr_32909_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (4))){
var inst_32861 = (state_32900[(7)]);
var inst_32861__$1 = (state_32900[(2)]);
var inst_32862 = (inst_32861__$1 == null);
var state_32900__$1 = (function (){var statearr_32913 = state_32900;
(statearr_32913[(7)] = inst_32861__$1);

return statearr_32913;
})();
if(cljs.core.truth_(inst_32862)){
var statearr_32914_34859 = state_32900__$1;
(statearr_32914_34859[(1)] = (5));

} else {
var statearr_32915_34860 = state_32900__$1;
(statearr_32915_34860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (15))){
var inst_32875 = (state_32900[(8)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32900__$1,(18),to,inst_32875);
} else {
if((state_val_32901 === (21))){
var inst_32889 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32919_34861 = state_32900__$1;
(statearr_32919_34861[(2)] = inst_32889);

(statearr_32919_34861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (13))){
var inst_32892 = (state_32900[(2)]);
var state_32900__$1 = (function (){var statearr_32921 = state_32900;
(statearr_32921[(9)] = inst_32892);

return statearr_32921;
})();
var statearr_32922_34867 = state_32900__$1;
(statearr_32922_34867[(2)] = null);

(statearr_32922_34867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (6))){
var inst_32861 = (state_32900[(7)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32900__$1,(11),inst_32861);
} else {
if((state_val_32901 === (17))){
var inst_32883 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
if(cljs.core.truth_(inst_32883)){
var statearr_32927_34869 = state_32900__$1;
(statearr_32927_34869[(1)] = (19));

} else {
var statearr_32928_34870 = state_32900__$1;
(statearr_32928_34870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (3))){
var inst_32897 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32900__$1,inst_32897);
} else {
if((state_val_32901 === (12))){
var inst_32871 = (state_32900[(10)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32900__$1,(14),inst_32871);
} else {
if((state_val_32901 === (2))){
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32900__$1,(4),results);
} else {
if((state_val_32901 === (19))){
var state_32900__$1 = state_32900;
var statearr_32930_34875 = state_32900__$1;
(statearr_32930_34875[(2)] = null);

(statearr_32930_34875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (11))){
var inst_32871 = (state_32900[(2)]);
var state_32900__$1 = (function (){var statearr_32934 = state_32900;
(statearr_32934[(10)] = inst_32871);

return statearr_32934;
})();
var statearr_32935_34876 = state_32900__$1;
(statearr_32935_34876[(2)] = null);

(statearr_32935_34876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (9))){
var state_32900__$1 = state_32900;
var statearr_32936_34877 = state_32900__$1;
(statearr_32936_34877[(2)] = null);

(statearr_32936_34877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (5))){
var state_32900__$1 = state_32900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32938_34878 = state_32900__$1;
(statearr_32938_34878[(1)] = (8));

} else {
var statearr_32940_34879 = state_32900__$1;
(statearr_32940_34879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (14))){
var inst_32877 = (state_32900[(11)]);
var inst_32875 = (state_32900[(8)]);
var inst_32875__$1 = (state_32900[(2)]);
var inst_32876 = (inst_32875__$1 == null);
var inst_32877__$1 = cljs.core.not(inst_32876);
var state_32900__$1 = (function (){var statearr_32944 = state_32900;
(statearr_32944[(11)] = inst_32877__$1);

(statearr_32944[(8)] = inst_32875__$1);

return statearr_32944;
})();
if(inst_32877__$1){
var statearr_32945_34881 = state_32900__$1;
(statearr_32945_34881[(1)] = (15));

} else {
var statearr_32946_34882 = state_32900__$1;
(statearr_32946_34882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (16))){
var inst_32877 = (state_32900[(11)]);
var state_32900__$1 = state_32900;
var statearr_32948_34883 = state_32900__$1;
(statearr_32948_34883[(2)] = inst_32877);

(statearr_32948_34883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (10))){
var inst_32868 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32949_34884 = state_32900__$1;
(statearr_32949_34884[(2)] = inst_32868);

(statearr_32949_34884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (18))){
var inst_32880 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32953_34885 = state_32900__$1;
(statearr_32953_34885[(2)] = inst_32880);

(statearr_32953_34885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (8))){
var inst_32865 = cljs.core.async.close_BANG_(to);
var state_32900__$1 = state_32900;
var statearr_32955_34886 = state_32900__$1;
(statearr_32955_34886[(2)] = inst_32865);

(statearr_32955_34886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0 = (function (){
var statearr_32960 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__);

(statearr_32960[(1)] = (1));

return statearr_32960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1 = (function (state_32900){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_32900);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e32961){var ex__31976__auto__ = e32961;
var statearr_32963_34887 = state_32900;
(statearr_32963_34887[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_32900[(4)]))){
var statearr_32964_34888 = state_32900;
(statearr_32964_34888[(1)] = cljs.core.first((state_32900[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34889 = state_32900;
state_32900 = G__34889;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__ = function(state_32900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1.call(this,state_32900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_32969 = f__32514__auto__();
(statearr_32969[(6)] = c__32513__auto__);

return statearr_32969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));

return c__32513__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32975 = arguments.length;
switch (G__32975) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32985 = arguments.length;
switch (G__32985) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32999 = arguments.length;
switch (G__32999) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32513__auto___34897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_33030){
var state_val_33031 = (state_33030[(1)]);
if((state_val_33031 === (7))){
var inst_33026 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33035_34898 = state_33030__$1;
(statearr_33035_34898[(2)] = inst_33026);

(statearr_33035_34898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (1))){
var state_33030__$1 = state_33030;
var statearr_33037_34899 = state_33030__$1;
(statearr_33037_34899[(2)] = null);

(statearr_33037_34899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (4))){
var inst_33006 = (state_33030[(7)]);
var inst_33006__$1 = (state_33030[(2)]);
var inst_33007 = (inst_33006__$1 == null);
var state_33030__$1 = (function (){var statearr_33041 = state_33030;
(statearr_33041[(7)] = inst_33006__$1);

return statearr_33041;
})();
if(cljs.core.truth_(inst_33007)){
var statearr_33043_34900 = state_33030__$1;
(statearr_33043_34900[(1)] = (5));

} else {
var statearr_33045_34901 = state_33030__$1;
(statearr_33045_34901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (13))){
var state_33030__$1 = state_33030;
var statearr_33046_34903 = state_33030__$1;
(statearr_33046_34903[(2)] = null);

(statearr_33046_34903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (6))){
var inst_33006 = (state_33030[(7)]);
var inst_33013 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33006) : p.call(null,inst_33006));
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_33013)){
var statearr_33048_34905 = state_33030__$1;
(statearr_33048_34905[(1)] = (9));

} else {
var statearr_33049_34906 = state_33030__$1;
(statearr_33049_34906[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (3))){
var inst_33028 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33030__$1,inst_33028);
} else {
if((state_val_33031 === (12))){
var state_33030__$1 = state_33030;
var statearr_33053_34907 = state_33030__$1;
(statearr_33053_34907[(2)] = null);

(statearr_33053_34907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (2))){
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33030__$1,(4),ch);
} else {
if((state_val_33031 === (11))){
var inst_33006 = (state_33030[(7)]);
var inst_33017 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33030__$1,(8),inst_33017,inst_33006);
} else {
if((state_val_33031 === (9))){
var state_33030__$1 = state_33030;
var statearr_33055_34908 = state_33030__$1;
(statearr_33055_34908[(2)] = tc);

(statearr_33055_34908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (5))){
var inst_33009 = cljs.core.async.close_BANG_(tc);
var inst_33010 = cljs.core.async.close_BANG_(fc);
var state_33030__$1 = (function (){var statearr_33058 = state_33030;
(statearr_33058[(8)] = inst_33009);

return statearr_33058;
})();
var statearr_33060_34909 = state_33030__$1;
(statearr_33060_34909[(2)] = inst_33010);

(statearr_33060_34909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (14))){
var inst_33024 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33061_34910 = state_33030__$1;
(statearr_33061_34910[(2)] = inst_33024);

(statearr_33061_34910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (10))){
var state_33030__$1 = state_33030;
var statearr_33063_34911 = state_33030__$1;
(statearr_33063_34911[(2)] = fc);

(statearr_33063_34911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (8))){
var inst_33019 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_33019)){
var statearr_33064_34912 = state_33030__$1;
(statearr_33064_34912[(1)] = (12));

} else {
var statearr_33065_34913 = state_33030__$1;
(statearr_33065_34913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_33069 = [null,null,null,null,null,null,null,null,null];
(statearr_33069[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_33069[(1)] = (1));

return statearr_33069;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_33030){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_33030);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e33071){var ex__31976__auto__ = e33071;
var statearr_33072_34918 = state_33030;
(statearr_33072_34918[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_33030[(4)]))){
var statearr_33073_34919 = state_33030;
(statearr_33073_34919[(1)] = cljs.core.first((state_33030[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34921 = state_33030;
state_33030 = G__34921;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_33030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_33077 = f__32514__auto__();
(statearr_33077[(6)] = c__32513__auto___34897);

return statearr_33077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_33107){
var state_val_33108 = (state_33107[(1)]);
if((state_val_33108 === (7))){
var inst_33103 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33113_34923 = state_33107__$1;
(statearr_33113_34923[(2)] = inst_33103);

(statearr_33113_34923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (1))){
var inst_33083 = init;
var inst_33084 = inst_33083;
var state_33107__$1 = (function (){var statearr_33114 = state_33107;
(statearr_33114[(7)] = inst_33084);

return statearr_33114;
})();
var statearr_33116_34924 = state_33107__$1;
(statearr_33116_34924[(2)] = null);

(statearr_33116_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (4))){
var inst_33087 = (state_33107[(8)]);
var inst_33087__$1 = (state_33107[(2)]);
var inst_33088 = (inst_33087__$1 == null);
var state_33107__$1 = (function (){var statearr_33118 = state_33107;
(statearr_33118[(8)] = inst_33087__$1);

return statearr_33118;
})();
if(cljs.core.truth_(inst_33088)){
var statearr_33122_34926 = state_33107__$1;
(statearr_33122_34926[(1)] = (5));

} else {
var statearr_33124_34927 = state_33107__$1;
(statearr_33124_34927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (6))){
var inst_33087 = (state_33107[(8)]);
var inst_33084 = (state_33107[(7)]);
var inst_33093 = (state_33107[(9)]);
var inst_33093__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33084,inst_33087) : f.call(null,inst_33084,inst_33087));
var inst_33095 = cljs.core.reduced_QMARK_(inst_33093__$1);
var state_33107__$1 = (function (){var statearr_33125 = state_33107;
(statearr_33125[(9)] = inst_33093__$1);

return statearr_33125;
})();
if(inst_33095){
var statearr_33127_34929 = state_33107__$1;
(statearr_33127_34929[(1)] = (8));

} else {
var statearr_33128_34931 = state_33107__$1;
(statearr_33128_34931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (3))){
var inst_33105 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33107__$1,inst_33105);
} else {
if((state_val_33108 === (2))){
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33107__$1,(4),ch);
} else {
if((state_val_33108 === (9))){
var inst_33093 = (state_33107[(9)]);
var inst_33084 = inst_33093;
var state_33107__$1 = (function (){var statearr_33132 = state_33107;
(statearr_33132[(7)] = inst_33084);

return statearr_33132;
})();
var statearr_33133_34933 = state_33107__$1;
(statearr_33133_34933[(2)] = null);

(statearr_33133_34933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (5))){
var inst_33084 = (state_33107[(7)]);
var state_33107__$1 = state_33107;
var statearr_33135_34934 = state_33107__$1;
(statearr_33135_34934[(2)] = inst_33084);

(statearr_33135_34934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (10))){
var inst_33101 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33137_34936 = state_33107__$1;
(statearr_33137_34936[(2)] = inst_33101);

(statearr_33137_34936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (8))){
var inst_33093 = (state_33107[(9)]);
var inst_33097 = cljs.core.deref(inst_33093);
var state_33107__$1 = state_33107;
var statearr_33140_34937 = state_33107__$1;
(statearr_33140_34937[(2)] = inst_33097);

(statearr_33140_34937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31973__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31973__auto____0 = (function (){
var statearr_33142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33142[(0)] = cljs$core$async$reduce_$_state_machine__31973__auto__);

(statearr_33142[(1)] = (1));

return statearr_33142;
});
var cljs$core$async$reduce_$_state_machine__31973__auto____1 = (function (state_33107){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_33107);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e33145){var ex__31976__auto__ = e33145;
var statearr_33147_34939 = state_33107;
(statearr_33147_34939[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_33107[(4)]))){
var statearr_33148_34940 = state_33107;
(statearr_33148_34940[(1)] = cljs.core.first((state_33107[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_33107;
state_33107 = G__34941;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31973__auto__ = function(state_33107){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31973__auto____1.call(this,state_33107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31973__auto____0;
cljs$core$async$reduce_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31973__auto____1;
return cljs$core$async$reduce_$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_33152 = f__32514__auto__();
(statearr_33152[(6)] = c__32513__auto__);

return statearr_33152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));

return c__32513__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_33163){
var state_val_33164 = (state_33163[(1)]);
if((state_val_33164 === (1))){
var inst_33157 = cljs.core.async.reduce(f__$1,init,ch);
var state_33163__$1 = state_33163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33163__$1,(2),inst_33157);
} else {
if((state_val_33164 === (2))){
var inst_33159 = (state_33163[(2)]);
var inst_33160 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33159) : f__$1.call(null,inst_33159));
var state_33163__$1 = state_33163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33163__$1,inst_33160);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31973__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31973__auto____0 = (function (){
var statearr_33169 = [null,null,null,null,null,null,null];
(statearr_33169[(0)] = cljs$core$async$transduce_$_state_machine__31973__auto__);

(statearr_33169[(1)] = (1));

return statearr_33169;
});
var cljs$core$async$transduce_$_state_machine__31973__auto____1 = (function (state_33163){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_33163);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e33170){var ex__31976__auto__ = e33170;
var statearr_33172_34943 = state_33163;
(statearr_33172_34943[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_33163[(4)]))){
var statearr_33173_34944 = state_33163;
(statearr_33173_34944[(1)] = cljs.core.first((state_33163[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34945 = state_33163;
state_33163 = G__34945;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31973__auto__ = function(state_33163){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31973__auto____1.call(this,state_33163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31973__auto____0;
cljs$core$async$transduce_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31973__auto____1;
return cljs$core$async$transduce_$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_33177 = f__32514__auto__();
(statearr_33177[(6)] = c__32513__auto__);

return statearr_33177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));

return c__32513__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33182 = arguments.length;
switch (G__33182) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_33212){
var state_val_33213 = (state_33212[(1)]);
if((state_val_33213 === (7))){
var inst_33194 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33219_34955 = state_33212__$1;
(statearr_33219_34955[(2)] = inst_33194);

(statearr_33219_34955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (1))){
var inst_33187 = cljs.core.seq(coll);
var inst_33188 = inst_33187;
var state_33212__$1 = (function (){var statearr_33220 = state_33212;
(statearr_33220[(7)] = inst_33188);

return statearr_33220;
})();
var statearr_33221_34960 = state_33212__$1;
(statearr_33221_34960[(2)] = null);

(statearr_33221_34960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (4))){
var inst_33188 = (state_33212[(7)]);
var inst_33192 = cljs.core.first(inst_33188);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33212__$1,(7),ch,inst_33192);
} else {
if((state_val_33213 === (13))){
var inst_33206 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33222_34964 = state_33212__$1;
(statearr_33222_34964[(2)] = inst_33206);

(statearr_33222_34964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (6))){
var inst_33197 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
if(cljs.core.truth_(inst_33197)){
var statearr_33227_34965 = state_33212__$1;
(statearr_33227_34965[(1)] = (8));

} else {
var statearr_33228_34967 = state_33212__$1;
(statearr_33228_34967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (3))){
var inst_33210 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33212__$1,inst_33210);
} else {
if((state_val_33213 === (12))){
var state_33212__$1 = state_33212;
var statearr_33234_34969 = state_33212__$1;
(statearr_33234_34969[(2)] = null);

(statearr_33234_34969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (2))){
var inst_33188 = (state_33212[(7)]);
var state_33212__$1 = state_33212;
if(cljs.core.truth_(inst_33188)){
var statearr_33235_34970 = state_33212__$1;
(statearr_33235_34970[(1)] = (4));

} else {
var statearr_33236_34971 = state_33212__$1;
(statearr_33236_34971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (11))){
var inst_33203 = cljs.core.async.close_BANG_(ch);
var state_33212__$1 = state_33212;
var statearr_33237_34972 = state_33212__$1;
(statearr_33237_34972[(2)] = inst_33203);

(statearr_33237_34972[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (9))){
var state_33212__$1 = state_33212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33238_34980 = state_33212__$1;
(statearr_33238_34980[(1)] = (11));

} else {
var statearr_33239_34981 = state_33212__$1;
(statearr_33239_34981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (5))){
var inst_33188 = (state_33212[(7)]);
var state_33212__$1 = state_33212;
var statearr_33240_34982 = state_33212__$1;
(statearr_33240_34982[(2)] = inst_33188);

(statearr_33240_34982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (10))){
var inst_33208 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33245_34984 = state_33212__$1;
(statearr_33245_34984[(2)] = inst_33208);

(statearr_33245_34984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (8))){
var inst_33188 = (state_33212[(7)]);
var inst_33199 = cljs.core.next(inst_33188);
var inst_33188__$1 = inst_33199;
var state_33212__$1 = (function (){var statearr_33249 = state_33212;
(statearr_33249[(7)] = inst_33188__$1);

return statearr_33249;
})();
var statearr_33250_34985 = state_33212__$1;
(statearr_33250_34985[(2)] = null);

(statearr_33250_34985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_33252 = [null,null,null,null,null,null,null,null];
(statearr_33252[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_33252[(1)] = (1));

return statearr_33252;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_33212){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_33212);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e33253){var ex__31976__auto__ = e33253;
var statearr_33254_34989 = state_33212;
(statearr_33254_34989[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_33212[(4)]))){
var statearr_33255_34994 = state_33212;
(statearr_33255_34994[(1)] = cljs.core.first((state_33212[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34995 = state_33212;
state_33212 = G__34995;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_33212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_33212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_33260 = f__32514__auto__();
(statearr_33260[(6)] = c__32513__auto__);

return statearr_33260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));

return c__32513__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33266 = arguments.length;
switch (G__33266) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35002 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35002(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35007 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35007(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35012 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35012(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35016 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35016(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33292 = (function (ch,cs,meta33293){
this.ch = ch;
this.cs = cs;
this.meta33293 = meta33293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33294,meta33293__$1){
var self__ = this;
var _33294__$1 = this;
return (new cljs.core.async.t_cljs$core$async33292(self__.ch,self__.cs,meta33293__$1));
}));

(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33294){
var self__ = this;
var _33294__$1 = this;
return self__.meta33293;
}));

(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33293","meta33293",-2115481665,null)], null);
}));

(cljs.core.async.t_cljs$core$async33292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33292");

(cljs.core.async.t_cljs$core$async33292.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33292.
 */
cljs.core.async.__GT_t_cljs$core$async33292 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33292(ch__$1,cs__$1,meta33293){
return (new cljs.core.async.t_cljs$core$async33292(ch__$1,cs__$1,meta33293));
});

}

return (new cljs.core.async.t_cljs$core$async33292(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32513__auto___35044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_33449){
var state_val_33450 = (state_33449[(1)]);
if((state_val_33450 === (7))){
var inst_33445 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33459_35049 = state_33449__$1;
(statearr_33459_35049[(2)] = inst_33445);

(statearr_33459_35049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (20))){
var inst_33345 = (state_33449[(7)]);
var inst_33360 = cljs.core.first(inst_33345);
var inst_33361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33360,(0),null);
var inst_33362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33360,(1),null);
var state_33449__$1 = (function (){var statearr_33460 = state_33449;
(statearr_33460[(8)] = inst_33361);

return statearr_33460;
})();
if(cljs.core.truth_(inst_33362)){
var statearr_33461_35053 = state_33449__$1;
(statearr_33461_35053[(1)] = (22));

} else {
var statearr_33462_35054 = state_33449__$1;
(statearr_33462_35054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (27))){
var inst_33310 = (state_33449[(9)]);
var inst_33391 = (state_33449[(10)]);
var inst_33398 = (state_33449[(11)]);
var inst_33393 = (state_33449[(12)]);
var inst_33398__$1 = cljs.core._nth(inst_33391,inst_33393);
var inst_33399 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33398__$1,inst_33310,done);
var state_33449__$1 = (function (){var statearr_33467 = state_33449;
(statearr_33467[(11)] = inst_33398__$1);

return statearr_33467;
})();
if(cljs.core.truth_(inst_33399)){
var statearr_33468_35055 = state_33449__$1;
(statearr_33468_35055[(1)] = (30));

} else {
var statearr_33469_35056 = state_33449__$1;
(statearr_33469_35056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (1))){
var state_33449__$1 = state_33449;
var statearr_33470_35065 = state_33449__$1;
(statearr_33470_35065[(2)] = null);

(statearr_33470_35065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (24))){
var inst_33345 = (state_33449[(7)]);
var inst_33368 = (state_33449[(2)]);
var inst_33369 = cljs.core.next(inst_33345);
var inst_33319 = inst_33369;
var inst_33320 = null;
var inst_33321 = (0);
var inst_33322 = (0);
var state_33449__$1 = (function (){var statearr_33474 = state_33449;
(statearr_33474[(13)] = inst_33319);

(statearr_33474[(14)] = inst_33368);

(statearr_33474[(15)] = inst_33320);

(statearr_33474[(16)] = inst_33321);

(statearr_33474[(17)] = inst_33322);

return statearr_33474;
})();
var statearr_33476_35075 = state_33449__$1;
(statearr_33476_35075[(2)] = null);

(statearr_33476_35075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (39))){
var state_33449__$1 = state_33449;
var statearr_33480_35076 = state_33449__$1;
(statearr_33480_35076[(2)] = null);

(statearr_33480_35076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (4))){
var inst_33310 = (state_33449[(9)]);
var inst_33310__$1 = (state_33449[(2)]);
var inst_33311 = (inst_33310__$1 == null);
var state_33449__$1 = (function (){var statearr_33484 = state_33449;
(statearr_33484[(9)] = inst_33310__$1);

return statearr_33484;
})();
if(cljs.core.truth_(inst_33311)){
var statearr_33485_35085 = state_33449__$1;
(statearr_33485_35085[(1)] = (5));

} else {
var statearr_33487_35087 = state_33449__$1;
(statearr_33487_35087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (15))){
var inst_33319 = (state_33449[(13)]);
var inst_33320 = (state_33449[(15)]);
var inst_33321 = (state_33449[(16)]);
var inst_33322 = (state_33449[(17)]);
var inst_33341 = (state_33449[(2)]);
var inst_33342 = (inst_33322 + (1));
var tmp33477 = inst_33319;
var tmp33478 = inst_33320;
var tmp33479 = inst_33321;
var inst_33319__$1 = tmp33477;
var inst_33320__$1 = tmp33478;
var inst_33321__$1 = tmp33479;
var inst_33322__$1 = inst_33342;
var state_33449__$1 = (function (){var statearr_33488 = state_33449;
(statearr_33488[(13)] = inst_33319__$1);

(statearr_33488[(18)] = inst_33341);

(statearr_33488[(15)] = inst_33320__$1);

(statearr_33488[(16)] = inst_33321__$1);

(statearr_33488[(17)] = inst_33322__$1);

return statearr_33488;
})();
var statearr_33489_35103 = state_33449__$1;
(statearr_33489_35103[(2)] = null);

(statearr_33489_35103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (21))){
var inst_33372 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33493_35104 = state_33449__$1;
(statearr_33493_35104[(2)] = inst_33372);

(statearr_33493_35104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (31))){
var inst_33398 = (state_33449[(11)]);
var inst_33402 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33398);
var state_33449__$1 = state_33449;
var statearr_33494_35105 = state_33449__$1;
(statearr_33494_35105[(2)] = inst_33402);

(statearr_33494_35105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (32))){
var inst_33392 = (state_33449[(19)]);
var inst_33391 = (state_33449[(10)]);
var inst_33390 = (state_33449[(20)]);
var inst_33393 = (state_33449[(12)]);
var inst_33404 = (state_33449[(2)]);
var inst_33406 = (inst_33393 + (1));
var tmp33490 = inst_33392;
var tmp33491 = inst_33391;
var tmp33492 = inst_33390;
var inst_33390__$1 = tmp33492;
var inst_33391__$1 = tmp33491;
var inst_33392__$1 = tmp33490;
var inst_33393__$1 = inst_33406;
var state_33449__$1 = (function (){var statearr_33495 = state_33449;
(statearr_33495[(21)] = inst_33404);

(statearr_33495[(19)] = inst_33392__$1);

(statearr_33495[(10)] = inst_33391__$1);

(statearr_33495[(20)] = inst_33390__$1);

(statearr_33495[(12)] = inst_33393__$1);

return statearr_33495;
})();
var statearr_33496_35114 = state_33449__$1;
(statearr_33496_35114[(2)] = null);

(statearr_33496_35114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (40))){
var inst_33418 = (state_33449[(22)]);
var inst_33422 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33418);
var state_33449__$1 = state_33449;
var statearr_33501_35119 = state_33449__$1;
(statearr_33501_35119[(2)] = inst_33422);

(statearr_33501_35119[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (33))){
var inst_33409 = (state_33449[(23)]);
var inst_33411 = cljs.core.chunked_seq_QMARK_(inst_33409);
var state_33449__$1 = state_33449;
if(inst_33411){
var statearr_33502_35123 = state_33449__$1;
(statearr_33502_35123[(1)] = (36));

} else {
var statearr_33503_35128 = state_33449__$1;
(statearr_33503_35128[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (13))){
var inst_33334 = (state_33449[(24)]);
var inst_33338 = cljs.core.async.close_BANG_(inst_33334);
var state_33449__$1 = state_33449;
var statearr_33504_35132 = state_33449__$1;
(statearr_33504_35132[(2)] = inst_33338);

(statearr_33504_35132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (22))){
var inst_33361 = (state_33449[(8)]);
var inst_33365 = cljs.core.async.close_BANG_(inst_33361);
var state_33449__$1 = state_33449;
var statearr_33506_35133 = state_33449__$1;
(statearr_33506_35133[(2)] = inst_33365);

(statearr_33506_35133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (36))){
var inst_33409 = (state_33449[(23)]);
var inst_33413 = cljs.core.chunk_first(inst_33409);
var inst_33414 = cljs.core.chunk_rest(inst_33409);
var inst_33415 = cljs.core.count(inst_33413);
var inst_33390 = inst_33414;
var inst_33391 = inst_33413;
var inst_33392 = inst_33415;
var inst_33393 = (0);
var state_33449__$1 = (function (){var statearr_33507 = state_33449;
(statearr_33507[(19)] = inst_33392);

(statearr_33507[(10)] = inst_33391);

(statearr_33507[(20)] = inst_33390);

(statearr_33507[(12)] = inst_33393);

return statearr_33507;
})();
var statearr_33508_35142 = state_33449__$1;
(statearr_33508_35142[(2)] = null);

(statearr_33508_35142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (41))){
var inst_33409 = (state_33449[(23)]);
var inst_33424 = (state_33449[(2)]);
var inst_33425 = cljs.core.next(inst_33409);
var inst_33390 = inst_33425;
var inst_33391 = null;
var inst_33392 = (0);
var inst_33393 = (0);
var state_33449__$1 = (function (){var statearr_33509 = state_33449;
(statearr_33509[(19)] = inst_33392);

(statearr_33509[(10)] = inst_33391);

(statearr_33509[(20)] = inst_33390);

(statearr_33509[(25)] = inst_33424);

(statearr_33509[(12)] = inst_33393);

return statearr_33509;
})();
var statearr_33510_35147 = state_33449__$1;
(statearr_33510_35147[(2)] = null);

(statearr_33510_35147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (43))){
var state_33449__$1 = state_33449;
var statearr_33511_35148 = state_33449__$1;
(statearr_33511_35148[(2)] = null);

(statearr_33511_35148[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (29))){
var inst_33433 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33512_35149 = state_33449__$1;
(statearr_33512_35149[(2)] = inst_33433);

(statearr_33512_35149[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (44))){
var inst_33442 = (state_33449[(2)]);
var state_33449__$1 = (function (){var statearr_33513 = state_33449;
(statearr_33513[(26)] = inst_33442);

return statearr_33513;
})();
var statearr_33514_35150 = state_33449__$1;
(statearr_33514_35150[(2)] = null);

(statearr_33514_35150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (6))){
var inst_33382 = (state_33449[(27)]);
var inst_33381 = cljs.core.deref(cs);
var inst_33382__$1 = cljs.core.keys(inst_33381);
var inst_33383 = cljs.core.count(inst_33382__$1);
var inst_33384 = cljs.core.reset_BANG_(dctr,inst_33383);
var inst_33389 = cljs.core.seq(inst_33382__$1);
var inst_33390 = inst_33389;
var inst_33391 = null;
var inst_33392 = (0);
var inst_33393 = (0);
var state_33449__$1 = (function (){var statearr_33515 = state_33449;
(statearr_33515[(19)] = inst_33392);

(statearr_33515[(10)] = inst_33391);

(statearr_33515[(28)] = inst_33384);

(statearr_33515[(20)] = inst_33390);

(statearr_33515[(12)] = inst_33393);

(statearr_33515[(27)] = inst_33382__$1);

return statearr_33515;
})();
var statearr_33517_35152 = state_33449__$1;
(statearr_33517_35152[(2)] = null);

(statearr_33517_35152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (28))){
var inst_33409 = (state_33449[(23)]);
var inst_33390 = (state_33449[(20)]);
var inst_33409__$1 = cljs.core.seq(inst_33390);
var state_33449__$1 = (function (){var statearr_33519 = state_33449;
(statearr_33519[(23)] = inst_33409__$1);

return statearr_33519;
})();
if(inst_33409__$1){
var statearr_33520_35153 = state_33449__$1;
(statearr_33520_35153[(1)] = (33));

} else {
var statearr_33521_35154 = state_33449__$1;
(statearr_33521_35154[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (25))){
var inst_33392 = (state_33449[(19)]);
var inst_33393 = (state_33449[(12)]);
var inst_33395 = (inst_33393 < inst_33392);
var inst_33396 = inst_33395;
var state_33449__$1 = state_33449;
if(cljs.core.truth_(inst_33396)){
var statearr_33522_35155 = state_33449__$1;
(statearr_33522_35155[(1)] = (27));

} else {
var statearr_33523_35156 = state_33449__$1;
(statearr_33523_35156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (34))){
var state_33449__$1 = state_33449;
var statearr_33524_35158 = state_33449__$1;
(statearr_33524_35158[(2)] = null);

(statearr_33524_35158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (17))){
var state_33449__$1 = state_33449;
var statearr_33525_35159 = state_33449__$1;
(statearr_33525_35159[(2)] = null);

(statearr_33525_35159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (3))){
var inst_33447 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33449__$1,inst_33447);
} else {
if((state_val_33450 === (12))){
var inst_33377 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33526_35160 = state_33449__$1;
(statearr_33526_35160[(2)] = inst_33377);

(statearr_33526_35160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (2))){
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33449__$1,(4),ch);
} else {
if((state_val_33450 === (23))){
var state_33449__$1 = state_33449;
var statearr_33527_35161 = state_33449__$1;
(statearr_33527_35161[(2)] = null);

(statearr_33527_35161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (35))){
var inst_33431 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33528_35162 = state_33449__$1;
(statearr_33528_35162[(2)] = inst_33431);

(statearr_33528_35162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (19))){
var inst_33345 = (state_33449[(7)]);
var inst_33349 = cljs.core.chunk_first(inst_33345);
var inst_33350 = cljs.core.chunk_rest(inst_33345);
var inst_33351 = cljs.core.count(inst_33349);
var inst_33319 = inst_33350;
var inst_33320 = inst_33349;
var inst_33321 = inst_33351;
var inst_33322 = (0);
var state_33449__$1 = (function (){var statearr_33529 = state_33449;
(statearr_33529[(13)] = inst_33319);

(statearr_33529[(15)] = inst_33320);

(statearr_33529[(16)] = inst_33321);

(statearr_33529[(17)] = inst_33322);

return statearr_33529;
})();
var statearr_33530_35163 = state_33449__$1;
(statearr_33530_35163[(2)] = null);

(statearr_33530_35163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (11))){
var inst_33319 = (state_33449[(13)]);
var inst_33345 = (state_33449[(7)]);
var inst_33345__$1 = cljs.core.seq(inst_33319);
var state_33449__$1 = (function (){var statearr_33531 = state_33449;
(statearr_33531[(7)] = inst_33345__$1);

return statearr_33531;
})();
if(inst_33345__$1){
var statearr_33532_35164 = state_33449__$1;
(statearr_33532_35164[(1)] = (16));

} else {
var statearr_33533_35165 = state_33449__$1;
(statearr_33533_35165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (9))){
var inst_33379 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33534_35167 = state_33449__$1;
(statearr_33534_35167[(2)] = inst_33379);

(statearr_33534_35167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (5))){
var inst_33317 = cljs.core.deref(cs);
var inst_33318 = cljs.core.seq(inst_33317);
var inst_33319 = inst_33318;
var inst_33320 = null;
var inst_33321 = (0);
var inst_33322 = (0);
var state_33449__$1 = (function (){var statearr_33535 = state_33449;
(statearr_33535[(13)] = inst_33319);

(statearr_33535[(15)] = inst_33320);

(statearr_33535[(16)] = inst_33321);

(statearr_33535[(17)] = inst_33322);

return statearr_33535;
})();
var statearr_33536_35168 = state_33449__$1;
(statearr_33536_35168[(2)] = null);

(statearr_33536_35168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (14))){
var state_33449__$1 = state_33449;
var statearr_33537_35169 = state_33449__$1;
(statearr_33537_35169[(2)] = null);

(statearr_33537_35169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (45))){
var inst_33439 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33538_35172 = state_33449__$1;
(statearr_33538_35172[(2)] = inst_33439);

(statearr_33538_35172[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (26))){
var inst_33382 = (state_33449[(27)]);
var inst_33435 = (state_33449[(2)]);
var inst_33436 = cljs.core.seq(inst_33382);
var state_33449__$1 = (function (){var statearr_33539 = state_33449;
(statearr_33539[(29)] = inst_33435);

return statearr_33539;
})();
if(inst_33436){
var statearr_33540_35174 = state_33449__$1;
(statearr_33540_35174[(1)] = (42));

} else {
var statearr_33541_35175 = state_33449__$1;
(statearr_33541_35175[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (16))){
var inst_33345 = (state_33449[(7)]);
var inst_33347 = cljs.core.chunked_seq_QMARK_(inst_33345);
var state_33449__$1 = state_33449;
if(inst_33347){
var statearr_33542_35176 = state_33449__$1;
(statearr_33542_35176[(1)] = (19));

} else {
var statearr_33543_35177 = state_33449__$1;
(statearr_33543_35177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (38))){
var inst_33428 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33544_35178 = state_33449__$1;
(statearr_33544_35178[(2)] = inst_33428);

(statearr_33544_35178[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (30))){
var state_33449__$1 = state_33449;
var statearr_33545_35180 = state_33449__$1;
(statearr_33545_35180[(2)] = null);

(statearr_33545_35180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (10))){
var inst_33320 = (state_33449[(15)]);
var inst_33322 = (state_33449[(17)]);
var inst_33333 = cljs.core._nth(inst_33320,inst_33322);
var inst_33334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33333,(0),null);
var inst_33335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33333,(1),null);
var state_33449__$1 = (function (){var statearr_33546 = state_33449;
(statearr_33546[(24)] = inst_33334);

return statearr_33546;
})();
if(cljs.core.truth_(inst_33335)){
var statearr_33547_35185 = state_33449__$1;
(statearr_33547_35185[(1)] = (13));

} else {
var statearr_33548_35186 = state_33449__$1;
(statearr_33548_35186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (18))){
var inst_33375 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33549_35187 = state_33449__$1;
(statearr_33549_35187[(2)] = inst_33375);

(statearr_33549_35187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (42))){
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33449__$1,(45),dchan);
} else {
if((state_val_33450 === (37))){
var inst_33409 = (state_33449[(23)]);
var inst_33310 = (state_33449[(9)]);
var inst_33418 = (state_33449[(22)]);
var inst_33418__$1 = cljs.core.first(inst_33409);
var inst_33419 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33418__$1,inst_33310,done);
var state_33449__$1 = (function (){var statearr_33550 = state_33449;
(statearr_33550[(22)] = inst_33418__$1);

return statearr_33550;
})();
if(cljs.core.truth_(inst_33419)){
var statearr_33551_35188 = state_33449__$1;
(statearr_33551_35188[(1)] = (39));

} else {
var statearr_33552_35189 = state_33449__$1;
(statearr_33552_35189[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (8))){
var inst_33321 = (state_33449[(16)]);
var inst_33322 = (state_33449[(17)]);
var inst_33324 = (inst_33322 < inst_33321);
var inst_33325 = inst_33324;
var state_33449__$1 = state_33449;
if(cljs.core.truth_(inst_33325)){
var statearr_33553_35190 = state_33449__$1;
(statearr_33553_35190[(1)] = (10));

} else {
var statearr_33554_35191 = state_33449__$1;
(statearr_33554_35191[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31973__auto__ = null;
var cljs$core$async$mult_$_state_machine__31973__auto____0 = (function (){
var statearr_33555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33555[(0)] = cljs$core$async$mult_$_state_machine__31973__auto__);

(statearr_33555[(1)] = (1));

return statearr_33555;
});
var cljs$core$async$mult_$_state_machine__31973__auto____1 = (function (state_33449){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_33449);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e33556){var ex__31976__auto__ = e33556;
var statearr_33557_35196 = state_33449;
(statearr_33557_35196[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_33449[(4)]))){
var statearr_33558_35197 = state_33449;
(statearr_33558_35197[(1)] = cljs.core.first((state_33449[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35199 = state_33449;
state_33449 = G__35199;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31973__auto__ = function(state_33449){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31973__auto____1.call(this,state_33449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31973__auto____0;
cljs$core$async$mult_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31973__auto____1;
return cljs$core$async$mult_$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_33561 = f__32514__auto__();
(statearr_33561[(6)] = c__32513__auto___35044);

return statearr_33561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33563 = arguments.length;
switch (G__33563) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35208 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35208(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35210 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35210(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35212 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35212(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35221 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35221(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35223 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35223(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35228 = arguments.length;
var i__4865__auto___35229 = (0);
while(true){
if((i__4865__auto___35229 < len__4864__auto___35228)){
args__4870__auto__.push((arguments[i__4865__auto___35229]));

var G__35230 = (i__4865__auto___35229 + (1));
i__4865__auto___35229 = G__35230;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33582){
var map__33584 = p__33582;
var map__33584__$1 = cljs.core.__destructure_map(map__33584);
var opts = map__33584__$1;
var statearr_33585_35231 = state;
(statearr_33585_35231[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33586_35235 = state;
(statearr_33586_35235[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33587_35236 = state;
(statearr_33587_35236[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33575){
var G__33576 = cljs.core.first(seq33575);
var seq33575__$1 = cljs.core.next(seq33575);
var G__33577 = cljs.core.first(seq33575__$1);
var seq33575__$2 = cljs.core.next(seq33575__$1);
var G__33578 = cljs.core.first(seq33575__$2);
var seq33575__$3 = cljs.core.next(seq33575__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33576,G__33577,G__33578,seq33575__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33610 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33611){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33611 = meta33611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33612,meta33611__$1){
var self__ = this;
var _33612__$1 = this;
return (new cljs.core.async.t_cljs$core$async33610(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33611__$1));
}));

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33612){
var self__ = this;
var _33612__$1 = this;
return self__.meta33611;
}));

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33610.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33611","meta33611",-1349870030,null)], null);
}));

(cljs.core.async.t_cljs$core$async33610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33610");

(cljs.core.async.t_cljs$core$async33610.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33610.
 */
cljs.core.async.__GT_t_cljs$core$async33610 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33610(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33611){
return (new cljs.core.async.t_cljs$core$async33610(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33611));
});

}

return (new cljs.core.async.t_cljs$core$async33610(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32513__auto___35265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_33701){
var state_val_33702 = (state_33701[(1)]);
if((state_val_33702 === (7))){
var inst_33657 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
if(cljs.core.truth_(inst_33657)){
var statearr_33706_35266 = state_33701__$1;
(statearr_33706_35266[(1)] = (8));

} else {
var statearr_33707_35267 = state_33701__$1;
(statearr_33707_35267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (20))){
var inst_33650 = (state_33701[(7)]);
var state_33701__$1 = state_33701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33701__$1,(23),out,inst_33650);
} else {
if((state_val_33702 === (1))){
var inst_33633 = calc_state();
var inst_33634 = cljs.core.__destructure_map(inst_33633);
var inst_33635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33634,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33634,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33634,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33638 = inst_33633;
var state_33701__$1 = (function (){var statearr_33709 = state_33701;
(statearr_33709[(8)] = inst_33635);

(statearr_33709[(9)] = inst_33636);

(statearr_33709[(10)] = inst_33638);

(statearr_33709[(11)] = inst_33637);

return statearr_33709;
})();
var statearr_33710_35268 = state_33701__$1;
(statearr_33710_35268[(2)] = null);

(statearr_33710_35268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (24))){
var inst_33641 = (state_33701[(12)]);
var inst_33638 = inst_33641;
var state_33701__$1 = (function (){var statearr_33711 = state_33701;
(statearr_33711[(10)] = inst_33638);

return statearr_33711;
})();
var statearr_33712_35269 = state_33701__$1;
(statearr_33712_35269[(2)] = null);

(statearr_33712_35269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (4))){
var inst_33652 = (state_33701[(13)]);
var inst_33650 = (state_33701[(7)]);
var inst_33649 = (state_33701[(2)]);
var inst_33650__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33649,(0),null);
var inst_33651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33649,(1),null);
var inst_33652__$1 = (inst_33650__$1 == null);
var state_33701__$1 = (function (){var statearr_33713 = state_33701;
(statearr_33713[(13)] = inst_33652__$1);

(statearr_33713[(7)] = inst_33650__$1);

(statearr_33713[(14)] = inst_33651);

return statearr_33713;
})();
if(cljs.core.truth_(inst_33652__$1)){
var statearr_33714_35270 = state_33701__$1;
(statearr_33714_35270[(1)] = (5));

} else {
var statearr_33715_35271 = state_33701__$1;
(statearr_33715_35271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (15))){
var inst_33672 = (state_33701[(15)]);
var inst_33642 = (state_33701[(16)]);
var inst_33672__$1 = cljs.core.empty_QMARK_(inst_33642);
var state_33701__$1 = (function (){var statearr_33716 = state_33701;
(statearr_33716[(15)] = inst_33672__$1);

return statearr_33716;
})();
if(inst_33672__$1){
var statearr_33717_35273 = state_33701__$1;
(statearr_33717_35273[(1)] = (17));

} else {
var statearr_33718_35274 = state_33701__$1;
(statearr_33718_35274[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (21))){
var inst_33641 = (state_33701[(12)]);
var inst_33638 = inst_33641;
var state_33701__$1 = (function (){var statearr_33720 = state_33701;
(statearr_33720[(10)] = inst_33638);

return statearr_33720;
})();
var statearr_33721_35275 = state_33701__$1;
(statearr_33721_35275[(2)] = null);

(statearr_33721_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (13))){
var inst_33664 = (state_33701[(2)]);
var inst_33665 = calc_state();
var inst_33638 = inst_33665;
var state_33701__$1 = (function (){var statearr_33723 = state_33701;
(statearr_33723[(17)] = inst_33664);

(statearr_33723[(10)] = inst_33638);

return statearr_33723;
})();
var statearr_33724_35281 = state_33701__$1;
(statearr_33724_35281[(2)] = null);

(statearr_33724_35281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (22))){
var inst_33695 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
var statearr_33725_35282 = state_33701__$1;
(statearr_33725_35282[(2)] = inst_33695);

(statearr_33725_35282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (6))){
var inst_33651 = (state_33701[(14)]);
var inst_33655 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33651,change);
var state_33701__$1 = state_33701;
var statearr_33726_35287 = state_33701__$1;
(statearr_33726_35287[(2)] = inst_33655);

(statearr_33726_35287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (25))){
var state_33701__$1 = state_33701;
var statearr_33728_35288 = state_33701__$1;
(statearr_33728_35288[(2)] = null);

(statearr_33728_35288[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (17))){
var inst_33643 = (state_33701[(18)]);
var inst_33651 = (state_33701[(14)]);
var inst_33674 = (inst_33643.cljs$core$IFn$_invoke$arity$1 ? inst_33643.cljs$core$IFn$_invoke$arity$1(inst_33651) : inst_33643.call(null,inst_33651));
var inst_33675 = cljs.core.not(inst_33674);
var state_33701__$1 = state_33701;
var statearr_33733_35289 = state_33701__$1;
(statearr_33733_35289[(2)] = inst_33675);

(statearr_33733_35289[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (3))){
var inst_33699 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33701__$1,inst_33699);
} else {
if((state_val_33702 === (12))){
var state_33701__$1 = state_33701;
var statearr_33734_35290 = state_33701__$1;
(statearr_33734_35290[(2)] = null);

(statearr_33734_35290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (2))){
var inst_33638 = (state_33701[(10)]);
var inst_33641 = (state_33701[(12)]);
var inst_33641__$1 = cljs.core.__destructure_map(inst_33638);
var inst_33642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33641__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33641__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33641__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33701__$1 = (function (){var statearr_33735 = state_33701;
(statearr_33735[(18)] = inst_33643);

(statearr_33735[(12)] = inst_33641__$1);

(statearr_33735[(16)] = inst_33642);

return statearr_33735;
})();
return cljs.core.async.ioc_alts_BANG_(state_33701__$1,(4),inst_33644);
} else {
if((state_val_33702 === (23))){
var inst_33686 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
if(cljs.core.truth_(inst_33686)){
var statearr_33736_35291 = state_33701__$1;
(statearr_33736_35291[(1)] = (24));

} else {
var statearr_33737_35292 = state_33701__$1;
(statearr_33737_35292[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (19))){
var inst_33678 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
var statearr_33738_35293 = state_33701__$1;
(statearr_33738_35293[(2)] = inst_33678);

(statearr_33738_35293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (11))){
var inst_33651 = (state_33701[(14)]);
var inst_33661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33651);
var state_33701__$1 = state_33701;
var statearr_33739_35299 = state_33701__$1;
(statearr_33739_35299[(2)] = inst_33661);

(statearr_33739_35299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (9))){
var inst_33668 = (state_33701[(19)]);
var inst_33651 = (state_33701[(14)]);
var inst_33642 = (state_33701[(16)]);
var inst_33668__$1 = (inst_33642.cljs$core$IFn$_invoke$arity$1 ? inst_33642.cljs$core$IFn$_invoke$arity$1(inst_33651) : inst_33642.call(null,inst_33651));
var state_33701__$1 = (function (){var statearr_33740 = state_33701;
(statearr_33740[(19)] = inst_33668__$1);

return statearr_33740;
})();
if(cljs.core.truth_(inst_33668__$1)){
var statearr_33741_35311 = state_33701__$1;
(statearr_33741_35311[(1)] = (14));

} else {
var statearr_33742_35312 = state_33701__$1;
(statearr_33742_35312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (5))){
var inst_33652 = (state_33701[(13)]);
var state_33701__$1 = state_33701;
var statearr_33743_35313 = state_33701__$1;
(statearr_33743_35313[(2)] = inst_33652);

(statearr_33743_35313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (14))){
var inst_33668 = (state_33701[(19)]);
var state_33701__$1 = state_33701;
var statearr_33744_35319 = state_33701__$1;
(statearr_33744_35319[(2)] = inst_33668);

(statearr_33744_35319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (26))){
var inst_33691 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
var statearr_33745_35320 = state_33701__$1;
(statearr_33745_35320[(2)] = inst_33691);

(statearr_33745_35320[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (16))){
var inst_33683 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
if(cljs.core.truth_(inst_33683)){
var statearr_33746_35325 = state_33701__$1;
(statearr_33746_35325[(1)] = (20));

} else {
var statearr_33747_35326 = state_33701__$1;
(statearr_33747_35326[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (10))){
var inst_33697 = (state_33701[(2)]);
var state_33701__$1 = state_33701;
var statearr_33748_35327 = state_33701__$1;
(statearr_33748_35327[(2)] = inst_33697);

(statearr_33748_35327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (18))){
var inst_33672 = (state_33701[(15)]);
var state_33701__$1 = state_33701;
var statearr_33749_35328 = state_33701__$1;
(statearr_33749_35328[(2)] = inst_33672);

(statearr_33749_35328[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33702 === (8))){
var inst_33650 = (state_33701[(7)]);
var inst_33659 = (inst_33650 == null);
var state_33701__$1 = state_33701;
if(cljs.core.truth_(inst_33659)){
var statearr_33750_35333 = state_33701__$1;
(statearr_33750_35333[(1)] = (11));

} else {
var statearr_33751_35334 = state_33701__$1;
(statearr_33751_35334[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31973__auto__ = null;
var cljs$core$async$mix_$_state_machine__31973__auto____0 = (function (){
var statearr_33757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33757[(0)] = cljs$core$async$mix_$_state_machine__31973__auto__);

(statearr_33757[(1)] = (1));

return statearr_33757;
});
var cljs$core$async$mix_$_state_machine__31973__auto____1 = (function (state_33701){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_33701);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e33759){var ex__31976__auto__ = e33759;
var statearr_33760_35335 = state_33701;
(statearr_33760_35335[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_33701[(4)]))){
var statearr_33762_35336 = state_33701;
(statearr_33762_35336[(1)] = cljs.core.first((state_33701[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35337 = state_33701;
state_33701 = G__35337;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31973__auto__ = function(state_33701){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31973__auto____1.call(this,state_33701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31973__auto____0;
cljs$core$async$mix_$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31973__auto____1;
return cljs$core$async$mix_$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_33763 = f__32514__auto__();
(statearr_33763[(6)] = c__32513__auto___35265);

return statearr_33763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35343 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35343(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35345 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35345(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35346 = (function() {
var G__35347 = null;
var G__35347__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35347__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35347 = function(p,v){
switch(arguments.length){
case 1:
return G__35347__1.call(this,p);
case 2:
return G__35347__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35347.cljs$core$IFn$_invoke$arity$1 = G__35347__1;
G__35347.cljs$core$IFn$_invoke$arity$2 = G__35347__2;
return G__35347;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33778 = arguments.length;
switch (G__33778) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35346(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35346(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33781 = arguments.length;
switch (G__33781) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33779_SHARP_){
if(cljs.core.truth_((p1__33779_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33779_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33779_SHARP_.call(null,topic)))){
return p1__33779_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33779_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33784 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33785){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33785 = meta33785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33786,meta33785__$1){
var self__ = this;
var _33786__$1 = this;
return (new cljs.core.async.t_cljs$core$async33784(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33785__$1));
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33786){
var self__ = this;
var _33786__$1 = this;
return self__.meta33785;
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33785","meta33785",1054714799,null)], null);
}));

(cljs.core.async.t_cljs$core$async33784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33784");

(cljs.core.async.t_cljs$core$async33784.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33784.
 */
cljs.core.async.__GT_t_cljs$core$async33784 = (function cljs$core$async$__GT_t_cljs$core$async33784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33785){
return (new cljs.core.async.t_cljs$core$async33784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33785));
});

}

return (new cljs.core.async.t_cljs$core$async33784(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32513__auto___35386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_33861){
var state_val_33862 = (state_33861[(1)]);
if((state_val_33862 === (7))){
var inst_33857 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
var statearr_33863_35391 = state_33861__$1;
(statearr_33863_35391[(2)] = inst_33857);

(statearr_33863_35391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (20))){
var state_33861__$1 = state_33861;
var statearr_33864_35400 = state_33861__$1;
(statearr_33864_35400[(2)] = null);

(statearr_33864_35400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (1))){
var state_33861__$1 = state_33861;
var statearr_33865_35401 = state_33861__$1;
(statearr_33865_35401[(2)] = null);

(statearr_33865_35401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (24))){
var inst_33840 = (state_33861[(7)]);
var inst_33849 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33840);
var state_33861__$1 = state_33861;
var statearr_33866_35402 = state_33861__$1;
(statearr_33866_35402[(2)] = inst_33849);

(statearr_33866_35402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (4))){
var inst_33792 = (state_33861[(8)]);
var inst_33792__$1 = (state_33861[(2)]);
var inst_33793 = (inst_33792__$1 == null);
var state_33861__$1 = (function (){var statearr_33867 = state_33861;
(statearr_33867[(8)] = inst_33792__$1);

return statearr_33867;
})();
if(cljs.core.truth_(inst_33793)){
var statearr_33868_35420 = state_33861__$1;
(statearr_33868_35420[(1)] = (5));

} else {
var statearr_33869_35427 = state_33861__$1;
(statearr_33869_35427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (15))){
var inst_33834 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
var statearr_33870_35429 = state_33861__$1;
(statearr_33870_35429[(2)] = inst_33834);

(statearr_33870_35429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (21))){
var inst_33854 = (state_33861[(2)]);
var state_33861__$1 = (function (){var statearr_33871 = state_33861;
(statearr_33871[(9)] = inst_33854);

return statearr_33871;
})();
var statearr_33872_35434 = state_33861__$1;
(statearr_33872_35434[(2)] = null);

(statearr_33872_35434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (13))){
var inst_33816 = (state_33861[(10)]);
var inst_33818 = cljs.core.chunked_seq_QMARK_(inst_33816);
var state_33861__$1 = state_33861;
if(inst_33818){
var statearr_33873_35436 = state_33861__$1;
(statearr_33873_35436[(1)] = (16));

} else {
var statearr_33874_35437 = state_33861__$1;
(statearr_33874_35437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (22))){
var inst_33846 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
if(cljs.core.truth_(inst_33846)){
var statearr_33875_35438 = state_33861__$1;
(statearr_33875_35438[(1)] = (23));

} else {
var statearr_33876_35440 = state_33861__$1;
(statearr_33876_35440[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (6))){
var inst_33792 = (state_33861[(8)]);
var inst_33840 = (state_33861[(7)]);
var inst_33842 = (state_33861[(11)]);
var inst_33840__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33792) : topic_fn.call(null,inst_33792));
var inst_33841 = cljs.core.deref(mults);
var inst_33842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33841,inst_33840__$1);
var state_33861__$1 = (function (){var statearr_33878 = state_33861;
(statearr_33878[(7)] = inst_33840__$1);

(statearr_33878[(11)] = inst_33842__$1);

return statearr_33878;
})();
if(cljs.core.truth_(inst_33842__$1)){
var statearr_33879_35450 = state_33861__$1;
(statearr_33879_35450[(1)] = (19));

} else {
var statearr_33880_35451 = state_33861__$1;
(statearr_33880_35451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (25))){
var inst_33851 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
var statearr_33881_35454 = state_33861__$1;
(statearr_33881_35454[(2)] = inst_33851);

(statearr_33881_35454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (17))){
var inst_33816 = (state_33861[(10)]);
var inst_33825 = cljs.core.first(inst_33816);
var inst_33826 = cljs.core.async.muxch_STAR_(inst_33825);
var inst_33827 = cljs.core.async.close_BANG_(inst_33826);
var inst_33828 = cljs.core.next(inst_33816);
var inst_33802 = inst_33828;
var inst_33803 = null;
var inst_33804 = (0);
var inst_33805 = (0);
var state_33861__$1 = (function (){var statearr_33882 = state_33861;
(statearr_33882[(12)] = inst_33827);

(statearr_33882[(13)] = inst_33805);

(statearr_33882[(14)] = inst_33802);

(statearr_33882[(15)] = inst_33803);

(statearr_33882[(16)] = inst_33804);

return statearr_33882;
})();
var statearr_33883_35463 = state_33861__$1;
(statearr_33883_35463[(2)] = null);

(statearr_33883_35463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (3))){
var inst_33859 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33861__$1,inst_33859);
} else {
if((state_val_33862 === (12))){
var inst_33836 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
var statearr_33884_35464 = state_33861__$1;
(statearr_33884_35464[(2)] = inst_33836);

(statearr_33884_35464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (2))){
var state_33861__$1 = state_33861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33861__$1,(4),ch);
} else {
if((state_val_33862 === (23))){
var state_33861__$1 = state_33861;
var statearr_33888_35465 = state_33861__$1;
(statearr_33888_35465[(2)] = null);

(statearr_33888_35465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (19))){
var inst_33792 = (state_33861[(8)]);
var inst_33842 = (state_33861[(11)]);
var inst_33844 = cljs.core.async.muxch_STAR_(inst_33842);
var state_33861__$1 = state_33861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33861__$1,(22),inst_33844,inst_33792);
} else {
if((state_val_33862 === (11))){
var inst_33816 = (state_33861[(10)]);
var inst_33802 = (state_33861[(14)]);
var inst_33816__$1 = cljs.core.seq(inst_33802);
var state_33861__$1 = (function (){var statearr_33889 = state_33861;
(statearr_33889[(10)] = inst_33816__$1);

return statearr_33889;
})();
if(inst_33816__$1){
var statearr_33890_35466 = state_33861__$1;
(statearr_33890_35466[(1)] = (13));

} else {
var statearr_33891_35469 = state_33861__$1;
(statearr_33891_35469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (9))){
var inst_33838 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
var statearr_33892_35470 = state_33861__$1;
(statearr_33892_35470[(2)] = inst_33838);

(statearr_33892_35470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (5))){
var inst_33799 = cljs.core.deref(mults);
var inst_33800 = cljs.core.vals(inst_33799);
var inst_33801 = cljs.core.seq(inst_33800);
var inst_33802 = inst_33801;
var inst_33803 = null;
var inst_33804 = (0);
var inst_33805 = (0);
var state_33861__$1 = (function (){var statearr_33893 = state_33861;
(statearr_33893[(13)] = inst_33805);

(statearr_33893[(14)] = inst_33802);

(statearr_33893[(15)] = inst_33803);

(statearr_33893[(16)] = inst_33804);

return statearr_33893;
})();
var statearr_33898_35474 = state_33861__$1;
(statearr_33898_35474[(2)] = null);

(statearr_33898_35474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (14))){
var state_33861__$1 = state_33861;
var statearr_33902_35475 = state_33861__$1;
(statearr_33902_35475[(2)] = null);

(statearr_33902_35475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (16))){
var inst_33816 = (state_33861[(10)]);
var inst_33820 = cljs.core.chunk_first(inst_33816);
var inst_33821 = cljs.core.chunk_rest(inst_33816);
var inst_33822 = cljs.core.count(inst_33820);
var inst_33802 = inst_33821;
var inst_33803 = inst_33820;
var inst_33804 = inst_33822;
var inst_33805 = (0);
var state_33861__$1 = (function (){var statearr_33903 = state_33861;
(statearr_33903[(13)] = inst_33805);

(statearr_33903[(14)] = inst_33802);

(statearr_33903[(15)] = inst_33803);

(statearr_33903[(16)] = inst_33804);

return statearr_33903;
})();
var statearr_33904_35476 = state_33861__$1;
(statearr_33904_35476[(2)] = null);

(statearr_33904_35476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (10))){
var inst_33805 = (state_33861[(13)]);
var inst_33802 = (state_33861[(14)]);
var inst_33803 = (state_33861[(15)]);
var inst_33804 = (state_33861[(16)]);
var inst_33810 = cljs.core._nth(inst_33803,inst_33805);
var inst_33811 = cljs.core.async.muxch_STAR_(inst_33810);
var inst_33812 = cljs.core.async.close_BANG_(inst_33811);
var inst_33813 = (inst_33805 + (1));
var tmp33899 = inst_33802;
var tmp33900 = inst_33803;
var tmp33901 = inst_33804;
var inst_33802__$1 = tmp33899;
var inst_33803__$1 = tmp33900;
var inst_33804__$1 = tmp33901;
var inst_33805__$1 = inst_33813;
var state_33861__$1 = (function (){var statearr_33905 = state_33861;
(statearr_33905[(13)] = inst_33805__$1);

(statearr_33905[(14)] = inst_33802__$1);

(statearr_33905[(17)] = inst_33812);

(statearr_33905[(15)] = inst_33803__$1);

(statearr_33905[(16)] = inst_33804__$1);

return statearr_33905;
})();
var statearr_33906_35481 = state_33861__$1;
(statearr_33906_35481[(2)] = null);

(statearr_33906_35481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (18))){
var inst_33831 = (state_33861[(2)]);
var state_33861__$1 = state_33861;
var statearr_33907_35482 = state_33861__$1;
(statearr_33907_35482[(2)] = inst_33831);

(statearr_33907_35482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (8))){
var inst_33805 = (state_33861[(13)]);
var inst_33804 = (state_33861[(16)]);
var inst_33807 = (inst_33805 < inst_33804);
var inst_33808 = inst_33807;
var state_33861__$1 = state_33861;
if(cljs.core.truth_(inst_33808)){
var statearr_33908_35483 = state_33861__$1;
(statearr_33908_35483[(1)] = (10));

} else {
var statearr_33909_35484 = state_33861__$1;
(statearr_33909_35484[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_33910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33910[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_33910[(1)] = (1));

return statearr_33910;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_33861){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_33861);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e33911){var ex__31976__auto__ = e33911;
var statearr_33912_35486 = state_33861;
(statearr_33912_35486[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_33861[(4)]))){
var statearr_33913_35489 = state_33861;
(statearr_33913_35489[(1)] = cljs.core.first((state_33861[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35490 = state_33861;
state_33861 = G__35490;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_33861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_33861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_33914 = f__32514__auto__();
(statearr_33914[(6)] = c__32513__auto___35386);

return statearr_33914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33924 = arguments.length;
switch (G__33924) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33952 = arguments.length;
switch (G__33952) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33962 = arguments.length;
switch (G__33962) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32513__auto___35494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34009){
var state_val_34010 = (state_34009[(1)]);
if((state_val_34010 === (7))){
var state_34009__$1 = state_34009;
var statearr_34011_35496 = state_34009__$1;
(statearr_34011_35496[(2)] = null);

(statearr_34011_35496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (1))){
var state_34009__$1 = state_34009;
var statearr_34012_35498 = state_34009__$1;
(statearr_34012_35498[(2)] = null);

(statearr_34012_35498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (4))){
var inst_33970 = (state_34009[(7)]);
var inst_33969 = (state_34009[(8)]);
var inst_33972 = (inst_33970 < inst_33969);
var state_34009__$1 = state_34009;
if(cljs.core.truth_(inst_33972)){
var statearr_34013_35503 = state_34009__$1;
(statearr_34013_35503[(1)] = (6));

} else {
var statearr_34014_35504 = state_34009__$1;
(statearr_34014_35504[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (15))){
var inst_33995 = (state_34009[(9)]);
var inst_34000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33995);
var state_34009__$1 = state_34009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34009__$1,(17),out,inst_34000);
} else {
if((state_val_34010 === (13))){
var inst_33995 = (state_34009[(9)]);
var inst_33995__$1 = (state_34009[(2)]);
var inst_33996 = cljs.core.some(cljs.core.nil_QMARK_,inst_33995__$1);
var state_34009__$1 = (function (){var statearr_34015 = state_34009;
(statearr_34015[(9)] = inst_33995__$1);

return statearr_34015;
})();
if(cljs.core.truth_(inst_33996)){
var statearr_34016_35505 = state_34009__$1;
(statearr_34016_35505[(1)] = (14));

} else {
var statearr_34017_35506 = state_34009__$1;
(statearr_34017_35506[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (6))){
var state_34009__$1 = state_34009;
var statearr_34018_35510 = state_34009__$1;
(statearr_34018_35510[(2)] = null);

(statearr_34018_35510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (17))){
var inst_34002 = (state_34009[(2)]);
var state_34009__$1 = (function (){var statearr_34020 = state_34009;
(statearr_34020[(10)] = inst_34002);

return statearr_34020;
})();
var statearr_34021_35511 = state_34009__$1;
(statearr_34021_35511[(2)] = null);

(statearr_34021_35511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (3))){
var inst_34007 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34009__$1,inst_34007);
} else {
if((state_val_34010 === (12))){
var _ = (function (){var statearr_34022 = state_34009;
(statearr_34022[(4)] = cljs.core.rest((state_34009[(4)])));

return statearr_34022;
})();
var state_34009__$1 = state_34009;
var ex34019 = (state_34009__$1[(2)]);
var statearr_34023_35512 = state_34009__$1;
(statearr_34023_35512[(5)] = ex34019);


if((ex34019 instanceof Object)){
var statearr_34024_35513 = state_34009__$1;
(statearr_34024_35513[(1)] = (11));

(statearr_34024_35513[(5)] = null);

} else {
throw ex34019;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (2))){
var inst_33965 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33969 = cnt;
var inst_33970 = (0);
var state_34009__$1 = (function (){var statearr_34025 = state_34009;
(statearr_34025[(11)] = inst_33965);

(statearr_34025[(7)] = inst_33970);

(statearr_34025[(8)] = inst_33969);

return statearr_34025;
})();
var statearr_34026_35514 = state_34009__$1;
(statearr_34026_35514[(2)] = null);

(statearr_34026_35514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (11))){
var inst_33974 = (state_34009[(2)]);
var inst_33975 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34009__$1 = (function (){var statearr_34027 = state_34009;
(statearr_34027[(12)] = inst_33974);

return statearr_34027;
})();
var statearr_34028_35515 = state_34009__$1;
(statearr_34028_35515[(2)] = inst_33975);

(statearr_34028_35515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (9))){
var inst_33970 = (state_34009[(7)]);
var _ = (function (){var statearr_34030 = state_34009;
(statearr_34030[(4)] = cljs.core.cons((12),(state_34009[(4)])));

return statearr_34030;
})();
var inst_33981 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33970) : chs__$1.call(null,inst_33970));
var inst_33982 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33970) : done.call(null,inst_33970));
var inst_33983 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33981,inst_33982);
var ___$1 = (function (){var statearr_34038 = state_34009;
(statearr_34038[(4)] = cljs.core.rest((state_34009[(4)])));

return statearr_34038;
})();
var state_34009__$1 = state_34009;
var statearr_34039_35516 = state_34009__$1;
(statearr_34039_35516[(2)] = inst_33983);

(statearr_34039_35516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (5))){
var inst_33993 = (state_34009[(2)]);
var state_34009__$1 = (function (){var statearr_34043 = state_34009;
(statearr_34043[(13)] = inst_33993);

return statearr_34043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34009__$1,(13),dchan);
} else {
if((state_val_34010 === (14))){
var inst_33998 = cljs.core.async.close_BANG_(out);
var state_34009__$1 = state_34009;
var statearr_34044_35517 = state_34009__$1;
(statearr_34044_35517[(2)] = inst_33998);

(statearr_34044_35517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (16))){
var inst_34005 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34045_35518 = state_34009__$1;
(statearr_34045_35518[(2)] = inst_34005);

(statearr_34045_35518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (10))){
var inst_33970 = (state_34009[(7)]);
var inst_33986 = (state_34009[(2)]);
var inst_33987 = (inst_33970 + (1));
var inst_33970__$1 = inst_33987;
var state_34009__$1 = (function (){var statearr_34046 = state_34009;
(statearr_34046[(14)] = inst_33986);

(statearr_34046[(7)] = inst_33970__$1);

return statearr_34046;
})();
var statearr_34047_35519 = state_34009__$1;
(statearr_34047_35519[(2)] = null);

(statearr_34047_35519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (8))){
var inst_33991 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34048_35520 = state_34009__$1;
(statearr_34048_35520[(2)] = inst_33991);

(statearr_34048_35520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_34049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34049[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_34049[(1)] = (1));

return statearr_34049;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_34009){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34009);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34050){var ex__31976__auto__ = e34050;
var statearr_34051_35521 = state_34009;
(statearr_34051_35521[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34009[(4)]))){
var statearr_34052_35522 = state_34009;
(statearr_34052_35522[(1)] = cljs.core.first((state_34009[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35524 = state_34009;
state_34009 = G__35524;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_34009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_34009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34053 = f__32514__auto__();
(statearr_34053[(6)] = c__32513__auto___35494);

return statearr_34053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34056 = arguments.length;
switch (G__34056) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32513__auto___35532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34089){
var state_val_34090 = (state_34089[(1)]);
if((state_val_34090 === (7))){
var inst_34068 = (state_34089[(7)]);
var inst_34067 = (state_34089[(8)]);
var inst_34067__$1 = (state_34089[(2)]);
var inst_34068__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34067__$1,(0),null);
var inst_34069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34067__$1,(1),null);
var inst_34070 = (inst_34068__$1 == null);
var state_34089__$1 = (function (){var statearr_34094 = state_34089;
(statearr_34094[(7)] = inst_34068__$1);

(statearr_34094[(9)] = inst_34069);

(statearr_34094[(8)] = inst_34067__$1);

return statearr_34094;
})();
if(cljs.core.truth_(inst_34070)){
var statearr_34096_35534 = state_34089__$1;
(statearr_34096_35534[(1)] = (8));

} else {
var statearr_34097_35536 = state_34089__$1;
(statearr_34097_35536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (1))){
var inst_34057 = cljs.core.vec(chs);
var inst_34058 = inst_34057;
var state_34089__$1 = (function (){var statearr_34099 = state_34089;
(statearr_34099[(10)] = inst_34058);

return statearr_34099;
})();
var statearr_34100_35537 = state_34089__$1;
(statearr_34100_35537[(2)] = null);

(statearr_34100_35537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (4))){
var inst_34058 = (state_34089[(10)]);
var state_34089__$1 = state_34089;
return cljs.core.async.ioc_alts_BANG_(state_34089__$1,(7),inst_34058);
} else {
if((state_val_34090 === (6))){
var inst_34084 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34101_35538 = state_34089__$1;
(statearr_34101_35538[(2)] = inst_34084);

(statearr_34101_35538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (3))){
var inst_34086 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34089__$1,inst_34086);
} else {
if((state_val_34090 === (2))){
var inst_34058 = (state_34089[(10)]);
var inst_34060 = cljs.core.count(inst_34058);
var inst_34061 = (inst_34060 > (0));
var state_34089__$1 = state_34089;
if(cljs.core.truth_(inst_34061)){
var statearr_34105_35539 = state_34089__$1;
(statearr_34105_35539[(1)] = (4));

} else {
var statearr_34106_35540 = state_34089__$1;
(statearr_34106_35540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (11))){
var inst_34058 = (state_34089[(10)]);
var inst_34077 = (state_34089[(2)]);
var tmp34103 = inst_34058;
var inst_34058__$1 = tmp34103;
var state_34089__$1 = (function (){var statearr_34107 = state_34089;
(statearr_34107[(11)] = inst_34077);

(statearr_34107[(10)] = inst_34058__$1);

return statearr_34107;
})();
var statearr_34108_35541 = state_34089__$1;
(statearr_34108_35541[(2)] = null);

(statearr_34108_35541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (9))){
var inst_34068 = (state_34089[(7)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34089__$1,(11),out,inst_34068);
} else {
if((state_val_34090 === (5))){
var inst_34082 = cljs.core.async.close_BANG_(out);
var state_34089__$1 = state_34089;
var statearr_34109_35547 = state_34089__$1;
(statearr_34109_35547[(2)] = inst_34082);

(statearr_34109_35547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (10))){
var inst_34080 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34110_35548 = state_34089__$1;
(statearr_34110_35548[(2)] = inst_34080);

(statearr_34110_35548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (8))){
var inst_34068 = (state_34089[(7)]);
var inst_34069 = (state_34089[(9)]);
var inst_34058 = (state_34089[(10)]);
var inst_34067 = (state_34089[(8)]);
var inst_34072 = (function (){var cs = inst_34058;
var vec__34063 = inst_34067;
var v = inst_34068;
var c = inst_34069;
return (function (p1__34054_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34054_SHARP_);
});
})();
var inst_34073 = cljs.core.filterv(inst_34072,inst_34058);
var inst_34058__$1 = inst_34073;
var state_34089__$1 = (function (){var statearr_34111 = state_34089;
(statearr_34111[(10)] = inst_34058__$1);

return statearr_34111;
})();
var statearr_34112_35550 = state_34089__$1;
(statearr_34112_35550[(2)] = null);

(statearr_34112_35550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_34113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34113[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_34113[(1)] = (1));

return statearr_34113;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_34089){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34089);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34114){var ex__31976__auto__ = e34114;
var statearr_34115_35551 = state_34089;
(statearr_34115_35551[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34089[(4)]))){
var statearr_34116_35552 = state_34089;
(statearr_34116_35552[(1)] = cljs.core.first((state_34089[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35553 = state_34089;
state_34089 = G__35553;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_34089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_34089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34120 = f__32514__auto__();
(statearr_34120[(6)] = c__32513__auto___35532);

return statearr_34120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34122 = arguments.length;
switch (G__34122) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32513__auto___35555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34159){
var state_val_34160 = (state_34159[(1)]);
if((state_val_34160 === (7))){
var inst_34138 = (state_34159[(7)]);
var inst_34138__$1 = (state_34159[(2)]);
var inst_34139 = (inst_34138__$1 == null);
var inst_34140 = cljs.core.not(inst_34139);
var state_34159__$1 = (function (){var statearr_34161 = state_34159;
(statearr_34161[(7)] = inst_34138__$1);

return statearr_34161;
})();
if(inst_34140){
var statearr_34166_35556 = state_34159__$1;
(statearr_34166_35556[(1)] = (8));

} else {
var statearr_34170_35557 = state_34159__$1;
(statearr_34170_35557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (1))){
var inst_34130 = (0);
var state_34159__$1 = (function (){var statearr_34171 = state_34159;
(statearr_34171[(8)] = inst_34130);

return statearr_34171;
})();
var statearr_34175_35558 = state_34159__$1;
(statearr_34175_35558[(2)] = null);

(statearr_34175_35558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (4))){
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34159__$1,(7),ch);
} else {
if((state_val_34160 === (6))){
var inst_34154 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34176_35559 = state_34159__$1;
(statearr_34176_35559[(2)] = inst_34154);

(statearr_34176_35559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (3))){
var inst_34156 = (state_34159[(2)]);
var inst_34157 = cljs.core.async.close_BANG_(out);
var state_34159__$1 = (function (){var statearr_34180 = state_34159;
(statearr_34180[(9)] = inst_34156);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34159__$1,inst_34157);
} else {
if((state_val_34160 === (2))){
var inst_34130 = (state_34159[(8)]);
var inst_34135 = (inst_34130 < n);
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34135)){
var statearr_34188_35560 = state_34159__$1;
(statearr_34188_35560[(1)] = (4));

} else {
var statearr_34189_35561 = state_34159__$1;
(statearr_34189_35561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (11))){
var inst_34130 = (state_34159[(8)]);
var inst_34143 = (state_34159[(2)]);
var inst_34144 = (inst_34130 + (1));
var inst_34130__$1 = inst_34144;
var state_34159__$1 = (function (){var statearr_34193 = state_34159;
(statearr_34193[(8)] = inst_34130__$1);

(statearr_34193[(10)] = inst_34143);

return statearr_34193;
})();
var statearr_34194_35562 = state_34159__$1;
(statearr_34194_35562[(2)] = null);

(statearr_34194_35562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (9))){
var state_34159__$1 = state_34159;
var statearr_34199_35563 = state_34159__$1;
(statearr_34199_35563[(2)] = null);

(statearr_34199_35563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (5))){
var state_34159__$1 = state_34159;
var statearr_34200_35567 = state_34159__$1;
(statearr_34200_35567[(2)] = null);

(statearr_34200_35567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (10))){
var inst_34151 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34201_35568 = state_34159__$1;
(statearr_34201_35568[(2)] = inst_34151);

(statearr_34201_35568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (8))){
var inst_34138 = (state_34159[(7)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34159__$1,(11),out,inst_34138);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_34204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34204[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_34204[(1)] = (1));

return statearr_34204;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_34159){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34159);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34205){var ex__31976__auto__ = e34205;
var statearr_34206_35571 = state_34159;
(statearr_34206_35571[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34159[(4)]))){
var statearr_34207_35573 = state_34159;
(statearr_34207_35573[(1)] = cljs.core.first((state_34159[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_34159;
state_34159 = G__35574;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_34159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_34159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34208 = f__32514__auto__();
(statearr_34208[(6)] = c__32513__auto___35555);

return statearr_34208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34210 = (function (f,ch,meta34211){
this.f = f;
this.ch = ch;
this.meta34211 = meta34211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34212,meta34211__$1){
var self__ = this;
var _34212__$1 = this;
return (new cljs.core.async.t_cljs$core$async34210(self__.f,self__.ch,meta34211__$1));
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34212){
var self__ = this;
var _34212__$1 = this;
return self__.meta34211;
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34213 = (function (f,ch,meta34211,_,fn1,meta34214){
this.f = f;
this.ch = ch;
this.meta34211 = meta34211;
this._ = _;
this.fn1 = fn1;
this.meta34214 = meta34214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34215,meta34214__$1){
var self__ = this;
var _34215__$1 = this;
return (new cljs.core.async.t_cljs$core$async34213(self__.f,self__.ch,self__.meta34211,self__._,self__.fn1,meta34214__$1));
}));

(cljs.core.async.t_cljs$core$async34213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34215){
var self__ = this;
var _34215__$1 = this;
return self__.meta34214;
}));

(cljs.core.async.t_cljs$core$async34213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34209_SHARP_){
var G__34216 = (((p1__34209_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34209_SHARP_) : self__.f.call(null,p1__34209_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34216) : f1.call(null,G__34216));
});
}));

(cljs.core.async.t_cljs$core$async34213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34211","meta34211",-365008376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34210","cljs.core.async/t_cljs$core$async34210",-1057196972,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34214","meta34214",-1998509578,null)], null);
}));

(cljs.core.async.t_cljs$core$async34213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34213");

(cljs.core.async.t_cljs$core$async34213.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34213.
 */
cljs.core.async.__GT_t_cljs$core$async34213 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34213(f__$1,ch__$1,meta34211__$1,___$2,fn1__$1,meta34214){
return (new cljs.core.async.t_cljs$core$async34213(f__$1,ch__$1,meta34211__$1,___$2,fn1__$1,meta34214));
});

}

return (new cljs.core.async.t_cljs$core$async34213(self__.f,self__.ch,self__.meta34211,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34219 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34219) : self__.f.call(null,G__34219));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34211","meta34211",-365008376,null)], null);
}));

(cljs.core.async.t_cljs$core$async34210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34210");

(cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34210.
 */
cljs.core.async.__GT_t_cljs$core$async34210 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34210(f__$1,ch__$1,meta34211){
return (new cljs.core.async.t_cljs$core$async34210(f__$1,ch__$1,meta34211));
});

}

return (new cljs.core.async.t_cljs$core$async34210(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34231 = (function (f,ch,meta34232){
this.f = f;
this.ch = ch;
this.meta34232 = meta34232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34233,meta34232__$1){
var self__ = this;
var _34233__$1 = this;
return (new cljs.core.async.t_cljs$core$async34231(self__.f,self__.ch,meta34232__$1));
}));

(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34233){
var self__ = this;
var _34233__$1 = this;
return self__.meta34232;
}));

(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34232","meta34232",-1213594380,null)], null);
}));

(cljs.core.async.t_cljs$core$async34231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34231");

(cljs.core.async.t_cljs$core$async34231.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34231.
 */
cljs.core.async.__GT_t_cljs$core$async34231 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34231(f__$1,ch__$1,meta34232){
return (new cljs.core.async.t_cljs$core$async34231(f__$1,ch__$1,meta34232));
});

}

return (new cljs.core.async.t_cljs$core$async34231(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34236 = (function (p,ch,meta34237){
this.p = p;
this.ch = ch;
this.meta34237 = meta34237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34238,meta34237__$1){
var self__ = this;
var _34238__$1 = this;
return (new cljs.core.async.t_cljs$core$async34236(self__.p,self__.ch,meta34237__$1));
}));

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34238){
var self__ = this;
var _34238__$1 = this;
return self__.meta34237;
}));

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34237","meta34237",729631938,null)], null);
}));

(cljs.core.async.t_cljs$core$async34236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34236");

(cljs.core.async.t_cljs$core$async34236.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34236.
 */
cljs.core.async.__GT_t_cljs$core$async34236 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34236(p__$1,ch__$1,meta34237){
return (new cljs.core.async.t_cljs$core$async34236(p__$1,ch__$1,meta34237));
});

}

return (new cljs.core.async.t_cljs$core$async34236(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34243 = arguments.length;
switch (G__34243) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32513__auto___35594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34273){
var state_val_34274 = (state_34273[(1)]);
if((state_val_34274 === (7))){
var inst_34269 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34276_35599 = state_34273__$1;
(statearr_34276_35599[(2)] = inst_34269);

(statearr_34276_35599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (1))){
var state_34273__$1 = state_34273;
var statearr_34277_35600 = state_34273__$1;
(statearr_34277_35600[(2)] = null);

(statearr_34277_35600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (4))){
var inst_34255 = (state_34273[(7)]);
var inst_34255__$1 = (state_34273[(2)]);
var inst_34256 = (inst_34255__$1 == null);
var state_34273__$1 = (function (){var statearr_34278 = state_34273;
(statearr_34278[(7)] = inst_34255__$1);

return statearr_34278;
})();
if(cljs.core.truth_(inst_34256)){
var statearr_34279_35601 = state_34273__$1;
(statearr_34279_35601[(1)] = (5));

} else {
var statearr_34280_35602 = state_34273__$1;
(statearr_34280_35602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (6))){
var inst_34255 = (state_34273[(7)]);
var inst_34260 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34255) : p.call(null,inst_34255));
var state_34273__$1 = state_34273;
if(cljs.core.truth_(inst_34260)){
var statearr_34281_35603 = state_34273__$1;
(statearr_34281_35603[(1)] = (8));

} else {
var statearr_34282_35604 = state_34273__$1;
(statearr_34282_35604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (3))){
var inst_34271 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34273__$1,inst_34271);
} else {
if((state_val_34274 === (2))){
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34273__$1,(4),ch);
} else {
if((state_val_34274 === (11))){
var inst_34263 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34283_35605 = state_34273__$1;
(statearr_34283_35605[(2)] = inst_34263);

(statearr_34283_35605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (9))){
var state_34273__$1 = state_34273;
var statearr_34284_35606 = state_34273__$1;
(statearr_34284_35606[(2)] = null);

(statearr_34284_35606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (5))){
var inst_34258 = cljs.core.async.close_BANG_(out);
var state_34273__$1 = state_34273;
var statearr_34287_35607 = state_34273__$1;
(statearr_34287_35607[(2)] = inst_34258);

(statearr_34287_35607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (10))){
var inst_34266 = (state_34273[(2)]);
var state_34273__$1 = (function (){var statearr_34288 = state_34273;
(statearr_34288[(8)] = inst_34266);

return statearr_34288;
})();
var statearr_34289_35609 = state_34273__$1;
(statearr_34289_35609[(2)] = null);

(statearr_34289_35609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (8))){
var inst_34255 = (state_34273[(7)]);
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34273__$1,(11),out,inst_34255);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_34291 = [null,null,null,null,null,null,null,null,null];
(statearr_34291[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_34291[(1)] = (1));

return statearr_34291;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_34273){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34273);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34292){var ex__31976__auto__ = e34292;
var statearr_34293_35610 = state_34273;
(statearr_34293_35610[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34273[(4)]))){
var statearr_34295_35611 = state_34273;
(statearr_34295_35611[(1)] = cljs.core.first((state_34273[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35612 = state_34273;
state_34273 = G__35612;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_34273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_34273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34296 = f__32514__auto__();
(statearr_34296[(6)] = c__32513__auto___35594);

return statearr_34296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34298 = arguments.length;
switch (G__34298) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34388){
var state_val_34389 = (state_34388[(1)]);
if((state_val_34389 === (7))){
var inst_34378 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34391_35615 = state_34388__$1;
(statearr_34391_35615[(2)] = inst_34378);

(statearr_34391_35615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (20))){
var inst_34343 = (state_34388[(7)]);
var inst_34358 = (state_34388[(2)]);
var inst_34359 = cljs.core.next(inst_34343);
var inst_34320 = inst_34359;
var inst_34321 = null;
var inst_34322 = (0);
var inst_34323 = (0);
var state_34388__$1 = (function (){var statearr_34394 = state_34388;
(statearr_34394[(8)] = inst_34321);

(statearr_34394[(9)] = inst_34320);

(statearr_34394[(10)] = inst_34323);

(statearr_34394[(11)] = inst_34358);

(statearr_34394[(12)] = inst_34322);

return statearr_34394;
})();
var statearr_34400_35616 = state_34388__$1;
(statearr_34400_35616[(2)] = null);

(statearr_34400_35616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (1))){
var state_34388__$1 = state_34388;
var statearr_34401_35618 = state_34388__$1;
(statearr_34401_35618[(2)] = null);

(statearr_34401_35618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (4))){
var inst_34309 = (state_34388[(13)]);
var inst_34309__$1 = (state_34388[(2)]);
var inst_34310 = (inst_34309__$1 == null);
var state_34388__$1 = (function (){var statearr_34402 = state_34388;
(statearr_34402[(13)] = inst_34309__$1);

return statearr_34402;
})();
if(cljs.core.truth_(inst_34310)){
var statearr_34403_35625 = state_34388__$1;
(statearr_34403_35625[(1)] = (5));

} else {
var statearr_34404_35626 = state_34388__$1;
(statearr_34404_35626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (15))){
var state_34388__$1 = state_34388;
var statearr_34409_35627 = state_34388__$1;
(statearr_34409_35627[(2)] = null);

(statearr_34409_35627[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (21))){
var state_34388__$1 = state_34388;
var statearr_34413_35631 = state_34388__$1;
(statearr_34413_35631[(2)] = null);

(statearr_34413_35631[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (13))){
var inst_34321 = (state_34388[(8)]);
var inst_34320 = (state_34388[(9)]);
var inst_34323 = (state_34388[(10)]);
var inst_34322 = (state_34388[(12)]);
var inst_34339 = (state_34388[(2)]);
var inst_34340 = (inst_34323 + (1));
var tmp34406 = inst_34321;
var tmp34407 = inst_34320;
var tmp34408 = inst_34322;
var inst_34320__$1 = tmp34407;
var inst_34321__$1 = tmp34406;
var inst_34322__$1 = tmp34408;
var inst_34323__$1 = inst_34340;
var state_34388__$1 = (function (){var statearr_34415 = state_34388;
(statearr_34415[(14)] = inst_34339);

(statearr_34415[(8)] = inst_34321__$1);

(statearr_34415[(9)] = inst_34320__$1);

(statearr_34415[(10)] = inst_34323__$1);

(statearr_34415[(12)] = inst_34322__$1);

return statearr_34415;
})();
var statearr_34416_35634 = state_34388__$1;
(statearr_34416_35634[(2)] = null);

(statearr_34416_35634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (22))){
var state_34388__$1 = state_34388;
var statearr_34417_35635 = state_34388__$1;
(statearr_34417_35635[(2)] = null);

(statearr_34417_35635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (6))){
var inst_34309 = (state_34388[(13)]);
var inst_34318 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34309) : f.call(null,inst_34309));
var inst_34319 = cljs.core.seq(inst_34318);
var inst_34320 = inst_34319;
var inst_34321 = null;
var inst_34322 = (0);
var inst_34323 = (0);
var state_34388__$1 = (function (){var statearr_34418 = state_34388;
(statearr_34418[(8)] = inst_34321);

(statearr_34418[(9)] = inst_34320);

(statearr_34418[(10)] = inst_34323);

(statearr_34418[(12)] = inst_34322);

return statearr_34418;
})();
var statearr_34420_35638 = state_34388__$1;
(statearr_34420_35638[(2)] = null);

(statearr_34420_35638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (17))){
var inst_34343 = (state_34388[(7)]);
var inst_34347 = cljs.core.chunk_first(inst_34343);
var inst_34351 = cljs.core.chunk_rest(inst_34343);
var inst_34353 = cljs.core.count(inst_34347);
var inst_34320 = inst_34351;
var inst_34321 = inst_34347;
var inst_34322 = inst_34353;
var inst_34323 = (0);
var state_34388__$1 = (function (){var statearr_34428 = state_34388;
(statearr_34428[(8)] = inst_34321);

(statearr_34428[(9)] = inst_34320);

(statearr_34428[(10)] = inst_34323);

(statearr_34428[(12)] = inst_34322);

return statearr_34428;
})();
var statearr_34429_35642 = state_34388__$1;
(statearr_34429_35642[(2)] = null);

(statearr_34429_35642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (3))){
var inst_34386 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34388__$1,inst_34386);
} else {
if((state_val_34389 === (12))){
var inst_34367 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34431_35645 = state_34388__$1;
(statearr_34431_35645[(2)] = inst_34367);

(statearr_34431_35645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (2))){
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34388__$1,(4),in$);
} else {
if((state_val_34389 === (23))){
var inst_34375 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34432_35649 = state_34388__$1;
(statearr_34432_35649[(2)] = inst_34375);

(statearr_34432_35649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (19))){
var inst_34362 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34433_35650 = state_34388__$1;
(statearr_34433_35650[(2)] = inst_34362);

(statearr_34433_35650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (11))){
var inst_34320 = (state_34388[(9)]);
var inst_34343 = (state_34388[(7)]);
var inst_34343__$1 = cljs.core.seq(inst_34320);
var state_34388__$1 = (function (){var statearr_34436 = state_34388;
(statearr_34436[(7)] = inst_34343__$1);

return statearr_34436;
})();
if(inst_34343__$1){
var statearr_34437_35651 = state_34388__$1;
(statearr_34437_35651[(1)] = (14));

} else {
var statearr_34438_35652 = state_34388__$1;
(statearr_34438_35652[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (9))){
var inst_34369 = (state_34388[(2)]);
var inst_34370 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34388__$1 = (function (){var statearr_34441 = state_34388;
(statearr_34441[(15)] = inst_34369);

return statearr_34441;
})();
if(cljs.core.truth_(inst_34370)){
var statearr_34442_35653 = state_34388__$1;
(statearr_34442_35653[(1)] = (21));

} else {
var statearr_34443_35654 = state_34388__$1;
(statearr_34443_35654[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (5))){
var inst_34312 = cljs.core.async.close_BANG_(out);
var state_34388__$1 = state_34388;
var statearr_34444_35655 = state_34388__$1;
(statearr_34444_35655[(2)] = inst_34312);

(statearr_34444_35655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (14))){
var inst_34343 = (state_34388[(7)]);
var inst_34345 = cljs.core.chunked_seq_QMARK_(inst_34343);
var state_34388__$1 = state_34388;
if(inst_34345){
var statearr_34445_35659 = state_34388__$1;
(statearr_34445_35659[(1)] = (17));

} else {
var statearr_34446_35660 = state_34388__$1;
(statearr_34446_35660[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (16))){
var inst_34365 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34448_35662 = state_34388__$1;
(statearr_34448_35662[(2)] = inst_34365);

(statearr_34448_35662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (10))){
var inst_34321 = (state_34388[(8)]);
var inst_34323 = (state_34388[(10)]);
var inst_34328 = cljs.core._nth(inst_34321,inst_34323);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34388__$1,(13),out,inst_34328);
} else {
if((state_val_34389 === (18))){
var inst_34343 = (state_34388[(7)]);
var inst_34356 = cljs.core.first(inst_34343);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34388__$1,(20),out,inst_34356);
} else {
if((state_val_34389 === (8))){
var inst_34323 = (state_34388[(10)]);
var inst_34322 = (state_34388[(12)]);
var inst_34325 = (inst_34323 < inst_34322);
var inst_34326 = inst_34325;
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34326)){
var statearr_34450_35665 = state_34388__$1;
(statearr_34450_35665[(1)] = (10));

} else {
var statearr_34451_35666 = state_34388__$1;
(statearr_34451_35666[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31973__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31973__auto____0 = (function (){
var statearr_34452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34452[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31973__auto__);

(statearr_34452[(1)] = (1));

return statearr_34452;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31973__auto____1 = (function (state_34388){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34388);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34453){var ex__31976__auto__ = e34453;
var statearr_34454_35670 = state_34388;
(statearr_34454_35670[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34388[(4)]))){
var statearr_34455_35671 = state_34388;
(statearr_34455_35671[(1)] = cljs.core.first((state_34388[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35673 = state_34388;
state_34388 = G__35673;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31973__auto__ = function(state_34388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31973__auto____1.call(this,state_34388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31973__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31973__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34456 = f__32514__auto__();
(statearr_34456[(6)] = c__32513__auto__);

return statearr_34456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));

return c__32513__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34462 = arguments.length;
switch (G__34462) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34465 = arguments.length;
switch (G__34465) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34480 = arguments.length;
switch (G__34480) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32513__auto___35682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (7))){
var inst_34505 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34518_35683 = state_34516__$1;
(statearr_34518_35683[(2)] = inst_34505);

(statearr_34518_35683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (1))){
var inst_34487 = null;
var state_34516__$1 = (function (){var statearr_34520 = state_34516;
(statearr_34520[(7)] = inst_34487);

return statearr_34520;
})();
var statearr_34521_35685 = state_34516__$1;
(statearr_34521_35685[(2)] = null);

(statearr_34521_35685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (4))){
var inst_34490 = (state_34516[(8)]);
var inst_34490__$1 = (state_34516[(2)]);
var inst_34491 = (inst_34490__$1 == null);
var inst_34492 = cljs.core.not(inst_34491);
var state_34516__$1 = (function (){var statearr_34522 = state_34516;
(statearr_34522[(8)] = inst_34490__$1);

return statearr_34522;
})();
if(inst_34492){
var statearr_34524_35687 = state_34516__$1;
(statearr_34524_35687[(1)] = (5));

} else {
var statearr_34525_35688 = state_34516__$1;
(statearr_34525_35688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34526_35689 = state_34516__$1;
(statearr_34526_35689[(2)] = null);

(statearr_34526_35689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (3))){
var inst_34507 = (state_34516[(2)]);
var inst_34508 = cljs.core.async.close_BANG_(out);
var state_34516__$1 = (function (){var statearr_34527 = state_34516;
(statearr_34527[(9)] = inst_34507);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34516__$1,inst_34508);
} else {
if((state_val_34517 === (2))){
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34516__$1,(4),ch);
} else {
if((state_val_34517 === (11))){
var inst_34490 = (state_34516[(8)]);
var inst_34499 = (state_34516[(2)]);
var inst_34487 = inst_34490;
var state_34516__$1 = (function (){var statearr_34528 = state_34516;
(statearr_34528[(10)] = inst_34499);

(statearr_34528[(7)] = inst_34487);

return statearr_34528;
})();
var statearr_34529_35691 = state_34516__$1;
(statearr_34529_35691[(2)] = null);

(statearr_34529_35691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (9))){
var inst_34490 = (state_34516[(8)]);
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34516__$1,(11),out,inst_34490);
} else {
if((state_val_34517 === (5))){
var inst_34490 = (state_34516[(8)]);
var inst_34487 = (state_34516[(7)]);
var inst_34494 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34490,inst_34487);
var state_34516__$1 = state_34516;
if(inst_34494){
var statearr_34541_35693 = state_34516__$1;
(statearr_34541_35693[(1)] = (8));

} else {
var statearr_34542_35694 = state_34516__$1;
(statearr_34542_35694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (10))){
var inst_34502 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34543_35695 = state_34516__$1;
(statearr_34543_35695[(2)] = inst_34502);

(statearr_34543_35695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (8))){
var inst_34487 = (state_34516[(7)]);
var tmp34535 = inst_34487;
var inst_34487__$1 = tmp34535;
var state_34516__$1 = (function (){var statearr_34544 = state_34516;
(statearr_34544[(7)] = inst_34487__$1);

return statearr_34544;
})();
var statearr_34545_35698 = state_34516__$1;
(statearr_34545_35698[(2)] = null);

(statearr_34545_35698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_34546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34546[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_34546[(1)] = (1));

return statearr_34546;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_34516){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34516);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34548){var ex__31976__auto__ = e34548;
var statearr_34549_35699 = state_34516;
(statearr_34549_35699[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34516[(4)]))){
var statearr_34550_35700 = state_34516;
(statearr_34550_35700[(1)] = cljs.core.first((state_34516[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35702 = state_34516;
state_34516 = G__35702;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_34516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_34516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34552 = f__32514__auto__();
(statearr_34552[(6)] = c__32513__auto___35682);

return statearr_34552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34559 = arguments.length;
switch (G__34559) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32513__auto___35705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34601){
var state_val_34602 = (state_34601[(1)]);
if((state_val_34602 === (7))){
var inst_34594 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
var statearr_34603_35706 = state_34601__$1;
(statearr_34603_35706[(2)] = inst_34594);

(statearr_34603_35706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (1))){
var inst_34560 = (new Array(n));
var inst_34561 = inst_34560;
var inst_34562 = (0);
var state_34601__$1 = (function (){var statearr_34604 = state_34601;
(statearr_34604[(7)] = inst_34561);

(statearr_34604[(8)] = inst_34562);

return statearr_34604;
})();
var statearr_34609_35707 = state_34601__$1;
(statearr_34609_35707[(2)] = null);

(statearr_34609_35707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (4))){
var inst_34565 = (state_34601[(9)]);
var inst_34565__$1 = (state_34601[(2)]);
var inst_34566 = (inst_34565__$1 == null);
var inst_34567 = cljs.core.not(inst_34566);
var state_34601__$1 = (function (){var statearr_34613 = state_34601;
(statearr_34613[(9)] = inst_34565__$1);

return statearr_34613;
})();
if(inst_34567){
var statearr_34617_35708 = state_34601__$1;
(statearr_34617_35708[(1)] = (5));

} else {
var statearr_34618_35709 = state_34601__$1;
(statearr_34618_35709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (15))){
var inst_34588 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
var statearr_34619_35710 = state_34601__$1;
(statearr_34619_35710[(2)] = inst_34588);

(statearr_34619_35710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (13))){
var state_34601__$1 = state_34601;
var statearr_34620_35711 = state_34601__$1;
(statearr_34620_35711[(2)] = null);

(statearr_34620_35711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (6))){
var inst_34562 = (state_34601[(8)]);
var inst_34583 = (inst_34562 > (0));
var state_34601__$1 = state_34601;
if(cljs.core.truth_(inst_34583)){
var statearr_34621_35712 = state_34601__$1;
(statearr_34621_35712[(1)] = (12));

} else {
var statearr_34622_35713 = state_34601__$1;
(statearr_34622_35713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (3))){
var inst_34596 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34601__$1,inst_34596);
} else {
if((state_val_34602 === (12))){
var inst_34561 = (state_34601[(7)]);
var inst_34586 = cljs.core.vec(inst_34561);
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34601__$1,(15),out,inst_34586);
} else {
if((state_val_34602 === (2))){
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34601__$1,(4),ch);
} else {
if((state_val_34602 === (11))){
var inst_34577 = (state_34601[(2)]);
var inst_34578 = (new Array(n));
var inst_34561 = inst_34578;
var inst_34562 = (0);
var state_34601__$1 = (function (){var statearr_34626 = state_34601;
(statearr_34626[(10)] = inst_34577);

(statearr_34626[(7)] = inst_34561);

(statearr_34626[(8)] = inst_34562);

return statearr_34626;
})();
var statearr_34627_35720 = state_34601__$1;
(statearr_34627_35720[(2)] = null);

(statearr_34627_35720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (9))){
var inst_34561 = (state_34601[(7)]);
var inst_34575 = cljs.core.vec(inst_34561);
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34601__$1,(11),out,inst_34575);
} else {
if((state_val_34602 === (5))){
var inst_34570 = (state_34601[(11)]);
var inst_34565 = (state_34601[(9)]);
var inst_34561 = (state_34601[(7)]);
var inst_34562 = (state_34601[(8)]);
var inst_34569 = (inst_34561[inst_34562] = inst_34565);
var inst_34570__$1 = (inst_34562 + (1));
var inst_34571 = (inst_34570__$1 < n);
var state_34601__$1 = (function (){var statearr_34628 = state_34601;
(statearr_34628[(11)] = inst_34570__$1);

(statearr_34628[(12)] = inst_34569);

return statearr_34628;
})();
if(cljs.core.truth_(inst_34571)){
var statearr_34629_35723 = state_34601__$1;
(statearr_34629_35723[(1)] = (8));

} else {
var statearr_34630_35724 = state_34601__$1;
(statearr_34630_35724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (14))){
var inst_34591 = (state_34601[(2)]);
var inst_34592 = cljs.core.async.close_BANG_(out);
var state_34601__$1 = (function (){var statearr_34632 = state_34601;
(statearr_34632[(13)] = inst_34591);

return statearr_34632;
})();
var statearr_34633_35725 = state_34601__$1;
(statearr_34633_35725[(2)] = inst_34592);

(statearr_34633_35725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (10))){
var inst_34581 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
var statearr_34634_35728 = state_34601__$1;
(statearr_34634_35728[(2)] = inst_34581);

(statearr_34634_35728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (8))){
var inst_34570 = (state_34601[(11)]);
var inst_34561 = (state_34601[(7)]);
var tmp34631 = inst_34561;
var inst_34561__$1 = tmp34631;
var inst_34562 = inst_34570;
var state_34601__$1 = (function (){var statearr_34635 = state_34601;
(statearr_34635[(7)] = inst_34561__$1);

(statearr_34635[(8)] = inst_34562);

return statearr_34635;
})();
var statearr_34636_35733 = state_34601__$1;
(statearr_34636_35733[(2)] = null);

(statearr_34636_35733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_34637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34637[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_34637[(1)] = (1));

return statearr_34637;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_34601){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34601);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34638){var ex__31976__auto__ = e34638;
var statearr_34639_35739 = state_34601;
(statearr_34639_35739[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34601[(4)]))){
var statearr_34640_35740 = state_34601;
(statearr_34640_35740[(1)] = cljs.core.first((state_34601[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35741 = state_34601;
state_34601 = G__35741;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_34601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_34601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34641 = f__32514__auto__();
(statearr_34641[(6)] = c__32513__auto___35705);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34643 = arguments.length;
switch (G__34643) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32513__auto___35743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32514__auto__ = (function (){var switch__31972__auto__ = (function (state_34688){
var state_val_34689 = (state_34688[(1)]);
if((state_val_34689 === (7))){
var inst_34684 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
var statearr_34690_35744 = state_34688__$1;
(statearr_34690_35744[(2)] = inst_34684);

(statearr_34690_35744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (1))){
var inst_34644 = [];
var inst_34645 = inst_34644;
var inst_34646 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34688__$1 = (function (){var statearr_34691 = state_34688;
(statearr_34691[(7)] = inst_34646);

(statearr_34691[(8)] = inst_34645);

return statearr_34691;
})();
var statearr_34692_35746 = state_34688__$1;
(statearr_34692_35746[(2)] = null);

(statearr_34692_35746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (4))){
var inst_34649 = (state_34688[(9)]);
var inst_34649__$1 = (state_34688[(2)]);
var inst_34650 = (inst_34649__$1 == null);
var inst_34651 = cljs.core.not(inst_34650);
var state_34688__$1 = (function (){var statearr_34694 = state_34688;
(statearr_34694[(9)] = inst_34649__$1);

return statearr_34694;
})();
if(inst_34651){
var statearr_34695_35747 = state_34688__$1;
(statearr_34695_35747[(1)] = (5));

} else {
var statearr_34696_35748 = state_34688__$1;
(statearr_34696_35748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (15))){
var inst_34645 = (state_34688[(8)]);
var inst_34676 = cljs.core.vec(inst_34645);
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34688__$1,(18),out,inst_34676);
} else {
if((state_val_34689 === (13))){
var inst_34671 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
var statearr_34697_35749 = state_34688__$1;
(statearr_34697_35749[(2)] = inst_34671);

(statearr_34697_35749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (6))){
var inst_34645 = (state_34688[(8)]);
var inst_34673 = inst_34645.length;
var inst_34674 = (inst_34673 > (0));
var state_34688__$1 = state_34688;
if(cljs.core.truth_(inst_34674)){
var statearr_34701_35750 = state_34688__$1;
(statearr_34701_35750[(1)] = (15));

} else {
var statearr_34702_35751 = state_34688__$1;
(statearr_34702_35751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (17))){
var inst_34681 = (state_34688[(2)]);
var inst_34682 = cljs.core.async.close_BANG_(out);
var state_34688__$1 = (function (){var statearr_34703 = state_34688;
(statearr_34703[(10)] = inst_34681);

return statearr_34703;
})();
var statearr_34704_35753 = state_34688__$1;
(statearr_34704_35753[(2)] = inst_34682);

(statearr_34704_35753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (3))){
var inst_34686 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34688__$1,inst_34686);
} else {
if((state_val_34689 === (12))){
var inst_34645 = (state_34688[(8)]);
var inst_34664 = cljs.core.vec(inst_34645);
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34688__$1,(14),out,inst_34664);
} else {
if((state_val_34689 === (2))){
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34688__$1,(4),ch);
} else {
if((state_val_34689 === (11))){
var inst_34653 = (state_34688[(11)]);
var inst_34645 = (state_34688[(8)]);
var inst_34649 = (state_34688[(9)]);
var inst_34661 = inst_34645.push(inst_34649);
var tmp34705 = inst_34645;
var inst_34645__$1 = tmp34705;
var inst_34646 = inst_34653;
var state_34688__$1 = (function (){var statearr_34709 = state_34688;
(statearr_34709[(7)] = inst_34646);

(statearr_34709[(8)] = inst_34645__$1);

(statearr_34709[(12)] = inst_34661);

return statearr_34709;
})();
var statearr_34710_35757 = state_34688__$1;
(statearr_34710_35757[(2)] = null);

(statearr_34710_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (9))){
var inst_34646 = (state_34688[(7)]);
var inst_34657 = cljs.core.keyword_identical_QMARK_(inst_34646,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34688__$1 = state_34688;
var statearr_34711_35758 = state_34688__$1;
(statearr_34711_35758[(2)] = inst_34657);

(statearr_34711_35758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (5))){
var inst_34646 = (state_34688[(7)]);
var inst_34654 = (state_34688[(13)]);
var inst_34653 = (state_34688[(11)]);
var inst_34649 = (state_34688[(9)]);
var inst_34653__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34649) : f.call(null,inst_34649));
var inst_34654__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34653__$1,inst_34646);
var state_34688__$1 = (function (){var statearr_34712 = state_34688;
(statearr_34712[(13)] = inst_34654__$1);

(statearr_34712[(11)] = inst_34653__$1);

return statearr_34712;
})();
if(inst_34654__$1){
var statearr_34713_35759 = state_34688__$1;
(statearr_34713_35759[(1)] = (8));

} else {
var statearr_34714_35760 = state_34688__$1;
(statearr_34714_35760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (14))){
var inst_34653 = (state_34688[(11)]);
var inst_34649 = (state_34688[(9)]);
var inst_34666 = (state_34688[(2)]);
var inst_34667 = [];
var inst_34668 = inst_34667.push(inst_34649);
var inst_34645 = inst_34667;
var inst_34646 = inst_34653;
var state_34688__$1 = (function (){var statearr_34715 = state_34688;
(statearr_34715[(14)] = inst_34668);

(statearr_34715[(7)] = inst_34646);

(statearr_34715[(15)] = inst_34666);

(statearr_34715[(8)] = inst_34645);

return statearr_34715;
})();
var statearr_34716_35761 = state_34688__$1;
(statearr_34716_35761[(2)] = null);

(statearr_34716_35761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (16))){
var state_34688__$1 = state_34688;
var statearr_34717_35762 = state_34688__$1;
(statearr_34717_35762[(2)] = null);

(statearr_34717_35762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (10))){
var inst_34659 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
if(cljs.core.truth_(inst_34659)){
var statearr_34718_35763 = state_34688__$1;
(statearr_34718_35763[(1)] = (11));

} else {
var statearr_34719_35764 = state_34688__$1;
(statearr_34719_35764[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (18))){
var inst_34678 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
var statearr_34720_35765 = state_34688__$1;
(statearr_34720_35765[(2)] = inst_34678);

(statearr_34720_35765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (8))){
var inst_34654 = (state_34688[(13)]);
var state_34688__$1 = state_34688;
var statearr_34721_35767 = state_34688__$1;
(statearr_34721_35767[(2)] = inst_34654);

(statearr_34721_35767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31973__auto__ = null;
var cljs$core$async$state_machine__31973__auto____0 = (function (){
var statearr_34723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34723[(0)] = cljs$core$async$state_machine__31973__auto__);

(statearr_34723[(1)] = (1));

return statearr_34723;
});
var cljs$core$async$state_machine__31973__auto____1 = (function (state_34688){
while(true){
var ret_value__31974__auto__ = (function (){try{while(true){
var result__31975__auto__ = switch__31972__auto__(state_34688);
if(cljs.core.keyword_identical_QMARK_(result__31975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31975__auto__;
}
break;
}
}catch (e34724){var ex__31976__auto__ = e34724;
var statearr_34725_35772 = state_34688;
(statearr_34725_35772[(2)] = ex__31976__auto__);


if(cljs.core.seq((state_34688[(4)]))){
var statearr_34726_35773 = state_34688;
(statearr_34726_35773[(1)] = cljs.core.first((state_34688[(4)])));

} else {
throw ex__31976__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35774 = state_34688;
state_34688 = G__35774;
continue;
} else {
return ret_value__31974__auto__;
}
break;
}
});
cljs$core$async$state_machine__31973__auto__ = function(state_34688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31973__auto____1.call(this,state_34688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31973__auto____0;
cljs$core$async$state_machine__31973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31973__auto____1;
return cljs$core$async$state_machine__31973__auto__;
})()
})();
var state__32515__auto__ = (function (){var statearr_34727 = f__32514__auto__();
(statearr_34727[(6)] = c__32513__auto___35743);

return statearr_34727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32515__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
