
// Toggle class on tab-content on each tab click
let NavTabLink = document.querySelectorAll('.nav-tabs .nav-link');
NavTabLink.forEach(tab => {
  tab.addEventListener('click', function(){
    const tabContent = this.closest('.section-search').querySelector('.tab-content');
    if(tabContent){
    if(this.classList.contains('make')){

      tabContent.classList.add('show');
    } else tabContent.classList.remove('show');
    }
    
  })
})

// Header top section clode button
let btnClose = document.querySelector('.btn-close');

btnClose.addEventListener('click', function(){
  let headerTop = document.querySelector('.header-top');
  let themeContainer = document.querySelector('.theme-container');
  headerTop.classList.add('hide');
  themeContainer.classList.add('hide');

})

//Add Sticky on header
window.addEventListener("scroll", function(){
  var e = this.scrollY;
  const  header = this.document.querySelector('.header');
  if(e>1){
    header.classList.add('sticky')
  } else header.classList.remove('sticky')
})