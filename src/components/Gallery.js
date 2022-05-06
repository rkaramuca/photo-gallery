const Gallery = () => {
  // Fetch file locations in given path
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item) ));
    return images;
  }

  // Gather all images from ../images
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="gallery">
      {/* Create an image tag for each image in ../images */}
      { Object.keys(images).map(path => (
        <img src={images[path]} key={path[0]} alt="" />
      )) }
    </div>
  );
}
 
export default Gallery;