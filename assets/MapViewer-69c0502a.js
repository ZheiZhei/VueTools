import{_ as m,u as w,o as l,c as b,a as e,t as d,F as h,b as u,n as _,f as A,p as y,g as x}from"./index-207f70e7.js";const g={props:{},data(){return{options:Array,mapData:Array,predefines:Array}},created(){},mounted(){let t=w();this.levelId=t.params.map,this.axios.get("../../VueTools/static/act1sandbox/"+t.params.map+".json").then(s=>{this.options=s.data.options,this.mapData=s.data.mapData,this.predefines=s.data.predefines})},updated(){this.$nextTick(()=>{this.renderTiles(this.mapData.tiles),this.renderToken(this.predefines.tokenInsts),this.renderBlackBoard(this.options.configBlackBoard),this.setFontSize(),tippy("[data-tippy-content]",{allowHTML:!0})})},methods:{returnMaxTime(t){return t>0?t+"秒":"无限"},appendAttr(t,s){let a=$(t).attr("data-tippy-content");a?$(t).attr("data-tippy-content",a+"<br>"+s):$(t).attr("data-tippy-content",s)},setFontSize(){let t=$('[class|="board"] span'),s=parseInt(t.parent().width()/4*3);t.css("font-size",s+"px")},renderTiles(t){t.forEach((s,a)=>{let r=s.tileKey.replace("tile_","");switch(r){case"start":$(".board-"+a).html("<span>⚠</span>"),this.appendAttr(".board-"+a,"<b>侵入点</b>");break;case"end":$(".board-"+a).html("<span>⚠</span>"),this.appendAttr(".board-"+a,"<b>保护目标</b>");break;case"floor":$(".board-"+a).html("<span>🛇</span>");break;case"flystart":$(".board-"+a).html("<span>✈</span>"),this.appendAttr(".board-"+a,"<b>空袭侵入点</b>");break;case"hole":this.appendAttr(".board-"+a,"<b>地穴</b>");break;case"grass":this.appendAttr(".board-"+a,"<b>草丛</b>");break;case"deepsea":this.appendAttr(".board-"+a,"<b>清澈水域</b>");break;case"infection":this.appendAttr(".board-"+a,"<b>活性源石</b><br>部署于其上的我军和经过的敌军持续受到伤害，但攻击力和攻速大幅度提升");break;case"corrosion_2":$(".board-"+a).html('<span><i class="fas fa-angle-double-down"></i></span>'),this.appendAttr(".board-"+a,"<b>腐蚀地面</b><br>置于其上的我方单位防御力减半");break;case"healing":this.appendAttr(".board-"+a,"<b>医疗符文</b><br>部署在其上的干员会持续恢复生命");break;case"telin":$(".board-"+a).html('<span><i class="fas fa-indent"></i></span>'),this.appendAttr(".board-"+a,"<b>通道入口</b>");break;case"telout":$(".board-"+a).html('<span><i class="fas fa-outdent"></i></span>'),this.appendAttr(".board-"+a,"<b>通道出口</b>");break;case"volcano":this.appendAttr(".board-"+a,"<b>热泵通道</b><br>每隔一段时间便会对其上的我军和敌军造成大量伤害");break;case"volspread":this.appendAttr(".board-"+a,"<b>岩浆喷射处</b><br>每隔一定时间会喷出岩浆，对周围8格内的我方单位造成大量伤害且融化障碍物");break}$(".board-"+a).addClass(r)})},renderToken(t){t.forEach(s=>{let a=s.position,r=s.inst.characterKey.replace(/trap_[0-9]+_/g,"");switch(r){case"xbwood":this.appendAttr("."+a.row+"-"+a.col,"<b>杂木林</b><br>可开采<木材>");break;case"xboverwatch":this.appendAttr("."+a.row+"-"+a.col,"<b>监控塔</b><br>可以侦查范围内的视野");break;case"vegetation":this.appendAttr("."+a.row+"-"+a.col,"<b>灌木丛</b><br>击破后可以获得一些素材");break;case"hiddenstone":this.appendAttr("."+a.row+"-"+a.col,"<b>遗迹残骸</b><br>击破后可解锁隐藏区域");break;case"gtreasure":$("."+a.row+"-"+a.col).html("<span>♔</span>"),this.appendAttr("."+a.row+"-"+a.col,"<b>埋没金属箱</b><br>击破后可获得一些宝物");break;case"ballis":$("."+a.row+"-"+a.col).html("<span>➹</span>"),this.appendAttr("."+a.row+"-"+a.col,"<b>弩炮</b><br>会定期射出弩箭对我方单位造成物理伤害");break;case"streasure":$("."+a.row+"-"+a.col).html("<span>♚</span>"),this.appendAttr("."+a.row+"-"+a.col,"<b>宝刺金属箱</b><br>击破后可以获得一些珍贵宝物，受到攻击时会反弹真实伤害");break;case"xbstone":this.appendAttr("."+a.row+"-"+a.col,"<b>巨大岩石</b><br>可开采<石材>");break;case"roadblock":this.appendAttr("."+a.row+"-"+a.col,"<b>道路障碍物</b><br>不容易受到我方单位的攻击");break;case"xbiron":this.appendAttr("."+a.row+"-"+a.col,"<b>奇异矿脉</b><br>可开采<铁矿石>");break;case"airsup":this.appendAttr("."+a.row+"-"+a.col,"<b>无人机出发点</b>");break;case"wdescp":$("."+a.row+"-"+a.col).html('<span><i class="fas fa-sign-out-alt"></i></span>'),this.appendAttr("."+a.row+"-"+a.col,"<b>逃脱点</b><br>部署干员后激活野外支援可进行逃脱");break;case"redtower":$("."+a.row+"-"+a.col).html('<span><i class="fas fa-broadcast-tower"></i></span>'),this.appendAttr("."+a.row+"-"+a.col,"<b>移动战塔</b><br>敌方老巢，击败该地区的全部老巢使该地区不会刷新精英敌袭");break;case"xbbase":$("."+a.row+"-"+a.col).html('<span><i class="fas fa-chess-rook"></i></span>'),this.appendAttr("."+a.row+"-"+a.col,"<b>基地</b>");break;case"xbfarm":this.appendAttr("."+a.row+"-"+a.col,"<b>便携式种植槽</b><br>每天产出一定数量的<稻谷>，可部署在低地");break}$("."+a.row+"-"+a.col).addClass("token "+r)})},renderBlackBoard(t){t.forEach(s=>{let a=s.valueStr;if(!a<=0){let r=a.replace(/\(|\)/g,"").split(",");if(r.length==4){let o=new Array;for(let n=parseInt(r[0]);n<=parseInt(r[2]);n++)for(let p=parseInt(r[1]);p<=parseInt(r[3]);p++)o.push([n,p]);o.forEach(n=>{$("."+n[0]+"-"+n[1]).addClass("rect")})}}})}}},k=t=>(y("data-v-6fd837e9"),t=t(),x(),t),v={class:"uk-table uk-table-small inline-table inline-block w-1/2"},I=k(()=>e("tr",null,[e("th",null,"干员部署上限"),e("th",null,"保护点生命值"),e("th",null,"初始费用点数")],-1)),T=k(()=>e("tr",null,[e("th",null,"费用点数上限"),e("th",null,"自然回复倍率"),e("th",null,"资源收集时限")],-1)),B=["innerHTML"],D={colspan:"3"},S={id:"map",class:"w-full"};function M(t,s,a,r,o,n){return l(),b("table",v,[e("tbody",null,[I,e("tr",null,[e("td",null,d(o.options.characterLimit),1),e("td",null,d(o.options.maxLifePoint),1),e("td",null,d(o.options.initialCost),1)]),T,e("tr",null,[e("td",null,d(o.options.maxCost),1),e("td",null,d(o.options.costIncreaseTime),1),e("td",{innerHTML:n.returnMaxTime(o.options.maxPlayTime)},null,8,B)]),e("tr",null,[e("td",D,[e("div",S,[(l(!0),b(h,null,u(o.mapData.map,(p,i)=>(l(),b("div",{key:i,class:"row"},[(l(!0),b(h,null,u(p,(f,c)=>(l(),b("div",{key:c,class:_("board-"+f+" "+(o.mapData.height-1-i)+"-"+c),style:A("width: "+100/o.mapData.width+"%")},null,6))),128))]))),128))])])])])])}const C=m(g,[["render",M],["__scopeId","data-v-6fd837e9"]]);export{C as default};
