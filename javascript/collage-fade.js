
// I am wanting to add a fadeIn animation to each of my collage images
// I would like the first column to fadeIn together, then the second and so on
// I need to target all of the images
// then I need to iterate through each, and access their indexes
// then I need to add an event listener for when the page loads/lands
// when the page loads the fadeIn animation should be applied

function collageAnimation(){

  const collageImgs = document.querySelectorAll('.collage-img');
  // console.log(collageImgs);

  collageImgs.forEach((img, index) => {
    // console.log(img, index);
    if(index % 2 === 0){
      img.classList.add('group-1');
    } else {
      img.classList.add('group-2');
    }
  });

}



collageAnimation();
