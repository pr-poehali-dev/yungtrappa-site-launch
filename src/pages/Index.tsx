import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const tracks = [
    { title: "Трапанём", plays: "2.1M", year: "2018" },
    { title: "Маминой кредиткой", plays: "1.8M", year: "2018" },
    { title: "Drip", plays: "1.5M", year: "2019" },
    { title: "Витя", plays: "1.2M", year: "2019" },
    { title: "Жопа рядом", plays: "900K", year: "2018" },
  ];

  const photos = [
    "https://cdn.poehali.dev/projects/3efc14f3-fcea-4d51-8105-2bafce0a5cb4/files/69604207-0a33-4a50-9eb6-f0677a0d3dfd.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950/10 to-black">
      {/* Купить домен - Fixed button */}
      <div className="fixed top-6 right-6 z-50 animate-pulse-red">
        <Button 
          onClick={() => window.open('https://t.me/funnymindset', '_blank')}
          className="red-gradient text-white font-heading text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-red-600/50 transition-all duration-300"
        >
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Купить домен
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-20 left-10 rotate-12">💀</div>
          <div className="text-9xl absolute bottom-40 right-20 -rotate-12">💀</div>
          <div className="text-9xl absolute top-1/2 left-1/3 rotate-45">💀</div>
        </div>
        
        <div className="text-center z-10 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 text-glow tracking-tighter">
            YUNG TRAPPA
          </h1>
          <div className="h-1 w-64 mx-auto red-gradient mb-8 rounded-full"></div>
          <p className="text-2xl md:text-3xl text-red-500 font-medium mb-4">
            Илья Ильин
          </p>
          <p className="text-xl text-gray-400 mb-12">
            27.09.1999 — 10.12.2020
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              onClick={() => document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all"
            >
              <Icon name="User" size={18} className="mr-2" />
              Биография
            </Button>
            <Button 
              onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all"
            >
              <Icon name="Music" size={18} className="mr-2" />
              Треки
            </Button>
            <Button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all"
            >
              <Icon name="Image" size={18} className="mr-2" />
              Галерея
            </Button>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            <span className="text-glow">Биография</span>
          </h2>
          
          <Card className="bg-black/60 border-red-900 p-8 md:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-red-500 font-bold text-2xl">Yung Trappa</span> (настоящее имя — <span className="text-white font-semibold">Илья Ильин</span>) родился 27 сентября 1999 года в Москве. Он стал одним из самых ярких представителей российской трэп-сцены, известным своим уникальным стилем и провокационными текстами.
              </p>
              
              <div className="border-l-4 border-red-600 pl-6 my-8">
                <p className="text-xl italic text-gray-400">
                  "Его музыка была отражением целого поколения — дерзкая, искренняя и бескомпромиссная"
                </p>
              </div>

              <p>
                Карьера артиста началась в 2017 году с выпуска первых треков на SoundCloud. Его прорывными композициями стали <span className="text-red-400 font-semibold">"Трапанём"</span> и <span className="text-red-400 font-semibold">"Маминой кредиткой"</span>, которые мгновенно разлетелись по социальным сетям и набрали миллионы прослушиваний.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-950/30 p-6 rounded-lg border border-red-900/50">
                  <h3 className="text-2xl font-bold text-red-500 mb-3 flex items-center">
                    <Icon name="Trophy" size={24} className="mr-2" />
                    Достижения
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Более 10 млн прослушиваний на стриминговых платформах</li>
                    <li>• Культовый статус в российском трэп-андеграунде</li>
                    <li>• Сотрудничество с ведущими продюсерами сцены</li>
                  </ul>
                </div>

                <div className="bg-red-950/30 p-6 rounded-lg border border-red-900/50">
                  <h3 className="text-2xl font-bold text-red-500 mb-3 flex items-center">
                    <Icon name="Sparkles" size={24} className="mr-2" />
                    Стиль
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Агрессивная подача и уникальный флоу</li>
                    <li>• Провокационные и честные тексты</li>
                    <li>• Мемная культура и интернет-эстетика</li>
                  </ul>
                </div>
              </div>

              <p>
                Yung Trappa не боялся экспериментировать, создавая музыку на стыке трэпа, клауд-рэпа и интернет-культуры. Его творчество стало голосом молодёжи, которая искала в музыке искренность и свободу самовыражения.
              </p>

              <p className="text-center text-gray-500 mt-8 text-xl">
                10 декабря 2020 года Илья Ильин ушёл из жизни, оставив после себя яркое музыкальное наследие, которое продолжает вдохновлять тысячи поклонников.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            <span className="text-glow">Популярные треки</span>
          </h2>

          <div className="grid gap-4">
            {tracks.map((track, index) => (
              <Card 
                key={index}
                className="bg-black/60 border-red-900 p-6 hover:bg-red-950/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 red-gradient rounded-lg flex items-center justify-center">
                      <Icon name="Music" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{track.title}</h3>
                      <p className="text-gray-400">{track.year}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-red-500 text-xl font-semibold">
                      <Icon name="Play" size={20} />
                      {track.plays}
                    </div>
                    <p className="text-gray-500 text-sm">прослушиваний</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            <span className="text-glow">Галерея</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-black/60 border-red-900 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={photo} 
                  alt={`Yung Trappa ${index + 1}`}
                  className="w-full h-80 object-cover hover:opacity-90 transition-opacity"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Contacts Section */}
      <section id="media" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            <span className="text-glow">СМИ и Контакты</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-red-900 p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
                <Icon name="Newspaper" size={28} className="mr-3" />
                В СМИ
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Статьи о творчестве и влиянии на российскую трэп-сцену</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Интервью с продюсерами и коллегами по сцене</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={20} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Документальные материалы о жизни артиста</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-black/60 border-red-900 p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
                <Icon name="Share2" size={28} className="mr-3" />
                Социальные сети
              </h3>
              <div className="space-y-4">
                <Button 
                  onClick={() => window.open('https://t.me/funnymindset', '_blank')}
                  className="w-full red-gradient text-white text-lg py-6 hover:shadow-lg hover:shadow-red-600/50 transition-all"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </Button>
                <div className="text-gray-400 text-center mt-6">
                  <p>Официальный канал памяти артиста</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-red-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">💀</div>
            <h3 className="text-3xl font-bold text-white mb-2">YUNG TRAPPA</h3>
            <p className="text-red-500">1999 - 2020</p>
          </div>
          <p className="text-gray-500">
            Память живёт в музыке
          </p>
        </div>
      </footer>
    </div>
  );
}