const SK='av5';let d={r:[],s:{}};
const cs={i:[{n:'销售收入',e:'💰'},{n:'服务收入',e:'💼'},{n:'回款',e:'💳'},{n:'其他收入',e:'📥'}],e:[{n:'进货/原料',e:'📦'},{n:'人工工资',e:'👥'},{n:'房租',e:'🏠'},{n:'水电',e:'💡'},{n:'营销',e:'📢'},{n:'交通',e:'🚚'},{n:'招待',e:'🍽️'},{n:'办公',e:'📎'},{n:'税费',e:'📋'},{n:'其他支出',e:'📤'}]};
const BM={'餐饮':{n:'餐饮业',r:{食材:{t:35,w:42},人工:{t:30,w:38},租金:{t:15,w:22}},g:{t:60,w:50},ts:['食材超40%要优化','翻台率是生命线','每周盘点减浪费']},'零售':{n:'零售业',r:{进货:{t:60,w:70},人工:{t:15,w:22},租金:{t:10,w:18}},g:{t:40,w:30},ts:['库存周转<30天','关注滞销品','进货波动>5%调价']},'服务':{n:'服务业',r:{人工:{t:35,w:45},租金:{t:10,w:18},营销:{t:10,w:20}},g:{t:50,w:40},ts:['人效比是核心','获客成本高做复购','项目制核算']},'制造':{n:'制造业',r:{原料:{t:45,w:55},人工:{t:20,w:30},能耗:{t:8,w:12}},g:{t:35,w:25},ts:['开工率<60%需关注','能耗上升检查设备','原料提前锁价']},'电商':{n:'电商',r:{进货:{t:40,w:55},推广:{t:15,w:25},人工:{t:10,w:18},物流:{t:8,w:12}},g:{t:45,w:30},ts:['ROI<1:3暂停推广','退货>15%检查品质','复购率比转化重要']}};
function ld(){try{var a=localStorage.getItem(SK);if(a)d=JSON.parse(a)}catch(e){}if(!d.r)d.r=[];if(!d.s)d.s={}}
function sv(){localStorage.setItem(SK,JSON.stringify(d))}
function $(i){return document.getElementById(i)}
function ts(m){var t=$('ts');if(!t)return;t.textContent=m;t.classList.add('sh');clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('sh')},1800)}
function id(){return Date.now().toString(36)+Math.random().toString(36).slice(2,5)}
function fm(v){return '\u00a5'+(v/100).toFixed(2)}
function mr(ym){return d.r.filter(function(r){return r.d.startsWith(ym)}).sort(function(a,b){return b.d.localeCompare(a.d)})}
function ms(ym){var ti=0,te=0;mr(ym).forEach(function(r){if(r.t==='i')ti+=r.a;else te+=r.a});return{ti:ti,te:te,p:ti-te,rc:mr(ym).length}}
function gt(id,el){
  document.querySelectorAll('.pg').forEach(function(p){p.classList.remove('on')});
  var pg=$('p-'+id);if(pg)pg.classList.add('on');
  document.querySelectorAll('.nt .tb').forEach(function(t){t.classList.remove('on')});
  if(el)el.classList.add('on');else{var m={home:0,add:1,list:2,rpt:3,imp:4,set:5};var tb=document.querySelectorAll('.nt .tb');if(tb[m[id]])tb[m[id]].classList.add('on')}
  if(id==='home')rh();if(id==='add')ia();if(id==='list')rl();if(id==='rpt'){var n=new Date();if(!$('rm')){var d=$('p-rpt');d.innerHTML=getReportShell();}$('rm')&&$('rm').value||setTimeout(function(){var m=$('rm');if(m&&!m.value){m.value=n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')}},50)}if(id==='set')lset()
}
function rh(){
  ld();var n=new Date(),ym=n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0'),s=ms(ym);var set=d.s;
  var cp=$('cp');if(!cp){var h='<div class=sr style=margin-bottom:8px><div class=sc><div class=a>当月收入</div><div class=b id=mi></div></div><div class=sc><div class=a>当月支出</div><div class=b id=me></div></div><div class=sc><div class=a>当月利润</div><div class=b id=mp></div></div><div class=sc><div class=a>笔数</div><div class=b id=mc></div></div></div>';$('p-home').innerHTML=h}
  $('mi').textContent=fm(s.ti);$('me').textContent=fm(s.te);
  var p=$('mp');p.textContent=fm(s.p);p.style.color=s.p>=0?'#4ade80':'#f87171';
  var parts=ym.split('-'),y=parts[0],m=parts[1];var pm=m==='01'?(parseInt(y)-1)+'-12':y+'-'+String(parseInt(m)-1).padStart(2,'0'),ps=ms(pm);
  var vi=ps.ti>0?((s.ti-ps.ti)/ps.ti*100).toFixed(1):null;
  var mc=$('mc');mc.textContent=s.rc+'笔';
  var html='<div class=cd><div class=cti>最近流水</div>';
  var rs=mr(ym).slice(0,5);
  if(rs.length===0)html+='<div class=emp><div class=ic>📝</div><div>本月暂无记录，开始记账吧</div></div>';
  else{for(var i=0;i<rs.length;i++){var r=rs[i];html+='<div class=rec><div class=ic>'+(r.t==='i'?'📥':'📤')+'</div><div class=if><div class=c>'+r.c+'</div><div class=d>'+r.d.slice(5)+(r.n?' '+r.n:'')+'</div></div><div class=am style=color:'+(r.t==='i'?'#22c55e':'#ef4444')+'>'+(r.t==='i'?'+':'-')+(r.a/100).toFixed(2)+'</div></div>';}}
  html+='</div><button class="btn btn-p btn-b" onclick=gt("add") style=font-size:14px;padding:10px;margin-bottom:8px>✏️ 记一笔</button><div style=display:flex;gap:6px><button class="btn btn-o btn-s" onclick=gt("list") style=flex:1>📋 查看流水</button><button class="btn btn-o btn-s" onclick=gt("rpt") style=flex:1>📊 查看报告</button></div>';
  $('p-home').innerHTML += html;
}
var cur='i',sc='';
function sa(t){cur=t;document.querySelectorAll('#at .o').forEach(function(e){e.classList.toggle('on',e.classList.contains(t))});rc();rq()}
function rq(){var a=cur==='i'?[100,500,1e3,5e3,1e4]:[10,50,100,500,1e3,5e3];var h='';for(var i=0;i<a.length;i++){h+='<span class="btn btn-s btn-o" onclick="setAmount('+a[i]+')">\u00a5'+a[i].toLocaleString()+'</span>'}$('aq').innerHTML=h}
function setAmount(v){$('aa').value=v}
function rc(){var l=cs[cur];var h='';for(var i=0;i<l.length;i++){var c=l[i];h+='<div class="ci'+(sc===c.n?' sl':'')+'" onclick="selCat(\u0027'+c.n+'\u0027)"><span class=e>'+c.e+'</span>'+c.n+'</div>'}$('ac').innerHTML=h}
function selCat(n){sc=n;rc()}
function ia(){$('ad').value=new Date().toISOString().slice(0,10);$('aa').value='';$('an').value='';sc='';cur='i';sa('i')}
function sr(){var a=Math.round(parseFloat($('aa').value)*100);if(!a||a<=0){ts('请输入金额');return}if(!sc){ts('请选择类别');return}ld();d.r.push({id:id(),d:$('ad').value,t:cur,c:sc,a:a,n:$('an').value.trim()||'',src:'手动',ts:Date.now()});sv();ts('✅ 保存成功');setTimeout(function(){gt('home')},400)}
function rl(){ld();var mi=$('lm');if(!mi.value){var n=new Date();mi.value=n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')}var recs=mr(mi.value);var q=$('lq').value.toLowerCase();if(q)recs=recs.filter(function(r){return(r.c||'').toLowerCase().includes(q)||(r.n||'').toLowerCase().includes(q)})
  var html='<h2 style=font-size:16px;margin-bottom:10px>📋 流水明细</h2>';
  html+='<div class=cd style=padding:8px><div style=display:flex;gap:6px;margin-bottom:8px><input type=month id=lm style=flex:1;padding:8px;border:1px solid #ddd;border-radius:8px;font-size:12px onchange=rl()><input type=text id=lq placeholder=搜索类别/备注... style=flex:1;padding:8px;border:1px solid #ddd;border-radius:8px;font-size:12px oninput=rl()><button class="btn btn-s btn-o" onclick=ex()>📤导出CSV</button></div>';
  if(recs.length===0)html+='<div class=emp><div class=ic>📋</div><div style=font-weight:500;margin-bottom:4px>暂无记录</div><div style=font-size:11px;color:#999>先去记账页添加几笔吧</div></div>';
  else{html+='<div style=font-size:11px;color:#999;margin-bottom:4px>共'+recs.length+'条记录</div>';html+='<div style=overflow:auto><table><tr><th>日期<th>类型<th>类别<th>金额<th>备注</tr>';for(var i=0;i<recs.length;i++){var r=recs[i];html+='<tr style=cursor:pointer onclick=showDetail("'+r.id+'")><td>'+r.d.slice(5)+'</td><td><span class="tag '+r.t+'">'+(r.t==='i'?'收入':'支出')+'</span></td><td>'+r.c+'</td><td style=font-weight:600;color:'+(r.t==='i'?'#22c55e':'#ef4444')+'>'+(r.t==='i'?'+':'-')+(r.a/100).toFixed(2)+'</td><td style=color:#999;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap>'+(r.n||'-')+'</td></tr>';}html+='</table></div>';}
  $('p-list').innerHTML=html;
}
function showDetail(id){
  ld();var rec=null;for(var i=0;i<d.r.length;i++){if(d.r[i].id===id){rec=d.r[i];break}}
  if(!rec){ts('记录不存在');return}
  var overlay=document.createElement('div');
  overlay.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px';
  overlay.onclick=function(e){if(e.target===this)closeOverlay()};
  overlay.id='detailOv';
  var box=document.createElement('div');
  box.style.cssText='background:#fff;border-radius:12px;padding:20px;max-width:360px;width:100%';
  box.innerHTML='<div style=text-align:right;font-size:18px;cursor:pointer;color:#999 onclick=closeOverlay()>✕</div><div style=text-align:center;font-size:32px;margin-bottom:8px>'+(rec.t==='i'?'📥':'📤')+'</div><div style=text-align:center;font-size:24px;font-weight:600;color:'+(rec.t==='i'?'#22c55e':'#ef4444')+'>'+(rec.t==='i'?'+':'-')+' '+(rec.a/100).toFixed(2)+'</div><table style=width:100%;margin-top:12px;font-size:13px><tr><td style=color:#999;padding:6px 0;width:60px>类型</td><td style=padding:6px 0><span class="tag '+rec.t+'">'+(rec.t==='i'?'收入':'支出')+'</span></td></tr><tr><td style=color:#999;padding:6px 0>日期</td><td style=padding:6px 0>'+rec.d+'</td></tr><tr><td style=color:#999;padding:6px 0>类别</td><td style=padding:6px 0>'+rec.c+'</td></tr><tr><td style=color:#999;padding:6px 0>金额</td><td style=padding:6px 0;font-weight:600;color:'+(rec.t==='i'?'#22c55e':'#ef4444')+'>'+(rec.a/100).toFixed(2)+'</td></tr><tr><td style=color:#999;padding:6px 0>备注</td><td style=padding:6px 0>'+(rec.n||'-')+'</td></tr></table><div style=display:flex;gap:8px;margin-top:12px><button class="btn btn-s btn-o" style=flex:1 onclick=editRec("'+rec.id+'")>✏️ 修改</button><button class="btn btn-s btn-r" style=flex:1 onclick=drFromDetail("'+rec.id+'")>🗑️ 删除</button></div>';
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}
function closeOverlay(){var el=$('detailOv');if(el)el.parentNode.removeChild(el)}
function drFromDetail(id){closeOverlay();dr(id)}
function editRec(id){
  closeOverlay();ld();var rec=null;for(var i=0;i<d.r.length;i++){if(d.r[i].id===id){rec=d.r[i];break}}
  if(!rec)return;cur=rec.t;sc=rec.c;
  $('ad').value=rec.d;$('aa').value=(rec.a/100).toFixed(2);$('an').value=rec.n||'';
  d.r=d.r.filter(function(r){return r.id!==id});sv();gt('add');
  var els=document.querySelectorAll('#at .o');for(var i=0;i<els.length;i++){els[i].classList.toggle('on',els[i].classList.contains(cur))}
  rq();rc();
}
function dr(id){if(!confirm('确定删除这条记录？'))return;ld();d.r=d.r.filter(function(r){return r.id!==id});sv();rl();ts('已删除')}
function ex(){ld();var mi=$('lm');if(!mi.value)return;var recs=mr(mi.value);if(recs.length===0){ts('无数据');return}var c='日期,类型,类别,金额,备注,来源\n';for(var i=0;i<recs.length;i++){var r=recs[i];c+=r.d+','+(r.t==='i'?'收入':'支出')+','+r.c+','+(r.t==='i'?'':'-')+(r.a/100).toFixed(2)+','+(r.n||'')+','+(r.src||'手动')+'\n'}var b=new Blob(['\ufeff'+c],{type:'text/csv;charset=utf-8'});var u=URL.createObjectURL(b);var a=document.createElement('a');a.href=u;a.download='流水明细_'+mi.value+'.csv';a.click();URL.revokeObjectURL(u);ts('✅ 导出'+recs.length+'条明细')}
function getReportShell(){
  var n=new Date(),ym=n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0');
  return '<h2 style=font-size:16px;margin-bottom:10px>📊 经营报告</h2><div style=display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap><input type=month id=rm style=flex:1;min-width:120px;padding:8px;border:1px solid #ddd;border-radius:8px;font-size:12px onchange=updateRM()><button class="btn btn-p btn-s" onclick=geReport()>⚡ 生成报告</button><button class="btn btn-s btn-o" onclick=repCSV()>📄 导出Excel</button><button class="btn btn-s btn-o" onclick=repTXT()>📝 导出文字</button></div><div id=repContent></div>';
}
function updateRM(){}
function geReport(){
  var m=$('rm').value;if(!m)return;ld();var ind=d.s.industry||'';
  if(!ind){$('repContent').innerHTML='<div class=cd style=text-align:center;padding:30px><div style=font-size:36px>⚙️</div><div style=margin-top:8px;font-weight:500>请先设置行业信息</div><div style=font-size:12px;color:#999;margin-top:4px>设置后生成更准确的经营分析报告</div><button class="btn btn-s btn-p" style=margin-top:10px onclick=gt("set")>去设置</button></div>';return}
  var bm=BM[ind];if(!bm){$('repContent').innerHTML='<div class=cd><div class=emp><div class=ic>❌</div><div>行业数据未找到</div></div></div>';return}
  var s=ms(m);var exp={};var inc={};var days={};
  mr(m).forEach(function(r){if(r.t==='e')exp[r.c]=(exp[r.c]||0)+r.a;else inc[r.c]=(inc[r.c]||0)+r.a;days[r.d]=1});
  var gpm=s.ti>0?(s.ti-(exp['进货/原料']||0))/s.ti*100:null;
  var score=70;if(s.ti>0){var npr=s.p/s.ti*100;score+=npr>20?15:npr>10?10:5}else score-=10;if(gpm!==null&&gpm>50)score+=10;else if(gpm!==null&&gpm<20)score-=10;score=Math.max(0,Math.min(100,Math.round(score)));
  var sc=score>=70?'g':score>=40?'w':'d';
  var sc2=score>=70?'✅ 经营良好':score>=40?'⚠️ 需要关注':'🚨 经营预警';
  var als=[];
  if(gpm!==null&&gpm<(bm.g.w||bm.g.t-10))als.push({l:'w',t:'毛利率偏低 ('+gpm.toFixed(0)+'%)',d:'行业参考值'+bm.g.t+'%，建议优化成本结构'});
  if(s.ti>0&&s.te/s.ti*100>(bm.g.w?100-bm.g.w:60))als.push({l:'w',t:'费用率偏高 ('+Math.round(s.te/s.ti*100)+'%)',d:'建议控制非必要支出'});
  if(s.p<=0&&s.ti>0)als.push({l:'d',t:'⚠️ 本月亏损',d:'收入无法覆盖支出，需紧急调整'});
  if(als.length===0)als.push({l:'g',t:'✅ 各项指标正常',d:'经营状况在健康范围内'});
  var parts=m.split('-'),y=parts[0],mm=parts[1];var pm=mm==='01'?(parseInt(y)-1)+'-12':y+'-'+String(parseInt(mm)-1).padStart(2,'0'),ps=ms(pm);
  var vp=ps.p!==0&&ps.rc>0?((s.p-ps.p)/Math.abs(ps.p)*100).toFixed(1):null;
  var html='<div class=cd style=text-align:center><div class="scs '+sc+'">'+score+'</div><div style=margin-top:6px;font-weight:600>'+sc2+'</div><div style=font-size:11px;color:#999>'+m+' · '+(d.s.name||'未命名')+(vp!==null?' · 环比'+(vp>0?'↑':'↓')+Math.abs(vp)+'%':'')+'</div></div>';
  html+='<div class=cd><div class=cti>本月概况</div><div class=sr style=margin-bottom:0><div class=sc><div class=a>收入</div><div class=b style=color:#22c55e>'+fm(s.ti)+'</div></div><div class=sc><div class=a>支出</div><div class=b style=color:#ef4444>'+fm(s.te)+'</div></div><div class=sc><div class=a>利润</div><div class=b style=color:'+(s.p>=0?'#22c55e':'#ef4444')+'>'+fm(s.p)+'</div></div><div class=sc><div class=a>净利率</div><div class=b>'+(s.ti>0?Math.round(s.p/s.ti*100):0)+'%</div></div></div>'+(gpm!==null?'<div style=font-size:12px;color:#666;margin-top:5px>毛利率 '+gpm.toFixed(0)+'% · 费用率 '+(s.ti>0?Math.round(s.te/s.ti*100):0)+'% · 记录'+(s.rc)+'笔</div>':'')+'</div>';
  html+='<div class=cd><div class=cti>经营预警</div>';for(var i=0;i<als.length;i++){var a=als[i];html+='<div class="al '+a.l+'"><div class=t>'+a.t+'</div><div class=det>'+a.d+'</div></div>'}html+='</div>';
  html+='<div class=cd><div class=cti>收入明细</div>';var ik=Object.keys(inc);
  if(ik.length===0)html+='<div style=text-align:center;padding:12px;color:#999>暂无收入记录</div>';else{for(var i=0;i<ik.length;i++){var k=ik[i];html+='<div style=display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f5f5f5><span>'+k+'</span><span style=color:#22c55e;font-weight:500>'+fm(inc[k])+'</span></div>'}}
  html+='</div><div class=cd><div class=cti>支出明细</div>';var ek=Object.keys(exp);
  if(ek.length===0)html+='<div style=text-align:center;padding:12px;color:#999>暂无支出记录</div>';else{for(var i=0;i<ek.length;i++){var k=ek[i];var pct=s.ti>0?Math.round(exp[k]/s.ti*100):0;html+='<div style=display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f5f5f5><span>'+k+'</span><span><span style=color:#ef4444;font-weight:500>'+fm(exp[k])+'</span><span style=color:#999;margin-left:6px>'+pct+'%</span></span></div>'}}
  html+='</div>';
  var sgs=bm.ts.slice(0,3);
  html+='<div class=cd><div class=cti>经营建议（'+bm.n+'）</div>';for(var i=0;i<sgs.length;i++){html+='<div style=padding:6px 0;font-size:12px;border-bottom:1px solid #f0f0f0>💡 '+sgs[i]+'</div>'}html+='</div>';
  $('repContent').innerHTML=html;
}
function repCSV(){
  var m=$('rm').value;if(!m)return;ld();
  var lines=[];lines.push('经营报告 - '+m);lines.push('企业名称,'+(d.s.name||'未设置'));lines.push('所属行业,'+(d.s.industry||'未设置'));lines.push('日期,类型,类别,金额,备注,来源');
  var recs=mr(m);for(var i=0;i<recs.length;i++){var r=recs[i];lines.push(r.d+','+(r.t==='i'?'收入':'支出')+','+r.c+','+(r.t==='i'?'':'-')+(r.a/100).toFixed(2)+','+(r.n||'')+','+(r.src||'手动'))}
  var s=ms(m);lines.push('合计收入,,'+fm(s.ti).replace('¥','')+',,,');lines.push('合计支出,,'+fm(s.te).replace('¥','')+',,,');lines.push('利润,,'+fm(s.p).replace('¥','')+',,,');
  var csv=lines.join('\n');var b=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'});var u=URL.createObjectURL(b);var a=document.createElement('a');a.href=u;a.download='经营报告CSV_'+m+'.csv';a.click();URL.revokeObjectURL(u);ts('✅ 报告CSV已导出')
}
function repTXT(){
  var m=$('rm').value;if(!m)return;ld();var s=ms(m);var set=d.s;
  var txt='';txt+='===============================\n';txt+='  经营报告 - '+m+'\n';txt+='===============================\n';txt+='企业: '+(set.name||'未设置')+' | 行业: '+(set.industry||'未设置')+'\n';txt+='收入: '+fm(s.ti)+' | 支出: '+fm(s.te)+' | 利润: '+fm(s.p)+' | 笔数: '+s.rc+'\n';txt+='-------------------------------\n\n';
  var inc={};var exp={};mr(m).forEach(function(r){if(r.t==='i')inc[r.c]=(inc[r.c]||0)+r.a;else exp[r.c]=(exp[r.c]||0)+r.a});
  txt+='【收入明细】\n';var ik=Object.keys(inc);for(var i=0;i<ik.length;i++){txt+='  '+ik[i]+': '+fm(inc[ik[i]])+'\n'}
  txt+='\n【支出明细】\n';var ek=Object.keys(exp);for(var i=0;i<ek.length;i++){var pct=s.ti>0?'('+Math.round(exp[ek[i]]/s.ti*100)+'%)':'';txt+='  '+ek[i]+': '+fm(exp[ek[i]])+' '+pct+'\n'}
  txt+='\n【流水明细】\n';var recs=mr(m);for(var i=0;i<recs.length;i++){var r=recs[i];txt+=r.d+' '+(r.t==='i'?'[收入]':'[支出]')+' '+r.c+' '+(r.t==='i'?'+':'-')+(r.a/100).toFixed(2)+(r.n?' '+r.n:'')+'\n'}
  txt+='\n--- 由简易记账生成 ---\n';
  var b=new Blob([txt],{type:'text/plain;charset=utf-8'});var u=URL.createObjectURL(b);var a=document.createElement('a');a.href=u;a.download='经营报告TXT_'+m+'.txt';a.click();URL.revokeObjectURL(u);ts('✅ 文字版已导出')
}
var imgType='e';
function setImgType(t){imgType=t;var els=$('it').querySelectorAll('.o');for(var i=0;i<els.length;i++){els[i].classList.toggle('on',els[i].classList.contains(t))}}
function doF(files){
  var f=files[0];if(!f)return;var ext=f.name.split('.').pop().toLowerCase();
  if(ext==='json'){var r=new FileReader();r.onload=function(e){try{var data=JSON.parse(e.target.result);if(data.r&&Array.isArray(data.r)){ld();for(var i=0;i<data.r.length;i++){var x=data.r[i];x.id=id();x.ts=Date.now();d.r.push(x)}if(data.s)d.s={};for(var k in data.s){d.s[k]=data.s[k]}sv();ts('✅ 导入'+data.r.length+'条')}else ts('格式错误')}catch(e){ts('❌ '+e.message)}};r.readAsText(f)}
  else if(ext==='csv'){var r=new FileReader();r.onload=function(e){ld();var lines=e.target.result.split('\n');var c=0;for(var i=1;i<lines.length;i++){var line=lines[i].trim();if(!line)continue;var p=line.split(',');if(p.length>=4){var amt=Math.round(Math.abs(parseFloat(p[3]))*100);if(amt>0){d.r.push({id:id(),d:p[0].trim(),t:parseFloat(p[3])>=0?'i':'e',c:p[2]||'其他',a:amt,n:p[4]||'[导入]',src:'导入',ts:Date.now()});c++}}}sv();ts('✅ 导入'+c+'条')};r.readAsText(f)}
  else if(['png','jpg','jpeg','gif','webp'].indexOf(ext)>=0)doImg(files)
  else ts('不支持格式: '+ext)
}
function doImg(files){var f=files[0];if(!f)return;var r=new FileReader();r.onload=function(e){$('imgs').src=e.target.result;$('ip').style.display='block';$('ia').focus()};r.readAsDataURL(f)}
function sfi(){var a=Math.round(parseFloat($('ia').value)*100);if(!a||a<=0){ts('请输入金额');return}var note=$('iin').value.trim();if(note)note='[图片]'+note;else note='[图片]';var sel=$('icat');var cat=sel?sel.value:'其他';ld();d.r.push({id:id(),d:new Date().toISOString().slice(0,10),t:imgType,c:cat,a:a,n:note,src:'图片',ts:Date.now()});sv();ts('✅ 已保存');$('ia').value='';$('iin').value='';$('ip').style.display='none';gt('home')}
function lset(){ld();$('set-name').value=d.s.name||'';$('set-ind').value=d.s.industry||''}
function svset(){ld();d.s.name=$('set-name').value;d.s.industry=$('set-ind').value;sv();ts('✅ 已保存')}
function expAll(){ld();var b=new Blob([JSON.stringify(d,null,2)],{type:'application/json'});var u=URL.createObjectURL(b);var a=document.createElement('a');a.href=u;a.download='记账备份_'+new Date().toISOString().slice(0,10)+'.json';a.click();URL.revokeObjectURL(u);ts('✅ 已导出')}
function clr(){if(!confirm('清除所有数据？不可恢复！'))return;localStorage.removeItem(SK);d={r:[],s:{}};ts('已清除');gt('home')}

// Auto-init
rh();
