// 控制音乐 动画的开始／暂停
function control(){
	var arrow=document.getElementById("arrow");
	var music=document.getElementById("music");
		// 音乐开始暂停
		if(music.paused){
			music.play();//开始
			arrow.style.animationPlayState="running";

		}else{
			music.pause();//暂停
			arrow.style.animationPlayState="paused";
		}
}

function $(id){
	return document.getElementById(id);
}