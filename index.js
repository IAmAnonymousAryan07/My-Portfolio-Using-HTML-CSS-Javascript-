console.log("script running ...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamberg').addEventListener("click", ()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
  document.querySelector('.ham-removebg').style.display = 'inline';
  document.querySelector('.cr').style.display = 'none';
}
else{
  document.querySelector('.ham-removebg').style.display = 'none';
  document.querySelector('.cr').style.display = 'inline';
}
})