goog.provide('flexiana_frontend.core');
flexiana_frontend.core.value_string_1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
flexiana_frontend.core.value_string_2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
flexiana_frontend.core.scramble_text_inputs = (function flexiana_frontend$core$scramble_text_inputs(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(flexiana_frontend.core.value_string_1),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"String 1",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26828_SHARP_){
return cljs.core.reset_BANG_(flexiana_frontend.core.value_string_1,p1__26828_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(flexiana_frontend.core.value_string_2),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"String 2",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26829_SHARP_){
return cljs.core.reset_BANG_(flexiana_frontend.core.value_string_2,p1__26829_SHARP_.target.value);
})], null)], null)], null);
});
});
flexiana_frontend.core.process_response = (function flexiana_frontend$core$process_response(resp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(resp),(200))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp),true)){
alert("Scramble found!");
} else {
alert("No scramble found, try again!");
}
} else {
alert("Ooops, there was a problem with the request, did you write both words?");
}

cljs.core.reset_BANG_(flexiana_frontend.core.value_string_1,"");

return cljs.core.reset_BANG_(flexiana_frontend.core.value_string_2,"");
});
flexiana_frontend.core.scramble_request = (function flexiana_frontend$core$scramble_request(endpoint){
var c__26467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26468__auto__ = (function (){var switch__26355__auto__ = (function (state_26838){
var state_val_26839 = (state_26838[(1)]);
if((state_val_26839 === (1))){
var inst_26830 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26831 = [false];
var inst_26832 = cljs.core.PersistentHashMap.fromArrays(inst_26830,inst_26831);
var inst_26833 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26832], 0));
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26838__$1,(2),inst_26833);
} else {
if((state_val_26839 === (2))){
var inst_26835 = (state_26838[(2)]);
var inst_26836 = flexiana_frontend.core.process_response(inst_26835);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26838__$1,inst_26836);
} else {
return null;
}
}
});
return (function() {
var flexiana_frontend$core$scramble_request_$_state_machine__26356__auto__ = null;
var flexiana_frontend$core$scramble_request_$_state_machine__26356__auto____0 = (function (){
var statearr_26840 = [null,null,null,null,null,null,null];
(statearr_26840[(0)] = flexiana_frontend$core$scramble_request_$_state_machine__26356__auto__);

(statearr_26840[(1)] = (1));

return statearr_26840;
});
var flexiana_frontend$core$scramble_request_$_state_machine__26356__auto____1 = (function (state_26838){
while(true){
var ret_value__26357__auto__ = (function (){try{while(true){
var result__26358__auto__ = switch__26355__auto__(state_26838);
if(cljs.core.keyword_identical_QMARK_(result__26358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26358__auto__;
}
break;
}
}catch (e26841){var ex__26359__auto__ = e26841;
var statearr_26842_26845 = state_26838;
(statearr_26842_26845[(2)] = ex__26359__auto__);


if(cljs.core.seq((state_26838[(4)]))){
var statearr_26843_26846 = state_26838;
(statearr_26843_26846[(1)] = cljs.core.first((state_26838[(4)])));

} else {
throw ex__26359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26847 = state_26838;
state_26838 = G__26847;
continue;
} else {
return ret_value__26357__auto__;
}
break;
}
});
flexiana_frontend$core$scramble_request_$_state_machine__26356__auto__ = function(state_26838){
switch(arguments.length){
case 0:
return flexiana_frontend$core$scramble_request_$_state_machine__26356__auto____0.call(this);
case 1:
return flexiana_frontend$core$scramble_request_$_state_machine__26356__auto____1.call(this,state_26838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flexiana_frontend$core$scramble_request_$_state_machine__26356__auto__.cljs$core$IFn$_invoke$arity$0 = flexiana_frontend$core$scramble_request_$_state_machine__26356__auto____0;
flexiana_frontend$core$scramble_request_$_state_machine__26356__auto__.cljs$core$IFn$_invoke$arity$1 = flexiana_frontend$core$scramble_request_$_state_machine__26356__auto____1;
return flexiana_frontend$core$scramble_request_$_state_machine__26356__auto__;
})()
})();
var state__26469__auto__ = (function (){var statearr_26844 = f__26468__auto__();
(statearr_26844[(6)] = c__26467__auto__);

return statearr_26844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26469__auto__);
}));

return c__26467__auto__;
});
flexiana_frontend.core.scramble_send_button = (function flexiana_frontend$core$scramble_send_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Scramble?",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return flexiana_frontend.core.scramble_request(["http://localhost:4000/scramble/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(flexiana_frontend.core.value_string_1)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(flexiana_frontend.core.value_string_2))].join(''));
})], null)], null);
});
flexiana_frontend.core.home_page = (function flexiana_frontend$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Scramble finder"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flexiana_frontend.core.scramble_text_inputs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flexiana_frontend.core.scramble_send_button], null)], null);
});
flexiana_frontend.core.mount_root = (function flexiana_frontend$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flexiana_frontend.core.home_page], null),document.getElementById("app"));
});
flexiana_frontend.core.init_BANG_ = (function flexiana_frontend$core$init_BANG_(){
return flexiana_frontend.core.mount_root();
});
goog.exportSymbol('flexiana_frontend.core.init_BANG_', flexiana_frontend.core.init_BANG_);

//# sourceMappingURL=flexiana_frontend.core.js.map
