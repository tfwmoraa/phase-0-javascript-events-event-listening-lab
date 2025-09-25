function addingEventListener() {
  // 1. Grab the input element with id "button"
  const input = document.getElementById('button');
  // 2. Define what should happen when it’s clicked
  function clickAlert() {
    alert('I was clicked!');
  }
  // 3. Add the event listener to the input
  input.addEventListener('click', clickAlert);
}
// 4. Call the function so the listener is actually added
addingEventListener();

