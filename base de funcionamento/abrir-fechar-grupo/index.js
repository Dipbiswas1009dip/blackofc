function _0x114b(){const _0xd6fd2c=['save','func','push','groupMetadata','close','length','1206989regIMj','./base\x20de\x20funcionamento/abrir-fechar-grupo/openclosegp.json','split','dias','groupId','cobrado','subject','open','177802kxHFVd','toLowerCase','indexOf','announcement','648441zEifNX','\x20em\x20horário\x20programado\x20com\x20sucesso*\x20❌','splice','slice','HH:mm','1JFSMuc','628612LcHtNt','stringify','exports','writeFileSync','groupSettingUpdate','map','../../config.js','189222UjwqCb','adm','42RPEPXo','[❗]\x20*O\x20grupo\x20','916216uKJGNa','\x22indefinido\x22','109205JSKGaG','DDMMYYHHmmss','not_announcement','horarios','sendMessage'];_0x114b=function(){return _0xd6fd2c;};return _0x114b();}const _0x39a37f=_0x596e;(function(_0x4c2e33,_0x328e7b){const _0x243553=_0x596e,_0x38a09c=_0x4c2e33();while(!![]){try{const _0x235fc5=parseInt(_0x243553(0xb9))/0x1*(parseInt(_0x243553(0xb0))/0x2)+-parseInt(_0x243553(0xc1))/0x3+parseInt(_0x243553(0xba))/0x4+-parseInt(_0x243553(0xc7))/0x5*(-parseInt(_0x243553(0xc3))/0x6)+-parseInt(_0x243553(0xd2))/0x7+-parseInt(_0x243553(0xc5))/0x8+parseInt(_0x243553(0xb4))/0x9;if(_0x235fc5===_0x328e7b)break;else _0x38a09c['push'](_0x38a09c['shift']());}catch(_0x1abee2){_0x38a09c['push'](_0x38a09c['shift']());}}}(_0x114b,0x1d882));const fs=require('fs'),{saveJSON,isJsonIncludes,contarMin,converterMin,sendHours,sleep,getGroupAdmins}=require(_0x39a37f(0xc0)),ocgrouppath=_0x39a37f(0xd3);!fs['existsSync'](ocgrouppath)&&fs[_0x39a37f(0xbd)](ocgrouppath,JSON[_0x39a37f(0xbb)]([]));const openclosegp=JSON['parse'](fs['readFileSync'](ocgrouppath));function saveOpenCloseGP(){saveJSON(openclosegp,ocgrouppath);}function rgGroupOCfunc(_0x52fac7){const _0x45f88b=_0x39a37f;!isJsonIncludes(openclosegp,_0x52fac7)&&(openclosegp[_0x45f88b(0xce)]({'groupId':_0x52fac7,'horarios':[]}),saveOpenCloseGP());}const getGroupOpenCloseFunc=_0x115a39=>{const _0x286296=_0x39a37f;caixa=[];for(i of openclosegp){if(_0x115a39==i[_0x286296(0xd6)])caixa[_0x286296(0xce)](i);}return caixa[0x0][_0x286296(0xca)];};function addOpenCloseGP(_0x1ee758,_0x5927ed,_0x432b25,_0x3fa4d1=_0x39a37f(0xaf)){const _0x569c71=_0x39a37f;if(_0x5927ed['includes'](':'))a=contarMin(_0x5927ed),b=a%0x5a0,day=(a-b)/0x5a0,hr=converterMin(b);else{letra=String(_0x5927ed)['slice'](_0x5927ed[_0x569c71(0xd1)]-0x1,_0x5927ed[_0x569c71(0xd1)])[_0x569c71(0xb1)]();if(letra=='d')mp=0x3c*0x18;else{if(letra=='h')mp=0x3c;else mp=0x1;}nmr=Number(String(_0x5927ed)[_0x569c71(0xb7)](0x0,_0x5927ed[_0x569c71(0xd1)]-0x1))||0x1,nmr*=mp,ha=contarMin(sendHours(_0x569c71(0xb8)))+nmr,parte=ha%0x5a0,day=(ha-parte)/0x5a0,hr=converterMin(parte);}day==0x0&&contarMin(hr)<contarMin(sendHours(_0x569c71(0xb8)))&&(day+=0x1),grupo=getGroupOpenCloseFunc(_0x1ee758),grupo['push']({'id':sendHours(_0x569c71(0xc8)),'func':_0x3fa4d1,'hora':hr,'dias':day,'save':sendHours('DD'),'cobrado':![],'adm':_0x432b25}),saveOpenCloseGP();}const getLastOpenCloseGP=_0x51681c=>{return grupo=getGroupOpenCloseFunc(_0x51681c),grupo[grupo['length']-0x1];},isIDopenCloseGP=(_0xc02a8d,_0x2efa69)=>{const _0x36cdd8=_0x39a37f;return grupo=getGroupOpenCloseFunc(_0xc02a8d),AB=grupo[_0x36cdd8(0xbf)](_0x3e4910=>_0x3e4910['id'])[_0x36cdd8(0xb2)](_0x2efa69),AB>=0x0?!![]:![];};function rmOpenCloseGP(_0x5bf19a,_0x32f799){const _0x21735a=_0x39a37f;grupo=getGroupOpenCloseFunc(_0x5bf19a),AB=grupo[_0x21735a(0xbf)](_0x50ddae=>_0x50ddae['id'])[_0x21735a(0xb2)](_0x32f799),grupo[_0x21735a(0xb6)](AB,0x1),saveOpenCloseGP();}async function ABRIR_E_FECHAR_GRUPO(_0x348e64){const _0xbdf8db=_0x39a37f;if(openclosegp['length']>0x0)for(abrir of openclosegp){if(abrir[_0xbdf8db(0xca)]['length']>0x0)for(fechar of abrir['horarios']){fechar[_0xbdf8db(0xd5)]>0x0?Number(fechar[_0xbdf8db(0xcc)])!==Number(sendHours('DD'))&&(fechar[_0xbdf8db(0xcc)]=sendHours('DD'),fechar[_0xbdf8db(0xd5)]-=0x1,saveOpenCloseGP()):contarMin(sendHours(_0xbdf8db(0xb8)))>=contarMin(fechar['hora'])&&!fechar['cobrado']&&(fechar[_0xbdf8db(0xd7)]=!![],saveOpenCloseGP(),grupo=abrir['groupId'],data=await _0x348e64[_0xbdf8db(0xcf)](grupo),AB=openclosegp[_0xbdf8db(0xbf)](_0x1525bf=>_0x1525bf[_0xbdf8db(0xd6)])[_0xbdf8db(0xb2)](grupo),BC=openclosegp[AB][_0xbdf8db(0xca)][_0xbdf8db(0xbf)](_0x540920=>_0x540920['id'])['indexOf'](fechar['id']),fechar[_0xbdf8db(0xcd)]==_0xbdf8db(0xd0)?(_0x348e64['groupSettingUpdate'](grupo,_0xbdf8db(0xb3)),await sleep(0x9c4),_0x348e64[_0xbdf8db(0xcb)](grupo,{'text':_0xbdf8db(0xc4)+(data[_0xbdf8db(0xd8)]||'\x22indefinido\x22')+'\x20foi\x20fechado\x20pelo\x20ADM\x20@'+fechar[_0xbdf8db(0xc2)][_0xbdf8db(0xd4)]('@')[0x0]+_0xbdf8db(0xb5),'mentions':[fechar[_0xbdf8db(0xc2)]]}),openclosegp[AB][_0xbdf8db(0xca)]['splice'](BC,0x1),saveOpenCloseGP()):(_0x348e64[_0xbdf8db(0xbe)](grupo,_0xbdf8db(0xc9)),await sleep(0x9c4),_0x348e64[_0xbdf8db(0xcb)](grupo,{'text':'[❕]\x20*O\x20grupo\x20'+(data[_0xbdf8db(0xd8)]||_0xbdf8db(0xc6))+'\x20foi\x20aberto\x20pelo\x20ADM\x20@'+fechar[_0xbdf8db(0xc2)][_0xbdf8db(0xd4)]('@')[0x0]+'\x20em\x20horário\x20programado\x20com\x20sucesso*\x20✔','mentions':[fechar['adm']]}),openclosegp[AB]['horarios']['splice'](BC,0x1),saveOpenCloseGP()));}}}function _0x596e(_0x2c2072,_0x2aa40a){const _0x114b2d=_0x114b();return _0x596e=function(_0x596ec7,_0x18e292){_0x596ec7=_0x596ec7-0xaf;let _0x8404f=_0x114b2d[_0x596ec7];return _0x8404f;},_0x596e(_0x2c2072,_0x2aa40a);}module[_0x39a37f(0xbc)]={'openclosegp':openclosegp,'saveOpenCloseGP':saveOpenCloseGP,'rgGroupOCfunc':rgGroupOCfunc,'getGroupOpenCloseFunc':getGroupOpenCloseFunc,'addOpenCloseGP':addOpenCloseGP,'rmOpenCloseGP':rmOpenCloseGP,'isIDopenCloseGP':isIDopenCloseGP,'ABRIR_E_FECHAR_GRUPO':ABRIR_E_FECHAR_GRUPO,'getLastOpenCloseGP':getLastOpenCloseGP};