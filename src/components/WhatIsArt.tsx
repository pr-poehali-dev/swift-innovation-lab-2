export function WhatIsArt() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/classical-art-museum-painting.jpg"
                alt="Классическое искусство в музее"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-balance">
                Что такое любовь?
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Любовь — это когда хочется запомнить каждую мелочь: как она смеётся, как смотрит в окно,
                  как задумывается о чём-то своём. Это желание остановить время в самых тёплых моментах.
                </p>

                <p>
                  Фотография — это способ сделать именно это. Сохранить взгляд, поймать улыбку, удержать
                  миг, который иначе растворился бы в потоке дней.
                </p>

                <p>
                  Эта галерея — не просто коллекция снимков. Это признание в любви, созданное с нежностью
                  и заботой, чтобы она знала: каждый её момент для меня бесценен.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              В основе этой галереи — связь между двумя людьми: между мной и ею. Между объективом
              и её улыбкой, между моментом и памятью. Эти снимки — живые, настоящие и только наши.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">О галерее</h3>
              <p>
                «Моя Муза» — это приватное пространство, созданное для одного человека. Здесь каждая
                фотография — это маленькое письмо, написанное светом и временем. Никакой публичности,
                никаких лишних глаз — только наша история, рассказанная через объектив с любовью.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}