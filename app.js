const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons);

const shareButtons2 = document.querySelectorAll('.share-button ')
// console.log(shareButtons2);

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute('link')
    console.log(link);
    try {
       await navigator.clipboard.writeText(link)
       alert("Copied the link:" + link)
    } catch(err){
        console.error(err)
    }
}
shareButtons.forEach(function(shareButton, shareButtons2) {
    shareButton.addEventListener('click', copyText)
})
