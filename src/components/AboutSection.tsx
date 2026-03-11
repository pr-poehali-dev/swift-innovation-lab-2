export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Она — самый красивый человек в моём мире
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Эта галерея создана с любовью и нежностью. Каждый снимок — это маленькая история,
                которую хочется бережно хранить и перечитывать снова и снова.
              </p>
              <p>
                Здесь нет посторонних — только самые тёплые воспоминания, только наши с ней моменты,
                запечатлённые навсегда.
              </p>
              <p className="text-muted-foreground">
                Каждая фотография выбрана с трепетом — за её улыбку, взгляд и тот особенный свет,
                который она несёт в мою жизнь каждый день.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/art-gallery-interior-contemporary.jpg"
              alt="Интерьер галереи"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}