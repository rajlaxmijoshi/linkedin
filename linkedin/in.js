let profile = document.getElementById('profilemenu');

function togglemenu(){
    profile.classList.toggle('open-menu');
}

//sidebar 
let sidebar = document.getElementById('sidebaractivity');
let morelink = document.getElementById('showmorelink');

function toggleactivity(){
    sidebar.classList.toggle('open-activity')

    if(sidebar.classList.contains("open-activity")){
        morelink.innerHTML ="show less <b>-</b>";
    }else{
        morelink.innerHTML = "show more <b>+</b>"
    }
}