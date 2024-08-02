//three things
//1-to make a panorama from image PANOLENS.ImagePanorama('images/pano1.jpeg')
//2-to make container where we'll display it on the frontend  imageContainer= document.querySelector('.image-container');
//3-making viewer from that container and adding panoramic image to it 

//InfoSpot
//1- to create a infospot(it's a object probably where we can set it's attribute) PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
//2-adding position and hover text if we want and the adding event listenser


const panorama = new PANOLENS.ImagePanorama('images/pano1.jpeg');
const panorama2= new PANOLENS.ImagePanorama('images/pano5.jpg');
const panorama3= new PANOLENS.ImagePanorama('images/pano2.jpg');

let imageContainer= document.querySelector('.image-container');


const vecotr= new THREE.Vector3(-3136.06, 296.30, -4290.14)
const vecotr2=  new THREE.Vector3(1278.27, 732.65, 4769.19)

const initialLookposition= new THREE.Vector3(1278.27, 732.65, 4769.19);
const viewer = new PANOLENS.Viewer({
  container :imageContainer,
  controlBar:false,
  initialLookAt:initialLookposition,

})


var infospotPositions= [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
];

// panorama.addEventListener( 'enter', function(){
//   viewer.tweenControlCenter(-3136.06, 296.30, -4290.14,0);
// } );


infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( -2136.06, 16.30, 890.14);
infospot.addHoverText( "The Story" );
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
  viewer.tweenControlCenter(vecotr2)

} );

panorama.add( infospot );



infospot2= new PANOLENS.Infospot(500,PANOLENS.DataImage.info);
infospot2.position.set(-3136.06, 296.30, -4290.14)
infospot2.addHoverText("This is it");
infospot2.addEventListener('click',function(){
  viewer.setPanorama(panorama);
  viewer.tweenControlCenter(vecotr)

})

panorama2.add(infospot2);



// panorama.link(panorama2,infospotPositions[0]);
// panorama2.link(panorama,infospotPositions[1]);

viewer.add(panorama,panorama2)
