
$(clickMe).on('click', function() {
  if(popover.style.display == 'block'){
    $(popover).hide()
  }else{
    $(popover).show()
    console.log('show')
    setTimeout(function() {
      $(document).one('click', function() { 
        console.log('我觉得这里不会执行')
        console.log('hide')
        $(popover).hide()
      })
    }, 0)
  }   
  })
  $(popover).on('click',function(e){
    e.stopPropagation()
})
  
  
  