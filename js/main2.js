const panorama1 = new PANOLENS.ImagePanorama('images/pano1.jpg');
const panorama2= new PANOLENS.ImagePanorama('images/pano5.jpg');
const panorama3= new PANOLENS.ImagePanorama('images/pano2.jpg');

let imageContainer= document.querySelector('.image-container');

const forward= new THREE.Vector3( 0, -300, -800 )
const backward= new THREE.Vector3( 0, -300, 800 )

infospot_info = new PANOLENS.Infospot( 120, PANOLENS.DataImage.Info,true );
infospot_info.position.set( -600, 0, -800);
infospot_info.addHoverElement( document.getElementById( 'mountaingood' ), 200 );
panorama2.add( infospot_info );

const initialLookposition= new THREE.Vector3(-3278.27, 732.65, 4769.19);
const viewer = new PANOLENS.Viewer({
    container :imageContainer,
    controlBar:false,
    initialLookAt:initialLookposition,
  })

viewer.add(panorama1,panorama2,panorama3)



// Linking between panoramas

// Pair
panorama1.link( panorama2, forward );
panorama2.link( panorama1, backward );

// Pair with custom scale and image
panorama2.link( panorama3, forward, 400, 'images/mine.jpg' );
panorama3.link( panorama2, backward );


panorama3.link( panorama1, forward );




