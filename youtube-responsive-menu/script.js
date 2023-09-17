const showSidebar=(toggleId,sidebarId,mainId)=>{
    const toggle=document.getElementById(toggleId),
    sidebar=document.getElementById(sidebarId)

    if(toggle && sidebar ){
        toggle.addEventListener('click',()=>{
            sidebar.classList.toggle('show-sidebar')
        })
    }
}

showSidebar('header-toggle','sidebar')