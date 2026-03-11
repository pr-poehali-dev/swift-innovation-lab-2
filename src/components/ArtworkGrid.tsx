interface Artwork {
  title: string;
  artist: string;
  year: string;
  image: string;
}

const artworks: Artwork[] = [
  {
    title: "Утренний свет",
    artist: "Моя любимая",
    year: "2024",
    image: "/fine-art-portrait-photography.jpg",
  },
  {
    title: "Улыбка, которую я помню",
    artist: "Моя любимая",
    year: "2024",
    image: "/fine-art-photography-portrait.jpg",
  },
  {
    title: "Тихий вечер",
    artist: "Моя любимая",
    year: "2023",
    image: "/fine-art-black-white-photography.jpg",
  },
  {
    title: "Взгляд, в котором всё",
    artist: "Моя любимая",
    year: "2024",
    image: "/charcoal-drawing-portrait-sketch.jpg",
  },
  {
    title: "Она и осень",
    artist: "Моя любимая",
    year: "2023",
    image: "/portrait-of-frida-kahlo-with-flowers-in-hair.jpg",
  },
  {
    title: "Счастливый момент",
    artist: "Моя любимая",
    year: "2024",
    image: "/portrait-of-georgia-o-keeffe-american-modernist-pa.jpg",
  },
];

export function ArtworkGrid() {
  return (
    <section id="works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Любимые фотографии</h2>
          <p className="text-muted-foreground text-lg">Моменты, которые хочется помнить вечно</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {artworks.map((artwork, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-light mb-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {artwork.artist}, {artwork.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}