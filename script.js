
var div1=document.getElementById("about-me-page");
var div2=document.getElementById("education-page");
var div3=document.getElementById("skill-page");
var btn1=document.getElementById("aboutbtn");
var btn2=document.getElementById("education");
var btn3=document.getElementById("skill-btn");
var about=document.getElementById("about-design");
var edu=document.getElementById("education-design");
var skill=document.getElementById("skill-design");
// ---------------------------------------------
var html=document.getElementsByClassName("html");
var css=document.getElementsByClassName("css");
var js=document.getElementsByClassName("js");
var figma=document.getElementsByClassName("figma");
var php=document.getElementsByClassName("php");

function myfunction1()
{
    div1.style.opacity="1";
    div2.style.opacity="0";
    div3.style.opacity="0";
    div1.style.transition="opacity 0.5s ease";
    about.style.opacity="1";
    edu.style.opacity="0";
    skill.style.opacity="0";


}
function myfunction2()
{
    div1.style.opacity="0";
    div2.style.opacity="1";
    div3.style.opacity="0";
    div2.style.transition="opacity 0.5s ease";
    about.style.opacity="0";
    edu.style.opacity="1";
    skill.style.opacity="0";
}
function myfunction3()
{
    div1.style.opacity="0";
    div2.style.opacity="0";
    div3.style.opacity="1";
    div3.style.transition="opacity 0.5s ease";
    about.style.opacity="0";
    edu.style.opacity="0";
    skill.style.opacity="1";
}
function animateProgress() {
    const progressBars = document.querySelectorAll('.progress');
  
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-progress');
      bar.style.width = targetWidth;
    });
}
  document.getElementById('skill-btn').addEventListener('click', () => {
    animateProgress();
    myfunction3()
  });
// ----------------button--------------
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("circleButton");
  const text = document.getElementById("circleText");

  button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const moveFactor = 0.1;
      button.style.transform = `translate(${x * moveFactor}px, ${y * moveFactor}px)`;
      text.style.transform = `translate(${x * moveFactor}px, ${y * moveFactor}px)`;
  }); 

  button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0, 0)";
      text.style.transform = "translate(0, 0)";
  });
});


