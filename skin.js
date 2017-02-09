// Garden Gnome Software - Skin
// Object2VR 2.0.2/2407
// Filename: grey_multirow phorma.ggsk
// Generated sex 3. fev 15:31:45 2017

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/left__o.png';
		preLoadImg.src=basePath + 'images/right__o.png';
		preLoadImg.src=basePath + 'images/zoomin__o.png';
		preLoadImg.src=basePath + 'images/zoomout__o.png';
		preLoadImg.src=basePath + 'images/autorotate__o.png';
		preLoadImg.src=basePath + 'images/fullscreen__o.png';
		preLoadImg.src=basePath + 'images/button_250__o.png';
		preLoadImg.src=basePath + 'images/button_25__o.png';
		preLoadImg.src=basePath + 'images/button_26__o.png';
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId='controller'
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-131 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-42 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -131px;';
		hs+='top:  -42px;';
		hs+='width: 263px;';
		hs+='height: 73px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._left=document.createElement('div');
		this._left.ggId='left'
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._left.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -14px;';
		hs+='top:  -1px;';
		hs+='width: 38px;';
		hs+='height: 38px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._left.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.onclick=function () {
			me.player.changePan(1,true);
		}
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.png';
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId='right'
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._right.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 29px;';
		hs+='top:  -1px;';
		hs+='width: 38px;';
		hs+='height: 38px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._right.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.onclick=function () {
			me.player.changePan(-1,true);
		}
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.png';
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId='zoomin'
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		this._zoomin.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 57px;';
		hs+='top:  -5px;';
		hs+='width: 56px;';
		hs+='height: 54px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._zoomin.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.png');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._zoomin__img);
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._zoomin__img.src=basePath + 'images/zoomin__o.png';
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.src=basePath + 'images/zoomin.png';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId='zoomout'
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		this._zoomout.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 119px;';
		hs+='top:  -5px;';
		hs+='width: 56px;';
		hs+='height: 52px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._zoomout.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.png');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._zoomout__img);
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._zoomout__img.src=basePath + 'images/zoomout__o.png';
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.src=basePath + 'images/zoomout.png';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId='autorotate'
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._autorotate.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 169px;';
		hs+='top:  -16px;';
		hs+='width: 59px;';
		hs+='height: 59px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._autorotate.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.png');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._autorotate__img);
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._autorotate__img.src=basePath + 'images/autorotate__o.png';
		}
		this._autorotate.onmouseout=function () {
			me._autorotate__img.src=basePath + 'images/autorotate.png';
		}
		this._controller.appendChild(this._autorotate);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId='fullscreen'
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._fullscreen.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 238px;';
		hs+='top:  7px;';
		hs+='width: 28px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._fullscreen.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._fullscreen__img);
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId='loading'
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId='loadingbg'
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId='loadingbrd'
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext.ggId='loadingtext'
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			this.innerHTML="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
		}
		this._loadingtext.ggUpdateText();
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId='loadingbar'
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-color: #ffffff;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId='userdata'
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId='userdatabg'
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId='userdatabrd'
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 238px;';
		hs+='height: 138px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title.ggId='title'
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._title.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			this.innerHTML="<b>"+me.player.userdata.title+"<\/b>";
		}
		this._title.ggUpdateText();
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description.ggId='description'
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  30px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._description.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.description;
		}
		this._description.ggUpdateText();
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author.ggId='author'
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._author.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.author;
		}
		this._author.ggUpdateText();
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime.ggId='datetime'
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._datetime.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.datetime;
		}
		this._datetime.ggUpdateText();
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright.ggId='copyright'
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._copyright.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			this.innerHTML="&#169; "+me.player.userdata.copyright;
		}
		this._copyright.ggUpdateText();
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._image_23=document.createElement('div');
		this._image_23.ggId='Image 23'
		this._image_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_23.ggVisible=true;
		this._image_23.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-136 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -136px;';
		hs+='top:  11px;';
		hs+='width: 118px;';
		hs+='height: 27px;';
		hs+=cssPrefix + 'transform-origin: 100% 0%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_23.setAttribute('style',hs);
		this._image_23__img=document.createElement('img');
		this._image_23__img.setAttribute('src',basePath + 'images/image_23.png');
		this._image_23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_23__img);
		this._image_23.appendChild(this._image_23__img);
		this.divSkin.appendChild(this._image_23);
		this._button_250=document.createElement('div');
		this._button_250.ggId='Button 25'
		this._button_250.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_250.ggVisible=true;
		this._button_250.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-130 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -130px;';
		hs+='top:  -47px;';
		hs+='width: 118px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_250.setAttribute('style',hs);
		this._button_250__img=document.createElement('img');
		this._button_250__img.setAttribute('src',basePath + 'images/button_250.png');
		this._button_250__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_250__img);
		this._button_250.appendChild(this._button_250__img);
		this._button_250.onclick=function () {
			me.player.openUrl("http:\/\/www.casasbahia.com.br\/Eletrodomesticos\/GeladeiraeRefrigerador\/2Portas\/Refrigerador-Esmaltec-RCD34-Branco-276-L-3518835.html?IdProduto=1183205&recsource=btermo&rectype=p1_op_s2","0");
		}
		this._button_250.onmouseover=function () {
			me._button_250__img.src=basePath + 'images/button_250__o.png';
		}
		this._button_250.onmouseout=function () {
			me._button_250__img.src=basePath + 'images/button_250.png';
		}
		this.divSkin.appendChild(this._button_250);
		this._casas_bahia=document.createElement('div');
		this._casas_bahia.ggId='casas bahia'
		this._casas_bahia.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		this._casas_bahia.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -3px;';
		hs+='top:  -2px;';
		hs+='width: 283px;';
		hs+='height: 74px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._casas_bahia.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._casas_bahia.setAttribute('style',hs);
		this._casas_bahia__img=document.createElement('img');
		this._casas_bahia__img.setAttribute('src',basePath + 'images/casas_bahia.png');
		this._casas_bahia__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._casas_bahia__img);
		this._casas_bahia.appendChild(this._casas_bahia__img);
		this._casas_bahia.onclick=function () {
			me.player.openUrl("http:\/\/www.casasbahia.com.br\/","");
		}
		this.divSkin.appendChild(this._casas_bahia);
		this._bahianinho=document.createElement('div');
		this._bahianinho.ggId='bahianinho'
		this._bahianinho.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._bahianinho.ggVisible=true;
		this._bahianinho.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-152 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -88px;';
		hs+='top:  -152px;';
		hs+='width: 321px;';
		hs+='height: 155px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._bahianinho.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._bahianinho.setAttribute('style',hs);
		this._bahianinho__img=document.createElement('img');
		this._bahianinho__img.setAttribute('src',basePath + 'images/bahianinho.png');
		this._bahianinho__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._bahianinho__img);
		this._bahianinho.appendChild(this._bahianinho__img);
		this.divSkin.appendChild(this._bahianinho);
		this._button_25=document.createElement('div');
		this._button_25.ggId='Button 25'
		this._button_25.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._button_25.ggVisible=true;
		this._button_25.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-127 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-96 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -127px;';
		hs+='top:  -96px;';
		hs+='width: 118px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._button_25.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_25.setAttribute('style',hs);
		this._button_25__img=document.createElement('img');
		this._button_25__img.setAttribute('src',basePath + 'images/button_25.png');
		this._button_25__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_25__img);
		this._button_25.appendChild(this._button_25__img);
		this._button_25.onclick=function () {
			me.player.changeViewstate("1",".05");
		}
		this._button_25.onmouseover=function () {
			me._button_25__img.src=basePath + 'images/button_25__o.png';
		}
		this._button_25.onmouseout=function () {
			me._button_25__img.src=basePath + 'images/button_25.png';
		}
		this.divSkin.appendChild(this._button_25);
		this._button_26=document.createElement('div');
		this._button_26.ggId='Button 26'
		this._button_26.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._button_26.ggVisible=true;
		this._button_26.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-127 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -127px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 122px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._button_26.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_26.setAttribute('style',hs);
		this._button_26__img=document.createElement('img');
		this._button_26__img.setAttribute('src',basePath + 'images/button_26.png');
		this._button_26__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_26__img);
		this._button_26.appendChild(this._button_26__img);
		this._button_26.onclick=function () {
			me.player.changeViewstate("0",".05");
		}
		this._button_26.onmouseover=function () {
			me._button_26__img.src=basePath + 'images/button_26__o.png';
		}
		this._button_26.onmouseout=function () {
			me._button_26__img.src=basePath + 'images/button_26.png';
		}
		this.divSkin.appendChild(this._button_26);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
		var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
	};
	this.addSkin();
};