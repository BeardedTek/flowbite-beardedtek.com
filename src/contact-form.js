window.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.getElementById('subject') || false;
  const topicParam = new URLSearchParams(window.location.search).get('topic') || false;
  if ( selectElement !== false && topicParam !== false){
    selectElement.value = topicParam;
  }
})