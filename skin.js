// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: material_indexqqqq.ggsk
// Generated 2026-08-19T22:07:52

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_youtube_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_vimeo_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_file_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_url_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('hide_lottie_index', 1, 0, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('pos_menu_button', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_menu_button_vert', 1, 0, { ignoreInState: 0  });
	player.addVariable('num_button_rows', 1, 1.00, { ignoreInState: 0  });
	player.addVariable('has_categories', 2, false, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_landscape', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_desc_in_maps', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_prev_next', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
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
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_landscape = {};
		me._variable_resp_phone_landscape.ggCurrentLogicState = -1;
		me._variable_resp_phone_landscape.logicBlock = function() {
			var newLogicState_resp_phone_landscape;
			if (
				((player.getViewerSize(true).height < 800)) && 
				((player.getViewerSize(true).width / player.getViewerSize(true).height > 1)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicState_resp_phone_landscape = 0;
			}
			else {
				newLogicState_resp_phone_landscape = -1;
			}
			if (me._variable_resp_phone_landscape.ggCurrentLogicState != newLogicState_resp_phone_landscape) {
				me._variable_resp_phone_landscape.ggCurrentLogicState = newLogicState_resp_phone_landscape;
				if (me._variable_resp_phone_landscape.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_landscape', true);
				}
				else {
					player.setVariableValue('resp_phone_landscape', false);
				}
			}
		}
		el=me._menu=document.createElement('div');
		el.ggId="menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._menu.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateSize == 0) {
					me._menu.style.width='100%';
					me._menu.style.height='100%';
					skin.updateSize(me._menu);
				}
				else {
					me._menu.style.width='240px';
					me._menu.style.height='100%';
					skin.updateSize(me._menu);
				}
			}
		}
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateVisible == 0) {
					me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
					me._menu.ggVisible=true;
				}
				else {
					me._menu.style.visibility="hidden";
					me._menu.ggVisible=false;
				}
			}
		}
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateAlpha == 0) {
					me._menu.style.visibility=me._menu.ggVisible?'inherit':'hidden';
					me._menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu.style.opacity == 0.0) { me._menu.style.visibility="hidden"; } }, 505);
					me._menu.style.opacity=0;
				}
			}
		}
		me._menu.logicBlock_alpha();
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_bg=document.createElement('div');
		el.ggId="menu_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : 54px;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 99%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_bg.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._menu_bg);
		el=me._button_container=document.createElement('div');
		el.ggId="button_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_toggle=document.createElement('div');
		el.ggId="gyro_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getGyroAvailable() == true)) && 
				((player.getVariableValue('opt_gyro') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_toggle.style.transition='';
				if (me._gyro_toggle.ggCurrentLogicStateVisible == 0) {
					me._gyro_toggle.style.visibility=(Number(me._gyro_toggle.style.opacity)>0||!me._gyro_toggle.style.opacity)?'inherit':'hidden';
					me._gyro_toggle.ggVisible=true;
				}
				else {
					me._gyro_toggle.style.visibility="hidden";
					me._gyro_toggle.ggVisible=false;
				}
			}
		}
		me._gyro_toggle.logicBlock_visible();
		me._gyro_toggle.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'IwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'IwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_on.style.transition='';
				if (me._gyro_on.ggCurrentLogicStateVisible == 0) {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.ggVisible=false;
				}
				else {
					me._gyro_on.style.visibility=(Number(me._gyro_on.style.opacity)>0||!me._gyro_on.style.opacity)?'inherit':'hidden';
					me._gyro_on.ggVisible=true;
				}
			}
		}
		me._gyro_on.logicBlock_visible();
		me._gyro_on.onmouseenter=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseleave=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_off.style.transition='';
				if (me._gyro_off.ggCurrentLogicStateVisible == 0) {
					me._gyro_off.style.visibility=(Number(me._gyro_off.style.opacity)>0||!me._gyro_off.style.opacity)?'inherit':'hidden';
					me._gyro_off.ggVisible=true;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.ggVisible=false;
				}
			}
		}
		me._gyro_off.logicBlock_visible();
		me._gyro_off.onmouseenter=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseleave=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_off);
		me._button_container.appendChild(me._gyro_toggle);
		el=me._btn_vr=document.createElement('div');
		els=me._btn_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._btn_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._btn_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr.style.transition='';
				if (me._btn_vr.ggCurrentLogicStateVisible == 0) {
					me._btn_vr.style.visibility=(Number(me._btn_vr.style.opacity)>0||!me._btn_vr.style.opacity)?'inherit':'hidden';
					me._btn_vr.ggVisible=true;
				}
				else {
					me._btn_vr.style.visibility="hidden";
					me._btn_vr.ggVisible=false;
				}
			}
		}
		me._btn_vr.logicBlock_visible();
		me._btn_vr.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr.onmouseenter=function (e) {
			me._btn_vr__img.style.visibility='hidden';
			me._btn_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_vr']=true;
		}
		me._btn_vr.onmouseleave=function (e) {
			me._btn_vr__img.style.visibility='inherit';
			me._btn_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_vr']=false;
		}
		me._btn_vr.ggUpdatePosition=function (useTransition) {
		}
		me._button_container.appendChild(me._btn_vr);
		el=me._btn_languages=document.createElement('div');
		els=me._btn_languages__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA0MCA0MCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._btn_languages__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_languages__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA0MCA0MCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._btn_languages__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_languages.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_languages.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_languages.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_languages.style.transition='';
				if (me._btn_languages.ggCurrentLogicStateVisible == 0) {
					me._btn_languages.style.visibility=(Number(me._btn_languages.style.opacity)>0||!me._btn_languages.style.opacity)?'inherit':'hidden';
					me._btn_languages.ggVisible=true;
				}
				else {
					me._btn_languages.style.visibility="hidden";
					me._btn_languages.ggVisible=false;
				}
			}
		}
		me._btn_languages.logicBlock_visible();
		me._btn_languages.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
		}
		me._btn_languages.onmouseenter=function (e) {
			me._btn_languages__img.style.visibility='hidden';
			me._btn_languages__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_languages']=true;
		}
		me._btn_languages.onmouseleave=function (e) {
			me._btn_languages__img.style.visibility='inherit';
			me._btn_languages__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_languages']=false;
		}
		me._btn_languages.ggUpdatePosition=function (useTransition) {
		}
		me._button_container.appendChild(me._btn_languages);
		el=me._hotspots_toggle=document.createElement('div');
		el.ggId="hotspots_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_toggle.onclick=function (e) {
			if (
				(
					((player.getPointHotspotIds().length > 0))
				)
			) {
				player.setVariableValue('vis_hotspots', !player.getVariableValue('vis_hotspots'));
			}
		}
		me._hotspots_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_on=document.createElement('div');
		el.ggId="hotspots_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_on_disabled=document.createElement('div');
		els=me._hotspots_on_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYjNiM2IzIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTEyIDRDNyA0IDIuNzMgNy4xMSAxIDExLjUgMi43MyAxNS44OSA3IDE5IDEyIDE5czkuMjctMy4xMSAxMS03LjVDMjEuMjcgNy4xMSAxNyA0IDEyIDR6bTAgMTIuNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtOGMtMS42NiAwLTMgMS4zNC'+
			'0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTN6Ii8+Cjwvc3ZnPgo=';
		me._hotspots_on_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hotspots_on_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_on_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) && 
				((player.getPointHotspotIds().length == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_on_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_on_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_on_disabled.style.transition='';
				if (me._hotspots_on_disabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_on_disabled.style.visibility=(Number(me._hotspots_on_disabled.style.opacity)>0||!me._hotspots_on_disabled.style.opacity)?'inherit':'hidden';
					me._hotspots_on_disabled.ggVisible=true;
				}
				else {
					me._hotspots_on_disabled.style.visibility="hidden";
					me._hotspots_on_disabled.ggVisible=false;
				}
			}
		}
		me._hotspots_on_disabled.logicBlock_visible();
		me._hotspots_on_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_on.appendChild(me._hotspots_on_disabled);
		el=me._hotspots_on_enabled=document.createElement('div');
		els=me._hotspots_on_enabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KIDxwYXRoIGQ9Ik0xMiA0QzcgNCAyLjczIDcuMTEgMSAxMS41IDIuNzMgMTUuODkgNyAxOSAxMiAxOXM5LjI3LTMuMTEgMTEtNy41QzIxLjI3IDcuMTEgMTcgNCAxMiA0em0wIDEyLjVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLThjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy'+
			'0xLjM0IDMtMy0xLjM0LTMtMy0zeiIvPgo8L3N2Zz4K';
		me._hotspots_on_enabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_on_enabled__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzQzUuMiwzLDIsNS4zLDAuOCw4LjZDMiwxMS45LDUuMiwxNC4yLDksMTQuMnM3LTIuMyw4LjItNS42QzE2LDUuMywxMi44LDMsOSwzeiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhTNi45LDQuOSw5LDQuOXMzLjgsMS43LDMuOCwzLjhTMTEuMSwxMi40LDksMTIuNHogTTksNi40'+
			'Yy0xLjIsMC0yLjIsMS0yLjIsMi4yczEsMi4yLDIuMiwyLjJzMi4yLTEsMi4yLTIuMiYjeGQ7JiN4YTsmI3g5O1MxMC4yLDYuNCw5LDYuNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_on_enabled__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_on_enabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_on_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) && 
				((player.getPointHotspotIds().length > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_on_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_on_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_on_enabled.style.transition='';
				if (me._hotspots_on_enabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_on_enabled.style.visibility=(Number(me._hotspots_on_enabled.style.opacity)>0||!me._hotspots_on_enabled.style.opacity)?'inherit':'hidden';
					me._hotspots_on_enabled.ggVisible=true;
				}
				else {
					me._hotspots_on_enabled.style.visibility="hidden";
					me._hotspots_on_enabled.ggVisible=false;
				}
			}
		}
		me._hotspots_on_enabled.logicBlock_visible();
		me._hotspots_on_enabled.onmouseenter=function (e) {
			me._hotspots_on_enabled__img.style.visibility='hidden';
			me._hotspots_on_enabled__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_on_enabled']=true;
		}
		me._hotspots_on_enabled.onmouseleave=function (e) {
			me._hotspots_on_enabled__img.style.visibility='inherit';
			me._hotspots_on_enabled__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_on_enabled']=false;
		}
		me._hotspots_on_enabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_on.appendChild(me._hotspots_on_enabled);
		me._hotspots_toggle.appendChild(me._hotspots_on);
		el=me._hotspots_off=document.createElement('div');
		el.ggId="hotspots_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_off_disabled=document.createElement('div');
		els=me._hotspots_off_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYjNiM2IzIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYwem0wIDBoMjR2MjRIMFYwem0wIDBoMjR2MjRIMFYwem0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTEyIDYuNWMyLjc2IDAgNSAyLjI0IDUgNSAwIC41MS0uMSAxLS4yNCAxLjQ2bDMuMDYgMy4wNmMxLjM5LTEuMjMgMi40OS0yLjc3IDMuMTgtNC41M0MyMS4yNyA3LjExIDE3IDQgMTIgNGMtMS4yNyAwLTIuNDkuMi'+
			'0zLjY0LjU3bDIuMTcgMi4xN2MuNDctLjE0Ljk2LS4yNCAxLjQ3LS4yNHpNMi43MSAzLjE2Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDEuOTcgMS45N0MzLjA2IDcuODMgMS43NyA5LjUzIDEgMTEuNSAyLjczIDE1Ljg5IDcgMTkgMTIgMTljMS41MiAwIDIuOTctLjMgNC4zMS0uODJsMi43MiAyLjcyYy4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDQuMTMgMy4xNmMtLjM5LS4zOS0xLjAzLS4zOS0xLjQyIDB6TTEyIDE2LjVjLTIuNzYgMC01LTIuMjQtNS01IDAtLjc3LjE4LTEuNS40OS0yLjE0bDEuNTcgMS41N2MtLjAzLjE4LS4wNi4zNy0uMDYuNTcgMCAxLjY2'+
			'IDEuMzQgMyAzIDMgLjIgMCAuMzgtLjAzLjU3LS4wN0wxNC4xNCAxNmMtLjY1LjMyLTEuMzcuNS0yLjE0LjV6bTIuOTctNS4zM2MtLjE1LTEuNC0xLjI1LTIuNDktMi42NC0yLjY0bDIuNjQgMi42NHoiLz4KPC9zdmc+Cg==';
		me._hotspots_off_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hotspots_off_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_off_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getPointHotspotIds().length == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_off_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_off_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_off_disabled.style.transition='';
				if (me._hotspots_off_disabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_off_disabled.style.visibility=(Number(me._hotspots_off_disabled.style.opacity)>0||!me._hotspots_off_disabled.style.opacity)?'inherit':'hidden';
					me._hotspots_off_disabled.ggVisible=true;
				}
				else {
					me._hotspots_off_disabled.style.visibility="hidden";
					me._hotspots_off_disabled.ggVisible=false;
				}
			}
		}
		me._hotspots_off_disabled.logicBlock_visible();
		me._hotspots_off_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_off.appendChild(me._hotspots_off_disabled);
		el=me._hotspots_off_enabled=document.createElement('div');
		els=me._hotspots_off_enabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiLz4KIDxwYXRoIGQ9Ik0xMiA2LjVjMi43NiAwIDUgMi4yNCA1IDUgMCAuNTEtLjEgMS0uMjQgMS40NmwzLjA2IDMuMDZjMS4zOS0xLjIzIDIuNDktMi43NyAzLjE4LTQuNTNDMjEuMjcgNy4xMSAxNyA0IDEyIDRjLTEuMjcgMC0yLjQ5LjItMy42NC41N2wyLjE3IDIuMT'+
			'djLjQ3LS4xNC45Ni0uMjQgMS40Ny0uMjR6TTIuNzEgMy4xNmMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWwxLjk3IDEuOTdDMy4wNiA3LjgzIDEuNzcgOS41MyAxIDExLjUgMi43MyAxNS44OSA3IDE5IDEyIDE5YzEuNTIgMCAyLjk3LS4zIDQuMzEtLjgybDIuNzIgMi43MmMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUw0LjEzIDMuMTZjLS4zOS0uMzktMS4wMy0uMzktMS40MiAwek0xMiAxNi41Yy0yLjc2IDAtNS0yLjI0LTUtNSAwLS43Ny4xOC0xLjUuNDktMi4xNGwxLjU3IDEuNTdjLS4wMy4xOC0uMDYuMzctLjA2LjU3IDAgMS42NiAxLjM0IDMgMyAzIC4yIDAg'+
			'LjM4LS4wMy41Ny0uMDdMMTQuMTQgMTZjLS42NS4zMi0xLjM3LjUtMi4xNC41em0yLjk3LTUuMzNjLS4xNS0xLjQtMS4yNS0yLjQ5LTIuNjQtMi42NGwyLjY0IDIuNjR6Ii8+Cjwvc3ZnPgo=';
		me._hotspots_off_enabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_off_enabled__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6IE0wLDBoMTh2MThIMFYweiBNMCwwaDE4djE4SDBWMHogTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw0LjljMi4xLDAsMy44LDEuNywzLjgsMy44YzAsMC40LTAuMSwwLjgtMC4yLDEuMWwyLjMsMi4zYzEtMC45LDEuOS0yLjEsMi40LTMuNEMxNiw1LjMsMTIuOCwzLDksMyYjeGQ7JiN4YTsmI3g5O0M4LDMsNy4xLDMuMSw2LjMsMy40'+
			'bDEuNiwxLjZDOC4yLDUsOC42LDQuOSw5LDQuOXogTTIsMi40QzEuNywyLjcsMS43LDMuMSwyLDMuNGwxLjUsMS41Yy0xLjIsMS0yLjIsMi4yLTIuOCwzLjcmI3hkOyYjeGE7JiN4OTtDMiwxMS45LDUuMiwxNC4yLDksMTQuMmMxLjEsMCwyLjItMC4yLDMuMi0wLjZsMiwyYzAuMywwLjMsMC44LDAuMywxLjEsMHMwLjMtMC44LDAtMS4xTDMuMSwyLjRDMi44LDIuMSwyLjMsMi4xLDIsMi40eiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhDNS4yLDgsNS40LDcuNSw1LjYsN2wxLjIsMS4yYzAsMC4xLDAsMC4zLDAsMC40YzAsMS4yLDEsMi4yLDIuMiwyLjJjMC4yLD'+
			'AsMC4zLDAsMC40LTAuMWwxLjIsMS4yJiN4ZDsmI3hhOyYjeDk7QzEwLjEsMTIuMiw5LjYsMTIuNCw5LDEyLjR6IE0xMS4yLDguNGMtMC4xLTEuMS0wLjktMS45LTItMkwxMS4yLDguNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_off_enabled__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_off_enabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_off_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getPointHotspotIds().length == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_off_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_off_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_off_enabled.style.transition='';
				if (me._hotspots_off_enabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_off_enabled.style.visibility="hidden";
					me._hotspots_off_enabled.ggVisible=false;
				}
				else {
					me._hotspots_off_enabled.style.visibility=(Number(me._hotspots_off_enabled.style.opacity)>0||!me._hotspots_off_enabled.style.opacity)?'inherit':'hidden';
					me._hotspots_off_enabled.ggVisible=true;
				}
			}
		}
		me._hotspots_off_enabled.logicBlock_visible();
		me._hotspots_off_enabled.onmouseenter=function (e) {
			me._hotspots_off_enabled__img.style.visibility='hidden';
			me._hotspots_off_enabled__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_off_enabled']=true;
		}
		me._hotspots_off_enabled.onmouseleave=function (e) {
			me._hotspots_off_enabled__img.style.visibility='inherit';
			me._hotspots_off_enabled__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_off_enabled']=false;
		}
		me._hotspots_off_enabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_off.appendChild(me._hotspots_off_enabled);
		me._hotspots_toggle.appendChild(me._hotspots_off);
		me._button_container.appendChild(me._hotspots_toggle);
		el=me._audio_toggle=document.createElement('div');
		el.ggId="audio_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_toggle.style.transition='';
				if (me._audio_toggle.ggCurrentLogicStateVisible == 0) {
					me._audio_toggle.style.visibility=(Number(me._audio_toggle.style.opacity)>0||!me._audio_toggle.style.opacity)?'inherit':'hidden';
					me._audio_toggle.ggVisible=true;
				}
				else {
					me._audio_toggle.style.visibility="hidden";
					me._audio_toggle.ggVisible=false;
				}
			}
		}
		me._audio_toggle.logicBlock_visible();
		me._audio_toggle.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
		}
		me._audio_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._audio_on=document.createElement('div');
		els=me._audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBN'+
			'MTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDExLjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._audio_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_on.style.transition='';
				if (me._audio_on.ggCurrentLogicStateVisible == 0) {
					me._audio_on.style.visibility=(Number(me._audio_on.style.opacity)>0||!me._audio_on.style.opacity)?'inherit':'hidden';
					me._audio_on.ggVisible=true;
				}
				else {
					me._audio_on.style.visibility="hidden";
					me._audio_on.ggVisible=false;
				}
			}
		}
		me._audio_on.logicBlock_visible();
		me._audio_on.onmouseenter=function (e) {
			me._audio_on__img.style.visibility='hidden';
			me._audio_on__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_on']=true;
		}
		me._audio_on.onmouseleave=function (e) {
			me._audio_on__img.style.visibility='inherit';
			me._audio_on__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_on']=false;
		}
		me._audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_on);
		el=me._audio_off=document.createElement('div');
		els=me._audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZj'+
			'MC0yLjktMS44LTUuMy00LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi'+
			'0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._audio_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_off.style.transition='';
				if (me._audio_off.ggCurrentLogicStateVisible == 0) {
					me._audio_off.style.visibility="hidden";
					me._audio_off.ggVisible=false;
				}
				else {
					me._audio_off.style.visibility=(Number(me._audio_off.style.opacity)>0||!me._audio_off.style.opacity)?'inherit':'hidden';
					me._audio_off.ggVisible=true;
				}
			}
		}
		me._audio_off.logicBlock_visible();
		me._audio_off.onmouseenter=function (e) {
			me._audio_off__img.style.visibility='hidden';
			me._audio_off__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_off']=true;
		}
		me._audio_off.onmouseleave=function (e) {
			me._audio_off__img.style.visibility='inherit';
			me._audio_off__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_off']=false;
		}
		me._audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_off);
		me._button_container.appendChild(me._audio_toggle);
		el=me._fullscreen_toggle=document.createElement('div');
		el.ggId="fullscreen_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_toggle.style.transition='';
				if (me._fullscreen_toggle.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_toggle.style.visibility=(Number(me._fullscreen_toggle.style.opacity)>0||!me._fullscreen_toggle.style.opacity)?'inherit':'hidden';
					me._fullscreen_toggle.ggVisible=true;
				}
				else {
					me._fullscreen_toggle.style.visibility="hidden";
					me._fullscreen_toggle.ggVisible=false;
				}
			}
		}
		me._fullscreen_toggle.logicBlock_visible();
		me._fullscreen_toggle.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTZoMnYyYzAsMC41NSwwLjQ1LDEsMSwxbDAsMGMwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMUg2Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDNSwxNS41NSw1LjQ1LDE2LDYsMTYgei'+
			'BNOCw4SDZDNS40NSw4LDUsOC40NSw1LDlsMCwwYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFWNmMwLTAuNTUtMC40NS0xLTEtMWwwLDBDOC40NSw1LDgsNS40NSw4LDZWOHogTTE1LDE5IEwxNSwxOWMwLjU1LDAsMS0wLjQ1LDEtMXYtMmgyYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMWgtM2MtMC41NSwwLTEsMC40NS0xLDF2M0MxNCwxOC41NSwxNC40NSwxOSwxNSwxOXogTTE2LDggVjZjMC0wLjU1LTAuNDUtMS0xLTFsMCwwYy0wLjU1LDAtMSwwLjQ1LTEsMXYzYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41'+
			'NS0wLjQ1LTEtMS0xSDE2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEySDZ2MS41YzAsMC40LDAuMywwLjgsMC44LDAuOGwwLDBjMC40LDAsMC44LTAuMywwLjgtMC44di0yLjJjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAs'+
			'MEMzLjgsMTEuNyw0LjEsMTIsNC41LDEyeiBNNiw2SDQuNUM0LjEsNiwzLjgsNi4zLDMuOCw2LjhsMCwwYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMywwLjgtMC44VjQuNWMwLTAuNC0wLjMtMC44LTAuOC0wLjhsMCwwQzYuMywzLjgsNiw0LjEsNiw0LjVWNnogTTExLjIsMTQuMkwxMS4yLDE0LjJjMC40LDAsMC44LTAuMywwLjgtMC44VjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aDEuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yYy0wLjQsMC0wLjgsMC'+
			'4zLTAuOCwwLjh2Mi4yQzEwLjUsMTMuOSwxMC44LDE0LjIsMTEuMiwxNC4yeiBNMTIsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1Y0LjVjMC0wLjQtMC4zLTAuOC0wLjgtMC44bDAsMGMtMC40LDAtMC44LDAuMy0wLjgsMC44djIuMmMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDEyeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_exit.style.transition='';
				if (me._fullscreen_exit.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
					me._fullscreen_exit.ggVisible=true;
				}
				else {
					me._fullscreen_exit.style.visibility="hidden";
					me._fullscreen_exit.ggVisible=false;
				}
			}
		}
		me._fullscreen_exit.logicBlock_visible();
		me._fullscreen_exit.onmouseenter=function (e) {
			me._fullscreen_exit__img.style.visibility='hidden';
			me._fullscreen_exit__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_exit']=true;
		}
		me._fullscreen_exit.onmouseleave=function (e) {
			me._fullscreen_exit__img.style.visibility='inherit';
			me._fullscreen_exit__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_exit']=false;
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTRMNiwxNGMtMC41NSwwLTEsMC40NS0xLDF2M2MwLDAuNTUsMC40NSwxLDEsMWgzYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg3di0yIEM3LDE0LjQ1LDYuNTUsMTQsNiwxNH'+
			'ogTTYsMTBMNiwxMGMwLjU1LDAsMS0wLjQ1LDEtMVY3aDJjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDZDNS40NSw1LDUsNS40NSw1LDZ2MyBDNSw5LjU1LDUuNDUsMTAsNiwxMHogTTE3LDE3aC0yYy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBjMCwwLjU1LDAuNDUsMSwxLDFoM2MwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMWwwLDAgYy0wLjU1LDAtMSwwLjQ1LTEsMVYxN3ogTTE0LDZMMTQsNmMwLDAuNTUsMC40NSwxLDEsMWgydjJjMCwwLjU1LDAuNDUsMSwxLDFsMCwwYzAuNTUsMCwxLTAuNDUsMS0xVjZjMC0wLjU1LTAuNDUtMS0xLTFoLTMgQzE0'+
			'LjQ1LDUsMTQsNS40NSwxNCw2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEwLjVMNC41LDEwLjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDIuMmMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjgtMC44LTAu'+
			'OEg1LjJ2LTEuNUM1LjIsMTAuOCw0LjksMTAuNSw0LjUsMTAuNXogTTQuNSw3LjVMNC41LDcuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNS4yaDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEg0LjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJDMy44LDcuMiw0LjEsNy41LDQuNSw3LjV6IE0xMi44LDEyLjhoLTEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAsMGMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LT'+
			'AuOHYtMi4yYzAtMC40LTAuMy0wLjgtMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNCwwLTAuOCwwLjMtMC44LDAuOFYxMi44eiBNMTAuNSw0LjVMMTAuNSw0LjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDEuNXYxLjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNC41YzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yQzEwLjgsMy44LDEwLjUsNC4xLDEwLjUsNC41eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_enter.style.transition='';
				if (me._fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_enter.style.visibility="hidden";
					me._fullscreen_enter.ggVisible=false;
				}
				else {
					me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._fullscreen_enter.logicBlock_visible();
		me._fullscreen_enter.onmouseenter=function (e) {
			me._fullscreen_enter__img.style.visibility='hidden';
			me._fullscreen_enter__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_enter']=true;
		}
		me._fullscreen_enter.onmouseleave=function (e) {
			me._fullscreen_enter__img.style.visibility='inherit';
			me._fullscreen_enter__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_enter']=false;
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_enter);
		me._button_container.appendChild(me._fullscreen_toggle);
		me._menu.appendChild(me._button_container);
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 47px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 6 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 6 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller__content.onmouseup = null;
			me._languages_scroller__content.onmousemove = null;
			me._languages_scroller__content.ontouchend = null;
			me._languages_scroller__content.ontouchmove = null;
			me._languages_scroller__content.onpointerup = null;
			me._languages_scroller__content.onpointermove = null;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller__content.onmouseup = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.ontouchend = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.onmousemove = me._languages_scroller__content.mousetouchmove;
			me._languages_scroller__content.ontouchmove = me._languages_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._languages_scroller__content.onpointerup = me._languages_scroller__content.ontouchend;
				me._languages_scroller__content.onpointermove = me._languages_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._languages_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 48px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 48px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_scroller.ggScrollPosY = 0;
		me._languages_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_scroller.ggScrollHeight;
			if (e.offsetY < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_scroller.ggScrollByYSmooth(30 * me._languages_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 65px;';
		hs+='height : calc(100% - 85px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_scroller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._languages_scroller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStatePosition == 0) {
					me._languages_scroller.style.left='20px';
					me._languages_scroller.style.bottom='105px';
				}
				else {
					me._languages_scroller.style.left='20px';
					me._languages_scroller.style.bottom='65px';
				}
			}
		}
		me._languages_scroller.logicBlock_position();
		me._languages_scroller.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStateSize != newLogicStateSize) {
				me._languages_scroller.ggCurrentLogicStateSize = newLogicStateSize;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStateSize == 0) {
					me._languages_scroller.style.width='200px';
					me._languages_scroller.style.height='calc(100% - 125px)';
					skin.updateSize(me._languages_scroller);
				}
				else {
					me._languages_scroller.style.width='205px';
					me._languages_scroller.style.height='calc(100% - 85px)';
					skin.updateSize(me._languages_scroller);
				}
			}
		}
		me._languages_scroller.logicBlock_size();
		me._languages_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStateVisible == 0) {
					me._languages_scroller.style.visibility=(Number(me._languages_scroller.style.opacity)>0||!me._languages_scroller.style.opacity)?'inherit':'hidden';
					me._languages_scroller.ggVisible=true;
				}
				else {
					me._languages_scroller.style.visibility="hidden";
					me._languages_scroller.ggVisible=false;
				}
			}
		}
		me._languages_scroller.logicBlock_visible();
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 6;
				if (contentHeight < containerHeight) {
					this.ggContent.style.bottom = (this.ggHorScrollVisible ? 6 : 0) + 'px';
					this.ggContent.style.top = '';
					this.ggContent.style.marginBottom = '0px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if ((me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_scroller__vertScrollBg.style.visibility = 'inherit';
					me._languages_scroller__vertScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggVertScrollVisible = true;
				} else {
					me._languages_scroller__vertScrollBg.style.visibility = 'hidden';
					me._languages_scroller__vertScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggVertScrollVisible = false;
				}
				if(me._languages_scroller.ggVertScrollVisible) {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 6;
					if (me._languages_scroller.ggHorScrollVisible) {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 6;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height - me._languages_scroller__vertScrollBg.getBoundingClientRect().width;
						me._languages_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height;
						me._languages_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._languages_scroller__vertScrollBg.style.height = me._languages_scroller.ggAvailableHeight + 'px';
					me._languages_scroller.ggVPercentVisible = contentHeight != 0 ? me._languages_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_scroller.ggVPercentVisible > 1.0) me._languages_scroller.ggVPercentVisible = 1.0;
					me._languages_scroller.ggScrollHeight =  Math.round(me._languages_scroller__vertScrollBg.offsetHeight * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller__vertScrollFg.style.height = me._languages_scroller.ggScrollHeight + 'px';
					me._languages_scroller.ggScrollPosY = me._languages_scroller.ggScrollPosYPercent * me._languages_scroller.ggAvailableHeight;
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
					if (me._languages_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
						me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
					me._languages_scroller.ggScrollPosY = 0;
					me._languages_scroller.ggScrollPosYPercent = 0.0;
					me._languages_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (-row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._menu.appendChild(me._languages_scroller);
		el=me._nodes_menu_phone_landscape=document.createElement('div');
		el.ggId="nodes_menu_phone_landscape";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 155px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_menu_phone_landscape.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_menu_phone_landscape.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_menu_phone_landscape.style.transition='';
				if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible == 0) {
					me._nodes_menu_phone_landscape.style.visibility="hidden";
					me._nodes_menu_phone_landscape.ggVisible=false;
				}
				else if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible == 1) {
					me._nodes_menu_phone_landscape.style.visibility=(Number(me._nodes_menu_phone_landscape.style.opacity)>0||!me._nodes_menu_phone_landscape.style.opacity)?'inherit':'hidden';
					me._nodes_menu_phone_landscape.ggVisible=true;
				}
				else {
					me._nodes_menu_phone_landscape.style.visibility="hidden";
					me._nodes_menu_phone_landscape.ggVisible=false;
				}
			}
		}
		me._nodes_menu_phone_landscape.logicBlock_visible();
		me._nodes_menu_phone_landscape.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller_pl=document.createElement('div');
		els=me._nodes_scroller_pl__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 214px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller_pl.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller_pl.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_pl.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller_pl.ggScrollPosX = (me._nodes_scroller_pl__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller_pl.ggScrollPosX = Math.max(me._nodes_scroller_pl.ggScrollPosX, 0);
			me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentLeftOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosXPercent = (me._nodes_scroller_pl__horScrollFg.offsetLeft / me._nodes_scroller_pl__horScrollBg.offsetWidth);
		}
		me._nodes_scroller_pl.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller_pl.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_pl.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller_pl.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller_pl.ggScrollPosX >= me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth)) {
					me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller_pl.ggScrollPosX <= 0)) {
					me._nodes_scroller_pl.ggScrollPosX = Math.max(me._nodes_scroller_pl.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentLeftOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosXPercent = (me._nodes_scroller_pl__horScrollFg.offsetLeft / me._nodes_scroller_pl__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller_pl.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller_pl.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_pl.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller_pl.ggScrollPosY = (me._nodes_scroller_pl__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller_pl.ggScrollPosY = Math.max(me._nodes_scroller_pl.ggScrollPosY, 0);
			me._nodes_scroller_pl.ggScrollPosY = Math.min(me._nodes_scroller_pl.ggScrollPosY, me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__vertScrollFg.style.top = me._nodes_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosY / (me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__content.style.top = -(Math.round((me._nodes_scroller_pl.ggContentHeight * (1.0 - me._nodes_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentTopOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosYPercent = (me._nodes_scroller_pl__vertScrollFg.offsetTop / me._nodes_scroller_pl__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller_pl.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller_pl.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_pl.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller_pl.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller_pl.ggScrollPosY >= me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight)) {
					me._nodes_scroller_pl.ggScrollPosY = Math.min(me._nodes_scroller_pl.ggScrollPosY, me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller_pl.ggScrollPosY <= 0)) {
					me._nodes_scroller_pl.ggScrollPosY = Math.max(me._nodes_scroller_pl.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller_pl__vertScrollFg.style.top = me._nodes_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosY / (me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__content.style.top = -(Math.round((me._nodes_scroller_pl.ggContentHeight * (1.0 - me._nodes_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentTopOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosYPercent = (me._nodes_scroller_pl__vertScrollFg.offsetTop / me._nodes_scroller_pl__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller_pl.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller_pl.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller_pl.clientWidth - (me._nodes_scroller_pl.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller_pl.clientWidth - (me._nodes_scroller_pl.ggVertScrollVisible ? 6 : 0))) * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller_pl.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller_pl.ggVPercentVisible);
					me._nodes_scroller_pl.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller_pl.clientHeight - (me._nodes_scroller_pl.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller_pl.clientHeight - (me._nodes_scroller_pl.ggHorScrollVisible ? 6 : 0))) * me._nodes_scroller_pl.ggVPercentVisible);
					me._nodes_scroller_pl.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller_pl__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
				me._nodes_scroller_pl.ggDragInertiaY *= 0.96;
				me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
				me._nodes_scroller_pl.ggScrollByY(me._nodes_scroller_pl.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller_pl.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller_pl__content.onmouseup = null;
			me._nodes_scroller_pl__content.onmousemove = null;
			me._nodes_scroller_pl__content.ontouchend = null;
			me._nodes_scroller_pl__content.ontouchmove = null;
			me._nodes_scroller_pl__content.onpointerup = null;
			me._nodes_scroller_pl__content.onpointermove = null;
			setTimeout(function() { me._nodes_scroller_pl.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller_pl__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller_pl.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller_pl.ggDragStartY) > 10) me._nodes_scroller_pl.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller_pl.ggDragLastX) * me._nodes_scroller_pl.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller_pl.ggDragLastY) * me._nodes_scroller_pl.ggVPercentVisible;
			me._nodes_scroller_pl.ggDragInertiaX = -diffX;
			me._nodes_scroller_pl.ggDragInertiaY = -diffY;
			me._nodes_scroller_pl.ggDragLastX = eventX;
			me._nodes_scroller_pl.ggDragLastY = eventY;
			me._nodes_scroller_pl.ggScrollByX(-diffX);
			me._nodes_scroller_pl.ggScrollByY(-diffY);
		}
		me._nodes_scroller_pl__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller_pl.ggDragLastX = me._nodes_scroller_pl.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller_pl.ggDragLastY = me._nodes_scroller_pl.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller_pl__content.onmouseup = me._nodes_scroller_pl__content.mousetouchend;
			me._nodes_scroller_pl__content.ontouchend = me._nodes_scroller_pl__content.mousetouchend;
			me._nodes_scroller_pl__content.onmousemove = me._nodes_scroller_pl__content.mousetouchmove;
			me._nodes_scroller_pl__content.ontouchmove = me._nodes_scroller_pl__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._nodes_scroller_pl__content.onpointerup = me._nodes_scroller_pl__content.ontouchend;
				me._nodes_scroller_pl__content.onpointermove = me._nodes_scroller_pl__content.ontouchmove;
			}
		}
		els.onmousedown = me._nodes_scroller_pl__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller_pl__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller_pl__content.mousetouchstart;
		}
		elHorScrollBg = me._nodes_scroller_pl__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._nodes_scroller_pl__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._nodes_scroller_pl.ggScrollPosX = 0;
		me._nodes_scroller_pl.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller_pl.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
					me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._nodes_scroller_pl.ggDragLastX;
				me._nodes_scroller_pl.ggDragInertiaX = diffX;
				me._nodes_scroller_pl.ggDragLastX = e.clientX;
				me._nodes_scroller_pl.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
					me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._nodes_scroller_pl.ggDragLastX;
				me._nodes_scroller_pl.ggDragInertiaX = diffX;
				me._nodes_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._nodes_scroller_pl.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._nodes_scroller_pl.ggScrollWidth;
			if (e.offsetX < me._nodes_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller_pl__horScrollBg.getBoundingClientRect();
			var diffX = me._nodes_scroller_pl.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._nodes_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._nodes_scroller_pl.ggScrollByXSmooth(30 * me._nodes_scroller_pl.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller_pl__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_scroller_pl.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._nodes_scroller_pl.ggScrollPosX / me._nodes_scroller_pl.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._nodes_scroller_pl__horScrollBg.style.visibility = 'inherit';
					me._nodes_scroller_pl__horScrollFg.style.visibility = 'inherit';
					me._nodes_scroller_pl.ggHorScrollVisible = true;
				} else {
					me._nodes_scroller_pl__horScrollBg.style.visibility = 'hidden';
					me._nodes_scroller_pl__horScrollFg.style.visibility = 'hidden';
					me._nodes_scroller_pl.ggHorScrollVisible = false;
				}
				if(me._nodes_scroller_pl.ggHorScrollVisible) {
					me._nodes_scroller_pl.ggAvailableHeight = me._nodes_scroller_pl.clientHeight - 6;
					if (me._nodes_scroller_pl.ggVertScrollVisible) {
						me._nodes_scroller_pl.ggAvailableWidth = me._nodes_scroller_pl.clientWidth - 6;
						me._nodes_scroller_pl.ggAvailableWidthWithScale = me._nodes_scroller_pl.getBoundingClientRect().width - me._nodes_scroller_pl__horScrollBg.getBoundingClientRect().height;
					} else {
						me._nodes_scroller_pl.ggAvailableWidth = me._nodes_scroller_pl.clientWidth;
						me._nodes_scroller_pl.ggAvailableWidthWithScale = me._nodes_scroller_pl.getBoundingClientRect().width;
					}
					me._nodes_scroller_pl__horScrollBg.style.width = me._nodes_scroller_pl.ggAvailableWidth + 'px';
					me._nodes_scroller_pl.ggHPercentVisible = contentWidth != 0 ? me._nodes_scroller_pl.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._nodes_scroller_pl.ggHPercentVisible > 1.0) me._nodes_scroller_pl.ggHPercentVisible = 1.0;
					me._nodes_scroller_pl.ggScrollWidth = Math.round(me._nodes_scroller_pl__horScrollBg.offsetWidth * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl__horScrollFg.style.width = me._nodes_scroller_pl.ggScrollWidth + 'px';
					me._nodes_scroller_pl.ggScrollPosX = me._nodes_scroller_pl.ggScrollPosXPercent * me._nodes_scroller_pl.ggAvailableWidth;
					me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
					me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
					if (me._nodes_scroller_pl.ggHPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
						me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._nodes_scroller_pl.ggAvailableHeight = me._nodes_scroller_pl.clientHeight;
					me._nodes_scroller_pl.ggScrollPosX = 0;
					me._nodes_scroller_pl.ggScrollPosXPercent = 0.0;
					me._nodes_scroller_pl__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._nodes_scroller_pl.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller_pl.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller_pl);
					me._nodes_scroller_pl.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_pl=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_pl;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 215;
		el.ggHeight = 155;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_pl.ggUpdating == true) return;
			me._node_cloner_pl.ggUpdating = true;
			var el=me._node_cloner_pl;
			var curNumRows = 0;
			curNumRows = me._node_cloner_pl.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_pl.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_pl.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_pl.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_pl.getFilteredNodes(tourNodes, filter);
			me._node_cloner_pl.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_pl.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_pl.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_pl.ggWidth) + 'px';
				parameter.width=me._node_cloner_pl.ggWidth + 'px';
				parameter.height=me._node_cloner_pl.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_pl_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._node_cloner_pl.ggNodeCount = me._node_cloner_pl.ggNumFilterPassed;
			me._node_cloner_pl.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_pl.parentNode && me._node_cloner_pl.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_pl.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_pl.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_pl.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_pl.childNodes.length; i++) {
				var child=me._node_cloner_pl.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_pl.ggUpdatePosition=function (useTransition) {
			me._node_cloner_pl.ggUpdate();
		}
		me._nodes_scroller_pl__content.appendChild(me._node_cloner_pl);
		me._nodes_menu_phone_landscape.appendChild(me._nodes_scroller_pl);
		me._menu.appendChild(me._nodes_menu_phone_landscape);
		el=me._nodes_menu=document.createElement('div');
		el.ggId="nodes_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 205px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodes_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodes_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodes_menu.style.transition='width 0s, height 0s';
				if (me._nodes_menu.ggCurrentLogicStateSize == 0) {
					me._nodes_menu.style.width='205px';
					me._nodes_menu.style.height='calc(100% - 197px)';
					skin.updateSize(me._nodes_menu);
				}
				else {
					me._nodes_menu.style.width='205px';
					me._nodes_menu.style.height='calc(100% - 155px)';
					skin.updateSize(me._nodes_menu);
				}
			}
		}
		me._nodes_menu.logicBlock_size();
		me._nodes_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_menu.style.transition='width 0s, height 0s';
				if (me._nodes_menu.ggCurrentLogicStateVisible == 0) {
					me._nodes_menu.style.visibility="hidden";
					me._nodes_menu.ggVisible=false;
				}
				else if (me._nodes_menu.ggCurrentLogicStateVisible == 1) {
					me._nodes_menu.style.visibility=(Number(me._nodes_menu.style.opacity)>0||!me._nodes_menu.style.opacity)?'inherit':'hidden';
					me._nodes_menu.ggVisible=true;
				}
				else {
					me._nodes_menu.style.visibility="hidden";
					me._nodes_menu.ggVisible=false;
				}
			}
		}
		me._nodes_menu.logicBlock_visible();
		me._nodes_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller=document.createElement('div');
		els=me._nodes_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosX = (me._nodes_scroller__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
			me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
		}
		me._nodes_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller.ggScrollPosX >= me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth)) {
					me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller.ggScrollPosX <= 0)) {
					me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosY = (me._nodes_scroller__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
			me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller.ggScrollPosY >= me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight)) {
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller.ggScrollPosY <= 0)) {
					me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 6 : 0))) * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 6 : 0))) * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller.ggDragInertiaX *= 0.96;
				me._nodes_scroller.ggDragInertiaY *= 0.96;
				me._nodes_scroller.ggScrollByX(me._nodes_scroller.ggDragInertiaX);
				me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller__content.onmouseup = null;
			me._nodes_scroller__content.onmousemove = null;
			me._nodes_scroller__content.ontouchend = null;
			me._nodes_scroller__content.ontouchmove = null;
			me._nodes_scroller__content.onpointerup = null;
			me._nodes_scroller__content.onpointermove = null;
			setTimeout(function() { me._nodes_scroller.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller.ggDragStartY) > 10) me._nodes_scroller.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller.ggDragLastX) * me._nodes_scroller.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller.ggDragLastY) * me._nodes_scroller.ggVPercentVisible;
			me._nodes_scroller.ggDragInertiaX = -diffX;
			me._nodes_scroller.ggDragInertiaY = -diffY;
			me._nodes_scroller.ggDragLastX = eventX;
			me._nodes_scroller.ggDragLastY = eventY;
			me._nodes_scroller.ggScrollByX(-diffX);
			me._nodes_scroller.ggScrollByY(-diffY);
		}
		me._nodes_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller.ggDragLastX = me._nodes_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller.ggDragLastY = me._nodes_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller__content.onmouseup = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.ontouchend = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.onmousemove = me._nodes_scroller__content.mousetouchmove;
			me._nodes_scroller__content.ontouchmove = me._nodes_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._nodes_scroller__content.onpointerup = me._nodes_scroller__content.ontouchend;
				me._nodes_scroller__content.onpointermove = me._nodes_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._nodes_scroller__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._nodes_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 403px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._nodes_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 403px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._nodes_scroller.ggScrollPosY = 0;
		me._nodes_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if (e.offsetY < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._nodes_scroller.ggScrollByYSmooth(30 * me._nodes_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._nodes_scroller.ggScrollPosY / me._nodes_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._nodes_scroller__vertScrollBg.style.visibility = 'inherit';
					me._nodes_scroller__vertScrollFg.style.visibility = 'inherit';
					me._nodes_scroller.ggVertScrollVisible = true;
				} else {
					me._nodes_scroller__vertScrollBg.style.visibility = 'hidden';
					me._nodes_scroller__vertScrollFg.style.visibility = 'hidden';
					me._nodes_scroller.ggVertScrollVisible = false;
				}
				if(me._nodes_scroller.ggVertScrollVisible) {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth - 6;
					if (me._nodes_scroller.ggHorScrollVisible) {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight - 6;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height - me._nodes_scroller__vertScrollBg.getBoundingClientRect().width;
						me._nodes_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height;
						me._nodes_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._nodes_scroller__vertScrollBg.style.height = me._nodes_scroller.ggAvailableHeight + 'px';
					me._nodes_scroller.ggVPercentVisible = contentHeight != 0 ? me._nodes_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._nodes_scroller.ggVPercentVisible > 1.0) me._nodes_scroller.ggVPercentVisible = 1.0;
					me._nodes_scroller.ggScrollHeight =  Math.round(me._nodes_scroller__vertScrollBg.offsetHeight * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller__vertScrollFg.style.height = me._nodes_scroller.ggScrollHeight + 'px';
					me._nodes_scroller.ggScrollPosY = me._nodes_scroller.ggScrollPosYPercent * me._nodes_scroller.ggAvailableHeight;
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
					if (me._nodes_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
						me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth;
					me._nodes_scroller.ggScrollPosY = 0;
					me._nodes_scroller.ggScrollPosYPercent = 0.0;
					me._nodes_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._nodes_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._nodes_scroller.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller);
					me._nodes_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 155;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me._nodes_scroller__content.appendChild(me._node_cloner);
		me._nodes_menu.appendChild(me._nodes_scroller);
		me._menu.appendChild(me._nodes_menu);
		el=me._categories_menu_phone_landscape=document.createElement('div');
		el.ggId="categories_menu_phone_landscape";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 155px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_menu_phone_landscape.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_menu_phone_landscape.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_menu_phone_landscape.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_menu_phone_landscape.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_menu_phone_landscape.style.transition='';
				if (me._categories_menu_phone_landscape.ggCurrentLogicStateVisible == 0) {
					me._categories_menu_phone_landscape.style.visibility="hidden";
					me._categories_menu_phone_landscape.ggVisible=false;
				}
				else {
					me._categories_menu_phone_landscape.style.visibility=(Number(me._categories_menu_phone_landscape.style.opacity)>0||!me._categories_menu_phone_landscape.style.opacity)?'inherit':'hidden';
					me._categories_menu_phone_landscape.ggVisible=true;
				}
			}
		}
		me._categories_menu_phone_landscape.logicBlock_visible();
		me._categories_menu_phone_landscape.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_scroller_pl=document.createElement('div');
		els=me._categories_scroller_pl__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 214px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller_pl.ggScrollByX = function(diffX) {
			if(!me._categories_scroller_pl.ggHorScrollVisible || diffX == 0 || me._categories_scroller_pl.ggHPercentVisible >= 1.0) return;
			me._categories_scroller_pl.ggScrollPosX = (me._categories_scroller_pl__horScrollFg.offsetLeft + diffX);
			me._categories_scroller_pl.ggScrollPosX = Math.max(me._categories_scroller_pl.ggScrollPosX, 0);
			me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentLeftOffset + 'px';
			me._categories_scroller_pl.ggScrollPosXPercent = (me._categories_scroller_pl__horScrollFg.offsetLeft / me._categories_scroller_pl__horScrollBg.offsetWidth);
		}
		me._categories_scroller_pl.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller_pl.ggHorScrollVisible || diffX == 0 || me._categories_scroller_pl.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller_pl.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller_pl.ggScrollPosX >= me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth)) {
					me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller_pl.ggScrollPosX <= 0)) {
					me._categories_scroller_pl.ggScrollPosX = Math.max(me._categories_scroller_pl.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentLeftOffset + 'px';
			me._categories_scroller_pl.ggScrollPosXPercent = (me._categories_scroller_pl__horScrollFg.offsetLeft / me._categories_scroller_pl__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller_pl.ggScrollByY = function(diffY) {
			if(!me._categories_scroller_pl.ggVertScrollVisible || diffY == 0 || me._categories_scroller_pl.ggVPercentVisible >= 1.0) return;
			me._categories_scroller_pl.ggScrollPosY = (me._categories_scroller_pl__vertScrollFg.offsetTop + diffY);
			me._categories_scroller_pl.ggScrollPosY = Math.max(me._categories_scroller_pl.ggScrollPosY, 0);
			me._categories_scroller_pl.ggScrollPosY = Math.min(me._categories_scroller_pl.ggScrollPosY, me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__vertScrollFg.style.top = me._categories_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosY / (me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__content.style.top = -(Math.round((me._categories_scroller_pl.ggContentHeight * (1.0 - me._categories_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentTopOffset + 'px';
			me._categories_scroller_pl.ggScrollPosYPercent = (me._categories_scroller_pl__vertScrollFg.offsetTop / me._categories_scroller_pl__vertScrollBg.offsetHeight);
		}
		me._categories_scroller_pl.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller_pl.ggVertScrollVisible || diffY == 0 || me._categories_scroller_pl.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller_pl.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller_pl.ggScrollPosY >= me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight)) {
					me._categories_scroller_pl.ggScrollPosY = Math.min(me._categories_scroller_pl.ggScrollPosY, me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller_pl.ggScrollPosY <= 0)) {
					me._categories_scroller_pl.ggScrollPosY = Math.max(me._categories_scroller_pl.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller_pl__vertScrollFg.style.top = me._categories_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosY / (me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__content.style.top = -(Math.round((me._categories_scroller_pl.ggContentHeight * (1.0 - me._categories_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentTopOffset + 'px';
			me._categories_scroller_pl.ggScrollPosYPercent = (me._categories_scroller_pl__vertScrollFg.offsetTop / me._categories_scroller_pl__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller_pl.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller_pl.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller_pl.clientWidth - (me._categories_scroller_pl.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller_pl.clientWidth - (me._categories_scroller_pl.ggVertScrollVisible ? 6 : 0))) * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller_pl.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller_pl.ggVPercentVisible);
					me._categories_scroller_pl.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller_pl.clientHeight - (me._categories_scroller_pl.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller_pl.clientHeight - (me._categories_scroller_pl.ggHorScrollVisible ? 6 : 0))) * me._categories_scroller_pl.ggVPercentVisible);
					me._categories_scroller_pl.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller_pl__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller_pl.ggDragInertiaX *= 0.96;
				me._categories_scroller_pl.ggDragInertiaY *= 0.96;
				me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
				me._categories_scroller_pl.ggScrollByY(me._categories_scroller_pl.ggDragInertiaY);
				if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller_pl.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller_pl__content.onmouseup = null;
			me._categories_scroller_pl__content.onmousemove = null;
			me._categories_scroller_pl__content.ontouchend = null;
			me._categories_scroller_pl__content.ontouchmove = null;
			me._categories_scroller_pl__content.onpointerup = null;
			me._categories_scroller_pl__content.onpointermove = null;
			setTimeout(function() { me._categories_scroller_pl.ggIsDragging = false; }, 100);
		}
		me._categories_scroller_pl__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller_pl.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller_pl.ggDragStartY) > 10) me._categories_scroller_pl.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller_pl.ggDragLastX) * me._categories_scroller_pl.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller_pl.ggDragLastY) * me._categories_scroller_pl.ggVPercentVisible;
			me._categories_scroller_pl.ggDragInertiaX = -diffX;
			me._categories_scroller_pl.ggDragInertiaY = -diffY;
			me._categories_scroller_pl.ggDragLastX = eventX;
			me._categories_scroller_pl.ggDragLastY = eventY;
			me._categories_scroller_pl.ggScrollByX(-diffX);
			me._categories_scroller_pl.ggScrollByY(-diffY);
		}
		me._categories_scroller_pl__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller_pl.ggDragLastX = me._categories_scroller_pl.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller_pl.ggDragLastY = me._categories_scroller_pl.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller_pl__content.onmouseup = me._categories_scroller_pl__content.mousetouchend;
			me._categories_scroller_pl__content.ontouchend = me._categories_scroller_pl__content.mousetouchend;
			me._categories_scroller_pl__content.onmousemove = me._categories_scroller_pl__content.mousetouchmove;
			me._categories_scroller_pl__content.ontouchmove = me._categories_scroller_pl__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._categories_scroller_pl__content.onpointerup = me._categories_scroller_pl__content.ontouchend;
				me._categories_scroller_pl__content.onpointermove = me._categories_scroller_pl__content.ontouchmove;
			}
		}
		els.onmousedown = me._categories_scroller_pl__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller_pl__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller_pl__content.mousetouchstart;
		}
		elHorScrollBg = me._categories_scroller_pl__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._categories_scroller_pl__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._categories_scroller_pl.ggScrollPosX = 0;
		me._categories_scroller_pl.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller_pl.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_pl.ggDragInertiaX *= 0.96;
					me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._categories_scroller_pl.ggDragLastX;
				me._categories_scroller_pl.ggDragInertiaX = diffX;
				me._categories_scroller_pl.ggDragLastX = e.clientX;
				me._categories_scroller_pl.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_pl.ggDragInertiaX *= 0.96;
					me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._categories_scroller_pl.ggDragLastX;
				me._categories_scroller_pl.ggDragInertiaX = diffX;
				me._categories_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._categories_scroller_pl.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._categories_scroller_pl.ggScrollWidth;
			if (e.offsetX < me._categories_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._categories_scroller_pl.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller_pl__horScrollBg.getBoundingClientRect();
			var diffX = me._categories_scroller_pl.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._categories_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._categories_scroller_pl.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._categories_scroller_pl.ggScrollByXSmooth(30 * me._categories_scroller_pl.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller_pl__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_scroller_pl.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._categories_scroller_pl.ggScrollPosX / me._categories_scroller_pl.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._categories_scroller_pl__horScrollBg.style.visibility = 'inherit';
					me._categories_scroller_pl__horScrollFg.style.visibility = 'inherit';
					me._categories_scroller_pl.ggHorScrollVisible = true;
				} else {
					me._categories_scroller_pl__horScrollBg.style.visibility = 'hidden';
					me._categories_scroller_pl__horScrollFg.style.visibility = 'hidden';
					me._categories_scroller_pl.ggHorScrollVisible = false;
				}
				if(me._categories_scroller_pl.ggHorScrollVisible) {
					me._categories_scroller_pl.ggAvailableHeight = me._categories_scroller_pl.clientHeight - 6;
					if (me._categories_scroller_pl.ggVertScrollVisible) {
						me._categories_scroller_pl.ggAvailableWidth = me._categories_scroller_pl.clientWidth - 6;
						me._categories_scroller_pl.ggAvailableWidthWithScale = me._categories_scroller_pl.getBoundingClientRect().width - me._categories_scroller_pl__horScrollBg.getBoundingClientRect().height;
					} else {
						me._categories_scroller_pl.ggAvailableWidth = me._categories_scroller_pl.clientWidth;
						me._categories_scroller_pl.ggAvailableWidthWithScale = me._categories_scroller_pl.getBoundingClientRect().width;
					}
					me._categories_scroller_pl__horScrollBg.style.width = me._categories_scroller_pl.ggAvailableWidth + 'px';
					me._categories_scroller_pl.ggHPercentVisible = contentWidth != 0 ? me._categories_scroller_pl.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._categories_scroller_pl.ggHPercentVisible > 1.0) me._categories_scroller_pl.ggHPercentVisible = 1.0;
					me._categories_scroller_pl.ggScrollWidth = Math.round(me._categories_scroller_pl__horScrollBg.offsetWidth * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl__horScrollFg.style.width = me._categories_scroller_pl.ggScrollWidth + 'px';
					me._categories_scroller_pl.ggScrollPosX = me._categories_scroller_pl.ggScrollPosXPercent * me._categories_scroller_pl.ggAvailableWidth;
					me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
					me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
					if (me._categories_scroller_pl.ggHPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
						me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._categories_scroller_pl.ggAvailableHeight = me._categories_scroller_pl.clientHeight;
					me._categories_scroller_pl.ggScrollPosX = 0;
					me._categories_scroller_pl.ggScrollPosXPercent = 0.0;
					me._categories_scroller_pl__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._categories_scroller_pl.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller_pl.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller_pl);
					me._categories_scroller_pl.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner_pl=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner_pl;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 215;
		el.ggHeight = 155;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._categories_cloner_pl.ggUpdating == true) return;
			me._categories_cloner_pl.ggUpdating = true;
			var el=me._categories_cloner_pl;
			var curNumRows = 0;
			curNumRows = me._categories_cloner_pl.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner_pl.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner_pl.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._categories_cloner_pl.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner_pl.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner_pl.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner_pl.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner_pl.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner_pl.ggWidth) + 'px';
				parameter.width=me._categories_cloner_pl.ggWidth + 'px';
				parameter.height=me._categories_cloner_pl.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_pl_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._categories_cloner_pl.ggNodeCount = me._categories_cloner_pl.ggNumFilterPassed;
			me._categories_cloner_pl.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner_pl.parentNode && me._categories_cloner_pl.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner_pl.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner_pl.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			];
		el.ggId="categories_cloner_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_cloner_pl.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner_pl.childNodes.length; i++) {
				var child=me._categories_cloner_pl.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._categories_cloner_pl.ggUpdatePosition=function (useTransition) {
			me._categories_cloner_pl.ggUpdate();
		}
		me._categories_scroller_pl__content.appendChild(me._categories_cloner_pl);
		me._categories_menu_phone_landscape.appendChild(me._categories_scroller_pl);
		me._menu.appendChild(me._categories_menu_phone_landscape);
		el=me._categories_menu=document.createElement('div');
		el.ggId="categories_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 205px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._categories_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._categories_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._categories_menu.style.transition='width 0s, height 0s';
				if (me._categories_menu.ggCurrentLogicStateSize == 0) {
					me._categories_menu.style.width='205px';
					me._categories_menu.style.height='calc(100% - 197px)';
					skin.updateSize(me._categories_menu);
				}
				else {
					me._categories_menu.style.width='205px';
					me._categories_menu.style.height='calc(100% - 155px)';
					skin.updateSize(me._categories_menu);
				}
			}
		}
		me._categories_menu.logicBlock_size();
		me._categories_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_menu.style.transition='width 0s, height 0s';
				if (me._categories_menu.ggCurrentLogicStateVisible == 0) {
					me._categories_menu.style.visibility="hidden";
					me._categories_menu.ggVisible=false;
				}
				else {
					me._categories_menu.style.visibility=(Number(me._categories_menu.style.opacity)>0||!me._categories_menu.style.opacity)?'inherit':'hidden';
					me._categories_menu.ggVisible=true;
				}
			}
		}
		me._categories_menu.logicBlock_visible();
		me._categories_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_scroller=document.createElement('div');
		els=me._categories_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller.ggScrollByX = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosX = (me._categories_scroller__horScrollFg.offsetLeft + diffX);
			me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
			me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
		}
		me._categories_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller.ggScrollPosX >= me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth)) {
					me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller.ggScrollPosX <= 0)) {
					me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller.ggScrollByY = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosY = (me._categories_scroller__vertScrollFg.offsetTop + diffY);
			me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
			me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
		}
		me._categories_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller.ggScrollPosY >= me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight)) {
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller.ggScrollPosY <= 0)) {
					me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 6 : 0))) * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 6 : 0))) * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller.ggDragInertiaX *= 0.96;
				me._categories_scroller.ggDragInertiaY *= 0.96;
				me._categories_scroller.ggScrollByX(me._categories_scroller.ggDragInertiaX);
				me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
				if (Math.abs(me._categories_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller__content.onmouseup = null;
			me._categories_scroller__content.onmousemove = null;
			me._categories_scroller__content.ontouchend = null;
			me._categories_scroller__content.ontouchmove = null;
			me._categories_scroller__content.onpointerup = null;
			me._categories_scroller__content.onpointermove = null;
			setTimeout(function() { me._categories_scroller.ggIsDragging = false; }, 100);
		}
		me._categories_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller.ggDragStartY) > 10) me._categories_scroller.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller.ggDragLastX) * me._categories_scroller.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller.ggDragLastY) * me._categories_scroller.ggVPercentVisible;
			me._categories_scroller.ggDragInertiaX = -diffX;
			me._categories_scroller.ggDragInertiaY = -diffY;
			me._categories_scroller.ggDragLastX = eventX;
			me._categories_scroller.ggDragLastY = eventY;
			me._categories_scroller.ggScrollByX(-diffX);
			me._categories_scroller.ggScrollByY(-diffY);
		}
		me._categories_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller.ggDragLastX = me._categories_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller.ggDragLastY = me._categories_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller__content.onmouseup = me._categories_scroller__content.mousetouchend;
			me._categories_scroller__content.ontouchend = me._categories_scroller__content.mousetouchend;
			me._categories_scroller__content.onmousemove = me._categories_scroller__content.mousetouchmove;
			me._categories_scroller__content.ontouchmove = me._categories_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._categories_scroller__content.onpointerup = me._categories_scroller__content.ontouchend;
				me._categories_scroller__content.onpointermove = me._categories_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._categories_scroller__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._categories_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 399px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._categories_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 399px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._categories_scroller.ggScrollPosY = 0;
		me._categories_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._categories_scroller.ggScrollHeight;
			if (e.offsetY < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._categories_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._categories_scroller.ggScrollByYSmooth(30 * me._categories_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._categories_scroller.ggScrollPosY / me._categories_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._categories_scroller__vertScrollBg.style.visibility = 'inherit';
					me._categories_scroller__vertScrollFg.style.visibility = 'inherit';
					me._categories_scroller.ggVertScrollVisible = true;
				} else {
					me._categories_scroller__vertScrollBg.style.visibility = 'hidden';
					me._categories_scroller__vertScrollFg.style.visibility = 'hidden';
					me._categories_scroller.ggVertScrollVisible = false;
				}
				if(me._categories_scroller.ggVertScrollVisible) {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth - 6;
					if (me._categories_scroller.ggHorScrollVisible) {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight - 6;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height - me._categories_scroller__vertScrollBg.getBoundingClientRect().width;
						me._categories_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height;
						me._categories_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._categories_scroller__vertScrollBg.style.height = me._categories_scroller.ggAvailableHeight + 'px';
					me._categories_scroller.ggVPercentVisible = contentHeight != 0 ? me._categories_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._categories_scroller.ggVPercentVisible > 1.0) me._categories_scroller.ggVPercentVisible = 1.0;
					me._categories_scroller.ggScrollHeight =  Math.round(me._categories_scroller__vertScrollBg.offsetHeight * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller__vertScrollFg.style.height = me._categories_scroller.ggScrollHeight + 'px';
					me._categories_scroller.ggScrollPosY = me._categories_scroller.ggScrollPosYPercent * me._categories_scroller.ggAvailableHeight;
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
					if (me._categories_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
						me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth;
					me._categories_scroller.ggScrollPosY = 0;
					me._categories_scroller.ggScrollPosYPercent = 0.0;
					me._categories_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._categories_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._categories_scroller.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller);
					me._categories_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 155;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._categories_cloner.ggUpdating == true) return;
			me._categories_cloner.ggUpdating = true;
			var el=me._categories_cloner;
			var curNumCols = 0;
			curNumCols = me._categories_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._categories_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner.ggWidth) + 'px';
				parameter.width=me._categories_cloner.ggWidth + 'px';
				parameter.height=me._categories_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._categories_cloner.ggNodeCount = me._categories_cloner.ggNumFilterPassed;
			me._categories_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner.parentNode && me._categories_cloner.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			];
		el.ggId="categories_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner.childNodes.length; i++) {
				var child=me._categories_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._categories_cloner.ggUpdatePosition=function (useTransition) {
			me._categories_cloner.ggUpdate();
		}
		me._categories_scroller__content.appendChild(me._categories_cloner);
		me._categories_menu.appendChild(me._categories_scroller);
		me._menu.appendChild(me._categories_menu);
		me.divSkin.appendChild(me._menu);
		el=me._menu_toggle_bg=document.createElement('div');
		el.ggId="menu_toggle_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_bg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_bg.style.transition='opacity 500ms ease 0ms';
				if (me._menu_toggle_bg.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_bg.style.visibility=(Number(me._menu_toggle_bg.style.opacity)>0||!me._menu_toggle_bg.style.opacity)?'inherit':'hidden';
					me._menu_toggle_bg.ggVisible=true;
				}
				else {
					me._menu_toggle_bg.style.visibility="hidden";
					me._menu_toggle_bg.ggVisible=false;
				}
			}
		}
		me._menu_toggle_bg.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_toggle_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_toggle_bg.style.transition='opacity 500ms ease 0ms';
				if (me._menu_toggle_bg.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_toggle_bg.style.opacity == 0.0) { me._menu_toggle_bg.style.visibility="hidden"; } }, 505);
					me._menu_toggle_bg.style.opacity=0;
				}
				else {
					me._menu_toggle_bg.style.visibility=me._menu_toggle_bg.ggVisible?'inherit':'hidden';
					me._menu_toggle_bg.style.opacity=1;
				}
			}
		}
		me._menu_toggle_bg.logicBlock_alpha();
		me._menu_toggle_bg.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_toggle_bg);
		el=me._menu_toggle=document.createElement('div');
		el.ggId="menu_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_toggle.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStatePosition == 0) {
					me._menu_toggle.style.left='195px';
					me._menu_toggle.style.top='20px';
				}
				else if (me._menu_toggle.ggCurrentLogicStatePosition == 1) {
					me._menu_toggle.style.left='calc(100% - 52px)';
					me._menu_toggle.style.top='20px';
				}
				else {
					me._menu_toggle.style.left='20px';
					me._menu_toggle.style.top='20px';
				}
			}
		}
		me._menu_toggle.logicBlock_position();
		me._menu_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('vis_languages') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle.style.visibility=(Number(me._menu_toggle.style.opacity)>0||!me._menu_toggle.style.opacity)?'inherit':'hidden';
					me._menu_toggle.ggVisible=true;
				}
				else {
					me._menu_toggle.style.visibility="hidden";
					me._menu_toggle.ggVisible=false;
				}
			}
		}
		me._menu_toggle.logicBlock_visible();
		me._menu_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_toggle.style.opacity == 0.0) { me._menu_toggle.style.visibility="hidden"; } }, 505);
					me._menu_toggle.style.opacity=0;
				}
				else {
					me._menu_toggle.style.visibility=me._menu_toggle.ggVisible?'inherit':'hidden';
					me._menu_toggle.style.opacity=1;
				}
			}
		}
		me._menu_toggle.logicBlock_alpha();
		me._menu_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._back_to_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/back_to_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._back_to_close_anim.ggLottie.goToAndStop(me._back_to_close_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="back_to_close_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._back_to_close_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._back_to_close_anim.onclick=function (e) {
			player.setVariableValue('vis_nodes', false);
			player.setVariableValue('vis_info', false);
			me._back_to_close_anim.ggLottie.loop = 0;
			me._back_to_close_anim.ggLottie.play();
			me._close_to_back_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("4.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._back_to_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['back_to_close_anim']=true;
			me._menu_toggle_back.logicBlock_visible();
		}
		me._back_to_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['back_to_close_anim']=false;
			me._menu_toggle_back.logicBlock_visible();
		}
		me._back_to_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_back=document.createElement('div');
		els=me._menu_toggle_back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOSwxMUg3LjgzbDQuODgtNC44OGMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MmwwLDBjLTAuMzktMC4zOS0xLjAyLTAuMzktMS40MSwwbC02LjU5LDYuNTkgYy0wLjM5LD'+
			'AuMzktMC4zOSwxLjAyLDAsMS40MWw2LjU5LDYuNTljMC4zOSwwLjM5LDEuMDIsMC4zOSwxLjQxLDBsMCwwYzAuMzktMC4zOSwwLjM5LTEuMDIsMC0xLjQxTDcuODMsMTNIMTkgYzAuNTUsMCwxLTAuNDUsMS0xbDAsMEMyMCwxMS40NSwxOS41NSwxMSwxOSwxMXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._menu_toggle_back__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_back.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['back_to_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("4")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_back.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_back.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_back.style.transition='';
				if (me._menu_toggle_back.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_back.style.visibility=(Number(me._menu_toggle_back.style.opacity)>0||!me._menu_toggle_back.style.opacity)?'inherit':'hidden';
					me._menu_toggle_back.ggVisible=true;
				}
				else {
					me._menu_toggle_back.style.visibility="hidden";
					me._menu_toggle_back.ggVisible=false;
				}
			}
		}
		me._menu_toggle_back.logicBlock_visible();
		me._menu_toggle_back.ggUpdatePosition=function (useTransition) {
		}
		me._back_to_close_anim.appendChild(me._menu_toggle_back);
		me._menu_toggle.appendChild(me._back_to_close_anim);
		el=me._close_to_back_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/close_to_back_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="close_to_back_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_to_back_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_to_back_anim.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._close_to_back_anim);
		el=me._close_to_menu_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/close_to_menu_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._close_to_menu_anim.ggLottie.goToAndStop(me._close_to_menu_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="close_to_menu_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_to_menu_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_to_menu_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', false);
			me._close_to_menu_anim.ggLottie.loop = 0;
			me._close_to_menu_anim.ggLottie.play();
			me._menu_to_close_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("2.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.6") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._close_to_menu_anim.onmouseenter=function (e) {
			me.elementMouseOver['close_to_menu_anim']=true;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._close_to_menu_anim.onmouseleave=function (e) {
			me.elementMouseOver['close_to_menu_anim']=false;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._close_to_menu_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_off_active=document.createElement('div');
		els=me._menu_toggle_off_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._menu_toggle_off_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_off_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_off_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_off_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_to_menu_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("2"))) && 
				((player.getVariableValue('hide_lottie_index') != Number("3")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_off_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_off_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_off_active.style.transition='';
				if (me._menu_toggle_off_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_off_active.style.visibility=(Number(me._menu_toggle_off_active.style.opacity)>0||!me._menu_toggle_off_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_off_active.ggVisible=true;
				}
				else {
					me._menu_toggle_off_active.style.visibility="hidden";
					me._menu_toggle_off_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_off_active.logicBlock_visible();
		me._menu_toggle_off_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_to_menu_anim.appendChild(me._menu_toggle_off_active);
		me._menu_toggle.appendChild(me._close_to_menu_anim);
		el=me._menu_to_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/menu_to_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="menu_to_close_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_to_close_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_to_close_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', true);
			me._menu_to_close_anim.ggLottie.loop = 0;
			me._menu_to_close_anim.ggLottie.play();
			me._close_to_menu_anim.ggLottie.goToAndStop(me._close_to_menu_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("1.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.6") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_to_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['menu_to_close_anim']=true;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_to_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['menu_to_close_anim']=false;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_to_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_on_active=document.createElement('div');
		els=me._menu_toggle_on_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik00LDE4aDE2YzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxNy41NSwzLjQ1LDE4LDQsMTh6IE00LD'+
			'EzaDE2IGMwLjU1LDAsMS0wLjQ1LDEtMWwwLDBjMC0wLjU1LTAuNDUtMS0xLTFINGMtMC41NSwwLTEsMC40NS0xLDFsMCwwQzMsMTIuNTUsMy40NSwxMyw0LDEzeiBNMyw3TDMsN2MwLDAuNTUsMC40NSwxLDEsMWgxNiBjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDRDMy40NSw2LDMsNi40NSwzLDd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._menu_toggle_on_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_on_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_on_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_on_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_to_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_on_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_on_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_on_active.style.transition='';
				if (me._menu_toggle_on_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_on_active.style.visibility=(Number(me._menu_toggle_on_active.style.opacity)>0||!me._menu_toggle_on_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_on_active.ggVisible=true;
				}
				else {
					me._menu_toggle_on_active.style.visibility="hidden";
					me._menu_toggle_on_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_on_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_to_close_anim.appendChild(me._menu_toggle_on_active);
		me._menu_toggle.appendChild(me._menu_to_close_anim);
		el=me._menu_toggle_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="menu_toggle_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_timer.ggIsActive=function() {
			return (me._menu_toggle_timer.ggTimestamp + me._menu_toggle_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._menu_toggle_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_timer.style.transition='';
				if (me._menu_toggle_timer.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_timer.style.visibility="hidden";
					me._menu_toggle_timer.ggVisible=false;
				}
				else {
					me._menu_toggle_timer.style.visibility=(Number(me._menu_toggle_timer.style.opacity)>0||!me._menu_toggle_timer.style.opacity)?'inherit':'hidden';
					me._menu_toggle_timer.ggVisible=true;
				}
			}
		}
		me._menu_toggle_timer.logicBlock_visible();
		me._menu_toggle_timer.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				me._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._menu_to_close_anim.style.transition='none';
				me._menu_to_close_anim.style.visibility='hidden';
				me._menu_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._menu_to_close_anim.style.transition='none';
				me._menu_to_close_anim.style.visibility=(Number(me._menu_to_close_anim.style.opacity)>0||!me._menu_to_close_anim.style.opacity)?'inherit':'hidden';
				me._menu_to_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility='hidden';
				me._close_to_menu_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("3")))
				)
			) {
				me._back_to_close_anim.style.transition='none';
				me._back_to_close_anim.style.visibility=(Number(me._back_to_close_anim.style.opacity)>0||!me._back_to_close_anim.style.opacity)?'inherit':'hidden';
				me._back_to_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("3")))
				)
			) {
				me._close_to_back_anim.style.transition='none';
				me._close_to_back_anim.style.visibility='hidden';
				me._close_to_back_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("4")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				me._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("4")))
				)
			) {
				me._back_to_close_anim.style.transition='none';
				me._back_to_close_anim.style.visibility='hidden';
				me._back_to_close_anim.ggVisible=false;
			}
		}
		me._menu_toggle_timer.ggCurrentLogicStateVisible = -1;
		me._menu_toggle_timer.ggUpdateConditionTimer=function () {
			me._menu_toggle_timer.logicBlock_visible();
		}
		me._menu_toggle_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._menu_toggle_timer);
		me.divSkin.appendChild(me._menu_toggle);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow_title";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 120px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 35px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player._(player.getNodeUserdata('_master').title) == ""))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStatePosition == 0) {
					me._node_title.style.right='30px';
					me._node_title.style.top='30px';
				}
				else {
					me._node_title.style.right='30px';
					me._node_title.style.top='130px';
				}
			}
		}
		me._node_title.logicBlock_position();
		me._node_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateSize == 0) {
					me._node_title.style.width='calc(100% - 285px)';
					me._node_title.style.height='45px';
					skin.updateSize(me._node_title);
				}
				else {
					me._node_title.style.width='calc(100% - 120px)';
					me._node_title.style.height='45px';
					skin.updateSize(me._node_title);
				}
			}
		}
		me._node_title.logicBlock_size();
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
				else {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
			}
		}
		me._node_title.logicBlock_visible();
		me._node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._node_title.style.opacity == 0.0) { me._node_title.style.visibility="hidden"; } }, 505);
					me._node_title.style.opacity=0;
				}
				else {
					me._node_title.style.visibility=me._node_title.ggVisible?'inherit':'hidden';
					me._node_title.style.opacity=1;
				}
			}
		}
		me._node_title.logicBlock_alpha();
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._node_title);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow_title";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 120px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 60px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._project_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._project_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._project_title.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._project_title.ggCurrentLogicStateSize == 0) {
					me._project_title.style.width='calc(100% - 285px)';
					me._project_title.style.height='70px';
					skin.updateSize(me._project_title);
				}
				else {
					me._project_title.style.width='calc(100% - 120px)';
					me._project_title.style.height='70px';
					skin.updateSize(me._project_title);
				}
			}
		}
		me._project_title.logicBlock_size();
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.logicBlock_visible();
		me._project_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._project_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._project_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._project_title.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._project_title.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._project_title.style.opacity == 0.0) { me._project_title.style.visibility="hidden"; } }, 505);
					me._project_title.style.opacity=0;
				}
				else {
					me._project_title.style.visibility=me._project_title.ggVisible?'inherit':'hidden';
					me._project_title.style.opacity=1;
				}
			}
		}
		me._project_title.logicBlock_alpha();
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._project_title);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.logicBlock_visible();
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_url_popup', false);
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._screen_tint_bg=document.createElement('div');
		el.ggId="screen_tint_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screen_tint_bg.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_bg);
		el=me._screen_tint_close=document.createElement('div');
		els=me._screen_tint_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._screen_tint_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="screen_tint_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screen_tint_close.onmouseenter=function (e) {
			me._screen_tint_close__img.style.visibility='hidden';
			me._screen_tint_close__imgo.style.visibility='inherit';
			me.elementMouseOver['screen_tint_close']=true;
		}
		me._screen_tint_close.onmouseleave=function (e) {
			me._screen_tint_close__img.style.visibility='inherit';
			me._screen_tint_close__imgo.style.visibility='hidden';
			me.elementMouseOver['screen_tint_close']=false;
		}
		me._screen_tint_close.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_close);
		me.divSkin.appendChild(me._screen_tint);
		el=me._pdf_popup=document.createElement('div');
		el.ggId="pdf_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pdf_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pdf_popup.style.transition='opacity 500ms ease 0ms';
				if (me._pdf_popup.ggCurrentLogicStateAlpha == 0) {
					me._pdf_popup.style.visibility=me._pdf_popup.ggVisible?'inherit':'hidden';
					me._pdf_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._pdf_popup.style.opacity == 0.0) { me._pdf_popup.style.visibility="hidden"; } }, 505);
					me._pdf_popup.style.opacity=0;
				}
			}
		}
		me._pdf_popup.logicBlock_alpha();
		me._pdf_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_popup_pdf=document.createElement('div');
		els=me._pdf_popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_pdf__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_pdf__pdf.setAttribute('width', '100%');
		me._pdf_popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_pdf.ggPdfSource == file) return;
				me._pdf_popup_pdf.pdfNotLoaded = false;
				me._pdf_popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_pdf.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_pdf.ggPdfSource.startsWith('/') || me._pdf_popup_pdf.ggPdfSource.startsWith('./')) ? me._pdf_popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_pdf.ggPdfSource;
				me._pdf_popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_pdf__pdf.style.display = 'block';
			} else {
				me._pdf_popup_pdf__pdf.setAttribute('src', '');
				me._pdf_popup_pdf__pdf.style.display = 'none';
				me._pdf_popup_pdf.pdfNotLoaded = true;
				me._pdf_popup_pdf.ggPdfSource = '';
			}
		}
		me._pdf_popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_pdf.ggInitPdf('');
		el.ggId="pdf_popup_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_pdf);
		el=me._pdf_popup_title=document.createElement('div');
		els=me._pdf_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._pdf_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_title);
		me.divSkin.appendChild(me._pdf_popup);
		el=me._url_popup=document.createElement('div');
		el.ggId="url_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_popup.style.transition='';
				if (me._url_popup.ggCurrentLogicStateVisible == 0) {
					me._url_popup.style.visibility=(Number(me._url_popup.style.opacity)>0||!me._url_popup.style.opacity)?'inherit':'hidden';
					me._url_popup.ggVisible=true;
				}
				else {
					me._url_popup.style.visibility="hidden";
					me._url_popup.ggVisible=false;
				}
			}
		}
		me._url_popup.logicBlock_visible();
		me._url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_popup_title=document.createElement('div');
		els=me._url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_title);
		el=me._url_popup_iframe=document.createElement('div');
		els=me._url_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_iframe";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_iframe);
		me.divSkin.appendChild(me._url_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZjMC0yLjktMS44LTUuMy00'+
			'LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiAgICB2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjIgICAgbDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNy'+
			'AgICBjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMgICAgQzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBNMTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDEx'+
			'LjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYgICAgYzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zICAgIFMxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) - 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 300ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 305);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.logicBlock_alpha();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone0=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone0.onclick=function (e) {
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone0.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone0=document.createElement('div');
		els=me._btn_close_popup_phone0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone0.onmouseenter=function (e) {
			me._btn_close_popup_phone0__img.style.visibility='hidden';
			me._btn_close_popup_phone0__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone0']=true;
		}
		me._btn_close_popup_phone0.onmouseleave=function (e) {
			me._btn_close_popup_phone0__img.style.visibility='inherit';
			me._btn_close_popup_phone0__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone0']=false;
		}
		me._btn_close_popup_phone0.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone0.appendChild(me._btn_close_popup_phone0);
		me._safe_area_phone.appendChild(me._close_popup_phone0);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_image', false);
		}
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._safe_area_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = 'rgba(0,0,0,0)';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-9px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggActivate=function () {
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggDeactivate=function () {
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		el=me._video_controller_button_pause_phone=document.createElement('div');
		els=me._video_controller_button_pause_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_pause_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_pause_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_controller_button_pause_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_pause_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_pause_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_button_pause_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_file_popup_phone");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_url_popup_phone");
				}
			}
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
		}
		me._video_controller_button_pause_phone.onmouseenter=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='hidden';
			me._video_controller_button_pause_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_pause_phone']=true;
		}
		me._video_controller_button_pause_phone.onmouseleave=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='inherit';
			me._video_controller_button_pause_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_pause_phone']=false;
		}
		me._video_controller_button_pause_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_pause_phone);
		el=me._video_controller_button_play_phone=document.createElement('div');
		els=me._video_controller_button_play_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_play_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_play_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_controller_button_play_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_play_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_play_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_button_play_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_file_popup_phone","1");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_url_popup_phone","1");
				}
			}
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
		}
		me._video_controller_button_play_phone.onmouseenter=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='hidden';
			me._video_controller_button_play_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_play_phone']=true;
		}
		me._video_controller_button_play_phone.onmouseleave=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='inherit';
			me._video_controller_button_play_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_play_phone']=false;
		}
		me._video_controller_button_play_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_play_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone__vid.id = 'youtube-video';
			me._youtube_popup_phone.ggYoutubeApiReady = function() {
				me._youtube_popup_phone.ggApiPlayerType = 'youtube';
				me._youtube_popup_phone.ggApiPlayerReady = false;
				me._youtube_popup_phone.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._youtube_popup_phone.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._youtube_popup_phone.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._youtube_popup_phone.ggMediaEnded) {
								me._youtube_popup_phone.ggMediaEnded();
							}
							if (event.data == 1 && me._youtube_popup_phone.ggActivate) {
								me._youtube_popup_phone.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._youtube_popup_phone.ggDeactivate) {
								me._youtube_popup_phone.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._youtube_popup_phone.ggApiPlayer.unMute();
						if (args.state == 1) skin._youtube_popup_phone.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._youtube_popup_phone.ggApiPlayer.isMuted()) skin._youtube_popup_phone.ggApiPlayer.unMute(); else skin._youtube_popup_phone.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_main') {
						if (args.type == 'set') skin._youtube_popup_phone.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._youtube_popup_phone.ggApiPlayer.setVolume(skin._youtube_popup_phone.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggApiPlayerType = 'vimeo';
			me._vimeo_popup_phone.ggApiPlayer = new Vimeo.Player(me._vimeo_popup_phone__vid);
			if (player.getPlayerMuted()) me._vimeo_popup_phone.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._vimeo_popup_phone.ggApiPlayer.getVolume() > 0.0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0); else skin._vimeo_popup_phone.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_main') {
					if (args.type == 'set') skin._vimeo_popup_phone.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._vimeo_popup_phone.ggApiPlayer.getVolume().then(function(volume) { skin._vimeo_popup_phone.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_file_popup_phone);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_url_popup_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._map_toggle=document.createElement('div');
		el.ggId="map_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasMap() == true)) || 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_toggle.style.transition='opacity 300ms ease 0ms';
				if (me._map_toggle.ggCurrentLogicStateVisible == 0) {
					me._map_toggle.style.visibility=(Number(me._map_toggle.style.opacity)>0||!me._map_toggle.style.opacity)?'inherit':'hidden';
					me._map_toggle.ggVisible=true;
				}
				else {
					me._map_toggle.style.visibility="hidden";
					me._map_toggle.ggVisible=false;
				}
			}
		}
		me._map_toggle.logicBlock_visible();
		me._map_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_toggle.style.transition='opacity 300ms ease 0ms';
				if (me._map_toggle.ggCurrentLogicStateAlpha == 0) {
					me._map_toggle.style.visibility=me._map_toggle.ggVisible?'inherit':'hidden';
					me._map_toggle.style.opacity=1;
				}
				else if (me._map_toggle.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._map_toggle.style.opacity == 0.0) { me._map_toggle.style.visibility="hidden"; } }, 305);
					me._map_toggle.style.opacity=0;
				}
				else {
					me._map_toggle.style.visibility=me._map_toggle.ggVisible?'inherit':'hidden';
					me._map_toggle.style.opacity=1;
				}
			}
		}
		me._map_toggle.logicBlock_alpha();
		me._map_toggle.onclick=function (e) {
			if (
				(
					((player.hasFloorplan() == true))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			if (
				(
					((player.hasFloorplan() == false))
				)
			) {
				player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
			}
		}
		me._map_toggle.onmouseenter=function (e) {
			me.elementMouseOver['map_toggle']=true;
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
		}
		me._map_toggle.onmouseleave=function (e) {
			me.elementMouseOver['map_toggle']=false;
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
		}
		me._map_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_icon=document.createElement('div');
		els=me._map_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zMS41LDE1ICBDMzEuNSwyNS41LDE4LDM0LjUsMTgsMzQuNVM0LjUsMjUuNSw0LjUsMTVjMC03LjUsNi0xMy41LDEzLjUtMTMuNVMzMS41LDcuNSwzMS41LDE1eiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjeD0iMTgiIGN5PSIxNSIgcj0iNC41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
		me._map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) || 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon.style.transition='';
				if (me._map_icon.ggCurrentLogicStateVisible == 0) {
					me._map_icon.style.visibility="hidden";
					me._map_icon.ggVisible=false;
				}
				else {
					me._map_icon.style.visibility=(Number(me._map_icon.style.opacity)>0||!me._map_icon.style.opacity)?'inherit':'hidden';
					me._map_icon.ggVisible=true;
				}
			}
		}
		me._map_icon.logicBlock_visible();
		me._map_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._map_icon);
		el=me._map_icon_active=document.createElement('div');
		els=me._map_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIGN5PSIzMiIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5Z29uIHBvaW50cz0iMjYuNjcgMjEuMzMgMzcuMzMgMTYgNDggMjEuMzMgNDggNDggMzcuMz'+
			'MgNDIuNjcgMjYuNjcgNDggMTYgNDIuNjcgMTYgMTYgMjYuNjcgMjEuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweCIvPgogIDxsaW5lIHkxPSIxNiIgeTI9IjQyLjY3IiB4MT0iMzcuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweCIgeDI9IjM3LjMzIi8+CiAgPGxpbmUgeTE9IjIxLjMzIiB5Mj0iNDgiIHgxPSIyNi42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Ut'+
			'd2lkdGg6MnB4IiB4Mj0iMjYuNjciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) && 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon_active.style.transition='';
				if (me._map_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_icon_active.style.visibility=(Number(me._map_icon_active.style.opacity)>0||!me._map_icon_active.style.opacity)?'inherit':'hidden';
					me._map_icon_active.ggVisible=true;
				}
				else {
					me._map_icon_active.style.visibility="hidden";
					me._map_icon_active.ggVisible=false;
				}
			}
		}
		me._map_icon_active.logicBlock_visible();
		me._map_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._map_icon_active);
		el=me._floorplan_icon=document.createElement('div');
		els=me._floorplan_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHBvaW50cz0iMS41LDkgMS41LDMzICAgMTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogPGxpbmUgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjMiIHkyPSIyNyIgeDE9IjEyIiB4Mj0iMTIiLz4KIDxsaW5lIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3Vu'+
			'ZCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSI5IiB5Mj0iMzMiIHgxPSIyNCIgeDI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._floorplan_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) || 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon.style.transition='';
				if (me._floorplan_icon.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon.style.visibility="hidden";
					me._floorplan_icon.ggVisible=false;
				}
				else {
					me._floorplan_icon.style.visibility=(Number(me._floorplan_icon.style.opacity)>0||!me._floorplan_icon.style.opacity)?'inherit':'hidden';
					me._floorplan_icon.ggVisible=true;
				}
			}
		}
		me._floorplan_icon.logicBlock_visible();
		me._floorplan_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._floorplan_icon);
		el=me._floorplan_icon_active=document.createElement('div');
		els=me._floorplan_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1vcGFjaXR5PSIxIiBwb2ludHM9IjEuNSw5IDEuNSwzMyAmI3hhOyYjeDk7MTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogPGxpbmUgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTI9IjI3IiBzdHJva2Utb3BhY2l0eT0iMSIgeTE9IjMiIHgxPSIxMiIgeDI9IjEyIi8+CiA8'+
			'bGluZSBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB5Mj0iMzMiIHN0cm9rZS1vcGFjaXR5PSIxIiB5MT0iOSIgeDE9IjI0IiB4Mj0iMjQiLz4KPC9zdmc+Cg==';
		me._floorplan_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) && 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon_active.style.transition='';
				if (me._floorplan_icon_active.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon_active.style.visibility=(Number(me._floorplan_icon_active.style.opacity)>0||!me._floorplan_icon_active.style.opacity)?'inherit':'hidden';
					me._floorplan_icon_active.ggVisible=true;
				}
				else {
					me._floorplan_icon_active.style.visibility="hidden";
					me._floorplan_icon_active.ggVisible=false;
				}
			}
		}
		me._floorplan_icon_active.logicBlock_visible();
		me._floorplan_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._floorplan_icon_active);
		me.divSkin.appendChild(me._map_toggle);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 119px;';
		hs+='height : calc(100% - 320px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 14px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 500px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map.style.transition='opacity 500ms ease 0ms';
				if (me._map.ggCurrentLogicStateAlpha == 0) {
					me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
					me._map.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map.style.opacity == 0.0) { me._map.style.visibility="hidden"; } }, 505);
					me._map.style.opacity=0;
				}
			}
		}
		me._map.logicBlock_alpha();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_bg);
		el=me._floorplan_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(30% + 50px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : calc(70% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floorplan_el.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStatePosition == 0) {
					me._floorplan_el.style.left='30px';
					me._floorplan_el.style.top='70px';
				}
				else {
					me._floorplan_el.style.left='calc(30% + 50px)';
					me._floorplan_el.style.top='70px';
				}
			}
		}
		me._floorplan_el.logicBlock_position();
		me._floorplan_el.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateSize != newLogicStateSize) {
				me._floorplan_el.ggCurrentLogicStateSize = newLogicStateSize;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateSize == 0) {
					me._floorplan_el.style.width='calc(100% - 60px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
				else {
					me._floorplan_el.style.width='calc(70% - 80px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
			}
		}
		me._floorplan_el.logicBlock_size();
		me._floorplan_el.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el.style.visibility=(Number(me._floorplan_el.style.opacity)>0||!me._floorplan_el.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el.ggMapNotLoaded && me._floorplan_el.ggInitMap) {
						me._floorplan_el.ggInitMap(false);
						me._floorplan_el.ggInitMapMarkers(true);
					}
					me._floorplan_el.ggVisible=true;
				}
				else {
					me._floorplan_el.style.visibility="hidden";
					if (me._floorplan_el.ggClearMap) me._floorplan_el.ggClearMap();
					me._floorplan_el.ggVisible=false;
				}
			}
		}
		me._floorplan_el.logicBlock_visible();
		me._floorplan_el.ggCurrentLogicStatePosition = -1;
		me._floorplan_el.ggCurrentLogicStateSize = -1;
		me._floorplan_el.ggCurrentLogicStateVisible = -1;
		me._floorplan_el.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el.ggRadar) me._floorplan_el.ggRadar.update();
		}
		me._floorplan_el.ggUpdatePosition=function (useTransition) {
			me._floorplan_el.ggUpdateConditionResize();
		}
		me._map.appendChild(me._floorplan_el);
		el=me._map_node_description=document.createElement('div');
		els=me._map_node_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30% - 25px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._map_node_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_description.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_node_description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_node_description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_node_description.style.transition='';
				if (me._map_node_description.ggCurrentLogicStateVisible == 0) {
					me._map_node_description.style.visibility="hidden";
					me._map_node_description.ggVisible=false;
				}
				else {
					me._map_node_description.style.visibility=(Number(me._map_node_description.style.opacity)>0||!me._map_node_description.style.opacity)?'inherit':'hidden';
					me._map_node_description.ggVisible=true;
				}
			}
		}
		me._map_node_description.logicBlock_visible();
		me._map_node_description.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_description);
		el=me._map_node_title=document.createElement('div');
		els=me._map_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_title";
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : -273px;';
		hs+='top : calc(50% - ((40px + 0px) / 2) - 145px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 70px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._map_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_title);
		el=me._map_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="map_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_top.onclick=function (e) {
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_map', false);
		}
		me._map_top.onmouseenter=function (e) {
			me.elementMouseOver['map_top']=true;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.onmouseleave=function (e) {
			me.elementMouseOver['map_top']=false;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_close_btn=document.createElement('div');
		els=me._map_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iMjQiIHgyPSI4Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iOCIgeDI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._map_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn.style.transition='';
				if (me._map_close_btn.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn.style.visibility="hidden";
					me._map_close_btn.ggVisible=false;
				}
				else {
					me._map_close_btn.style.visibility=(Number(me._map_close_btn.style.opacity)>0||!me._map_close_btn.style.opacity)?'inherit':'hidden';
					me._map_close_btn.ggVisible=true;
				}
			}
		}
		me._map_close_btn.logicBlock_visible();
		me._map_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn);
		el=me._map_close_btn_active=document.createElement('div');
		els=me._map_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iMjQiIHgyPSI4Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iOCIgeDI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._map_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn_active.style.transition='';
				if (me._map_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn_active.style.visibility=(Number(me._map_close_btn_active.style.opacity)>0||!me._map_close_btn_active.style.opacity)?'inherit':'hidden';
					me._map_close_btn_active.ggVisible=true;
				}
				else {
					me._map_close_btn_active.style.visibility="hidden";
					me._map_close_btn_active.ggVisible=false;
				}
			}
		}
		me._map_close_btn_active.logicBlock_visible();
		me._map_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn_active);
		me._map.appendChild(me._map_top);
		el=me._reset_info=document.createElement('div');
		el.ggId="reset info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._reset_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._reset_info.onclick=function (e) {
				me._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_title.ggUpdateText();
			me._map_node_title.ggTextDiv.scrollTop = 0;
				me._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_description.ggUpdateText();
			me._map_node_description.ggTextDiv.scrollTop = 0;
		}
		me._reset_info.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._reset_info);
		me.divSkin.appendChild(me._map);
		el=me._map_phone=document.createElement('div');
		el.ggId="map_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 300px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 500px;';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_phone.style.transition='opacity 500ms ease 0ms';
				if (me._map_phone.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_phone.style.opacity == 0.0) { me._map_phone.style.visibility="hidden"; } }, 505);
					me._map_phone.style.opacity=0;
				}
				else if (me._map_phone.ggCurrentLogicStateAlpha == 1) {
					me._map_phone.style.visibility=me._map_phone.ggVisible?'inherit':'hidden';
					me._map_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_phone.style.opacity == 0.0) { me._map_phone.style.visibility="hidden"; } }, 505);
					me._map_phone.style.opacity=0;
				}
			}
		}
		me._map_phone.logicBlock_alpha();
		me._map_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_map', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iMjQiIHgyPSI4Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iOCIgeDI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iMjQiIHgyPSI4Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB5MT0iOCIgeTI9IjI0IiB4MT0iOCIgeDI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		me._map_phone.appendChild(me._close_popup_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._map_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggCurrentLogicStateVisible = -1;
		me._floorplan_el_phone.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
		}
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
			me._floorplan_el_phone.ggUpdateConditionResize();
		}
		me._map_phone.appendChild(me._floorplan_el_phone);
		me.divSkin.appendChild(me._map_phone);
		el=me._map_code=document.createElement('div');
		el.ggId="map_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map_code);
		el=me._container_controls=document.createElement('div');
		el.ggId="container_controls";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 11px;';
		hs+='height : 100%;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_controls.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_controls.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseDown['container_controls'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._container_controls.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._container_controls.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._container_controls.style.transition='opacity 0s';
				if (me._container_controls.ggCurrentLogicStateAlpha == 0) {
					me._container_controls.style.visibility=me._container_controls.ggVisible?'inherit':'hidden';
					me._container_controls.style.opacity=0.5;
				}
				else {
					me._container_controls.style.visibility=me._container_controls.ggVisible?'inherit':'hidden';
					me._container_controls.style.opacity=1;
				}
			}
		}
		me._container_controls.logicBlock_alpha();
		me._container_controls.onmousedown=function (e) {
			me.elementMouseDown['container_controls']=true;
			me._container_controls.logicBlock_alpha();
		}
		me._container_controls.onmouseup=function (e) {
			me.elementMouseDown['container_controls']=false;
			me._container_controls.logicBlock_alpha();
		}
		me._container_controls.onmouseleave=function (e) {
			me.elementMouseDown['container_controls']=false;
			me._container_controls.logicBlock_alpha();
		}
		me._container_controls.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((122px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 122px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getHasTouch() == false)) && 
				((player.getOS() != 6))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style.transition='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
				else {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
			}
		}
		me._controller.logicBlock_visible();
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_bg=document.createElement('div');
		el.ggId="controller_zoom_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((134px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 134px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_in_bg=document.createElement('div');
		el.ggId="controller_zoom_in_bg";
		el.ggDx=38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 38px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_in_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_in_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_zoom_in_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_zoom_in_bg.style.transition='background-color 0s';
				if (me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_zoom_in_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_zoom_in_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		me._controller_zoom_in_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_zoom_in_bg']=true;
			me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_in_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=true;
		}
		me._controller_zoom_in_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=false;
		}
		me._controller_zoom_in_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=false;
			me.elementMouseOver['controller_zoom_in_bg']=false;
			me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_zoom_in_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_zoom_in_bg']) {
				player.changeFovLog(-1,true);
			}
		}
		me._controller_zoom_in_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_in_icon=document.createElement('div');
		els=me._controller_zoom_in_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTE9IjMyIiB5Mj0iMzIiIHgxPSIxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4Mj0iNDgiLz4KICA8bGluZSB5MT0iMTYiIHkyPSI0OCIgeDE9Ij'+
			'MyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgyPSIzMiIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_zoom_in_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_zoom_in_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSBjbGFzcz0ic3QxIiB5MT0iMzIiIHkyPSIzMiIgeDE9IjE2IiB4Mj0iNDgiLz4KICA8bGluZSBjbGFzcz0ic3QxIiB5MT0iMTYiIHkyPSI0OCIgeDE9IjMyIiB4Mj0iMzIiLz4KIDwvZz4K'+
			'PC9zdmc+Cg==';
		me._controller_zoom_in_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_zoom_in_icon";
		el.ggDx=10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_in_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_in_icon.onmouseenter=function (e) {
			me._controller_zoom_in_icon__img.style.visibility='hidden';
			me._controller_zoom_in_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_zoom_in_icon']=true;
		}
		me._controller_zoom_in_icon.onmouseleave=function (e) {
			me._controller_zoom_in_icon__img.style.visibility='inherit';
			me._controller_zoom_in_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_zoom_in_icon']=false;
		}
		me._controller_zoom_in_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_in_bg.appendChild(me._controller_zoom_in_icon);
		me._controller_zoom_bg.appendChild(me._controller_zoom_in_bg);
		el=me._controller_zoom_out_bg=document.createElement('div');
		el.ggId="controller_zoom_out_bg";
		el.ggDx=-38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) - 38px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_out_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_out_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_zoom_out_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_zoom_out_bg.style.transition='background-color 0s';
				if (me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_zoom_out_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_zoom_out_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		me._controller_zoom_out_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_zoom_out_bg']=true;
			me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_out_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=true;
		}
		me._controller_zoom_out_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=false;
		}
		me._controller_zoom_out_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=false;
			me.elementMouseOver['controller_zoom_out_bg']=false;
			me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_zoom_out_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_zoom_out_bg']) {
				player.changeFovLog(1,true);
			}
		}
		me._controller_zoom_out_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_out_icon=document.createElement('div');
		els=me._controller_zoom_out_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTE9IjMyIiB5Mj0iMzIiIHgxPSIxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4Mj0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_zoom_out_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_zoom_out_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSBjbGFzcz0ic3QxIiB5MT0iMzIiIHkyPSIzMiIgeDE9IjE2IiB4Mj0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_zoom_out_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_zoom_out_icon";
		el.ggDx=-10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_out_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_out_icon.onmouseenter=function (e) {
			me._controller_zoom_out_icon__img.style.visibility='hidden';
			me._controller_zoom_out_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_zoom_out_icon']=true;
		}
		me._controller_zoom_out_icon.onmouseleave=function (e) {
			me._controller_zoom_out_icon__img.style.visibility='inherit';
			me._controller_zoom_out_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_zoom_out_icon']=false;
		}
		me._controller_zoom_out_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_out_bg.appendChild(me._controller_zoom_out_icon);
		me._controller_zoom_bg.appendChild(me._controller_zoom_out_bg);
		me._controller.appendChild(me._controller_zoom_bg);
		el=me._controller_move_bg=document.createElement('div');
		el.ggId="controller_move_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_container=document.createElement('div');
		el.ggId="controller_move_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_left_bg=document.createElement('div');
		el.ggId="controller_move_left_bg";
		el.ggDx=-16;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_left_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_left_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_left_bg.style.transition='background-color 0s';
				if (me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_left_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_left_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_left_bg.logicBlock_backgroundcolor();
		me._controller_move_left_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_left_bg']=true;
			me._controller_move_left_hover_icon.logicBlock_visible();
			me._controller_move_left_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_left_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_left_bg']=true;
		}
		me._controller_move_left_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_left_bg']=false;
		}
		me._controller_move_left_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_left_bg']=false;
			me.elementMouseOver['controller_move_left_bg']=false;
			me._controller_move_left_hover_icon.logicBlock_visible();
			me._controller_move_left_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_left_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_left_bg']) {
				player.changePanLog(1,true);
			}
		}
		me._controller_move_left_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_left_icon=document.createElement('div');
		els=me._controller_move_left_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzguOTYgNDUuOTMgMjUuMDQgMzEuOTkgMjUuMDQgMzEuOTkgMzguOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_left_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_icon";
		el.ggDx=2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_left_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_bg.appendChild(me._controller_move_left_icon);
		el=me._controller_move_left_hover_icon=document.createElement('div');
		els=me._controller_move_left_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzguOTYgNDUuOTMgMjUuMDQgMzEuOTkgMjUuMDQgMzEuOTkgMzguOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_left_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_hover_icon";
		el.ggDx=2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_left_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_left_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_hover_icon.style.transition='';
				if (me._controller_move_left_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_hover_icon.style.visibility=(Number(me._controller_move_left_hover_icon.style.opacity)>0||!me._controller_move_left_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_left_hover_icon.style.visibility="hidden";
					me._controller_move_left_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_left_hover_icon.logicBlock_visible();
		me._controller_move_left_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_bg.appendChild(me._controller_move_left_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_left_bg);
		el=me._controller_move_down_bg=document.createElement('div');
		el.ggId="controller_move_down_bg";
		el.ggDx=16;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_down_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_down_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_down_bg.style.transition='background-color 0s';
				if (me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_down_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_down_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_down_bg.logicBlock_backgroundcolor();
		me._controller_move_down_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_down_bg']=true;
			me._controller_move_down_hover_icon.logicBlock_visible();
			me._controller_move_down_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_down_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_down_bg']=true;
		}
		me._controller_move_down_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_down_bg']=false;
		}
		me._controller_move_down_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_down_bg']=false;
			me.elementMouseOver['controller_move_down_bg']=false;
			me._controller_move_down_hover_icon.logicBlock_visible();
			me._controller_move_down_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_down_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_down_bg']) {
				player.changeTiltLog(-1,true);
			}
		}
		me._controller_move_down_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_down_icon=document.createElement('div');
		els=me._controller_move_down_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTMgMjUuMDQgMzEuOTkgMzguOTYgMzEuOTkgMzguOTYgMTguMDcgMjUuMDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_down_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_down_icon";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_down_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_down_bg.appendChild(me._controller_move_down_icon);
		el=me._controller_move_down_hover_icon=document.createElement('div');
		els=me._controller_move_down_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTMgMjUuMDQgMzEuOTkgMzguOTYgMzEuOTkgMzguOTYgMTguMDcgMjUuMDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_down_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_down_hover_icon";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_down_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_down_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_down_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_down_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_down_hover_icon.style.transition='';
				if (me._controller_move_down_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_down_hover_icon.style.visibility=(Number(me._controller_move_down_hover_icon.style.opacity)>0||!me._controller_move_down_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_down_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_down_hover_icon.style.visibility="hidden";
					me._controller_move_down_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_down_hover_icon.logicBlock_visible();
		me._controller_move_down_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_down_bg.appendChild(me._controller_move_down_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_down_bg);
		el=me._controller_move_right_bg=document.createElement('div');
		el.ggId="controller_move_right_bg";
		el.ggDx=16;
		el.ggDy=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_right_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_right_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_right_bg.style.transition='background-color 0s';
				if (me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_right_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_right_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_right_bg.logicBlock_backgroundcolor();
		me._controller_move_right_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_right_bg']=true;
			me._controller_move_right_hover_icon.logicBlock_visible();
			me._controller_move_right_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_right_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_right_bg']=true;
		}
		me._controller_move_right_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_right_bg']=false;
		}
		me._controller_move_right_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_right_bg']=false;
			me.elementMouseOver['controller_move_right_bg']=false;
			me._controller_move_right_hover_icon.logicBlock_visible();
			me._controller_move_right_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_right_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_right_bg']) {
				player.changePanLog(-1,true);
			}
		}
		me._controller_move_right_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_right_icon=document.createElement('div');
		els=me._controller_move_right_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjUuMDQgMTguMDcgMzguOTYgMzIuMDEgMzguOTYgMzIuMDEgMjUuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_right_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_icon";
		el.ggDx=-2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_right_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_bg.appendChild(me._controller_move_right_icon);
		el=me._controller_move_right_hover_icon=document.createElement('div');
		els=me._controller_move_right_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjUuMDQgMTguMDcgMzguOTYgMzIuMDEgMzguOTYgMzIuMDEgMjUuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_right_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_hover_icon";
		el.ggDx=-2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_right_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_right_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_hover_icon.style.transition='';
				if (me._controller_move_right_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_hover_icon.style.visibility=(Number(me._controller_move_right_hover_icon.style.opacity)>0||!me._controller_move_right_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_right_hover_icon.style.visibility="hidden";
					me._controller_move_right_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_right_hover_icon.logicBlock_visible();
		me._controller_move_right_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_bg.appendChild(me._controller_move_right_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_right_bg);
		el=me._controller_move_up_bg=document.createElement('div');
		el.ggId="controller_move_up_bg";
		el.ggDx=-16;
		el.ggDy=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_up_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_up_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_up_bg.style.transition='background-color 0s';
				if (me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_up_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_up_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_up_bg.logicBlock_backgroundcolor();
		me._controller_move_up_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_up_bg']=true;
			me._controller_move_up_hover_icon.logicBlock_visible();
			me._controller_move_up_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_up_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_up_bg']=true;
		}
		me._controller_move_up_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_up_bg']=false;
		}
		me._controller_move_up_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_up_bg']=false;
			me.elementMouseOver['controller_move_up_bg']=false;
			me._controller_move_up_hover_icon.logicBlock_visible();
			me._controller_move_up_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_up_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_up_bg']) {
				player.changeTiltLog(1,true);
			}
		}
		me._controller_move_up_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_up_icon=document.createElement('div');
		els=me._controller_move_up_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_up_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_up_icon";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_up_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_up_bg.appendChild(me._controller_move_up_icon);
		el=me._controller_move_up_hover_icon=document.createElement('div');
		els=me._controller_move_up_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_up_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_up_hover_icon";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_up_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_up_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_up_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_up_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_up_hover_icon.style.transition='';
				if (me._controller_move_up_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_up_hover_icon.style.visibility=(Number(me._controller_move_up_hover_icon.style.opacity)>0||!me._controller_move_up_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_up_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_up_hover_icon.style.visibility="hidden";
					me._controller_move_up_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_up_hover_icon.logicBlock_visible();
		me._controller_move_up_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_up_bg.appendChild(me._controller_move_up_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_up_bg);
		me._controller_move_bg.appendChild(me._controller_move_container);
		me._controller.appendChild(me._controller_move_bg);
		me._container_controls.appendChild(me._controller);
		me.divSkin.appendChild(me._container_controls);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 23px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-179;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((153px + 0px) / 2) - 179px);';
		hs+='opacity : 0.09999;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1.style.transition='opacity 0s';
				if (me._image_1.ggCurrentLogicStateAlpha == 0) {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=0.7;
				}
				else {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=0.09999;
				}
			}
		}
		me._image_1.logicBlock_alpha();
		me._image_1.onmouseenter=function (e) {
			me.elementMouseOver['image_1']=true;
			me._image_1.logicBlock_alpha();
		}
		me._image_1.onmouseleave=function (e) {
			me.elementMouseOver['image_1']=false;
			me._image_1.logicBlock_alpha();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha();
		me._gyro_toggle.logicBlock_visible();
		me._gyro_on.logicBlock_visible();
		me.elementMouseOver['gyro_on']=false;
		me._gyro_off.logicBlock_visible();
		me.elementMouseOver['gyro_off']=false;
		me._btn_vr.logicBlock_visible();
		me.elementMouseOver['btn_vr']=false;
		me._btn_languages.logicBlock_visible();
		me.elementMouseOver['btn_languages']=false;
		me._hotspots_on_disabled.logicBlock_visible();
		me._hotspots_on_enabled.logicBlock_visible();
		me.elementMouseOver['hotspots_on_enabled']=false;
		me._hotspots_off_disabled.logicBlock_visible();
		me._hotspots_off_enabled.logicBlock_visible();
		me.elementMouseOver['hotspots_off_enabled']=false;
		me._audio_toggle.logicBlock_visible();
		me._audio_on.logicBlock_visible();
		me.elementMouseOver['audio_on']=false;
		me._audio_off.logicBlock_visible();
		me.elementMouseOver['audio_off']=false;
		me._fullscreen_toggle.logicBlock_visible();
		me._fullscreen_exit.logicBlock_visible();
		me.elementMouseOver['fullscreen_exit']=false;
		me._fullscreen_enter.logicBlock_visible();
		me.elementMouseOver['fullscreen_enter']=false;
		me._languages_scroller.logicBlock_position();
		me._languages_scroller.logicBlock_size();
		me._languages_scroller.logicBlock_visible();
		me._nodes_menu_phone_landscape.logicBlock_visible();
		me._nodes_menu.logicBlock_size();
		me._nodes_menu.logicBlock_visible();
		me._categories_menu_phone_landscape.logicBlock_visible();
		me._categories_menu.logicBlock_size();
		me._categories_menu.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_alpha();
		me._menu_toggle.logicBlock_position();
		me._menu_toggle.logicBlock_visible();
		me._menu_toggle.logicBlock_alpha();
		me.elementMouseOver['back_to_close_anim']=false;
		me._menu_toggle_back.logicBlock_visible();
		me.elementMouseOver['close_to_menu_anim']=false;
		me._menu_toggle_off_active.logicBlock_visible();
		me.elementMouseOver['menu_to_close_anim']=false;
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_timer.logicBlock_visible();
		me._node_title.logicBlock_position();
		me._node_title.logicBlock_size();
		me._node_title.logicBlock_visible();
		me._node_title.logicBlock_alpha();
		me._project_title.logicBlock_size();
		me._project_title.logicBlock_visible();
		me._project_title.logicBlock_alpha();
		me._screen_tint.logicBlock_visible();
		me.elementMouseOver['screen_tint_close']=false;
		me._pdf_popup.logicBlock_alpha();
		me._url_popup.logicBlock_visible();
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['btn_close_popup_phone0']=false;
		me._info_popup_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me.elementMouseOver['video_controller_button_pause_phone']=false;
		me.elementMouseOver['video_controller_button_play_phone']=false;
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		el = me._local_fonts;
		;
		me._map_toggle.logicBlock_visible();
		me._map_toggle.logicBlock_alpha();
		me.elementMouseOver['map_toggle']=false;
		me._map_icon.logicBlock_visible();
		me._map_icon_active.logicBlock_visible();
		me._floorplan_icon.logicBlock_visible();
		me._floorplan_icon_active.logicBlock_visible();
		me._map.logicBlock_alpha();
		me._floorplan_el.ggMarkerInstances=[];
		me._floorplan_el.ggLastNodeId=null;
		me._floorplan_el.ggSimpleFloorplanMarkerArray=[];
		me._floorplan_el.ggFloorplanWidth=0;
		me._floorplan_el.ggFloorplanHeight=0;
		me._floorplan_el__mapdiv=document.createElement('div');
		me._floorplan_el__mapdiv.className='ggskin ggskin_map';
		me._floorplan_el.appendChild(me._floorplan_el__mapdiv);
		me._floorplan_el__img=document.createElement('img');
		me._floorplan_el__img.className='ggskin ggskin_map';
		me._floorplan_el__mapdiv.appendChild(me._floorplan_el__img);
		me._floorplan_el.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan_el.ggRadar.update=function() {
			var radar=me._floorplan_el.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan_el.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el.ggFilteredIds.length > 0 && me._floorplan_el.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan_el.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan_el.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan_el__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',150);
				radar.radarElement.setAttributeNS(null,'height',150);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 150 150');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 75 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 75 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 75 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 75 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 75;
				arcY1 += 75;
				arcX2 += 75;
				arcY2 += 75;
				var radarPathString = 'M75,75 L' + arcX1 + ',' + arcY1 + ' A 75 75 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#734b13');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#734b13');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan_el__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 75;
				var radarYPos = activeMarker.radarYPos - 75;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan_el.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan_el__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan_el.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan_el.clientWidth;
			var mapHeight = me._floorplan_el.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan_el.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan_el__img.setAttribute('src', imageFilename);
			me._floorplan_el__img.setAttribute('loading', 'lazy');
		me._floorplan_el__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan_el.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan_el.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan_el.ggFloorplanWidth + 'px;height:' + me._floorplan_el.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan_el__img.setAttribute('style','width:' + me._floorplan_el.ggFloorplanWidth + 'px;height:' + me._floorplan_el.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan_el.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan_el.clientWidth / me._floorplan_el.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan_el.ggFloorplanHeight = me._floorplan_el.clientHeight;
				me._floorplan_el.ggFloorplanWidth = me._floorplan_el.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan_el.ggFloorplanWidth = me._floorplan_el.clientWidth;
				me._floorplan_el.ggFloorplanHeight = me._floorplan_el.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan_el.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan_el.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan_el.ggPermeableMap = true;
			} else {
				me._floorplan_el.ggPermeableMap = false;
			}
			me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
			me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
			me._floorplan_el.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan_el.ggMapNotLoaded = false;
		}
		me._floorplan_el.ggClearMap=function() {
			me._floorplan_el.ggClearMapMarkers();
			me._floorplan_el.ggMapNotLoaded = true;
		}
		me._floorplan_el.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el.ggMapId = mapId;
			if (!me._floorplan_el.ggMapNotLoaded) {
				me._floorplan_el.ggClearMap();
				me._floorplan_el.ggInitMap();
				me._floorplan_el.ggInitMapMarkers();
			}
		}
		me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan_el.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el.ggMapId);
					var xPos = (me._floorplan_el.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan_el.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan_el.ggHMarkerAnchorOffset;
					yPos -= me._floorplan_el.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan_el.style['z-index'] + 2;
				}
			}
		}
		me._floorplan_el.ggInitMapMarkers=function() {
			me._floorplan_el.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el.ggFilteredIds = [];
			if (me._floorplan_el.ggFilter != '') {
				var filter = me._floorplan_el.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el.ggFilteredIds.length > 0) ids = me._floorplan_el.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el.ggMapId);
				if (coords.length>=2) {
					me._floorplan_el.ggHMarkerAnchorOffset = 7;
					me._floorplan_el.ggVMarkerAnchorOffset = 7;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan_el.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan_el.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan_el__mapdiv.appendChild(marker);
				}
			}
			me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan_el);
		}
		me._floorplan_el.ggClearMapMarkers=function() {
			for (id in me._floorplan_el.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan_el.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan_el__mapdiv.removeChild(me._floorplan_el.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan_el.ggMarkerInstances=[];
			me._floorplan_el.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorplan_el.logicBlock_position();
		me._floorplan_el.logicBlock_size();
		me._floorplan_el.logicBlock_visible();
		me._map_node_description.logicBlock_visible();
		me.elementMouseOver['map_top']=false;
		me._map_close_btn.logicBlock_visible();
		me._map_close_btn_active.logicBlock_visible();
		me._map_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggMarkerInstances=[];
		me._floorplan_el_phone.ggLastNodeId=null;
		me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		me._floorplan_el_phone.ggFloorplanWidth=0;
		me._floorplan_el_phone.ggFloorplanHeight=0;
		me._floorplan_el_phone__mapdiv=document.createElement('div');
		me._floorplan_el_phone__mapdiv.className='ggskin ggskin_map';
		me._floorplan_el_phone.appendChild(me._floorplan_el_phone__mapdiv);
		me._floorplan_el_phone__img=document.createElement('img');
		me._floorplan_el_phone__img.className='ggskin ggskin_map';
		me._floorplan_el_phone__mapdiv.appendChild(me._floorplan_el_phone__img);
		me._floorplan_el_phone.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan_el_phone.ggRadar.update=function() {
			var radar=me._floorplan_el_phone.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan_el_phone.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el_phone.ggFilteredIds.length > 0 && me._floorplan_el_phone.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',160);
				radar.radarElement.setAttributeNS(null,'height',160);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 160 160');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 80 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 80 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 80 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 80 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 80;
				arcY1 += 80;
				arcX2 += 80;
				arcY2 += 80;
				var radarPathString = 'M80,80 L' + arcX1 + ',' + arcY1 + ' A 80 80 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#4fb5c2');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#4fb5c2');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan_el_phone__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 80;
				var radarYPos = activeMarker.radarYPos - 80;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan_el_phone.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan_el_phone.clientWidth;
			var mapHeight = me._floorplan_el_phone.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan_el_phone.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan_el_phone__img.setAttribute('src', imageFilename);
			me._floorplan_el_phone__img.setAttribute('loading', 'lazy');
		me._floorplan_el_phone__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan_el_phone.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan_el_phone.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan_el_phone__img.setAttribute('style','width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan_el_phone.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan_el_phone.clientWidth / me._floorplan_el_phone.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.clientHeight;
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.clientWidth;
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan_el_phone.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan_el_phone.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan_el_phone.ggPermeableMap = true;
			} else {
				me._floorplan_el_phone.ggPermeableMap = false;
			}
			me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
			me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
			me._floorplan_el_phone.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan_el_phone.ggMapNotLoaded = false;
		}
		me._floorplan_el_phone.ggClearMap=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			me._floorplan_el_phone.ggMapNotLoaded = true;
		}
		me._floorplan_el_phone.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el_phone.ggMapId = mapId;
			if (!me._floorplan_el_phone.ggMapNotLoaded) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap();
				me._floorplan_el_phone.ggInitMapMarkers();
			}
		}
		me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan_el_phone.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
					var xPos = (me._floorplan_el_phone.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan_el_phone.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan_el_phone.ggHMarkerAnchorOffset;
					yPos -= me._floorplan_el_phone.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 2;
				}
			}
		}
		me._floorplan_el_phone.ggInitMapMarkers=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el_phone.ggFilteredIds = [];
			if (me._floorplan_el_phone.ggFilter != '') {
				var filter = me._floorplan_el_phone.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el_phone.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el_phone.ggFilteredIds.length > 0) ids = me._floorplan_el_phone.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
				if (coords.length>=2) {
					me._floorplan_el_phone.ggHMarkerAnchorOffset = 7;
					me._floorplan_el_phone.ggVMarkerAnchorOffset = 7;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan_el_phone.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan_el_phone__mapdiv.appendChild(marker);
				}
			}
			me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan_el_phone);
		}
		me._floorplan_el_phone.ggClearMapMarkers=function() {
			for (id in me._floorplan_el_phone.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan_el_phone__mapdiv.removeChild(me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan_el_phone.ggMarkerInstances=[];
			me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorplan_el_phone.logicBlock_visible();
		el = me._map_code;
		;
		me._container_controls.logicBlock_alpha();
		me._controller.logicBlock_visible();
		me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_zoom_in_bg']=false;
		me.elementMouseOver['controller_zoom_in_icon']=false;
		me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_zoom_out_bg']=false;
		me.elementMouseOver['controller_zoom_out_icon']=false;
		me._controller_move_left_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_left_bg']=false;
		me._controller_move_left_hover_icon.logicBlock_visible();
		me._controller_move_down_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_down_bg']=false;
		me._controller_move_down_hover_icon.logicBlock_visible();
		me._controller_move_right_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_right_bg']=false;
		me._controller_move_right_hover_icon.logicBlock_visible();
		me._controller_move_up_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_up_bg']=false;
		me._controller_move_up_hover_icon.logicBlock_visible();
		me._image_1.logicBlock_alpha();
		me.elementMouseOver['image_1']=false;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._node_title.logicBlock_position();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_pl.ggInstances.length; i++) {
				me._node_cloner_pl.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._gyro_toggle.logicBlock_visible();
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
			me._hotspots_on_disabled.logicBlock_visible();
			me._hotspots_on_enabled.logicBlock_visible();
			me._hotspots_off_disabled.logicBlock_visible();
			me._hotspots_off_enabled.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_visible();
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._languages_scroller.logicBlock_visible();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._node_cloner_pl.ggUpdateConditionNodeChange();
			me._nodes_menu.logicBlock_size();
			me._nodes_menu.logicBlock_visible();
			me._node_cloner.ggUpdateConditionNodeChange();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_cloner_pl.ggUpdateConditionNodeChange();
			me._categories_menu.logicBlock_size();
			me._categories_menu.logicBlock_visible();
			me._categories_cloner.ggUpdateConditionNodeChange();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_position();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._menu_toggle_timer.logicBlock_visible();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_size();
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._project_title.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._pdf_popup.logicBlock_alpha();
			me._url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._map_toggle.logicBlock_alpha();
			me._map.logicBlock_alpha();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el.ggRadar) me._floorplan_el.ggRadar.update();
			if (me._floorplan_el.ggLastNodeId) {
				var lastActiveMarker = me._floorplan_el.ggSimpleFloorplanMarkerArray[me._floorplan_el.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan_el.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan_el.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el.ggLastNodeId = id;
			me._floorplan_el.ggRadar.update();
			me._map_node_description.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
			if (me._floorplan_el_phone.ggLastNodeId) {
				var lastActiveMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[me._floorplan_el_phone.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el_phone.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el_phone.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el_phone.ggLastNodeId = id;
			me._floorplan_el_phone.ggRadar.update();
			me._controller.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._gyro_toggle.logicBlock_visible();
			me._btn_languages.logicBlock_visible();
			me._hotspots_on_disabled.logicBlock_visible();
			me._hotspots_on_enabled.logicBlock_visible();
			me._hotspots_off_disabled.logicBlock_visible();
			me._hotspots_off_enabled.logicBlock_visible();
			me._audio_toggle.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_visible();
			me._languages_scroller.ggUpdatePosition();
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._languages_scroller.logicBlock_visible();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_scroller_pl.ggUpdatePosition();
			me._nodes_menu.logicBlock_size();
			me._nodes_menu.logicBlock_visible();
			me._nodes_scroller.ggUpdatePosition();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_scroller_pl.ggUpdatePosition();
			if (
				(
					((skin._categories_cloner_pl.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('has_categories', true);
			}
			me._categories_menu.logicBlock_size();
			me._categories_menu.logicBlock_visible();
			me._categories_scroller.ggUpdatePosition();
			if (
				(
					((skin._categories_cloner.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('has_categories', true);
			}
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_position();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_size();
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._project_title.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._pdf_popup.logicBlock_alpha();
			me._url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._map_toggle.logicBlock_visible();
			me._map_toggle.logicBlock_alpha();
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
			me._map.logicBlock_alpha();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			if (me._floorplan_el.ggVisible) {
				me._floorplan_el.ggClearMap();
				me._floorplan_el.ggInitMap(false);
				me._floorplan_el.ggInitMapMarkers(true);
			}
			me._map_node_description.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			if (me._floorplan_el_phone.ggVisible) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap(false);
				me._floorplan_el_phone.ggInitMapMarkers(true);
			}
			if (player.transitionsDisabled) {
				me._container_controls.style.transition='none';
			} else {
				me._container_controls.style.transition='all 300ms ease-out 1000ms';
			}
			me._container_controls.style.opacity='1';
			me._container_controls.style.visibility=me._container_controls.ggVisible?'inherit':'hidden';
			me._controller.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._gyro_toggle.logicBlock_visible();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_hastouch();
				}
			}
			me._controller.logicBlock_visible();
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('pos_menu_button', Number("0.00"));
			player.setVariableValue('pos_menu_button_vert', Number("0.00"));
			player.setVariableValue('num_button_rows', Number("1.00"));
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.getVariableValue('has_fullscreen') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			me._audio_toggle.style.transition='none';
			me._audio_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._audio_toggle.ggParameter.ry=0;
			me._audio_toggle.style.transform=parameterToTransform(me._audio_toggle.ggParameter);
			if (
				(
					((player.getHasSounds() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			me._hotspots_toggle.style.transition='none';
			me._hotspots_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._hotspots_toggle.ggParameter.ry=0;
			me._hotspots_toggle.style.transform=parameterToTransform(me._hotspots_toggle.ggParameter);
			player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			me._btn_languages.style.transition='none';
			me._btn_languages.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._btn_languages.ggParameter.ry=0;
			me._btn_languages.style.transform=parameterToTransform(me._btn_languages.ggParameter);
			if (
				(
					((player.getProjectTranslations().length > 1))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156"))) && 
					((player.getVariableValue('resp_phone_landscape') == false))
				)
			) {
				player.setVariableValue('pos_menu_button_vert', player.getVariableValue('pos_menu_button_vert') - Number("42.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156")))
				)
			) {
				player.setVariableValue('pos_menu_button', Number("0.00"));
			}
			me._btn_vr.style.transition='none';
			me._btn_vr.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._btn_vr.ggParameter.ry=player.getVariableValue('pos_menu_button_vert', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_vr.style.transform=parameterToTransform(me._btn_vr.ggParameter);
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156"))) && 
					((player.getVariableValue('resp_phone_landscape') == false))
				)
			) {
				player.setVariableValue('pos_menu_button_vert', player.getVariableValue('pos_menu_button_vert') - Number("42.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156")))
				)
			) {
				player.setVariableValue('pos_menu_button', Number("0.00"));
			}
			me._gyro_toggle.style.transition='none';
			me._gyro_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._gyro_toggle.ggParameter.ry=player.getVariableValue('pos_menu_button_vert', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._gyro_toggle.style.transform=parameterToTransform(me._gyro_toggle.ggParameter);
			if (
				(
					((player.getGyroAvailable() == true)) && 
					((player.getVariableValue('opt_gyro') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button_vert') < Number("0"))) && 
					((player.getVariableValue('pos_menu_button') > Number("0")))
				)
			) {
				player.setVariableValue('num_button_rows', player.getVariableValue('num_button_rows') + Number("1.00"));
			}
			if (
				(
					((player.getVariableValue('num_button_rows') > Number("1")))
				)
			) {
				me._button_container.style.transition='none';
				me._button_container.style.width = '188px';
				me._button_container.style.height = '74px';
				me._button_container.ggUpdatePosition();
				skin.updateSize(me._button_container);
			}
		});
		player.addListener('positionchanged', function(event) {
			me._floorplan_el.ggRadar.update();
			me._floorplan_el_phone.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_categories', function(event) {
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._fullscreen_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_hide_lottie_index', function(event) {
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
		});
		player.addListener('varchanged_num_button_rows', function(event) {
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._nodes_menu.logicBlock_size();
			me._categories_menu.logicBlock_size();
		});
		player.addListener('varchanged_open_image_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_open_image_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_info_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_open_info_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_file_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_open_video_file_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_url_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_open_video_url_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_vimeo_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_open_video_vimeo_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_youtube_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_open_video_youtube_hotspots();
				}
			}
		});
		player.addListener('varchanged_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_opt_desc_in_maps', function(event) {
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._map_node_description.logicBlock_visible();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._fullscreen_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._gyro_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._map_toggle.logicBlock_alpha();
			me._map_phone.logicBlock_alpha();
			me._controller.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone_landscape', function(event) {
			me._menu.logicBlock_size();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
			me._menu_toggle.logicBlock_position();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._map_toggle.logicBlock_alpha();
			me._map.logicBlock_alpha();
			me._floorplan_el.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			me._hotspots_on_disabled.logicBlock_visible();
			me._hotspots_on_enabled.logicBlock_visible();
			me._hotspots_off_disabled.logicBlock_visible();
			me._hotspots_off_enabled.logicBlock_visible();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages_scroller.logicBlock_visible();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
			me._menu_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._map_toggle.logicBlock_alpha();
			me._map.logicBlock_alpha();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu', function(event) {
			me._menu.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_position();
			me._node_title.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_nodes', function(event) {
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._pdf_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._project_title.logicBlock_visible();
			me._project_title.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_popup') == false))
				)
			) {
					me._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._url_popup_iframe.ggUpdateText();
				me._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('viewerinit', function(event) {
			me._languages_cloner.ggUpdate();
			me._node_cloner_pl.ggUpdate();
			me._node_cloner.ggUpdate();
			me._categories_cloner_pl.ggUpdate();
			me._categories_cloner.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._btn_vr.logicBlock_visible();
		});
	};
	function SkinCloner_categories_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_container=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_container;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="category_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_thumbnail=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_thumbnail;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._category_thumbnail.onclick=function (e) {
			if (me._category_thumbnail.isDragging()) return;
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			skin._node_cloner_pl.ggText=me.ggTag;
			if (skin._node_cloner_pl.ggText=='') {
				skin._node_cloner_pl.ggUpdate([]);
			} else {
				skin._node_cloner_pl.ggUpdate(skin._node_cloner_pl.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('vis_nodes', true);
			skin._close_to_menu_anim.style.transition='none';
			skin._close_to_menu_anim.style.visibility='hidden';
			skin._close_to_menu_anim.ggVisible=false;
			skin._close_to_back_anim.style.transition='none';
			skin._close_to_back_anim.style.visibility=(Number(skin._close_to_back_anim.style.opacity)>0||!skin._close_to_back_anim.style.opacity)?'inherit':'hidden';
			skin._close_to_back_anim.ggVisible=true;
			skin._close_to_back_anim.ggLottie.loop = 0;
			skin._close_to_back_anim.ggLottie.play();
			skin._back_to_close_anim.ggLottie.goToAndStop(skin._back_to_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("3.00"));
			skin._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			skin._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._category_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._category_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_title.ggUpdatePosition=function (useTransition) {
		}
		me._category_thumbnail.appendChild(me._category_title);
		me._category_container.appendChild(me._category_thumbnail);
		me.__div.appendChild(me._category_container);
	};
	function SkinCloner_categories_cloner_pl_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_container0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_container0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="category_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_container0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_thumbnail0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_thumbnail0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_thumbnail0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_thumbnail0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._category_thumbnail0.onclick=function (e) {
			if (me._category_thumbnail0.isDragging()) return;
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			skin._node_cloner_pl.ggText=me.ggTag;
			if (skin._node_cloner_pl.ggText=='') {
				skin._node_cloner_pl.ggUpdate([]);
			} else {
				skin._node_cloner_pl.ggUpdate(skin._node_cloner_pl.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('vis_nodes', true);
			skin._close_to_menu_anim.style.transition='none';
			skin._close_to_menu_anim.style.visibility='hidden';
			skin._close_to_menu_anim.ggVisible=false;
			skin._close_to_back_anim.style.transition='none';
			skin._close_to_back_anim.style.visibility=(Number(skin._close_to_back_anim.style.opacity)>0||!skin._close_to_back_anim.style.opacity)?'inherit':'hidden';
			skin._close_to_back_anim.ggVisible=true;
			skin._close_to_back_anim.ggLottie.loop = 0;
			skin._close_to_back_anim.ggLottie.play();
			skin._back_to_close_anim.ggLottie.goToAndStop(skin._back_to_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("3.00"));
			skin._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			skin._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._category_thumbnail0.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._category_title0.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title0.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_title0.ggUpdatePosition=function (useTransition) {
		}
		me._category_thumbnail0.appendChild(me._category_title0);
		me._category_container0.appendChild(me._category_thumbnail0);
		me.__div.appendChild(me._category_container0);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_container=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_container;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_thumbnail=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumbnail;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail.onclick=function (e) {
			if (me._node_thumbnail.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._back_to_close_anim.style.transition='none';
				skin._back_to_close_anim.style.visibility='hidden';
				skin._back_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._close_to_menu_anim.style.transition='none';
				skin._close_to_menu_anim.style.visibility=(Number(skin._close_to_menu_anim.style.opacity)>0||!skin._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				skin._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._close_to_menu_anim.onclick.call(skin._close_to_menu_anim);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_nodes', false);
			}
		}
		me._node_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_cloner_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_cloner_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_cloner_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_cloner_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_cloner_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_cloner_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_cloner_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_cloner_title.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_cloner_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_cloner_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_cloner_title.style.transition='color 0s';
				if (me._node_cloner_title.ggCurrentLogicStateTextColor == 0) {
					me._node_cloner_title.style.color="rgba(223,224,54,1)";
				}
				else {
					me._node_cloner_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._node_cloner_title.logicBlock_textcolor();
		me._node_cloner_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail.appendChild(me._node_cloner_title);
		me._node_container.appendChild(me._node_thumbnail);
		me.__div.appendChild(me._node_container);
		me._node_cloner_title.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._node_cloner_title.logicBlock_textcolor();
			};
	};
	function SkinCloner_node_cloner_pl_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_container0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_container0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_container0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_thumbnail0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumbnail0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumbnail0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumbnail0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail0.onclick=function (e) {
			if (me._node_thumbnail0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._back_to_close_anim.style.transition='none';
				skin._back_to_close_anim.style.visibility='hidden';
				skin._back_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._close_to_menu_anim.style.transition='none';
				skin._close_to_menu_anim.style.visibility=(Number(skin._close_to_menu_anim.style.opacity)>0||!skin._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				skin._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._close_to_menu_anim.onclick.call(skin._close_to_menu_anim);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_nodes', false);
			}
		}
		me._node_thumbnail0.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_cloner_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_cloner_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_cloner_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_cloner_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_cloner_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_cloner_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._node_cloner_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_title0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_cloner_title0.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_cloner_title0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_cloner_title0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_cloner_title0.style.transition='color 0s';
				if (me._node_cloner_title0.ggCurrentLogicStateTextColor == 0) {
					me._node_cloner_title0.style.color="rgba(223,224,54,1)";
				}
				else {
					me._node_cloner_title0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._node_cloner_title0.logicBlock_textcolor();
		me._node_cloner_title0.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail0.appendChild(me._node_cloner_title0);
		me._node_container0.appendChild(me._node_thumbnail0);
		me.__div.appendChild(me._node_container0);
		me._node_cloner_title0.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._node_cloner_title0.logicBlock_textcolor();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(223,224,54,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.logicBlock_textcolor();
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me._language_title.logicBlock_textcolor();
		me.elementMouseOver['language_title']=false;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 500px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3'+
			'JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -400px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3'+
			'JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcgICBjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -400px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3'+
			'JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -400px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + player.getCurrentNode() + "_" + me.hotspot.id + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style.transition='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.logicBlock_visible();
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me.__3d_code=document.createElement('div');
		el.ggId="_3d_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3d_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3d_code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__3d_code);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._hs_visited.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		el = me.__3d_code;
		javascript:"";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin.style.transition='transform 200ms ease 0ms';
				if (me._map_pin.ggCurrentLogicStateScaling == 0) {
					me._map_pin.ggParameter.sx = 1.3;
					me._map_pin.ggParameter.sy = 1.3;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
				else {
					me._map_pin.ggParameter.sx = 1;
					me._map_pin.ggParameter.sy = 1;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
			}
		}
		me._map_pin.logicBlock_scaling();
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
		}
		me._map_pin.onmouseenter=function (e) {
				skin._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_title.ggUpdateText();
			skin._map_node_title.ggTextDiv.scrollTop = 0;
				skin._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_description.ggUpdateText();
			skin._map_node_description.ggTextDiv.scrollTop = 0;
			me.elementMouseOver['map_pin']=true;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.onmouseleave=function (e) {
			skin._reset_info.onclick.call(skin._reset_info);
			me.elementMouseOver['map_pin']=false;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_icon=document.createElement('div');
		els=me._map_pin_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1hcC1waW4iIHN0cm9rZS13aWR0aD0iMSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjMyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB3aWR0aD0iMzIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNMjEgMTBjMCA3LTkgMTMtOSAxM3MtOS02LTktMTNhOSA5IDAgMCAxIDE4IDB6Ii8+CiA8Y2lyY2xlIHI9IjMiIGN4PSIxMiIgY3k9IjEwIi8+Cjwvc3ZnPgo=';
		me._map_pin_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon.style.transition='';
				if (me._map_pin_icon.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon.style.visibility="hidden";
					me._map_pin_icon.ggVisible=false;
				}
				else {
					me._map_pin_icon.style.visibility=(Number(me._map_pin_icon.style.opacity)>0||!me._map_pin_icon.style.opacity)?'inherit':'hidden';
					me._map_pin_icon.ggVisible=true;
				}
			}
		}
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon);
		el=me._map_pin_icon_active=document.createElement('div');
		els=me._map_pin_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjgsMTMuM2MwLDkuMy0xMiwxNy4zLTEyLDE3LjNzLTEyLTgtMTItMTcuM2MwLTYuNiw1LjQtMTIsMTItMTJTMjgsNi43LDI4LDEzLjN6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIHI9IjQiIGN4PSIxNiIgY3k9IjEzLjMiLz4KPC9zdmc+Cg==';
		me._map_pin_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon_active.style.transition='';
				if (me._map_pin_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon_active.style.visibility=(Number(me._map_pin_icon_active.style.opacity)>0||!me._map_pin_icon_active.style.opacity)?'inherit':'hidden';
					me._map_pin_icon_active.ggVisible=true;
				}
				else {
					me._map_pin_icon_active.style.visibility="hidden";
					me._map_pin_icon_active.ggVisible=false;
				}
			}
		}
		me._map_pin_icon_active.logicBlock_visible();
		me._map_pin_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon_active);
		me._map_pin.logicBlock_scaling();
		me.elementMouseOver['map_pin']=false;
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon_active.logicBlock_visible();
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_url.style.opacity == 0.0) { me._ht_url.style.visibility="hidden"; } }, 505);
					me._ht_url.style.opacity=0;
				}
				else {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
			}
		}
		me._ht_url.logicBlock_alpha();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_title.ggUpdateText();
				skin._url_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_iframe.ggUpdateText();
				skin._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_tooltip=document.createElement('div');
		els=me._ht_url_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_url_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_url_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_url_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_url_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_url_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_url_tooltip.logicBlock_position();
		me._ht_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_tooltip.style.visibility=me._ht_url_tooltip.ggVisible?'inherit':'hidden';
					me._ht_url_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url_tooltip.style.opacity == 0.0) { me._ht_url_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_url_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_tooltip);
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMS45OSwyQzYuNDcsMiwyLDYuNDgsMiwxMnM0LjQ3LDEwLDkuOTksMTBDMTcuNTIsMjIsMjIsMTcuNTIsMjIsMTJTMTcuNTIsMiwxMS45OSwyeiBNMTguOTIsOGgtMi45NSBjLTAuMzItMS4yNS0wLj'+
			'c4LTIuNDUtMS4zOC0zLjU2QzE2LjQzLDUuMDcsMTcuOTYsNi4zNSwxOC45Miw4eiBNMTIsNC4wNGMwLjgzLDEuMiwxLjQ4LDIuNTMsMS45MSwzLjk2aC0zLjgyIEMxMC41Miw2LjU3LDExLjE3LDUuMjQsMTIsNC4wNHogTTQuMjYsMTRDNC4xLDEzLjM2LDQsMTIuNjksNCwxMnMwLjEtMS4zNiwwLjI2LTJoMy4zOGMtMC4wOCwwLjY2LTAuMTQsMS4zMi0wLjE0LDIgczAuMDYsMS4zNCwwLjE0LDJINC4yNnogTTUuMDgsMTZoMi45NWMwLjMyLDEuMjUsMC43OCwyLjQ1LDEuMzgsMy41NkM3LjU3LDE4LjkzLDYuMDQsMTcuNjYsNS4wOCwxNnogTTguMDMsOEg1LjA4IGMwLjk2LTEuNjYsMi40OS0yLjkz'+
			'LDQuMzMtMy41NkM4LjgxLDUuNTUsOC4zNSw2Ljc1LDguMDMsOHogTTEyLDE5Ljk2Yy0wLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODIgQzEzLjQ4LDE3LjQzLDEyLjgzLDE4Ljc2LDEyLDE5Ljk2eiBNMTQuMzQsMTRIOS42NmMtMC4wOS0wLjY2LTAuMTYtMS4zMi0wLjE2LTJzMC4wNy0xLjM1LDAuMTYtMmg0LjY4YzAuMDksMC42NSwwLjE2LDEuMzIsMC4xNiwyIFMxNC40MywxMy4zNCwxNC4zNCwxNHogTTE0LjU5LDE5LjU2YzAuNi0xLjExLDEuMDYtMi4zMSwxLjM4LTMuNTZoMi45NUMxNy45NiwxNy42NSwxNi40MywxOC45MywxNC41OSwxOS41NnogTTE2LjM2LDE0IGMwLjA4LTAuNj'+
			'YsMC4xNC0xLjMyLDAuMTQtMnMtMC4wNi0xLjM0LTAuMTQtMmgzLjM4QzE5LjksMTAuNjQsMjAsMTEuMzEsMjAsMTJzLTAuMSwxLjM2LTAuMjYsMkgxNi4zNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_icon.style.transition='';
				if (me._ht_url_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_url_icon.style.visibility="hidden";
					me._ht_url_icon.ggVisible=false;
				}
				else {
					me._ht_url_icon.style.visibility=(Number(me._ht_url_icon.style.opacity)>0||!me._ht_url_icon.style.opacity)?'inherit':'hidden';
					me._ht_url_icon.ggVisible=true;
				}
			}
		}
		me._ht_url_icon.logicBlock_visible();
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_icon);
		el=me._ht_url_icon_active=document.createElement('div');
		els=me._ht_url_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMS45OSwyQzYuNDcsMiwyLDYuNDgsMiwxMnM0LjQ3LDEwLDkuOTksMTBDMTcuNTIsMjIsMjIsMTcuNTIsMjIsMTJTMTcuNTIsMiwxMS45OSwyeiBNMTguOTIsOGgtMi45NSBjLTAuMzItMS4yNS0wLj'+
			'c4LTIuNDUtMS4zOC0zLjU2QzE2LjQzLDUuMDcsMTcuOTYsNi4zNSwxOC45Miw4eiBNMTIsNC4wNGMwLjgzLDEuMiwxLjQ4LDIuNTMsMS45MSwzLjk2aC0zLjgyIEMxMC41Miw2LjU3LDExLjE3LDUuMjQsMTIsNC4wNHogTTQuMjYsMTRDNC4xLDEzLjM2LDQsMTIuNjksNCwxMnMwLjEtMS4zNiwwLjI2LTJoMy4zOGMtMC4wOCwwLjY2LTAuMTQsMS4zMi0wLjE0LDIgczAuMDYsMS4zNCwwLjE0LDJINC4yNnogTTUuMDgsMTZoMi45NWMwLjMyLDEuMjUsMC43OCwyLjQ1LDEuMzgsMy41NkM3LjU3LDE4LjkzLDYuMDQsMTcuNjYsNS4wOCwxNnogTTguMDMsOEg1LjA4IGMwLjk2LTEuNjYsMi40OS0yLjkz'+
			'LDQuMzMtMy41NkM4LjgxLDUuNTUsOC4zNSw2Ljc1LDguMDMsOHogTTEyLDE5Ljk2Yy0wLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODIgQzEzLjQ4LDE3LjQzLDEyLjgzLDE4Ljc2LDEyLDE5Ljk2eiBNMTQuMzQsMTRIOS42NmMtMC4wOS0wLjY2LTAuMTYtMS4zMi0wLjE2LTJzMC4wNy0xLjM1LDAuMTYtMmg0LjY4YzAuMDksMC42NSwwLjE2LDEuMzIsMC4xNiwyIFMxNC40MywxMy4zNCwxNC4zNCwxNHogTTE0LjU5LDE5LjU2YzAuNi0xLjExLDEuMDYtMi4zMSwxLjM4LTMuNTZoMi45NUMxNy45NiwxNy42NSwxNi40MywxOC45MywxNC41OSwxOS41NnogTTE2LjM2LDE0IGMwLjA4LTAuNj'+
			'YsMC4xNC0xLjMyLDAuMTQtMnMtMC4wNi0xLjM0LTAuMTQtMmgzLjM4QzE5LjksMTAuNjQsMjAsMTEuMzEsMjAsMTJzLTAuMSwxLjM2LTAuMjYsMkgxNi4zNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_icon_active.style.transition='';
				if (me._ht_url_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_url_icon_active.style.visibility=(Number(me._ht_url_icon_active.style.opacity)>0||!me._ht_url_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_url_icon_active.ggVisible=true;
				}
				else {
					me._ht_url_icon_active.style.visibility="hidden";
					me._ht_url_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_url_icon_active.logicBlock_visible();
		me._ht_url_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_icon_active);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.logicBlock_visible();
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_tooltip.logicBlock_position();
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_icon.logicBlock_visible();
		me._ht_url_icon_active.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_position();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_url_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style.transition='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image.style.opacity == 0.0) { me._ht_image.style.visibility="hidden"; } }, 505);
					me._ht_image.style.opacity=0;
				}
				else {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
			}
		}
		me._ht_image.logicBlock_alpha();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup=document.createElement('div');
		el.ggId="ht_image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_image_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateSize == 0) {
					me._ht_image_popup.style.width='600px';
					me._ht_image_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
				else {
					me._ht_image_popup.style.width='60px';
					me._ht_image_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
			}
		}
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup.style.visibility=me._ht_image_popup.ggVisible?'inherit':'hidden';
					me._ht_image_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup.style.opacity == 0.0) { me._ht_image_popup.style.visibility="hidden"; } }, 405);
					me._ht_image_popup.style.opacity=0;
				}
			}
		}
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup_title=document.createElement('div');
		els=me._ht_image_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_image_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_title);
		el=me._ht_image_popup_img=document.createElement('div');
		els=me._ht_image_popup_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_popup_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_popup_img.ggSubElement.setAttribute('alt', player._(me._ht_image_popup_img.ggAltText));
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._ht_image_popup_img.ggText_untranslated = img;
			me._ht_image_popup_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_popup_img.ggSubElement.style.width = '0px';
			me._ht_image_popup_img.ggSubElement.style.height = '0px';
			me._ht_image_popup_img.ggSubElement.src='';
			me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_popup_img.ggText != player._(me._ht_image_popup_img.ggText_untranslated)) {
				me._ht_image_popup_img.ggText = player._(me._ht_image_popup_img.ggText_untranslated);
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		player.addListener('changenode', function() {
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._ht_image_popup_img.ggText != ""+player.getBasePath()+""+player._(me.hotspot.url)+"") {
				me._ht_image_popup_img.ggText=""+player.getBasePath()+""+player._(me.hotspot.url)+"";
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_popup_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_popup_img.clientWidth;
			var parentHeight = me._ht_image_popup_img.clientHeight;
			var img = me._ht_image_popup_img__img;
			var aspectRatioDiv = me._ht_image_popup_img.clientWidth / me._ht_image_popup_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._ht_image_popup_img.ggScrollbars || currentWidth < me._ht_image_popup_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_popup_img.scrollLeft=currentWidth / 2 - me._ht_image_popup_img.clientWidth / 2;
			}
			if (!me._ht_image_popup_img.ggScrollbars || currentHeight < me._ht_image_popup_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_popup_img.scrollTop=currentHeight / 2 - me._ht_image_popup_img.clientHeight / 2;
			}
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_img);
		me._ht_image.appendChild(me._ht_image_popup);
		el=me._ht_image_tooltip=document.createElement('div');
		els=me._ht_image_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_image_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_image_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_image_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_image_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_image_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_image_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_image_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_image_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_image_tooltip.logicBlock_position();
		me._ht_image_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_image_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_tooltip.style.visibility=me._ht_image_tooltip.ggVisible?'inherit':'hidden';
					me._ht_image_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_tooltip.style.opacity == 0.0) { me._ht_image_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_image_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_tooltip);
		el=me._ht_image_popup_close=document.createElement('div');
		els=me._ht_image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTguMyA1LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2MtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy'+
			'4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6Ii8+Cjwvc3ZnPgo=';
		me._ht_image_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._ht_image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup_close.style.visibility=me._ht_image_popup_close.ggVisible?'inherit':'hidden';
					me._ht_image_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup_close.style.opacity == 0.0) { me._ht_image_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_image_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_image_popup_close.logicBlock_alpha();
		me._ht_image_popup_close.onclick=function (e) {
			player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_image_popup_img.style.transition='none';
			} else {
				me._ht_image_popup_img.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_img.style.opacity='0';
			me._ht_image_popup_img.style.visibility='hidden';
			me._ht_image_popup_img.ggSubElement.src='';
			if (player.transitionsDisabled) {
				me._ht_image_popup_title.style.transition='none';
			} else {
				me._ht_image_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_title.style.opacity='0';
			me._ht_image_popup_title.style.visibility='hidden';
			me._ht_image.style.zIndex='-1';
		}
		me._ht_image_popup_close.onmouseenter=function (e) {
			me._ht_image_popup_close__img.style.visibility='hidden';
			me._ht_image_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_popup_close']=true;
		}
		me._ht_image_popup_close.onmouseleave=function (e) {
			me._ht_image_popup_close__img.style.visibility='inherit';
			me._ht_image_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_popup_close']=false;
		}
		me._ht_image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_popup_close);
		el=me._ht_image_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_image_icon_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image_icon_container.style.opacity == 0.0) { me._ht_image_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_image_icon_container.style.opacity=0;
				}
				else {
					me._ht_image_icon_container.style.visibility=me._ht_image_icon_container.ggVisible?'inherit':'hidden';
					me._ht_image_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_image_icon_container.logicBlock_alpha();
		me._ht_image_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_img.style.transition='none';
				} else {
					me._ht_image_popup_img.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_img.style.opacity='1';
				me._ht_image_popup_img.style.visibility=me._ht_image_popup_img.ggVisible?'inherit':'hidden';
				me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_title.style.transition='none';
				} else {
					me._ht_image_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_title.style.opacity='1';
				me._ht_image_popup_title.style.visibility=me._ht_image_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
		}
		me._ht_image_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_image_icon_container']=true;
			me._ht_image_icon.logicBlock_visible();
			me._ht_image_icon_active.logicBlock_visible();
		}
		me._ht_image_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_image_icon_container']=false;
			me._ht_image_icon.logicBlock_visible();
			me._ht_image_icon_active.logicBlock_visible();
		}
		me._ht_image_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_icon_container.appendChild(me._ht_image_bg);
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPGNpcmNsZSByPSIzIiBjeD0iMTIiIGN5PSIxMiIvPgogPHBhdGggZD0iTTIwIDRoLTMuMTdsLTEuMjQtMS4zNWMtLjM3LS40MS0uOTEtLjY1LTEuNDctLjY1SDkuODhjLS41NiAwLTEuMS4yNC0xLjQ4LjY1TDcuMTcgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi'+
			'0yVjZjMC0xLjEtLjktMi0yLTJ6bS04IDEzYy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXoiLz4KPC9zdmc+Cg==';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_icon.style.transition='';
				if (me._ht_image_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_image_icon.style.visibility="hidden";
					me._ht_image_icon.ggVisible=false;
				}
				else {
					me._ht_image_icon.style.visibility=(Number(me._ht_image_icon.style.opacity)>0||!me._ht_image_icon.style.opacity)?'inherit':'hidden';
					me._ht_image_icon.ggVisible=true;
				}
			}
		}
		me._ht_image_icon.logicBlock_visible();
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_icon_container.appendChild(me._ht_image_icon);
		el=me._ht_image_icon_active=document.createElement('div');
		els=me._ht_image_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8Y2lyY2xlIHI9IjMiIGN4PSIxMiIgY3k9IjEyIi8+CiA8cGF0aCBkPSJNMjAgNGgtMy4xN2wtMS4yNC0xLjM1Yy0uMzctLjQxLS45MS0uNjUtMS40Ny0uNjVIOS44OGMtLjU2IDAtMS4xLjI0LTEuNDguNjVMNy4xNyA0SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMn'+
			'ptLTggMTNjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1eiIvPgo8L3N2Zz4K';
		me._ht_image_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_icon_active.style.transition='';
				if (me._ht_image_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_image_icon_active.style.visibility=(Number(me._ht_image_icon_active.style.opacity)>0||!me._ht_image_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_image_icon_active.ggVisible=true;
				}
				else {
					me._ht_image_icon_active.style.visibility="hidden";
					me._ht_image_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_image_icon_active.logicBlock_visible();
		me._ht_image_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_icon_container.appendChild(me._ht_image_icon_active);
		me._ht_image.appendChild(me._ht_image_icon_container);
		me._ht_image.logicBlock_visible();
		me._ht_image.logicBlock_alpha();
		me.elementMouseOver['ht_image']=false;
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_tooltip.logicBlock_position();
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_image_popup_close']=false;
		me._ht_image_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_image_icon_container']=false;
		me._ht_image_icon.logicBlock_visible();
		me._ht_image_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
				player.setVariableValue('open_image_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_position();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_image_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_image_hotspots=function() {
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info.style.transition='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info.style.opacity == 0.0) { me._ht_info.style.visibility="hidden"; } }, 505);
					me._ht_info.style.opacity=0;
				}
				else {
					me._ht_info.style.visibility=me._ht_info.ggVisible?'inherit':'hidden';
					me._ht_info.style.opacity=1;
				}
			}
		}
		me._ht_info.logicBlock_alpha();
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._ht_info_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._ht_info_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup=document.createElement('div');
		el.ggId="ht_info_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_info_popup.ggCurrentLogicStateSize == 0) {
					me._ht_info_popup.style.width='600px';
					me._ht_info_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_info_popup);}, 550);
				}
				else {
					me._ht_info_popup.style.width='60px';
					me._ht_info_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_info_popup);}, 550);
				}
			}
		}
		me._ht_info_popup.logicBlock_size();
		me._ht_info_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_info_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_popup.style.visibility=me._ht_info_popup.ggVisible?'inherit':'hidden';
					me._ht_info_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_popup.style.opacity == 0.0) { me._ht_info_popup.style.visibility="hidden"; } }, 405);
					me._ht_info_popup.style.opacity=0;
				}
			}
		}
		me._ht_info_popup.logicBlock_alpha();
		me._ht_info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup_text=document.createElement('div');
		el.ggId="ht_info_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 50px);';
		hs+='left : 75px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup_text_body=document.createElement('div');
		els=me._ht_info_popup_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_popup_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height: 1.4';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ht_info_popup_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_popup_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_popup_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_popup_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup_text.appendChild(me._ht_info_popup_text_body);
		el=me._ht_info_popup_text_headline=document.createElement('div');
		els=me._ht_info_popup_text_headline__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_popup_text_headline";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_info_popup_text_headline.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_popup_text_headline.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_popup_text_headline.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_popup_text_headline.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text_headline.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup_text.appendChild(me._ht_info_popup_text_headline);
		me._ht_info_popup.appendChild(me._ht_info_popup_text);
		me._ht_info.appendChild(me._ht_info_popup);
		el=me._ht_info_tooltip=document.createElement('div');
		els=me._ht_info_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_info_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_info_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_info_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_info_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_info_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_info_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_info_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_info_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_info_tooltip.logicBlock_position();
		me._ht_info_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_info_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_tooltip.style.visibility=me._ht_info_tooltip.ggVisible?'inherit':'hidden';
					me._ht_info_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_tooltip.style.opacity == 0.0) { me._ht_info_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_info_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_info_tooltip.logicBlock_alpha();
		me._ht_info_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_tooltip);
		el=me._ht_info_popup_close=document.createElement('div');
		els=me._ht_info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTguMyA1LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2MtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy'+
			'4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6Ii8+Cjwvc3ZnPgo=';
		me._ht_info_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._ht_info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_popup_close.style.visibility=me._ht_info_popup_close.ggVisible?'inherit':'hidden';
					me._ht_info_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_popup_close.style.opacity == 0.0) { me._ht_info_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_info_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_info_popup_close.logicBlock_alpha();
		me._ht_info_popup_close.onclick=function (e) {
			player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_info_popup_text.style.transition='none';
			} else {
				me._ht_info_popup_text.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_info_popup_text.style.opacity='0';
			me._ht_info_popup_text.style.visibility='hidden';
			me._ht_info.style.zIndex='-1';
		}
		me._ht_info_popup_close.onmouseenter=function (e) {
			me._ht_info_popup_close__img.style.visibility='hidden';
			me._ht_info_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_popup_close']=true;
		}
		me._ht_info_popup_close.onmouseleave=function (e) {
			me._ht_info_popup_close__img.style.visibility='inherit';
			me._ht_info_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_popup_close']=false;
		}
		me._ht_info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_popup_close);
		el=me._ht_info_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_info_icon_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info_icon_container.style.opacity == 0.0) { me._ht_info_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_info_icon_container.style.opacity=0;
				}
				else {
					me._ht_info_icon_container.style.visibility=me._ht_info_icon_container.ggVisible?'inherit':'hidden';
					me._ht_info_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_info_icon_container.logicBlock_alpha();
		me._ht_info_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_info_popup_text.style.transition='none';
				} else {
					me._ht_info_popup_text.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_info_popup_text.style.opacity='1';
				me._ht_info_popup_text.style.visibility=me._ht_info_popup_text.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
		}
		me._ht_info_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_icon_container']=true;
			me._ht_info_icon.logicBlock_visible();
			me._ht_info_icon_active.logicBlock_visible();
		}
		me._ht_info_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_icon_container']=false;
			me._ht_info_icon.logicBlock_visible();
			me._ht_info_icon_active.logicBlock_visible();
		}
		me._ht_info_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_icon_container.appendChild(me._ht_info_bg);
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMiwyQzYuNDgsMiwyLDYuNDgsMiwxMnM0LjQ4LDEwLDEwLDEwczEwLTQuNDgsMTAtMTBTMTcuNTIsMiwxMiwyeiBNMTIsMTdjLTAuNTUsMC0xLTAuNDUtMS0xdi00YzAtMC41NSwwLjQ1LTEsMS0xIH'+
			'MxLDAuNDUsMSwxdjRDMTMsMTYuNTUsMTIuNTUsMTcsMTIsMTd6IE0xMiw5TDEyLDljLTAuNTUsMC0xLTAuNDUtMS0xdjBjMC0wLjU1LDAuNDUtMSwxLTFoMGMwLjU1LDAsMSwwLjQ1LDEsMXYwIEMxMyw4LjU1LDEyLjU1LDksMTIsOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_icon.style.transition='';
				if (me._ht_info_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_info_icon.style.visibility="hidden";
					me._ht_info_icon.ggVisible=false;
				}
				else {
					me._ht_info_icon.style.visibility=(Number(me._ht_info_icon.style.opacity)>0||!me._ht_info_icon.style.opacity)?'inherit':'hidden';
					me._ht_info_icon.ggVisible=true;
				}
			}
		}
		me._ht_info_icon.logicBlock_visible();
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_icon_container.appendChild(me._ht_info_icon);
		el=me._ht_info_icon_active=document.createElement('div');
		els=me._ht_info_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMiwxN2MtMC41NSwwLTEtMC40NS0xLTF2LTRjMC0wLjU1LDAuNDUtMSwxLTEgczEsMC40NSwxLDF2NEMxMywxNi'+
			'41NSwxMi41NSwxNywxMiwxN3ogTTEyLDlMMTIsOWMtMC41NSwwLTEtMC40NS0xLTF2MGMwLTAuNTUsMC40NS0xLDEtMWgwYzAuNTUsMCwxLDAuNDUsMSwxdjAgQzEzLDguNTUsMTIuNTUsOSwxMiw5eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_icon_active.style.transition='';
				if (me._ht_info_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_info_icon_active.style.visibility=(Number(me._ht_info_icon_active.style.opacity)>0||!me._ht_info_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_info_icon_active.ggVisible=true;
				}
				else {
					me._ht_info_icon_active.style.visibility="hidden";
					me._ht_info_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_info_icon_active.logicBlock_visible();
		me._ht_info_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_icon_container.appendChild(me._ht_info_icon_active);
		me._ht_info.appendChild(me._ht_info_icon_container);
		me._ht_info.logicBlock_visible();
		me._ht_info.logicBlock_alpha();
		me.elementMouseOver['ht_info']=false;
		me._ht_info_popup.logicBlock_size();
		me._ht_info_popup.logicBlock_alpha();
		me._ht_info_tooltip.logicBlock_position();
		me._ht_info_tooltip.logicBlock_alpha();
		me._ht_info_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_info_popup_close']=false;
		me._ht_info_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_info_icon_container']=false;
		me._ht_info_icon.logicBlock_visible();
		me._ht_info_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
				player.setVariableValue('open_info_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_position();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_info_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_info_hotspots=function() {
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_info.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='opacity 500ms ease 0ms';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf.style.transition='opacity 500ms ease 0ms';
				if (me._ht_pdf.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_pdf.style.opacity == 0.0) { me._ht_pdf.style.visibility="hidden"; } }, 505);
					me._ht_pdf.style.opacity=0;
				}
				else {
					me._ht_pdf.style.visibility=me._ht_pdf.ggVisible?'inherit':'hidden';
					me._ht_pdf.style.opacity=1;
				}
			}
		}
		me._ht_pdf.logicBlock_alpha();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._pdf_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._pdf_popup_title.ggUpdateText();
				skin._pdf_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._pdf_popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_37 = setInterval(() => {
					if (skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_37);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_38 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_38);
					}
				}, 50);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._ht_pdf_tooltip.logicBlock_alpha();
			me._ht_pdf_icon.logicBlock_visible();
			me._ht_pdf_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pdf']=false;
			me._ht_pdf_tooltip.logicBlock_alpha();
			me._ht_pdf_icon.logicBlock_visible();
			me._ht_pdf_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_tooltip=document.createElement('div');
		els=me._ht_pdf_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_pdf_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_pdf_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_pdf_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_pdf_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_pdf_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_pdf_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_pdf_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_pdf_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_pdf_tooltip.logicBlock_position();
		me._ht_pdf_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_pdf_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_tooltip.style.visibility=me._ht_pdf_tooltip.ggVisible?'inherit':'hidden';
					me._ht_pdf_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_pdf_tooltip.style.opacity == 0.0) { me._ht_pdf_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_pdf_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_pdf_tooltip.logicBlock_alpha();
		me._ht_pdf_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_tooltip);
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTIwIDJIOGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tOC41IDcuNWMwIC44My0uNjcgMS41LTEuNSAxLjVIOXYxLjI1YzAgLjQxLS4zNC43NS0uNzUuNzVzLS43NS0uMzQtLjc1LS43NVY4YzAtLjU1LjQ1LTEgMS'+
			'0xSDEwYy44MyAwIDEuNS42NyAxLjUgMS41djF6bTUgMmMwIC44My0uNjcgMS41LTEuNSAxLjVoLTJjLS4yOCAwLS41LS4yMi0uNS0uNXYtNWMwLS4yOC4yMi0uNS41LS41aDJjLjgzIDAgMS41LjY3IDEuNSAxLjV2M3ptNC0zLjc1YzAgLjQxLS4zNC43NS0uNzUuNzVIMTl2MWguNzVjLjQxIDAgLjc1LjM0Ljc1Ljc1cy0uMzQuNzUtLjc1Ljc1SDE5djEuMjVjMCAuNDEtLjM0Ljc1LS43NS43NXMtLjc1LS4zNC0uNzUtLjc1VjhjMC0uNTUuNDUtMSAxLTFoMS4yNWMuNDEgMCAuNzUuMzQuNzUuNzV6TTkgOS41aDF2LTFIOXYxek0zIDZjLS41NSAwLTEgLjQ1LTEgMXYxM2MwIDEuMS45IDIgMiAyaDEz'+
			'Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xSDVjLS41NSAwLTEtLjQ1LTEtMVY3YzAtLjU1LS40NS0xLTEtMXptMTEgNS41aDF2LTNoLTF2M3oiLz4KPC9zdmc+Cg==';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_icon.style.transition='';
				if (me._ht_pdf_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_icon.style.visibility="hidden";
					me._ht_pdf_icon.ggVisible=false;
				}
				else {
					me._ht_pdf_icon.style.visibility=(Number(me._ht_pdf_icon.style.opacity)>0||!me._ht_pdf_icon.style.opacity)?'inherit':'hidden';
					me._ht_pdf_icon.ggVisible=true;
				}
			}
		}
		me._ht_pdf_icon.logicBlock_visible();
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_icon);
		el=me._ht_pdf_icon_active=document.createElement('div');
		els=me._ht_pdf_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMjAgMkg4Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS04LjUgNy41YzAgLjgzLS42NyAxLjUtMS41IDEuNUg5djEuMjVjMCAuNDEtLjM0Ljc1LS43NS43NXMtLjc1LS4zNC0uNzUtLjc1VjhjMC0uNTUuNDUtMSAxLTFIMTBjLjgzIDAgMS41LjY3ID'+
			'EuNSAxLjV2MXptNSAyYzAgLjgzLS42NyAxLjUtMS41IDEuNWgtMmMtLjI4IDAtLjUtLjIyLS41LS41di01YzAtLjI4LjIyLS41LjUtLjVoMmMuODMgMCAxLjUuNjcgMS41IDEuNXYzem00LTMuNzVjMCAuNDEtLjM0Ljc1LS43NS43NUgxOXYxaC43NWMuNDEgMCAuNzUuMzQuNzUuNzVzLS4zNC43NS0uNzUuNzVIMTl2MS4yNWMwIC40MS0uMzQuNzUtLjc1Ljc1cy0uNzUtLjM0LS43NS0uNzVWOGMwLS41NS40NS0xIDEtMWgxLjI1Yy40MSAwIC43NS4zNC43NS43NXpNOSA5LjVoMXYtMUg5djF6TTMgNmMtLjU1IDAtMSAuNDUtMSAxdjEzYzAgMS4xLjkgMiAyIDJoMTNjLjU1IDAgMS0uNDUgMS0xcy0u'+
			'NDUtMS0xLTFINWMtLjU1IDAtMS0uNDUtMS0xVjdjMC0uNTUtLjQ1LTEtMS0xem0xMSA1LjVoMXYtM2gtMXYzeiIvPgo8L3N2Zz4K';
		me._ht_pdf_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_icon_active.style.transition='';
				if (me._ht_pdf_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_icon_active.style.visibility=(Number(me._ht_pdf_icon_active.style.opacity)>0||!me._ht_pdf_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_pdf_icon_active.ggVisible=true;
				}
				else {
					me._ht_pdf_icon_active.style.visibility="hidden";
					me._ht_pdf_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_pdf_icon_active.logicBlock_visible();
		me._ht_pdf_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_icon_active);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.logicBlock_alpha();
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_tooltip.logicBlock_position();
		me._ht_pdf_tooltip.logicBlock_alpha();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_icon.logicBlock_visible();
		me._ht_pdf_icon_active.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_icon_active.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf.logicBlock_alpha();
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_icon_active.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf.logicBlock_alpha();
				me._ht_pdf_tooltip.logicBlock_position();
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_icon_active.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_pdf_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_pdf.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf.logicBlock_alpha();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file.style.opacity == 0.0) { me._ht_video_file.style.visibility="hidden"; } }, 505);
					me._ht_video_file.style.opacity=0;
				}
				else {
					me._ht_video_file.style.visibility=me._ht_video_file.ggVisible?'inherit':'hidden';
					me._ht_video_file.style.opacity=1;
				}
			}
		}
		me._ht_video_file.logicBlock_alpha();
		me._ht_video_file.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_popup=document.createElement('div');
		el.ggId="ht_video_file_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_file_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_file_popup.style.width='600px';
					me._ht_video_file_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
				else {
					me._ht_video_file_popup.style.width='60px';
					me._ht_video_file_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
			}
		}
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup.style.visibility=me._ht_video_file_popup.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup.style.opacity == 0.0) { me._ht_video_file_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_file_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup.logicBlock_alpha();
		me._ht_video_file_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller=document.createElement('div');
		el.ggId="video_file_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller_seekbar=document.createElement('div');
		me._video_file_controller_seekbar__playhead=document.createElement('div');
		me._video_file_controller_seekbar.mediaEl = null;
		me._video_file_controller_seekbar.fromBufferSource = false;
		me._video_file_controller_seekbar.ggMediaId = 'ht_video_file_popup_video';
		el.ggId="video_file_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_file_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_file_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_file_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_file_controller_seekbar || e.target == me._video_file_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_file_controller_seekbar.onmousedown = me._video_file_controller_seekbar.ontouchstart = me._video_file_controller_seekbar.mouseTouchHandling;
		me._video_file_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_file_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_file_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_file_controller_seekbar.ggConnected = false;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.removeEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.removeEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_file_controller_seekbar.mediaEl = player.getMediaObject(me._video_file_controller_seekbar.ggMediaId);
			if (me._video_file_controller_seekbar.mediaEl) {
				me._video_file_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_file_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('ht_video_file_popup_video');
				me._video_file_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				me._video_file_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_file_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.addEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.addEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_file_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_file_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_file_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_file_controller_seekbar.ggConnected) return;
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.mediaEl.readyState || (me._video_file_controller_seekbar.fromBufferSource && args && args['id'] == me._video_file_controller_seekbar.mediaEl.id)) {
					if (me._video_file_controller_seekbar.fromBufferSource) {
						var percent = me._video_file_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_file_controller_seekbar.mediaEl.currentTime / me._video_file_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_file_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_file_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_file_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_file_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_file_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_file_controller_seekbar.mediaEl.buffered.start(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_file_controller_seekbar.mediaEl.buffered.end(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_file_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_file_controller_seekbar.appendChild(me._video_file_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_file_controller_seekbar.setAttribute('style', hs);
		me._video_file_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_file_controller_seekbar.ggIsActive=function() {
			if (me._video_file_controller_seekbar.mediaEl != null) {
				return (me._video_file_controller_seekbar.mediaEl.paused == false && me._video_file_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_seekbar.ggActivate=function () {
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggDeactivate=function () {
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_file_controller_seekbar.updatePlayback();
		}
		me._video_file_controller.appendChild(me._video_file_controller_seekbar);
		el=me._video_file_controller_button_pause=document.createElement('div');
		els=me._video_file_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_file_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_pause.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("ht_video_file_popup_video");
			}
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
		}
		me._video_file_controller_button_pause.onmouseenter=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='hidden';
			me._video_file_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_pause']=true;
		}
		me._video_file_controller_button_pause.onmouseleave=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='inherit';
			me._video_file_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_pause']=false;
		}
		me._video_file_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_pause);
		el=me._video_file_controller_button_play=document.createElement('div');
		els=me._video_file_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_file_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_play.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.playVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_file_popup_video","1");
			}
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
		}
		me._video_file_controller_button_play.onmouseenter=function (e) {
			me._video_file_controller_button_play__img.style.visibility='hidden';
			me._video_file_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_play']=true;
		}
		me._video_file_controller_button_play.onmouseleave=function (e) {
			me._video_file_controller_button_play__img.style.visibility='inherit';
			me._video_file_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_play']=false;
		}
		me._video_file_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_play);
		me._ht_video_file_popup.appendChild(me._video_file_controller);
		el=me._ht_video_file_popup_title=document.createElement('div');
		els=me._ht_video_file_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_file_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_title);
		el=me._ht_video_file_popup_video=document.createElement('div');
		me._ht_video_file_popup_video.seekbars = [];
		me._ht_video_file_popup_video.seekbars.push('video_file_controller_seekbar');
		me._ht_video_file_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_file_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_file_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_file_popup_video.hasChildNodes()) {
				me._ht_video_file_popup_video.removeChild(me._ht_video_file_popup_video.lastChild);
			}
			if (me._ht_video_file_popup_video__vid) {
				me._ht_video_file_popup_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_file_popup_video.ggVideoNotLoaded == false && me._ht_video_file_popup_video.ggDeactivate && player.isPlaying('ht_video_file_popup_video')) { me._ht_video_file_popup_video.ggDeactivate(); }
				me._ht_video_file_popup_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_file_popup_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_file_popup_video.ggVideoNotLoaded = false;
			me._ht_video_file_popup_video__vid=document.createElement('video');
			me._ht_video_file_popup_video__vid.className='ggskin ggskin_video';
			me._ht_video_file_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_file_popup_video__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_file_popup_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_file_popup_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_file_popup_video__vid.setAttribute('autoplay', '');
			me._ht_video_file_popup_video__source=document.createElement('source');
			me._ht_video_file_popup_video__source.setAttribute('src', media);
			me._ht_video_file_popup_video__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_file_popup_video__vid.setAttribute('style', ';');
			me._ht_video_file_popup_video__vid.style.outline = 'none';
			me._ht_video_file_popup_video__vid.appendChild(me._ht_video_file_popup_video__source);
			me._ht_video_file_popup_video.appendChild(me._ht_video_file_popup_video__vid);
			var videoEl = player.registerVideoElement('ht_video_file_popup_video', me._ht_video_file_popup_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_file_popup_video', 0.0);
			notifySeekbars();
			me._ht_video_file_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_file_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_video.ggIsActive=function() {
			if (me._ht_video_file_popup_video__vid != null) {
				return (me._ht_video_file_popup_video__vid.paused == false && me._ht_video_file_popup_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_popup_video.style.transition='';
				if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_popup_video.style.visibility=(Number(me._ht_video_file_popup_video.style.opacity)>0||!me._ht_video_file_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
						me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
					}
					me._ht_video_file_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_file_popup_video.style.visibility="hidden";
					me._ht_video_file_popup_video.ggInitMedia('');
					me._ht_video_file_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_file_popup_video.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_file_popup_video.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_file_popup_video.ggApiPlayer.play();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_file_popup_video","1");
			}
		}
		me._ht_video_file_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_video);
		me._ht_video_file.appendChild(me._ht_video_file_popup);
		el=me._ht_video_file_tooltip=document.createElement('div');
		els=me._ht_video_file_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_file_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_file_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_file_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_file_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_file_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_file_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_file_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_file_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_video_file_tooltip.logicBlock_position();
		me._ht_video_file_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_tooltip.style.visibility=me._ht_video_file_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_file_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_tooltip.style.opacity == 0.0) { me._ht_video_file_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_file_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_tooltip);
		el=me._ht_video_file_popup_close=document.createElement('div');
		els=me._ht_video_file_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup_close.style.visibility=me._ht_video_file_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup_close.style.opacity == 0.0) { me._ht_video_file_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_file_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup_close.logicBlock_alpha();
		me._ht_video_file_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_video.style.transition='none';
			} else {
				me._ht_video_file_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_video.style.opacity='0';
			me._ht_video_file_popup_video.style.visibility='hidden';
			me._ht_video_file_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_title.style.transition='none';
			} else {
				me._ht_video_file_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_title.style.opacity='0';
			me._ht_video_file_popup_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_controller.style.transition='none';
			} else {
				me._video_file_controller.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_controller.style.opacity='0';
			me._video_file_controller.style.visibility='hidden';
			me._ht_video_file.style.zIndex='-1';
		}
		me._ht_video_file_popup_close.onmouseenter=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='hidden';
			me._ht_video_file_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_popup_close']=true;
		}
		me._ht_video_file_popup_close.onmouseleave=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='inherit';
			me._ht_video_file_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_popup_close']=false;
		}
		me._ht_video_file_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_popup_close);
		el=me._ht_video_file_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_file_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file_icon_container.style.opacity == 0.0) { me._ht_video_file_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_file_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_file_icon_container.style.visibility=me._ht_video_file_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_file_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_file_icon_container.logicBlock_alpha();
		me._ht_video_file_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_video.style.transition='none';
				} else {
					me._ht_video_file_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_video.style.opacity='1';
				me._ht_video_file_popup_video.style.visibility=me._ht_video_file_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
					me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_title.style.transition='none';
				} else {
					me._ht_video_file_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_title.style.opacity='1';
				me._ht_video_file_popup_title.style.visibility=me._ht_video_file_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._video_file_controller.style.transition='none';
				} else {
					me._video_file_controller.style.transition='all 200ms ease-out 500ms';
				}
				me._video_file_controller.style.opacity='1';
				me._video_file_controller.style.visibility=me._video_file_controller.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file_popup_video.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
		}
		me._ht_video_file_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_file_icon_container']=true;
			me._ht_video_youtube_icon.logicBlock_visible();
			me._ht_video_youtube_icon_active.logicBlock_visible();
		}
		me._ht_video_file_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file_icon_container']=false;
			me._ht_video_youtube_icon.logicBlock_visible();
			me._ht_video_youtube_icon_active.logicBlock_visible();
		}
		me._ht_video_file_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon.style.transition='';
				if (me._ht_video_youtube_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon.style.visibility="hidden";
					me._ht_video_youtube_icon.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon.style.visibility=(Number(me._ht_video_youtube_icon.style.opacity)>0||!me._ht_video_youtube_icon.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon.logicBlock_visible();
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_icon);
		el=me._ht_video_youtube_icon_active=document.createElement('div');
		els=me._ht_video_youtube_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active.style.transition='';
				if (me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active.style.visibility=(Number(me._ht_video_youtube_icon_active.style.opacity)>0||!me._ht_video_youtube_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active.style.visibility="hidden";
					me._ht_video_youtube_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active.logicBlock_visible();
		me._ht_video_youtube_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_icon_active);
		me._ht_video_file.appendChild(me._ht_video_file_icon_container);
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha();
		me.elementMouseOver['video_file_controller_button_pause']=false;
		me.elementMouseOver['video_file_controller_button_play']=false;
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.ggVideoSource = 'media/';
		me._ht_video_file_popup_video.ggVideoNotLoaded = true;
		me._ht_video_file_tooltip.logicBlock_position();
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_popup_close']=false;
		me._ht_video_file_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_icon_container']=false;
		me._ht_video_youtube_icon.logicBlock_visible();
		me._ht_video_youtube_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._video_file_controller_seekbar.ggConnectToMediaEl();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_file_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_position();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_file_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_file_hotspots=function() {
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_file.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_url.style.opacity == 0.0) { me._ht_video_url.style.visibility="hidden"; } }, 505);
					me._ht_video_url.style.opacity=0;
				}
				else {
					me._ht_video_url.style.visibility=me._ht_video_url.ggVisible?'inherit':'hidden';
					me._ht_video_url.style.opacity=1;
				}
			}
		}
		me._ht_video_url.logicBlock_alpha();
		me._ht_video_url.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._ht_video_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._ht_video_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_popup=document.createElement('div');
		el.ggId="ht_video_url_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_url_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_url_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_url_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_url_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_url_popup.style.width='600px';
					me._ht_video_url_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_popup);}, 550);
				}
				else {
					me._ht_video_url_popup.style.width='60px';
					me._ht_video_url_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_popup);}, 550);
				}
			}
		}
		me._ht_video_url_popup.logicBlock_size();
		me._ht_video_url_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_url_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_popup.style.visibility=me._ht_video_url_popup.ggVisible?'inherit':'hidden';
					me._ht_video_url_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_popup.style.opacity == 0.0) { me._ht_video_url_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_url_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_url_popup.logicBlock_alpha();
		me._ht_video_url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_controller=document.createElement('div');
		el.ggId="video_url_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_controller_seekbar=document.createElement('div');
		me._video_url_controller_seekbar__playhead=document.createElement('div');
		me._video_url_controller_seekbar.mediaEl = null;
		me._video_url_controller_seekbar.fromBufferSource = false;
		me._video_url_controller_seekbar.ggMediaId = 'ht_video_url_popup_video';
		el.ggId="video_url_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_url_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_url_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_url_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_url_controller_seekbar || e.target == me._video_url_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_url_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_url_controller_seekbar.onmousedown = me._video_url_controller_seekbar.ontouchstart = me._video_url_controller_seekbar.mouseTouchHandling;
		me._video_url_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_url_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_url_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_url_controller_seekbar.ggConnected = false;
			}
			if (me._video_url_controller_seekbar.mediaEl != null) {
				if (me._video_url_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_url_controller_seekbar.mediaEl.removeEventListener('progress', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('play', me._video_url_controller_seekbar.ggActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_url_controller_seekbar.ggDeactivate);
						me._video_url_controller_seekbar.mediaEl.removeEventListener('pause', me._video_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_url_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_url_controller_seekbar.mediaEl = player.getMediaObject(me._video_url_controller_seekbar.ggMediaId);
			if (me._video_url_controller_seekbar.mediaEl) {
				me._video_url_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_url_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('ht_video_url_popup_video');
				me._video_url_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_url_controller_seekbar.mediaEl != null) {
				me._video_url_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_url_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_url_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_url_controller_seekbar.mediaEl.addEventListener('progress', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.addEventListener('canplay', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('play', me._video_url_controller_seekbar.ggActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_url_controller_seekbar.ggDeactivate);
						me._video_url_controller_seekbar.mediaEl.addEventListener('pause', me._video_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_url_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_url_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_url_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_url_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_url_controller_seekbar.ggConnected) return;
			if (me._video_url_controller_seekbar.mediaEl != null) {
				if (me._video_url_controller_seekbar.mediaEl.readyState || (me._video_url_controller_seekbar.fromBufferSource && args && args['id'] == me._video_url_controller_seekbar.mediaEl.id)) {
					if (me._video_url_controller_seekbar.fromBufferSource) {
						var percent = me._video_url_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_url_controller_seekbar.mediaEl.currentTime / me._video_url_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_url_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_url_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_url_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_url_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_url_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_url_controller_seekbar.mediaEl.buffered.start(i) / me._video_url_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_url_controller_seekbar.mediaEl.buffered.end(i) / me._video_url_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_url_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_url_controller_seekbar.appendChild(me._video_url_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_url_controller_seekbar.setAttribute('style', hs);
		me._video_url_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_url_controller_seekbar.ggIsActive=function() {
			if (me._video_url_controller_seekbar.mediaEl != null) {
				return (me._video_url_controller_seekbar.mediaEl.paused == false && me._video_url_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_seekbar.ggActivate=function () {
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility=(Number(me._video_url_controller_button_pause.style.opacity)>0||!me._video_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_pause.ggVisible=true;
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility='hidden';
			me._video_url_controller_button_play.ggVisible=false;
		}
		me._video_url_controller_seekbar.ggDeactivate=function () {
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility=(Number(me._video_url_controller_button_play.style.opacity)>0||!me._video_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_play.ggVisible=true;
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility='hidden';
			me._video_url_controller_button_pause.ggVisible=false;
		}
		me._video_url_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_url_controller_seekbar.updatePlayback();
		}
		me._video_url_controller.appendChild(me._video_url_controller_seekbar);
		el=me._video_url_controller_button_pause=document.createElement('div');
		els=me._video_url_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_url_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_url_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_button_pause.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_url_popup_video.ggApiPlayer.pauseVideo();
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_url_popup_video.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("ht_video_url_popup_video");
			}
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility='hidden';
			me._video_url_controller_button_pause.ggVisible=false;
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility=(Number(me._video_url_controller_button_play.style.opacity)>0||!me._video_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_play.ggVisible=true;
		}
		me._video_url_controller_button_pause.onmouseenter=function (e) {
			me._video_url_controller_button_pause__img.style.visibility='hidden';
			me._video_url_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_controller_button_pause']=true;
		}
		me._video_url_controller_button_pause.onmouseleave=function (e) {
			me._video_url_controller_button_pause__img.style.visibility='inherit';
			me._video_url_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_controller_button_pause']=false;
		}
		me._video_url_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_controller.appendChild(me._video_url_controller_button_pause);
		el=me._video_url_controller_button_play=document.createElement('div');
		els=me._video_url_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_url_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_url_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_button_play.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_url_popup_video.ggApiPlayer.playVideo();
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_url_popup_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_url_popup_video","1");
			}
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility='hidden';
			me._video_url_controller_button_play.ggVisible=false;
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility=(Number(me._video_url_controller_button_pause.style.opacity)>0||!me._video_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_pause.ggVisible=true;
		}
		me._video_url_controller_button_play.onmouseenter=function (e) {
			me._video_url_controller_button_play__img.style.visibility='hidden';
			me._video_url_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_controller_button_play']=true;
		}
		me._video_url_controller_button_play.onmouseleave=function (e) {
			me._video_url_controller_button_play__img.style.visibility='inherit';
			me._video_url_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_controller_button_play']=false;
		}
		me._video_url_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_controller.appendChild(me._video_url_controller_button_play);
		me._ht_video_url_popup.appendChild(me._video_url_controller);
		el=me._ht_video_url_popup_title=document.createElement('div');
		els=me._ht_video_url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_url_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_popup.appendChild(me._ht_video_url_popup_title);
		el=me._ht_video_url_popup_video=document.createElement('div');
		me._ht_video_url_popup_video.seekbars = [];
		me._ht_video_url_popup_video.seekbars.push('video_url_controller_seekbar');
		me._ht_video_url_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_url_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_url_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_url_popup_video.hasChildNodes()) {
				me._ht_video_url_popup_video.removeChild(me._ht_video_url_popup_video.lastChild);
			}
			if (me._ht_video_url_popup_video__vid) {
				me._ht_video_url_popup_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_url_popup_video.ggVideoNotLoaded == false && me._ht_video_url_popup_video.ggDeactivate && player.isPlaying('ht_video_url_popup_video')) { me._ht_video_url_popup_video.ggDeactivate(); }
				me._ht_video_url_popup_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_url_popup_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_url_popup_video.ggVideoNotLoaded = false;
			me._ht_video_url_popup_video__vid=document.createElement('video');
			me._ht_video_url_popup_video__vid.className='ggskin ggskin_video';
			me._ht_video_url_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_url_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_url_popup_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_url_popup_video__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_url_popup_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_url_popup_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_url_popup_video__vid.setAttribute('autoplay', '');
			me._ht_video_url_popup_video__source=document.createElement('source');
			me._ht_video_url_popup_video__source.setAttribute('src', media);
			me._ht_video_url_popup_video__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_url_popup_video__vid.setAttribute('style', ';');
			me._ht_video_url_popup_video__vid.style.outline = 'none';
			me._ht_video_url_popup_video__vid.appendChild(me._ht_video_url_popup_video__source);
			me._ht_video_url_popup_video.appendChild(me._ht_video_url_popup_video__vid);
			var videoEl = player.registerVideoElement('ht_video_url_popup_video', me._ht_video_url_popup_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_url_popup_video', 0.0);
			notifySeekbars();
			me._ht_video_url_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_url_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup_video.ggIsActive=function() {
			if (me._ht_video_url_popup_video__vid != null) {
				return (me._ht_video_url_popup_video__vid.paused == false && me._ht_video_url_popup_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_popup_video.style.transition='';
				if (me._ht_video_url_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_popup_video.style.visibility=(Number(me._ht_video_url_popup_video.style.opacity)>0||!me._ht_video_url_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_url_popup_video.ggVideoNotLoaded) {
						me._ht_video_url_popup_video.ggInitMedia(me._ht_video_url_popup_video.ggVideoSource);
					}
					me._ht_video_url_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_url_popup_video.style.visibility="hidden";
					me._ht_video_url_popup_video.ggInitMedia('');
					me._ht_video_url_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_url_popup_video.logicBlock_visible();
		me._ht_video_url_popup_video.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_url_popup_video.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_url_popup_video.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_url_popup_video.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_url_popup_video.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_url_popup_video.ggApiPlayer.play();
						} else {
							me._ht_video_url_popup_video.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_url_popup_video","1");
			}
		}
		me._ht_video_url_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_popup.appendChild(me._ht_video_url_popup_video);
		me._ht_video_url.appendChild(me._ht_video_url_popup);
		el=me._ht_video_url_tooltip=document.createElement('div');
		els=me._ht_video_url_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_url_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_url_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_url_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_url_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_url_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_url_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_url_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_video_url_tooltip.logicBlock_position();
		me._ht_video_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_tooltip.style.visibility=me._ht_video_url_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_url_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_tooltip.style.opacity == 0.0) { me._ht_video_url_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_url_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_url_tooltip.logicBlock_alpha();
		me._ht_video_url_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_tooltip);
		el=me._ht_video_url_popup_close=document.createElement('div');
		els=me._ht_video_url_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_url_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_url_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_url_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_popup_close.style.visibility=me._ht_video_url_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_url_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_popup_close.style.opacity == 0.0) { me._ht_video_url_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_url_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_url_popup_close.logicBlock_alpha();
		me._ht_video_url_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_url_hotspots', player.getVariableValue('open_video_url_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_url_popup_video.style.transition='none';
			} else {
				me._ht_video_url_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_url_popup_video.style.opacity='0';
			me._ht_video_url_popup_video.style.visibility='hidden';
			me._ht_video_url_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_url_popup_title.style.transition='none';
			} else {
				me._ht_video_url_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_url_popup_title.style.opacity='0';
			me._ht_video_url_popup_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_controller.style.transition='none';
			} else {
				me._video_url_controller.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_controller.style.opacity='0';
			me._video_url_controller.style.visibility='hidden';
			me._ht_video_url.style.zIndex='-1';
		}
		me._ht_video_url_popup_close.onmouseenter=function (e) {
			me._ht_video_url_popup_close__img.style.visibility='hidden';
			me._ht_video_url_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_popup_close']=true;
		}
		me._ht_video_url_popup_close.onmouseleave=function (e) {
			me._ht_video_url_popup_close__img.style.visibility='inherit';
			me._ht_video_url_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_popup_close']=false;
		}
		me._ht_video_url_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_popup_close);
		el=me._ht_video_url_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_url_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_url_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_url_icon_container.style.opacity == 0.0) { me._ht_video_url_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_url_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_url_icon_container.style.visibility=me._ht_video_url_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_url_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_url_icon_container.logicBlock_alpha();
		me._ht_video_url_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_url_hotspots', player.getVariableValue('open_video_url_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_url_popup_video.style.transition='none';
				} else {
					me._ht_video_url_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_url_popup_video.style.opacity='1';
				me._ht_video_url_popup_video.style.visibility=me._ht_video_url_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_url_popup_video.ggVideoNotLoaded) {
					me._ht_video_url_popup_video.ggInitMedia(me._ht_video_url_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_url_popup_title.style.transition='none';
				} else {
					me._ht_video_url_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_url_popup_title.style.opacity='1';
				me._ht_video_url_popup_title.style.visibility=me._ht_video_url_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._video_url_controller.style.transition='none';
				} else {
					me._video_url_controller.style.transition='all 200ms ease-out 500ms';
				}
				me._video_url_controller.style.opacity='1';
				me._video_url_controller.style.visibility=me._video_url_controller.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_url_popup_video.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_url.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
		}
		me._ht_video_url_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_url_icon_container']=true;
			me._ht_video_youtube_icon0.logicBlock_visible();
			me._ht_video_youtube_icon_active0.logicBlock_visible();
		}
		me._ht_video_url_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url_icon_container']=false;
			me._ht_video_youtube_icon0.logicBlock_visible();
			me._ht_video_youtube_icon_active0.logicBlock_visible();
		}
		me._ht_video_url_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg0=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_icon_container.appendChild(me._ht_video_youtube_bg0);
		el=me._ht_video_youtube_icon0=document.createElement('div');
		els=me._ht_video_youtube_icon0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon0.style.transition='';
				if (me._ht_video_youtube_icon0.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon0.style.visibility="hidden";
					me._ht_video_youtube_icon0.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon0.style.visibility=(Number(me._ht_video_youtube_icon0.style.opacity)>0||!me._ht_video_youtube_icon0.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon0.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon0.logicBlock_visible();
		me._ht_video_youtube_icon0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_icon_container.appendChild(me._ht_video_youtube_icon0);
		el=me._ht_video_youtube_icon_active0=document.createElement('div');
		els=me._ht_video_youtube_icon_active0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active0.style.transition='';
				if (me._ht_video_youtube_icon_active0.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active0.style.visibility=(Number(me._ht_video_youtube_icon_active0.style.opacity)>0||!me._ht_video_youtube_icon_active0.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active0.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active0.style.visibility="hidden";
					me._ht_video_youtube_icon_active0.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active0.logicBlock_visible();
		me._ht_video_youtube_icon_active0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_icon_container.appendChild(me._ht_video_youtube_icon_active0);
		me._ht_video_url.appendChild(me._ht_video_url_icon_container);
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.logicBlock_alpha();
		me.elementMouseOver['ht_video_url']=false;
		me._ht_video_url_popup.logicBlock_size();
		me._ht_video_url_popup.logicBlock_alpha();
		me.elementMouseOver['video_url_controller_button_pause']=false;
		me.elementMouseOver['video_url_controller_button_play']=false;
		me._ht_video_url_popup_video.logicBlock_visible();
		me._ht_video_url_popup_video.ggVideoSource = '';
		me._ht_video_url_popup_video.ggVideoNotLoaded = true;
		me._ht_video_url_tooltip.logicBlock_position();
		me._ht_video_url_tooltip.logicBlock_alpha();
		me._ht_video_url_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_url_popup_close']=false;
		me._ht_video_url_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_url_icon_container']=false;
		me._ht_video_youtube_icon0.logicBlock_visible();
		me._ht_video_youtube_icon_active0.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._video_url_controller_seekbar.ggConnectToMediaEl();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_url_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_tooltip.logicBlock_position();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_url_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_url_hotspots=function() {
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_vimeo.style.opacity == 0.0) { me._ht_video_vimeo.style.visibility="hidden"; } }, 505);
					me._ht_video_vimeo.style.opacity=0;
				}
				else {
					me._ht_video_vimeo.style.visibility=me._ht_video_vimeo.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo.style.opacity=1;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_alpha();
		me._ht_video_vimeo.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._ht_video_vimeo_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._ht_video_vimeo_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_popup=document.createElement('div');
		el.ggId="ht_video_vimeo_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_vimeo_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_vimeo_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_vimeo_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_vimeo_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_vimeo_popup.style.width='600px';
					me._ht_video_vimeo_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_popup);}, 550);
				}
				else {
					me._ht_video_vimeo_popup.style.width='60px';
					me._ht_video_vimeo_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_popup);}, 550);
				}
			}
		}
		me._ht_video_vimeo_popup.logicBlock_size();
		me._ht_video_vimeo_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_popup.style.visibility=me._ht_video_vimeo_popup.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_popup.style.opacity == 0.0) { me._ht_video_vimeo_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_vimeo_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_popup.logicBlock_alpha();
		me._ht_video_vimeo_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_popup_title=document.createElement('div');
		els=me._ht_video_vimeo_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_popup.appendChild(me._ht_video_vimeo_popup_title);
		el=me._ht_video_vimeo_popup_video=document.createElement('div');
		me._ht_video_vimeo_popup_video.seekbars = [];
		me._ht_video_vimeo_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_vimeo_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_vimeo_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_vimeo_popup_video.hasChildNodes()) {
				me._ht_video_vimeo_popup_video.removeChild(me._ht_video_vimeo_popup_video.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded == false && me._ht_video_vimeo_popup_video.ggDeactivate && player.isPlaying('ht_video_vimeo_popup_video')) { me._ht_video_vimeo_popup_video.ggDeactivate(); }
				me._ht_video_vimeo_popup_video.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_vimeo_popup_video.ggVideoNotLoaded = false;
			me._ht_video_vimeo_popup_video__vid=document.createElement('iframe');
			me._ht_video_vimeo_popup_video__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._ht_video_vimeo_popup_video__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_vimeo_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_vimeo_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_vimeo_popup_video__vid.setAttribute('allow', 'autoplay');
			me._ht_video_vimeo_popup_video__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_vimeo_popup_video__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_vimeo_popup_video.appendChild(me._ht_video_vimeo_popup_video__vid);
			me._ht_video_vimeo_popup_video.ggApiPlayerType = 'vimeo';
			me._ht_video_vimeo_popup_video.ggApiPlayer = new Vimeo.Player(me._ht_video_vimeo_popup_video__vid);
			if (player.getPlayerMuted()) me._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'ht_video_vimeo_popup_video' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._ht_video_vimeo_popup_video.ggApiPlayer.getVolume() > 0.0) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0); else skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'ht_video_vimeo_popup_video' || args.id == '_main') {
					if (args.type == 'set') skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._ht_video_vimeo_popup_video.ggApiPlayer.getVolume().then(function(volume) { skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._ht_video_vimeo_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_vimeo_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_popup_video.style.transition='';
				if (me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_popup_video.style.visibility=(Number(me._ht_video_vimeo_popup_video.style.opacity)>0||!me._ht_video_vimeo_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded) {
						me._ht_video_vimeo_popup_video.ggInitMedia(me._ht_video_vimeo_popup_video.ggVideoSource);
					}
					me._ht_video_vimeo_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_popup_video.style.visibility="hidden";
					me._ht_video_vimeo_popup_video.ggInitMedia('');
					me._ht_video_vimeo_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_popup_video.logicBlock_visible();
		me._ht_video_vimeo_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_popup.appendChild(me._ht_video_vimeo_popup_video);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_popup);
		el=me._ht_video_vimeo_tooltip=document.createElement('div');
		els=me._ht_video_vimeo_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_vimeo_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_vimeo_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_vimeo_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_vimeo_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_vimeo_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_vimeo_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_vimeo_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_vimeo_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_video_vimeo_tooltip.logicBlock_position();
		me._ht_video_vimeo_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_tooltip.style.visibility=me._ht_video_vimeo_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_tooltip.style.opacity == 0.0) { me._ht_video_vimeo_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_vimeo_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_tooltip.logicBlock_alpha();
		me._ht_video_vimeo_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_tooltip);
		el=me._ht_video_vimeo_popup_close=document.createElement('div');
		els=me._ht_video_vimeo_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_popup_close.style.visibility=me._ht_video_vimeo_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_popup_close.style.opacity == 0.0) { me._ht_video_vimeo_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_vimeo_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_popup_close.logicBlock_alpha();
		me._ht_video_vimeo_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_vimeo_hotspots', player.getVariableValue('open_video_vimeo_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_vimeo_popup_video.style.transition='none';
			} else {
				me._ht_video_vimeo_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_vimeo_popup_video.style.opacity='0';
			me._ht_video_vimeo_popup_video.style.visibility='hidden';
			me._ht_video_vimeo_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_vimeo_popup_title.style.transition='none';
			} else {
				me._ht_video_vimeo_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_vimeo_popup_title.style.opacity='0';
			me._ht_video_vimeo_popup_title.style.visibility='hidden';
			me._ht_video_vimeo.style.zIndex='-1';
		}
		me._ht_video_vimeo_popup_close.onmouseenter=function (e) {
			me._ht_video_vimeo_popup_close__img.style.visibility='hidden';
			me._ht_video_vimeo_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_popup_close']=true;
		}
		me._ht_video_vimeo_popup_close.onmouseleave=function (e) {
			me._ht_video_vimeo_popup_close__img.style.visibility='inherit';
			me._ht_video_vimeo_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_popup_close']=false;
		}
		me._ht_video_vimeo_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_popup_close);
		el=me._ht_video_vimeo_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_vimeo_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_vimeo_icon_container.style.opacity == 0.0) { me._ht_video_vimeo_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_vimeo_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_vimeo_icon_container.style.visibility=me._ht_video_vimeo_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_vimeo_icon_container.logicBlock_alpha();
		me._ht_video_vimeo_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_vimeo_hotspots', player.getVariableValue('open_video_vimeo_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_vimeo_popup_video.style.transition='none';
				} else {
					me._ht_video_vimeo_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_vimeo_popup_video.style.opacity='1';
				me._ht_video_vimeo_popup_video.style.visibility=me._ht_video_vimeo_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded) {
					me._ht_video_vimeo_popup_video.ggInitMedia(me._ht_video_vimeo_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_vimeo_popup_title.style.transition='none';
				} else {
					me._ht_video_vimeo_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_vimeo_popup_title.style.opacity='1';
				me._ht_video_vimeo_popup_title.style.visibility=me._ht_video_vimeo_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_vimeo_popup_video.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_vimeo.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
		}
		me._ht_video_vimeo_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_vimeo_icon_container']=true;
			me._ht_video_youtube_icon1.logicBlock_visible();
			me._ht_video_youtube_icon_active1.logicBlock_visible();
		}
		me._ht_video_vimeo_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo_icon_container']=false;
			me._ht_video_youtube_icon1.logicBlock_visible();
			me._ht_video_youtube_icon_active1.logicBlock_visible();
		}
		me._ht_video_vimeo_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg1=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_icon_container.appendChild(me._ht_video_youtube_bg1);
		el=me._ht_video_youtube_icon1=document.createElement('div');
		els=me._ht_video_youtube_icon1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon1.style.transition='';
				if (me._ht_video_youtube_icon1.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon1.style.visibility="hidden";
					me._ht_video_youtube_icon1.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon1.style.visibility=(Number(me._ht_video_youtube_icon1.style.opacity)>0||!me._ht_video_youtube_icon1.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon1.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon1.logicBlock_visible();
		me._ht_video_youtube_icon1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_icon_container.appendChild(me._ht_video_youtube_icon1);
		el=me._ht_video_youtube_icon_active1=document.createElement('div');
		els=me._ht_video_youtube_icon_active1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active1.style.transition='';
				if (me._ht_video_youtube_icon_active1.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active1.style.visibility=(Number(me._ht_video_youtube_icon_active1.style.opacity)>0||!me._ht_video_youtube_icon_active1.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active1.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active1.style.visibility="hidden";
					me._ht_video_youtube_icon_active1.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active1.logicBlock_visible();
		me._ht_video_youtube_icon_active1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_icon_container.appendChild(me._ht_video_youtube_icon_active1);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_icon_container);
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo']=false;
		me._ht_video_vimeo_popup.logicBlock_size();
		me._ht_video_vimeo_popup.logicBlock_alpha();
		me._ht_video_vimeo_popup_video.logicBlock_visible();
		me._ht_video_vimeo_popup_video.ggVideoSource = '';
		me._ht_video_vimeo_popup_video.ggVideoNotLoaded = true;
		me._ht_video_vimeo_tooltip.logicBlock_position();
		me._ht_video_vimeo_tooltip.logicBlock_alpha();
		me._ht_video_vimeo_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo_popup_close']=false;
		me._ht_video_vimeo_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo_icon_container']=false;
		me._ht_video_youtube_icon1.logicBlock_visible();
		me._ht_video_youtube_icon_active1.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_vimeo_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_tooltip.logicBlock_position();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_vimeo_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_vimeo_hotspots=function() {
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_vimeo.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_youtube.style.opacity == 0.0) { me._ht_video_youtube.style.visibility="hidden"; } }, 505);
					me._ht_video_youtube.style.opacity=0;
				}
				else {
					me._ht_video_youtube.style.visibility=me._ht_video_youtube.ggVisible?'inherit':'hidden';
					me._ht_video_youtube.style.opacity=1;
				}
			}
		}
		me._ht_video_youtube.logicBlock_alpha();
		me._ht_video_youtube.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._ht_video_youtube_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._ht_video_youtube_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_popup=document.createElement('div');
		el.ggId="ht_video_youtube_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_youtube_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_youtube_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_youtube_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_youtube_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_youtube_popup.style.width='600px';
					me._ht_video_youtube_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_popup);}, 550);
				}
				else {
					me._ht_video_youtube_popup.style.width='60px';
					me._ht_video_youtube_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_popup);}, 550);
				}
			}
		}
		me._ht_video_youtube_popup.logicBlock_size();
		me._ht_video_youtube_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_youtube_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_popup.style.visibility=me._ht_video_youtube_popup.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_popup.style.opacity == 0.0) { me._ht_video_youtube_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_youtube_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_popup.logicBlock_alpha();
		me._ht_video_youtube_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_popup_title=document.createElement('div');
		els=me._ht_video_youtube_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_popup.appendChild(me._ht_video_youtube_popup_title);
		el=me._ht_video_youtube_popup_video=document.createElement('div');
		me._ht_video_youtube_popup_video.seekbars = [];
			me._ht_video_youtube_popup_video.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._ht_video_youtube_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_youtube_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_youtube_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_youtube_popup_video.hasChildNodes()) {
				me._ht_video_youtube_popup_video.removeChild(me._ht_video_youtube_popup_video.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_youtube_popup_video.ggVideoNotLoaded == false && me._ht_video_youtube_popup_video.ggDeactivate && player.isPlaying('ht_video_youtube_popup_video')) { me._ht_video_youtube_popup_video.ggDeactivate(); }
				me._ht_video_youtube_popup_video.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_youtube_popup_video.ggVideoNotLoaded = false;
			me._ht_video_youtube_popup_video__vid=document.createElement('iframe');
			me._ht_video_youtube_popup_video__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._ht_video_youtube_popup_video__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_youtube_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_youtube_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_youtube_popup_video__vid.setAttribute('allow', 'autoplay');
			me._ht_video_youtube_popup_video__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_youtube_popup_video__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_youtube_popup_video.appendChild(me._ht_video_youtube_popup_video__vid);
			me._ht_video_youtube_popup_video__vid.id = 'youtube-video';
			me._ht_video_youtube_popup_video.ggYoutubeApiReady = function() {
				me._ht_video_youtube_popup_video.ggApiPlayerType = 'youtube';
				me._ht_video_youtube_popup_video.ggApiPlayerReady = false;
				me._ht_video_youtube_popup_video.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._ht_video_youtube_popup_video.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._ht_video_youtube_popup_video.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._ht_video_youtube_popup_video.ggMediaEnded) {
								me._ht_video_youtube_popup_video.ggMediaEnded();
							}
							if (event.data == 1 && me._ht_video_youtube_popup_video.ggActivate) {
								me._ht_video_youtube_popup_video.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._ht_video_youtube_popup_video.ggDeactivate) {
								me._ht_video_youtube_popup_video.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'ht_video_youtube_popup_video' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._ht_video_youtube_popup_video.ggApiPlayer.unMute();
						if (args.state == 1) skin._ht_video_youtube_popup_video.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._ht_video_youtube_popup_video.ggApiPlayer.isMuted()) skin._ht_video_youtube_popup_video.ggApiPlayer.unMute(); else skin._ht_video_youtube_popup_video.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'ht_video_youtube_popup_video' || args.id == '_main') {
						if (args.type == 'set') skin._ht_video_youtube_popup_video.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._ht_video_youtube_popup_video.ggApiPlayer.setVolume(skin._ht_video_youtube_popup_video.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._ht_video_youtube_popup_video.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._ht_video_youtube_popup_video.ggYoutubeApiReady();}
		}
		el.ggId="ht_video_youtube_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_popup_video.style.transition='';
				if (me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_popup_video.style.visibility=(Number(me._ht_video_youtube_popup_video.style.opacity)>0||!me._ht_video_youtube_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_youtube_popup_video.ggVideoNotLoaded) {
						me._ht_video_youtube_popup_video.ggInitMedia(me._ht_video_youtube_popup_video.ggVideoSource);
					}
					me._ht_video_youtube_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_youtube_popup_video.style.visibility="hidden";
					me._ht_video_youtube_popup_video.ggInitMedia('');
					me._ht_video_youtube_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_popup_video.logicBlock_visible();
		me._ht_video_youtube_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_popup.appendChild(me._ht_video_youtube_popup_video);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_popup);
		el=me._ht_video_youtube_tooltip=document.createElement('div');
		els=me._ht_video_youtube_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_youtube_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_youtube_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_youtube_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_youtube_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_youtube_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_youtube_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_youtube_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_youtube_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_video_youtube_tooltip.logicBlock_position();
		me._ht_video_youtube_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_tooltip.style.visibility=me._ht_video_youtube_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_tooltip.style.opacity == 0.0) { me._ht_video_youtube_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_youtube_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_tooltip.logicBlock_alpha();
		me._ht_video_youtube_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_tooltip);
		el=me._ht_video_youtube_popup_close=document.createElement('div');
		els=me._ht_video_youtube_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_youtube_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxOCAxOCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_youtube_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_popup_close.style.visibility=me._ht_video_youtube_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_popup_close.style.opacity == 0.0) { me._ht_video_youtube_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_youtube_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_popup_close.logicBlock_alpha();
		me._ht_video_youtube_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_youtube_hotspots', player.getVariableValue('open_video_youtube_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_youtube_popup_video.style.transition='none';
			} else {
				me._ht_video_youtube_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_youtube_popup_video.style.opacity='0';
			me._ht_video_youtube_popup_video.style.visibility='hidden';
			me._ht_video_youtube_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_youtube_popup_title.style.transition='none';
			} else {
				me._ht_video_youtube_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_youtube_popup_title.style.opacity='0';
			me._ht_video_youtube_popup_title.style.visibility='hidden';
			me._ht_video_youtube.style.zIndex='-1';
		}
		me._ht_video_youtube_popup_close.onmouseenter=function (e) {
			me._ht_video_youtube_popup_close__img.style.visibility='hidden';
			me._ht_video_youtube_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_popup_close']=true;
		}
		me._ht_video_youtube_popup_close.onmouseleave=function (e) {
			me._ht_video_youtube_popup_close__img.style.visibility='inherit';
			me._ht_video_youtube_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_popup_close']=false;
		}
		me._ht_video_youtube_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_popup_close);
		el=me._ht_video_youtube_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_youtube_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_youtube_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_youtube_icon_container.style.opacity == 0.0) { me._ht_video_youtube_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_youtube_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_youtube_icon_container.style.visibility=me._ht_video_youtube_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_youtube_icon_container.logicBlock_alpha();
		me._ht_video_youtube_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_youtube_hotspots', player.getVariableValue('open_video_youtube_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_youtube_popup_video.style.transition='none';
				} else {
					me._ht_video_youtube_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_youtube_popup_video.style.opacity='1';
				me._ht_video_youtube_popup_video.style.visibility=me._ht_video_youtube_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_youtube_popup_video.ggVideoNotLoaded) {
					me._ht_video_youtube_popup_video.ggInitMedia(me._ht_video_youtube_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_youtube_popup_title.style.transition='none';
				} else {
					me._ht_video_youtube_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_youtube_popup_title.style.opacity='1';
				me._ht_video_youtube_popup_title.style.visibility=me._ht_video_youtube_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_youtube_popup_video.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_youtube.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
		}
		me._ht_video_youtube_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_youtube_icon_container']=true;
			me._ht_video_youtube_icon2.logicBlock_visible();
			me._ht_video_youtube_icon_active2.logicBlock_visible();
		}
		me._ht_video_youtube_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube_icon_container']=false;
			me._ht_video_youtube_icon2.logicBlock_visible();
			me._ht_video_youtube_icon_active2.logicBlock_visible();
		}
		me._ht_video_youtube_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg2=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_icon_container.appendChild(me._ht_video_youtube_bg2);
		el=me._ht_video_youtube_icon2=document.createElement('div');
		els=me._ht_video_youtube_icon2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2MzYzNjIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1vcGFjaXR5PSIxIj4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon2.style.transition='';
				if (me._ht_video_youtube_icon2.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon2.style.visibility="hidden";
					me._ht_video_youtube_icon2.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon2.style.visibility=(Number(me._ht_video_youtube_icon2.style.opacity)>0||!me._ht_video_youtube_icon2.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon2.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon2.logicBlock_visible();
		me._ht_video_youtube_icon2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_icon_container.appendChild(me._ht_video_youtube_icon2);
		el=me._ht_video_youtube_icon_active2=document.createElement('div');
		els=me._ht_video_youtube_icon_active2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active2.style.transition='';
				if (me._ht_video_youtube_icon_active2.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active2.style.visibility=(Number(me._ht_video_youtube_icon_active2.style.opacity)>0||!me._ht_video_youtube_icon_active2.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active2.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active2.style.visibility="hidden";
					me._ht_video_youtube_icon_active2.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active2.logicBlock_visible();
		me._ht_video_youtube_icon_active2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_icon_container.appendChild(me._ht_video_youtube_icon_active2);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_icon_container);
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube']=false;
		me._ht_video_youtube_popup.logicBlock_size();
		me._ht_video_youtube_popup.logicBlock_alpha();
		me._ht_video_youtube_popup_video.logicBlock_visible();
		me._ht_video_youtube_popup_video.ggVideoSource = '';
		me._ht_video_youtube_popup_video.ggVideoNotLoaded = true;
		me._ht_video_youtube_tooltip.logicBlock_position();
		me._ht_video_youtube_tooltip.logicBlock_alpha();
		me._ht_video_youtube_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube_popup_close']=false;
		me._ht_video_youtube_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube_icon_container']=false;
		me._ht_video_youtube_icon2.logicBlock_visible();
		me._ht_video_youtube_icon_active2.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_youtube_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_tooltip.logicBlock_position();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_youtube_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_youtube_hotspots=function() {
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_youtube.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._menu_toggle_timer.ggUpdateConditionTimer();
		if (me._menu_toggle_timer.ggLastIsActive!=me._menu_toggle_timer.ggIsActive()) {
			me._menu_toggle_timer.ggLastIsActive=me._menu_toggle_timer.ggIsActive();
			if (me._menu_toggle_timer.ggLastIsActive) {
			} else {
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
					me._close_to_menu_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._menu_to_close_anim.style.transition='none';
					me._menu_to_close_anim.style.visibility='hidden';
					me._menu_to_close_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._menu_to_close_anim.style.transition='none';
					me._menu_to_close_anim.style.visibility=(Number(me._menu_to_close_anim.style.opacity)>0||!me._menu_to_close_anim.style.opacity)?'inherit':'hidden';
					me._menu_to_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility='hidden';
					me._close_to_menu_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("3")))
					)
				) {
					me._back_to_close_anim.style.transition='none';
					me._back_to_close_anim.style.visibility=(Number(me._back_to_close_anim.style.opacity)>0||!me._back_to_close_anim.style.opacity)?'inherit':'hidden';
					me._back_to_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("3")))
					)
				) {
					me._close_to_back_anim.style.transition='none';
					me._close_to_back_anim.style.visibility='hidden';
					me._close_to_back_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("4")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
					me._close_to_menu_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("4")))
					)
				) {
					me._back_to_close_anim.style.transition='none';
					me._back_to_close_anim.style.visibility='hidden';
					me._back_to_close_anim.ggVisible=false;
				}
			}
		}
		me._controller_zoom_in_bg.ggUpdateConditionTimer();
		me._controller_zoom_out_bg.ggUpdateConditionTimer();
		me._controller_move_left_bg.ggUpdateConditionTimer();
		me._controller_move_down_bg.ggUpdateConditionTimer();
		me._controller_move_right_bg.ggUpdateConditionTimer();
		me._controller_move_up_bg.ggUpdateConditionTimer();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #aaa; } .ggdefaulthotspot { font-family: "Montserrat", sans-serif; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .shadow_title { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); } .montserrat { font-family: "Montserrat", sans-serif; } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/montserrat-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}