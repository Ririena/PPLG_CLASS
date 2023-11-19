export default function Gallery() {
    const images = [
       'https://images.unsplash.com/photo-1549390333-79a3b27d5c5f',
       'https://images.unsplash.com/photo-1542291080-47384c447159',
       'https://images.unsplash.com/photo-1569965912610-18538e1c4f77',
    ];
   
    return (
       <div className="w-full overflow-hidden">
         {images.map((image, index) => (
           <div
             key={index}
             className={`w-full h-screen transition-transform duration-500 ease-in-out ${
               index > 0 ? 'transform -translate-x-full' : ''
             }`}
             data-aos={index === 0 ? 'fade-in' : 'fade-up'}
             data-aos-delay={index * 1000}
           >
             <img src={image} alt="" className="w-full h-full object-cover" />
           </div>
         ))}
       </div>
    );
   }

