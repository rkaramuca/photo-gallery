const Gallery = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="gallery">
      {/* Photos must go in public */}
      { Object.keys(images).map(path => {
        return <img src={images[path]} key={path[0]} alt="" />
      }) }
    </div>
  );
}
 
export default Gallery;