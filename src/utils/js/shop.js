const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShowClass() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// This function is called when a tab is clicked
function selectItem(e) {
    // Remove previous border
    removeBorder();
    removeShowClass();
    // Add border to clicked tab
    this.classList.add('tab-border');
    // Get tab id
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Show tab content of said id
    tabContentItem.classList.add('show')
}

// Listen for click
tabItems.forEach(item => item.addEventListener('click', selectItem))




//------------------------------------ACCORDION------------------------------------
function men(content){
    switch (content) {
      case 1: 
        let content1 = document.getElementById("pa")
        content1.classList.toggle("active")
        break;
      case 2: 
        let content2 = document.getElementById("bro") 
        content2.classList.add("active")
        break;
      case 3: 
        let content3 = document.getElementById("bon") 
        content3.classList.toggle("active")
        break;
      case 4: 
        let content4 = document.getElementById("cs") 
        content4.classList.toggle("active")
        break;
      case 5: 
        let content5 = document.getElementById("phel") 
        content5.classList.toggle("active")
        break;
    }
  }
  
  function anim1(){
    document.getElementById("pa").classList.toggle("active")
    document.getElementById("but1").onclick = function (){
      anim1();
    }
  }
  function anim2(){
    document.getElementById("bro").classList.toggle("active")
    document.getElementById("but2").onclick = function (){
      anim2();
    }
  }
  function anim3(){
    document.getElementById("bon").classList.toggle("active")
    document.getElementById("but3").onclick = function (){
      anim3();
    }
  }
  function anim4(){
    document.getElementById("cs").classList.toggle("active")
    document.getElementById("but4").onclick = function (){
      anim4();
    }
  }
  function anim5(){
    document.getElementById("phel").classList.toggle("active")
    document.getElementById("but5").onclick = function (){
      anim4();
    }
  }