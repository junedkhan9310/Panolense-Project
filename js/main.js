// const panorama = new PANOLENS.ImagePanorama( 'images/panel1.jpeg' );
// const panorama2 = new PANOLENS.ImagePanorama('images/pano5.jpg');
// let imageContainer = document.querySelector('.image-container')


// var infospotPositions = [
//     new THREE.Vector3(-2136.06, 16.30, 890.14),
//     new THREE.Vector3(-3136.06, 296.30, -4290.14),
    
//   ];

// const viewer = new PANOLENS.Viewer({
//     container: imageContainer,
//     autoRotate: true,
//     autoRotateSpeed: 0.3,
//     controlBar: true,
// });

// panorama.link( panorama2, infospotPositions[0]);
// panorama2.link( panorama, infospotPositions[1]);

// viewer.add( panorama,panorama2 );
const panorama = new PANOLENS.ImagePanorama('images/panel1.jpeg');
const panorama2= new PANOLENS.ImagePanorama('images/pano5.jpg');

let imageContainer= document.querySelector('.image-container');

var infospotPositions= [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),

];

infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( -2136.06, 16.30, 890.14);
infospot.addHoverText( "The Story" );
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );
panorama.add( infospot );

infospot2= new PANOLENS.Infospot(500,PANOLENS.DataImage.info);
infospot2.position.set(-3136.06, 296.30, -4290.14)
infospot2.addHoverText("This is it");
infospot2.addEventListener('click',function(){
  console.log("clicked");
  viewer.setPanorama(panorama)
})
panorama2.add(infospot2);


const viewer = new PANOLENS.Viewer({
  container :imageContainer,
  controlBar:false,
})

// panorama.link(panorama2,infospotPositions[0]);
// panorama2.link(panorama,infospotPositions[1]);

viewer.add(panorama,panorama2)
