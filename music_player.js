var a=document.getElementsByClassName("pop-col-card");


for(let i of a){
	const c=i.querySelector(".pop-col-card-btn-in")
	c.addEventListener('click', function(){
        let b=i.querySelector(".audio");
        let icon=i.querySelector(".fa-solid");
        let coordinates=i.getBoundingClientRect().top;
        if(coordinates<=window.innerHeight){
        	i.classList.add("reveal");
        	i.classList.remove("reveal");

        }
        icon.classList.toggle("fa-play");
        icon.classList.toggle("fa-pause");
		if(b.paused){
			b.currentTime=0;
			b.play();
		}
		else{
			b.pause();
		}
	})
}

window.addEventListener('scroll', ()=>{
	let content=document.querySelectorAll('.pop-col-card');
	content.forEach(i=>{
		let pos=i.getBoundingClientRect().top;
		let spos=window.innerHeight;
		if(pos<spos){
			i.classList.add("animate__wobble");
		}
		else{
			i.classList.remove("animate__wobble");
		}
	})
})


