﻿!function(e){function t(t){for(var o,c,n=t[0],m=t[1],u=t[2],d=0,s=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(o in m)Object.prototype.hasOwnProperty.call(m,o)&&(e[o]=m[o]);for(l&&l(t);s.length;)s.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,n=1;n<r.length;n++){var m=r[n];0!==a[m]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},a={"web/writebox":0},i=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(){return Promise.resolve()},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/js/cmodules/";var n=window.webpackJsonp=window.webpackJsonp||[],m=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var l=m;i.push([348,"common","palette","9b5c1549562b5997058328b940973c18","7ed9e4d544bccc8a5ada0a712a9cf1ad","29ce115e24facf4cb9fb345ec7c74430"]),r()}({348:function(e,t,r){e.exports=r("SyNm")},SyNm:function(e,t,r){"use strict";r.r(t);r("91GP"),r("pIFo");var o=r("uytb"),a=r("rjmT"),i=r("v+DW"),c=r("EasH"),n=r("o7bv");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var u={mrg:function(e){return vk.rtl?{marginRight:e}:{marginLeft:e}},show:function(e,t){var r=t.toData[0],a=t.toData[7];if(e.setOptions({hideButtons:!0,width:502,bodyStyle:"padding: 0px; border: 0px;",title:t.title,titleControls:('<a class="mail_box_header_link" href="/im?sel='+r+'" onclick="return WriteBox.toFull(event, '+r+')">'+t.mail_go_to_dialog+"</a>").replace("%s",a)}),e.removeButtons(),cur.lang=extend(cur.lang||{},t.lang),extend(cur,{mbTxtInp:{},mbEditable:t.editable,mbSmile:ge("mbe_smile"),toData:t.toData,mbEmoji:t.emoji,mbMedia:null,mbField:ge(t.editable?"mail_box_editable":"mail_box_text"),mbAva:ge("mail_box_ava"),mbMediaTypes:t.mediaTypes,mbTo:t.toData,mbHash:t.hash,mbBannedHim:t.bannedhim,mbExtraSendParams:t.extraSendParams,ldb:Object(o.mount)(vk.id)}),t.emojiRcnt&&!cur.mbRcntEmoji){for(var n=[],m=t.emojiRcnt,l=0,d=m.length;l<d;++l){var s=m[l];s&&n.push('<a id="mbe_rc_em_'+s+'" class="mbe_rc_emojibtn" onmousedown="Emoji.addEmoji(cur.emojiWId, \''+s+"', this); return cancelEvent(event);\">"+Emoji.getEmojiHTML(s,!1,!0)+"</a>")}cur.mbRcntEmoji=n.join("")}cur.nav.push(()=>{cur.ldb.unmount()}),val("mbe_rcemoji",cur.mbRcntEmoji||""),cur.peer=u.getPeer(),cur.sharedImWrite={},cur.emojiWId=Emoji.init(cur.mbField,{ttDiff:1,controlsCont:ge("mbe_emoji_wrap"),shouldFocus:!0,onSend:u.send,rPointer:!0,noEnterSend:1,ref:"writebox",noStickers:!!t.checkedRecipent,forceTxt:!t.editable,sharedTT:cur.sharedImWrite,txt:ge("mail_box_editable"),checkEditable:u.checkEditable,saveDraft:u.saveDraft,rceCont:ge("mbe_rcemoji_cont"),addMediaBtn:ge("mail_box_add_row"),sendWrap:ge("mail_box_controls"),onKeyAction:function(e){clearTimeout(cur.saveWriteBoxDraft);var t="paste"==e.type?0:300;cur.saveWriteBoxDraft=setTimeout(u.saveDraft,t)},onStickerSend:function(e,t){var r=trim(Emoji.editableVal(cur.mbField)),o=cur.mbMedia.getMedias(),a=cur.toData[0];ajax.post("/al_im.php",{act:"a_send_box",to_ids:a,chas:cur.mbHash,msg:"",ts:cur.ts,media:"sticker:"+e,send_sticker:1,from:"box",sticker_referrer:t},{onDone:function(e,t){r||o.length?u.send(!1):(t&&ls.set("im_draft"+vk.id+"_"+t,!1),curBox().hide(),showDoneBox(e))},showProgress:i.lockButton.pbind("mail_box_send"),hideProgress:i.unlockButton.pbind("mail_box_send"),onFail:function(e){var t=Object(c.showFastBox)(getLang("global_error"),e).hide;return setTimeout(t,3e3),!0}})},onRecentEmojiUpdate:function(){u.extractEmoji()}}),Emoji.emojiLoadMore(cur.emojiWId),cur.mbTo[0]?cur.mbHidden=!1:cur.mbHidden=!0,cur.imwEmoji=-1;var b=cur.postTo;cur.postTo=!1,e.setOptions({onHide:function(){removeEvent(document,"keydown",u.onKey),cur.mbEmojiShown&&Emoji.ttClick(cur.emojiWId,cur.mbSmile,!0),cur.mbOnMouseClick&&(cur.onMouseClick=cur.mbOnMouseClick,cur.mbOnMouseClick=!1),browser.mozilla},onShow:function(){addEvent(document,"keydown",u.onKey),cur.mbOnMouseClick||(cur.mbOnMouseClick=cur.onMouseClick),browser.mozilla,cur.sorterClbk&&(cur.sorterClbk(),delete cur.sorterClbk)},onClean:function(){clearTimeout(cur.mbSaveDraftTO),delete cur.mbSaveDraftTO,delete cur.mbField,cur.postTo=b,cur.mbEmojiScroll=cur.mbEmojiExpanded=!1,cur.mbForceAttach=!1,window.WideDropdown&&WideDropdown.deinit("mail_box_dd")}}),addEvent(document,"keydown",u.onKey),cur.mbOnMouseClick||(cur.mbOnMouseClick=cur.onMouseClick),stManager.add(["page.js","page.css"],(function(){var t={mail:1,nocl:1,editable:1,sortable:1,teWidth:150,teHeight:100,toggleLnk:!0};cur.mbForceAttach&&"market_item"==cur.mbForceAttach[0]&&(t.onMediaAdd=function(){for(var e in cur.mbMedia.chosenMedias)if("market"==cur.mbMedia.chosenMedias[e][0]){var t=cur.mbMedia.chosenMedias[e][2];hide(geByClass1("page_media_x_wrap",t))}}),cur.mbMedia=new MediaSelector("mail_box_add_link","mail_box_added_row",cur.mbMediaTypes,t),cur.mbMedia.onChange=function(){e.changed=!0,setTimeout((function(){u.saveDraft()}),100)},ls.checkVersion()&&cur.mbTo[0]&&u.restoreDraft(cur.mbTo[0])}))},getPeer:function(){return intval(cur.toData[0])},restoreDraft:function(e){var t=u.getPeer();if(!(!t||e&&t!=intval(e)||browser.mobile)&&cur.mbMedia){var r=Object(a.loadDraftForPeer)(cur.ldb,t);if(cur.mbForceAttach)if("market_item"==cur.mbForceAttach[0]){var o="mail_market_tmpl";cur.mkOptions.isServiceCategory&&(o="mail_market_services_tmpl"),r.setText(unclean(getLang(o)).replace(/<br>/g,"\n")),r.removeAllAttaches(),r.addAttach("market",cur.mbForceAttach[1])}else if("market_order"==cur.mbForceAttach[0]){var i=cur.mbForceAttach[1];r.setText(unclean(getLang("mail_order_tmpl")).replace(/<br>/g,"\n").replace("{id}",""+i)),r.removeAllAttaches()}else cur.mbForceAttach[3]&&r.setText(unclean(getLang(cur.mbForceAttach[3])).replace(/<br>/g,"\n").replace("{username}",cur.toData[9]).replace("{chatname}",unclean(cur.mbForceAttach[4]||"")));u.editableHasVal(cur.mbField)||(cur.mbEditable?(Emoji.val(cur.mbField,clean(r.dData.txt)),window.Emoji&&Emoji.editableFocus(cur.mbField,!1,!0)):val(cur.mbField,clean(r.dData.txt))),r.prepareObjects().then(()=>{if(cur.mbField&&u.getPeer()==t)for(var e=r.dData.attaches,o=0;o<e.length;o++)cur.mbMedia.chooseMedia(e[o].type,e[o].id,e[o].object||{},null,!0)}),u.checkEditable(cur.emojiWId,cur.mbField),u.checkLen(cur.mbField)}},saveDraft:function(){var e=u.getPeer();if(e&&cur.mbField){var t=Object(a.loadDraftForPeer)(cur.ldb,e);t.setText(unclean(trim(Emoji.val(cur.mbField)))),t.removeAllAttaches(),cur.mbMedia.getMedias().forEach(e=>t.addAttach(e[0],e[1])),t.destroy()}},toFull:function(e,t){if(!checkEvent(e)){var r={0:"im",sel:t},o=trim(Emoji.editableVal(cur.mbField));if(o&&(r.message=o),cur.mbMedia.chosenMedias){for(var a=cur.mbMedia.getMedias(),i=[],c=0,n=a.length;c<n;++c){var m=a[c],u=[];for(var l in m)"object"!=typeof m[l]&&u.push(m[l]);i.push(u.join(","))}r.media=i.join("*")}return nav.go(r,null,{noback:!0}),!1}},send:function(e){if(!Object(i.isButtonLocked)("mail_box_send")){var t=trim(Emoji.editableVal(cur.mbField)),r=cur.mbMedia.getMedias();cur.mbEditable&&u.extractEmoji();var o=m({act:"a_send_box",chas:cur.mbHash,message:t,title:isVisible("mail_box_title_wrap")&&val("mail_box_title")||"",from:"box",entrypoint:"friends"===cur.module?"friends":"writebox",media:[],to_ids:[]},cur.mbExtraSendParams?cur.mbExtraSendParams:{});cur.mbForceAttach&&(o.attach1_type=cur.mbForceAttach[0],o.attach1=cur.mbForceAttach[1],o.attach1_hash=cur.mbForceAttach[2]);for(var c,n=0,l=r.length;n<l;++n)(c=r[n])&&o.media.push(c[0]+":"+c[1]);if(o.media=o.media.join(","),!t&&!o.media)return cur.mbEditable?Emoji.editableFocus(cur.mbField):elfocus(cur.mbField);o.to_ids=cur.toData[0],cur.mbBannedHim!=o.to_ids||!0===e?ajax.post("al_im.php",o,{onDone:function(e,t){if(t){var r=Object(a.loadDraftForPeer)(cur.ldb,t);r.clear(),r.destroy()}curBox().hide(),showDoneBox(e)},showProgress:i.lockButton.pbind("mail_box_send"),hideProgress:i.unlockButton.pbind("mail_box_send")}):showBox("al_profile.php",{act:"banned_him",action:"mail",mid:cur.mbBannedHim},{dark:1}).onContinue=u.send.pbind(!0)}},checkLen:function(e){cur.mbTxtInp.value=Emoji.editableVal(e),checkTextLength(4096,cur.mbTxtInp,"mail_box_warn"),toggle("mail_box_title_wrap",cur.mbTxtInp.lastLen>200)},codeToChr:function(e){for(var t=e.length/4,r="",o=0;t--;)r+=String.fromCharCode(parseInt(e.substr(o,4),16)),o+=4;return r},editableHasVal:function(e){return!!e&&("TEXTAREA"==e.tagName?!!val(e):!(!geByTag1("IMG",e)&&!stripHTML(val(e)).replace(/[\s\xa0]/g,"").length))},checkEditable:function(e,t){cur.mbEditable&&Emoji.checkEditable(e,t,{height:180})},cssAnimation:function(){var e=intval(browser.version);return!!(browser.chrome&&e>14||browser.mozilla&&e>13||browser.opera&&e>2)},onKey:function(e){var t="INPUT"==e.target.tagName||"TEXTAREA"==e.target.tagName||"mail_box_editable"==e.target.id;if(!Object(n.isInputActive)()){if(e.keyCode>40&&!e.ctrlKey&&!e.metaKey&&!t)if(cur.mbEditable)Emoji.editableFocus(cur.mbField,!1,!0);else{var r=cur.mbField;!r.active&&elfocus(r)}return!0}},extractEmoji:function(){var e=ge("mbe_rcemoji");if(e){var t="",r=Emoji.getRecentEmojiSorted().slice(0,7);for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];t+='<a id="mbe_rc_em_'+a+'" class="mbe_rc_emojibtn" onmousedown="Emoji.addEmoji(cur.emojiWId, \''+a+"', this); return cancelEvent(event);\">"+Emoji.getEmojiHTML(a,!1,!0)+"</a>"}val(e,t)}}};window.WriteBox=u;try{window.stManager.done(window.jsc("web/writebox.js"))}catch(e){}}});