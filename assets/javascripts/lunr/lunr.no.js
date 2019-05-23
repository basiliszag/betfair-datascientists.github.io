!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(e){if(void 0===e)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var r,l,n;e.no=function(){this.pipeline.reset(),this.pipeline.add(e.no.trimmer,e.no.stopWordFilter,e.no.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(e.no.stemmer))},e.no.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",e.no.trimmer=e.trimmerSupport.generateTrimmer(e.no.wordCharacters),e.Pipeline.registerFunction(e.no.trimmer,"trimmer-no"),e.no.stemmer=(r=e.stemmerSupport.Among,l=e.stemmerSupport.SnowballProgram,n=new function(){var n,i,t=[new r("a",-1,1),new r("e",-1,1),new r("ede",1,1),new r("ande",1,1),new r("ende",1,1),new r("ane",1,1),new r("ene",1,1),new r("hetene",6,1),new r("erte",1,3),new r("en",-1,1),new r("heten",9,1),new r("ar",-1,1),new r("er",-1,1),new r("heter",12,1),new r("s",-1,2),new r("as",14,1),new r("es",14,1),new r("edes",16,1),new r("endes",16,1),new r("enes",16,1),new r("hetenes",19,1),new r("ens",14,1),new r("hetens",21,1),new r("ers",14,1),new r("ets",14,1),new r("et",-1,1),new r("het",25,1),new r("ert",-1,3),new r("ast",-1,1)],o=[new r("dt",-1,-1),new r("vt",-1,-1)],s=[new r("leg",-1,1),new r("eleg",0,1),new r("ig",-1,1),new r("eig",2,1),new r("lig",2,1),new r("elig",4,1),new r("els",-1,1),new r("lov",-1,1),new r("elov",7,1),new r("slov",7,1),new r("hetslov",9,1)],a=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,48,0,128],m=[119,125,149,1],u=new l;this.setCurrent=function(e){u.setCurrent(e)},this.getCurrent=function(){return u.getCurrent()},this.stem=function(){var e=u.cursor;return function(){var e,r=u.cursor+3;if(i=u.limit,0<=r||r<=u.limit){for(n=r;;){if(e=u.cursor,u.in_grouping(a,97,248)){u.cursor=e;break}if(e>=u.limit)return;u.cursor=e+1}for(;!u.out_grouping(a,97,248);){if(u.cursor>=u.limit)return;u.cursor++}(i=u.cursor)<n&&(i=n)}}(),u.limit_backward=e,u.cursor=u.limit,function(){var e,r,n;if(u.cursor>=i&&(r=u.limit_backward,u.limit_backward=i,u.ket=u.cursor,e=u.find_among_b(t,29),u.limit_backward=r,e))switch(u.bra=u.cursor,e){case 1:u.slice_del();break;case 2:n=u.limit-u.cursor,u.in_grouping_b(m,98,122)?u.slice_del():(u.cursor=u.limit-n,u.eq_s_b(1,"k")&&u.out_grouping_b(a,97,248)&&u.slice_del());break;case 3:u.slice_from("er")}}(),u.cursor=u.limit,function(){var e,r=u.limit-u.cursor;u.cursor>=i&&(e=u.limit_backward,u.limit_backward=i,u.ket=u.cursor,u.find_among_b(o,2)?(u.bra=u.cursor,u.limit_backward=e,u.cursor=u.limit-r,u.cursor>u.limit_backward&&(u.cursor--,u.bra=u.cursor,u.slice_del())):u.limit_backward=e)}(),u.cursor=u.limit,function(){var e,r;u.cursor>=i&&(r=u.limit_backward,u.limit_backward=i,u.ket=u.cursor,(e=u.find_among_b(s,11))?(u.bra=u.cursor,u.limit_backward=r,1==e&&u.slice_del()):u.limit_backward=r)}(),!0}},function(e){return"function"==typeof e.update?e.update(function(e){return n.setCurrent(e),n.stem(),n.getCurrent()}):(n.setCurrent(e),n.stem(),n.getCurrent())}),e.Pipeline.registerFunction(e.no.stemmer,"stemmer-no"),e.no.stopWordFilter=e.generateStopWordFilter("alle at av bare begge ble blei bli blir blitt både båe da de deg dei deim deira deires dem den denne der dere deres det dette di din disse ditt du dykk dykkar då eg ein eit eitt eller elles en enn er et ett etter for fordi fra før ha hadde han hans har hennar henne hennes her hjå ho hoe honom hoss hossen hun hva hvem hver hvilke hvilken hvis hvor hvordan hvorfor i ikke ikkje ikkje ingen ingi inkje inn inni ja jeg kan kom korleis korso kun kunne kva kvar kvarhelst kven kvi kvifor man mange me med medan meg meget mellom men mi min mine mitt mot mykje ned no noe noen noka noko nokon nokor nokre nå når og også om opp oss over på samme seg selv si si sia sidan siden sin sine sitt sjøl skal skulle slik so som som somme somt så sånn til um upp ut uten var vart varte ved vere verte vi vil ville vore vors vort vår være være vært å".split(" ")),e.Pipeline.registerFunction(e.no.stopWordFilter,"stopWordFilter-no")}});