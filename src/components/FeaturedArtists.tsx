import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Album {
  name: string;
  season: string;
  year: string;
  mood: string;
  cover: string;
  description: string;
  moments: string;
}

const albums: Album[] = [
  {
    name: "Весна в её глазах",
    season: "Весна",
    year: "2024",
    mood: "Нежность",
    cover: "/fine-art-portrait-photography.jpg",
    description: "Прогулки в апреле, цветущие деревья и её смех — всё это сохранилось здесь навсегда. Этот альбом — о пробуждении и о том, как она умеет радоваться маленьким вещам.",
    moments: "Парк, первые цветы, кофе на улице",
  },
  {
    name: "Золотое лето",
    season: "Лето",
    year: "2024",
    mood: "Радость",
    cover: "/fine-art-photography-portrait.jpg",
    description: "Жаркие дни, море, мороженое и бесконечный закат. Это было наше лето — беззаботное, яркое и невозможно красивое.",
    moments: "Море, закаты, путешествия",
  },
  {
    name: "Осенняя палитра",
    season: "Осень",
    year: "2023",
    mood: "Уют",
    cover: "/charcoal-drawing-portrait-sketch.jpg",
    description: "Жёлтые листья, тёплый плед, горячий чай и она — самое уютное воспоминание этого года.",
    moments: "Кофейни, листопад, вечера дома",
  },
  {
    name: "Зимняя сказка",
    season: "Зима",
    year: "2023",
    mood: "Волшебство",
    cover: "/fine-art-black-white-photography.jpg",
    description: "Снег на её ресницах, первый снегопад и её восторг — как будто зима пришла специально для неё.",
    moments: "Снег, огни, новогоднее настроение",
  },
];

export function FeaturedArtists() {
  return (
    <section id="artists" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Альбомы</h2>
          <p className="text-muted-foreground text-lg">Моменты, разложенные по временам года</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {albums.map((album) => (
            <Dialog key={album.name}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-light mb-1">{album.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {album.season} &bull; {album.year}
                    </p>
                    <p className="text-sm font-medium text-foreground">{album.mood}</p>
                    <p className="text-xs text-muted-foreground mt-3">Нажмите, чтобы открыть</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl font-light">{album.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {album.season} &bull; {album.year}
                      </p>
                      <p className="text-base font-medium text-foreground mb-4">{album.mood}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Об этом альбоме</h4>
                      <p className="text-sm leading-relaxed">{album.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Что внутри</h4>
                      <p className="text-sm leading-relaxed">{album.moments}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
