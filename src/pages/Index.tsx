import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const tracks = [
    { title: "Jessie Pinkman", plays: "3.5M", year: "2012" },
    { title: "Jessie Pinkman 2", plays: "2.8M", year: "2014" },
    { title: "Walter White встречает Jessie Pinkman", plays: "2.1M", year: "2015" },
    { title: "Yung Treezy Crazy", plays: "1.2M", year: "2011" },
    { title: "2Stoopid", plays: "950K", year: "2012" },
  ];

  const photos = [
    "https://cdn.poehali.dev/files/photo_2024-06-04_20-40-06.jpg",
    "https://cdn.poehali.dev/files/photo_2024-05-19_01-57-08.jpg",
    "https://cdn.poehali.dev/files/photo_2025-04-10_21-04-33.jpg",
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
            Владислав Ширяев
          </p>
          <p className="text-xl text-gray-400 mb-12">
            14.08.1995 — 02.02.2023
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
                <span className="text-red-500 font-bold text-2xl">Yung Trappa</span> (настоящее имя — <span className="text-white font-semibold">Владислав Олегович Ширяев</span>) родился 14 августа 1995 года в Санкт-Петербурге. Он стал одним из самых влиятельных артистов на российской рэп-сцене.
              </p>
              
              <div className="border-l-4 border-red-600 pl-6 my-8">
                <p className="text-xl italic text-gray-400">
                  "Его музыка была отражением целого поколения — дерзкая, искренняя и бескомпромиссная"
                </p>
              </div>

              <p>
                Заниматься рэпом начал в 11 лет под псевдонимом <span className="text-red-400 font-semibold">МС Компактный</span>. В школьном возрасте Владислав увлёкся южным рэпом и влился в питерскую тусовку <span className="text-red-400 font-semibold">Swagga Music</span>, при поддержке которой выпустил свои первые микстейпы. Музыку писал под вдохновением Gucci Mane и Lil Wayne.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-950/30 p-6 rounded-lg border border-red-900/50">
                  <h3 className="text-2xl font-bold text-red-500 mb-3 flex items-center">
                    <Icon name="Trophy" size={24} className="mr-2" />
                    Достижения
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Альбомы: Jessie Pinkman (2012), Jessie Pinkman 2 (2014)</li>
                    <li>• Участие в Versus Battle вместе с Федуком (2014)</li>
                    <li>• Создал объединение Yung Murda Boyz</li>
                  </ul>
                </div>

                <div className="bg-red-950/30 p-6 rounded-lg border border-red-900/50">
                  <h3 className="text-2xl font-bold text-red-500 mb-3 flex items-center">
                    <Icon name="Sparkles" size={24} className="mr-2" />
                    Стиль
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Южный рэп и трэп</li>
                    <li>• Импровизация при записи песен</li>
                    <li>• Влияние питерской рэп-сцены</li>
                  </ul>
                </div>
              </div>

              <p>
                В 2012 году выходит альбом <span className="text-red-400 font-semibold">Jessie Pinkman</span>, в 2014 — <span className="text-red-400 font-semibold">Jessie Pinkman 2</span>. Последним его релизом стал совместный альбом с Sil-A <span className="text-red-400 font-semibold">Walter White встречает Jessie Pinkman</span> 2015 года. Yung Trappa перенял творческий подход у Lil Wayne — импровизацию при записи песен.
              </p>

              <p className="text-center text-gray-500 mt-8 text-xl">
                2 февраля 2023 года Владислав Ширяев ушёл из жизни в Санкт-Петербурге, оставив после себя яркое музыкальное наследие, которое продолжает вдохновлять тысячи поклонников.
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
                  onClick={() => window.open('https://t.me/yungtrappalore', '_blank')}
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
            <p className="text-red-500">1995 - 2023</p>
          </div>
          <p className="text-gray-500">
            Память живёт в музыке
          </p>
        </div>
      </footer>
    </div>
  );
}