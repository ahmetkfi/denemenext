"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Menu,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  Info,
  Calendar,
  MapPin,
  Bookmark,
  Clock,
  ChevronRight,
  Hammer,
  Globe,
  Palette,
  Building,
  Home,
  Heart,
  Users,
  LogOut,
  Brush,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function GothicArtApp() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState("splash")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [selectedCathedral, setSelectedCathedral] = useState<string | null>(null)
  const [selectedArtCategory, setSelectedArtCategory] = useState<string | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null)
  const [selectedSculpture, setSelectedSculpture] = useState<string | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null)
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)
  const [favorites, setFavorites] = useState([
    {
      id: "notre-dame",
      type: "cathedral",
      title: "Notre Dame Katedrali",
      subtitle: "Paris, Fransa",
      year: "1163-1345",
      image: "/notre2.jpg",
    },
    {
      id: "arnolfini",
      type: "artwork",
      title: "Arnolfini'nin Evlenmesi",
      subtitle: "Jan van Eyck",
      year: "1434",
      image: "/jan-van-eyck-arnolfininin-evlenmesi-arnolfini-portrait-mdf-tablosu-TH027010.jpg",
    },
    {
      id: "bamberg",
      type: "sculpture",
      title: "Bamberg Süvarisi",
      subtitle: "Anonim (Bamberg Ustası)",
      year: "1230-1235",
      image: "/istockphoto-1299472870-612x612.jpg",
    },
  ])

  // Sanatçı listesi
  const artists = [
    {
      id: "jan-van-eyck",
      name: "Jan van Eyck",
      years: "1390-1441",
      nationality: "",
      period: "",
      works: ["Arnolfini'nin Evlenmesi", "Ghent Altar Panosu (Hubert van Eyck ile)"],
      bio: "Jan van Eyck, gotik dönemin öncü ressamıdır. Yağlı boya tekniğini mükemmelleştirmiş ve gerçekçi detaylarıyla ünlenmiştir. Portre ve dini konulu eserleriyle tanınır.",
      image: "/Man-in-a-Turban-Jan-van-Eyck-circa-1433.webp",
    },
    {
      id: "hubert-van-eyck",
      name: "Hubert van Eyck",
      years: "1385-1426",
      nationality: "",
      period: "",
      works: ["Ghent Altar Panosu (Jan van Eyck ile)"],
      bio: "Hubert van Eyck, Jan van Eyck'in ağabeyi ve ortağıdır. Ghent Altar Panosu'nun başlangıç çalışmalarını yapmış, ancak tamamlayamadan ölmüştür. Kardeşi Jan, eseri tamamlamıştır.",
      image: "/güncel.jpg",
    },
    {
      id: "naumburg-master",
      name: "Naumburg Ustası",
      years: "13. yüzyıl",
      nationality: "Alman",
      period: "Yüksek Gotik",
      works: ["Naumburg Kurucuları"],
      bio: "Naumburg Ustası, Alman Gotik heykel sanatının en önemli temsilcilerinden biridir. Özellikle Naumburg Katedrali'ndeki gerçekçi ve duygusal heykelleriyle tanınır.",
      image: "/nietzsche-8038937_960_720.jpg",
    },
  
    
  ]

  // Karşılama ekranını göster, sonra giriş ekranına geç
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setCurrentPage("login")
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Giriş işlemi
  const handleLogin = () => {
    setIsLoggingIn(true)
    // Giriş işlemini simüle et
    setTimeout(() => {
      setIsLoggingIn(false)
      setCurrentPage("welcome")
    }, 1500)
  }

  // Katedral seçimi
  const handleCathedralSelect = (cathedral: string) => {
    setSelectedCathedral(cathedral)
    setCurrentPage("cathedral-detail")
  }

  // Sanat kategorisi seçimi
  const handleArtCategorySelect = (category: string) => {
    setSelectedArtCategory(category)
    setCurrentPage("art-list")
  }

  // Sanat eseri seçimi
  const handleArtworkSelect = (artwork: string) => {
    setSelectedArtwork(artwork)
    setCurrentPage("artwork-detail")
  }

  // Heykel seçimi
  const handleSculptureSelect = (sculpture: string) => {
    setSelectedSculpture(sculpture)
    setCurrentPage("sculpture-detail")
  }

  // Dönem seçimi
  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period)
    setCurrentPage("period-detail")
  }

  // Sanatçı seçimi
  const handleArtistSelect = (artistId: string) => {
    setSelectedArtist(artistId)
    setCurrentPage("artist-detail")
  }

  // Notre Dame Katedrali bilgilerini kısaltalım
  const notreDameInfo = [
    {
      title: "Yapım Tarihi",
      icon: Calendar,
      content: "1163-1345 yılları arasında inşa edilmiştir.",
    },
    {
      title: "Mimari Özellikleri",
      icon: Info,
      content: "Uçan payandalar, sivri kemerler ve gül penceresiyle Fransız Gotiğinin başyapıtıdır.",
    },
    {
      title: "Vitraylar",
      icon: Bookmark,
      content: "Üç büyük gül penceresi, 13. yüzyıldan kalma orijinal vitraylarıyla ünlüdür.",
    },
    {
      title: "Konum",
      icon: MapPin,
      content: "Paris'in kalbi Île de la Cité'de, Seine Nehri'nin ortasındaki adada yer alır.",
    },
    {
      title: "Tarihi Önemi",
      icon: Clock,
      content: "Victor Hugo'nun romanıyla dünya çapında üne kavuşmuştur.",
    },
  ]

  // Chartres Katedrali bilgilerini kısaltalım
  const chartresInfo = [
    {
      title: "Yapım Tarihi",
      icon: Calendar,
      content: "1194-1220 yılları arasında inşa edilmiştir.",
    },
    {
      title: "Mimari Özellikleri",
      icon: Info,
      content: "Asimetrik kuleleri ve muhteşem labirent zeminiyle Gotik mimarinin en iyi korunmuş örneğidir.",
    },
    {
      title: "Vitraylar",
      icon: Bookmark,
      content: "'Chartres Mavisi' olarak bilinen eşsiz mavi tonlu vitrayları dünyaca ünlüdür.",
    },
    {
      title: "Konum",
      icon: MapPin,
      content: "Fransa'nın Chartres şehrinde, Paris'in güneybatısında 80 km mesafede yer alır.",
    },
    {
      title: "Tarihi Önemi",
      icon: Clock,
      content: "UNESCO Dünya Mirası Listesi'nde yer alır.",
    },
  ]

  // Arnolfini'nin Evlenmesi bilgilerini kısaltalım
  const arnolfiniInfo = [
    {
      title: "Sanatçı",
      icon: User,
      content: "Jan van Eyck (1390-1441), Erken Flaman Rönesansı'nın öncü ressamı.",
    },
    {
      title: "Yapım Tarihi",
      icon: Calendar,
      content: "1434 yılında tamamlanmıştır.",
    },
    {
      title: "Teknik ve Malzeme",
      icon: Info,
      content: "Meşe panel üzerine yağlı boya tekniği kullanılmıştır.",
    },
    {
      title: "Boyutlar ve Konum",
      icon: MapPin,
      content: "82.2 cm × 60 cm, Londra'daki National Gallery'de sergilenmektedir.",
    },
    {
      title: "Sanatsal Önemi",
      icon: Bookmark,
      content: "Detaylı sembolizmi ve ayna kullanımıyla ünlü evlilik portresidir.",
    },
  ]

  // Ghent Altar Panosu bilgilerini kısaltalım
  const ghentInfo = [
    {
      title: "Sanatçı",
      icon: User,
      content: "Jan van Eyck ve Hubert van Eyck kardeşler tarafından yapılmıştır.",
    },
    {
      title: "Yapım Tarihi",
      icon: Calendar,
      content: "1420-1432 yılları arasında yapılmıştır.",
    },
    {
      title: "Teknik ve Malzeme",
      icon: Info,
      content: "Meşe panel üzerine yağlı boya, 12 panelden oluşan poliptik.",
    },
    {
      title: "Boyutlar ve Konum",
      icon: MapPin,
      content: "Belçika'nın Ghent şehrindeki Saint Bavo Katedrali'nde bulunmaktadır.",
    },
    {
      title: "Sanatsal Önemi",
      icon: Bookmark,
      content: "Kuzey Avrupa sanatının başyapıtı, 'Mistik Kuzu'nun Tapınması' sahnesiyle ünlüdür.",
    },
  ]

  // Bamberg Süvarisi bilgilerini kısaltalım
  const bambergInfo = [
    {
      title: "Sanatçı",
      icon: User,
      content: "'Bamberg Ustası' olarak anılan anonim bir heykeltıraş tarafından yapılmıştır.",
    },
    {
      title: "Yapım Tarihi",
      icon: Calendar,
      content: "Yaklaşık 1230-1235 yılları arasında yapılmıştır.",
    },
    {
      title: "Malzeme ve Teknik",
      icon: Hammer,
      content: "Kireçtaşından oyulmuştur.",
    },
    {
      title: "Boyutlar ve Konum",
      icon: MapPin,
      content: "Yaklaşık 2.3 metre yüksekliğinde, Almanya'daki Bamberg Katedrali'nde bulunur.",
    },
    {
      title: "Sanatsal Önemi",
      icon: Bookmark,
      content: "Orta Çağ Avrupa heykel sanatının en önemli eserlerinden biridir.",
    },
  ]

  // Naumburg Kurucuları bilgilerini kısaltalım
  const naumburgInfo = [
    {
      title: "Sanatçı",
      icon: User,
      content: "'Naumburg Ustası' olarak bilinen anonim bir heykeltıraş tarafından yapılmıştır.",
    },
    {
      title: "Yapım Tarihi",
      icon: Calendar,
      content: "Yaklaşık 1245-1255 yılları arasında yapılmıştır.",
    },
    {
      title: "Malzeme ve Teknik",
      icon: Hammer,
      content: "Kireçtaşından oyulmuştur.",
    },
    {
      title: "Boyutlar ve Konum",
      icon: MapPin,
      content: "Almanya'daki Naumburg Katedrali'nin batı korosunda bulunmaktadır.",
    },
    {
      title: "Sanatsal Önemi",
      icon: Bookmark,
      content: "Özellikle Markgraf Ekkehard ve eşi Uta'nın gerçekçi heykelleriyle ünlüdür.",
    },
  ]

  // Erken Gotik Dönem bilgilerini kısaltalım
  const earlyGothicInfo = [
    {
      title: "Zaman Aralığı",
      icon: Calendar,
      content: "Yaklaşık 1150-1250 yılları arasında gelişmiştir.",
    },
    {
      title: "Tarihsel Bağlam",
      icon: Globe,
      content: "Fransa'da Abbot Suger'in Saint-Denis Bazilikası'nı yeniden inşasıyla başlamıştır.",
    },
    {
      title: "Mimari Özellikleri",
      icon: Building,
      content: "Sivri kemerler, çapraz tonozlar ve uçan payandaların ilk kullanımları görülür.",
    },
    {
      title: "Resim Sanatı",
      icon: Palette,
      content: "Vitray sanatı önem kazanmış, el yazmalarında stilize figürler kullanılmıştır.",
    },
    {
      title: "Heykel Sanatı",
      icon: Hammer,
      content: "Romanesk dönemin katı figürlerinden daha doğal formlara geçiş başlamıştır.",
    },
  ]

  // Yüksek Gotik Dönem bilgilerini kısaltalım
  const highGothicInfo = [
    {
      title: "Zaman Aralığı",
      icon: Calendar,
      content: "Yaklaşık 1250-1375 yılları arasında, Gotik sanatın en olgun dönemidir.",
    },
    {
      title: "Tarihsel Bağlam",
      icon: Globe,
      content: "Fransa'da IX. Louis döneminde başlayıp tüm Avrupa'ya yayılmıştır.",
    },
    {
      title: "Mimari Özellikleri",
      icon: Building,
      content: "Daha yüksek yapılar, büyük vitraylar ve karmaşık payanda sistemleri görülür.",
    },
    {
      title: "Resim Sanatı",
      icon: Palette,
      content: "Vitray sanatı zirveye ulaşmış, mavi ve kırmızı tonlar hakimdir.",
    },
    {
      title: "Heykel Sanatı",
      icon: Hammer,
      content: "Daha doğal figürler, duygusal ifadeler ve karmaşık kıvrımlı giysiler öne çıkar.",
    },
  ]

  // Geç Gotik/Uluslararası Gotik Dönem bilgilerini kısaltalım
  const lateGothicInfo = [
    {
      title: "Zaman Aralığı",
      icon: Calendar,
      content: "Yaklaşık 1375-1500 yılları arasında, Rönesans'a geçiş sürecidir.",
    },
    {
      title: "Tarihsel Bağlam",
      icon: Globe,
      content: "Yüzyıl Savaşları ve Kara Veba sonrası dönemde gelişmiştir.",
    },
    {
      title: "Mimari Özellikleri",
      icon: Building,
      content: "Alev biçimli (flamboyant) süslemeler ve karmaşık geometrik desenler görülür.",
    },
    {
      title: "Resim Sanatı",
      icon: Palette,
      content: "Gerçekçilik, detaycılık ve yağlı boya tekniğinin gelişimi öne çıkar.",
    },
    {
      title: "Heykel Sanatı",
      icon: Hammer,
      content: "Duygusal ifadeler ve ahşap heykel sanatı yaygınlaşmıştır.",
    },
  ]

  return (
    <div className="mx-auto max-w-[390px] h-[844px] border border-gray-200 rounded-[40px] overflow-hidden shadow-xl relative bg-[#1e0a0d] text-white">
      {/* Durum çubuğu */}
      <div className="bg-black text-white h-6 flex items-center justify-between px-4 text-xs">
        <span>20:30</span>
        <div className="flex items-center gap-1">
          <span>4G</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Çentik */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-50"></div>

      {/* Karşılama Ekranı (Splash Screen) */}
      {currentPage === "splash" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1e0a0d] to-[#2c1114] z-10">
          {/* Logo */}
          <div className="w-40 h-40 mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-[#2c1114] opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#d1a0a0" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#d1a0a0" strokeWidth="1" />
                <path d="M100,20 L100,180 M20,100 L180,100" stroke="#d1a0a0" strokeWidth="0.5" />
                <path d="M100,40 A60,60 0 0,1 160,100 L100,100 Z" fill="#4a1a1f" fillOpacity="0.7" />
                <path d="M100,40 A60,60 0 0,0 40,100 L100,100 Z" fill="#4a1a1f" fillOpacity="0.7" />
                <path d="M100,160 A60,60 0 0,0 40,100 L100,100 Z" fill="#4a1a1f" fillOpacity="0.7" />
                <path d="M100,160 A60,60 0 0,1 160,100 L100,100 Z" fill="#4a1a1f" fillOpacity="0.7" />
                <circle cx="100" cy="100" r="15" fill="#d4b8b8" fillOpacity="0.9" />
              </svg>
            </div>
          </div>

          {/* Başlık */}
          <h1 className="text-4xl font-serif tracking-wider text-center mb-3 text-white">GOTHICA</h1>

          <p className="text-base text-[#d1a0a0] tracking-widest font-serif">SANAT YOLCULUĞU</p>

          <div className="mt-12 flex flex-col items-center">
            <div className="w-16 h-[1px] bg-[#a05050]"></div>
          </div>
        </div>
      )}

      {/* Giriş Ekranı (Login) */}
      {currentPage === "login" && (
        <div className="h-full flex flex-col">
          {/* Arka plan */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e0a0d] to-[#2c1114] z-0"></div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Üst kısım */}
            <div className="h-16 flex justify-center items-center">
              <h2 className="text-xl font-serif tracking-wider text-white">GOTHICA</h2>
            </div>

            {/* Orta kısım - Giriş formu */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              {/* Başlık */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-serif tracking-wide text-white mb-2">Giriş</h1>
                <p className="text-sm text-[#d1a0a0] font-serif">
                  Gotik sanat yolculuğuna devam etmek için giriş yapın
                </p>
              </div>

              {/* Form alanı */}
              <div className="w-full max-w-sm bg-[#2c1114]/70 p-6 rounded-lg backdrop-blur-sm">
                {/* Form alanları */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-serif text-[#d1a0a0] flex items-center gap-2">
                      <Mail size={14} className="text-[#d1a0a0]" />
                      E-posta
                    </label>
                    <div className="relative">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e-posta adresiniz"
                        className="bg-[#1e0a0d]/80 border-[#4a1a1f] text-white h-10 px-3 rounded-md focus-visible:ring-[#a05050] focus-visible:ring-offset-0 focus-visible:border-[#a05050]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-serif text-[#d1a0a0] flex items-center gap-2">
                      <Lock size={14} className="text-[#d1a0a0]" />
                      Şifre
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="şifreniz"
                        className="bg-[#1e0a0d]/80 border-[#4a1a1f] text-white h-10 px-3 rounded-md focus-visible:ring-[#a05050] focus-visible:ring-offset-0 focus-visible:border-[#a05050]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#d1a0a0]"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-white hover:bg-gray-100 text-[#1e0a0d] rounded-md h-10 font-medium"
                      onClick={handleLogin}
                      disabled={isLoggingIn}
                    >
                      <span className="flex items-center justify-center">
                        {isLoggingIn ? "Giriş yapılıyor..." : "Giriş Yap"}
                      </span>
                    </Button>
                  </div>

                  <div className="flex justify-between text-xs pt-2">
                    <a href="#" className="text-[#d1a0a0] hover:text-white transition-colors">
                      Şifremi Unuttum
                    </a>
                    <a href="#" className="text-[#d1a0a0] hover:text-white transition-colors">
                      Kayıt Ol
                    </a>
                  </div>
                </div>
              </div>

              {/* Alternatif giriş */}
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-16 h-[1px] bg-[#4a1a1f]"></div>
                  <span className="text-xs text-[#d1a0a0]">veya</span>
                  <div className="w-16 h-[1px] bg-[#4a1a1f]"></div>
                </div>

                <Button
                  variant="outline"
                  className="border-[#4a1a1f] text-[#2c1114] hover:bg-[#2c1114] hover:text-white rounded-md text-sm"
                  onClick={() => setCurrentPage("welcome")}
                >
                  <User size={16} className="mr-2 text-[#d1a0a0]" />
                  Misafir Olarak Devam Et
                </Button>
              </div>
            </div>

            {/* Alt kısım */}
            <div className="p-6 flex justify-center">
              <div className="text-center">
                <p className="text-xs text-[#a05050] mb-8">Gotik Sanat Keşfi © 2025</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Giriş/Karşılama Ekranı */}
      {currentPage === "welcome" && (
        <div className="h-full flex flex-col">
          {/* Arka plan */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e0a0d] to-[#2c1114] z-0"></div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Üst kısım */}
            <div className="h-16 flex justify-between items-center px-4">
              <h2 className="text-xl font-serif tracking-wider text-white">GOTHICA</h2>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu size={24} />
              </Button>
            </div>

            {/* Orta kısım */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              {/* Başlık */}
              <h1 className="text-4xl font-serif tracking-wide text-white mb-6">Gotik Sanat</h1>

              <p className="text-xl mb-10 leading-relaxed text-[#d1a0a0] max-w-xs">
                Karanlık ihtişamın, yükselen kulelerin ve mistik vitrayların dünyasına hoş geldiniz.
              </p>

              {/* Kategoriler */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-10">
                <div
                  className="bg-[#2c1114] rounded-lg p-4 text-center hover:bg-[#3a181c] transition-colors cursor-pointer"
                  onClick={() => setCurrentPage("main")}
                >
                  <h3 className="text-base font-medium mb-2 text-white">Mimari</h3>
                  <p className="text-sm text-[#d1a0a0]">Katedraller & Yapılar</p>
                </div>
                <div
                  className="bg-[#2c1114] rounded-lg p-4 text-center hover:bg-[#3a181c] transition-colors cursor-pointer"
                  onClick={() => handleArtCategorySelect("painting")}
                >
                  <h3 className="text-base font-medium mb-2 text-white">Resim</h3>
                  <p className="text-sm text-[#d1a0a0]">Tablolar & Freskler</p>
                </div>
                <div
                  className="bg-[#2c1114] rounded-lg p-4 text-center hover:bg-[#3a181c] transition-colors cursor-pointer"
                  onClick={() => handleArtCategorySelect("sculpture")}
                >
                  <h3 className="text-base font-medium mb-2 text-white">Heykel</h3>
                  <p className="text-sm text-[#d1a0a0]">Taş & Ahşap Eserler</p>
                </div>
                <div
                  className="bg-[#2c1114] rounded-lg p-4 text-center hover:bg-[#3a181c] transition-colors cursor-pointer"
                  onClick={() => handleArtCategorySelect("periods")}
                >
                  <h3 className="text-base font-medium mb-2 text-white">Dönemler</h3>
                  <p className="text-sm text-[#d1a0a0]">Erken & Geç Gotik</p>
                </div>
              </div>
            </div>

            {/* Alt kısım */}
            <div className="p-6">
              <Button
                className="w-full bg-white hover:bg-gray-100 text-[#1e0a0d] mb-8 rounded-md h-12 text-base font-medium"
                onClick={() => setCurrentPage("main")}
              >
                <span className="flex items-center justify-center">
                  Keşfetmeye Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>

              <div className="mt-4 text-center mb-4">
                <p className="text-sm text-[#a05050]">12. yüzyıldan 16. yüzyıla uzanan bir sanat yolculuğu</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ana İçerik Ekranı - Mimari */}
      {currentPage === "main" && (
        <div className="h-full flex flex-col bg-gradient-to-b from-[#1e0a0d] to-[#2c1114]">
          {/* Üst kısım */}
          <div className="flex flex-col border-b border-[#4a1a1f]">
            <div className="flex items-center px-4 h-16">
              <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("welcome")}>
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">Gotik Sanat</h2>
            </div>

            {/* Kategori navigasyonu */}
            <div className="flex px-2 pb-2">
              <button
                className="flex-1 py-2 px-1 text-white border-b-2 border-white font-medium text-sm"
                onClick={() => setCurrentPage("main")}
              >
                Mimari
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("painting")
                  setCurrentPage("art-list")
                }}
              >
                Resim
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("sculpture")
                  setCurrentPage("art-list")
                }}
              >
                Heykel
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("periods")
                  setCurrentPage("art-list")
                }}
              >
                Dönemler
              </button>
            </div>
          </div>

          {/* İçerik */}
          <div className="flex-1 p-4 overflow-auto">
            <p className="text-[#d1a0a0] mb-6">
              Gotik mimari, sivri kemerler, uçan payandalar ve görkemli vitray pencereleriyle tanınan 12-16. yüzyıl
              Avrupa mimari üslubudur.
            </p>

            <h3 className="text-white text-lg font-medium mb-4">Önemli Katedraller</h3>

            {/* Notre Dame Katedrali */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handleCathedralSelect("notre-dame")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/notre2.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Notre Dame Katedrali</h4>
                  <p className="text-[#d1a0a0] text-sm">Paris, Fransa</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1163-1345</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Chartres Katedrali */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handleCathedralSelect("chartres")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/chartres1.webp')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Chartres Katedrali</h4>
                  <p className="text-[#d1a0a0] text-sm">Chartres, Fransa</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1194-1220</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Katedral Detay Ekranı */}
      {currentPage === "cathedral-detail" && (
        <div className="h-full flex flex-col">
          {/* Arka plan görseli - bulanık */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=844&width=390')] bg-cover bg-center blur-sm"></div>
            <div className="absolute inset-0 bg-[#1e0a0d]/70"></div>
          </div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Üst kısım */}
            <div className="flex items-center px-4 h-16">
              <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("main")}>
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">
                {selectedCathedral === "notre-dame" ? "Notre Dame Katedrali" : "Chartres Katedrali"}
              </h2>
            </div>

            {/* Katedral görseli */}
            <div className="relative h-48 mx-4 rounded-lg overflow-hidden mb-4">
              <div
                className={`absolute inset-0 ${selectedCathedral === "notre-dame" ? "bg-[url('/notre3.jpg')]" : "bg-[url('/chartres-katedrali-img-optimized.webp')]"} bg-cover bg-center`}
              ></div>
            </div>

            {/* Bilgi kartları */}
            <div className="flex-1 px-4 pb-4 overflow-auto">
              {(selectedCathedral === "notre-dame" ? notreDameInfo : chartresInfo).map((info, index) => (
                <div key={index} className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                  <div className="flex items-start">
                    <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-sm text-[#d1a0a0]">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Ek bilgi */}
              <div className="mt-2 mb-6">
                <p className="text-center text-xs text-[#a05050]">
                  {selectedCathedral === "notre-dame"
                    ? "Notre Dame Katedrali, 2019'daki yangından sonra restorasyon çalışmaları devam etmektedir."
                    : "Chartres Katedrali, Orta Çağ'dan günümüze kadar neredeyse hiç değişmeden ulaşan nadir yapılardandır."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resim Listesi Ekranı */}
      {currentPage === "art-list" && selectedArtCategory === "painting" && (
        <div className="h-full flex flex-col bg-gradient-to-b from-[#1e0a0d] to-[#2c1114]">
          {/* Üst kısım */}
          <div className="flex flex-col border-b border-[#4a1a1f]">
            <div className="flex items-center px-4 h-16">
              <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("welcome")}>
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">Gotik Sanat</h2>
            </div>

            {/* Kategori navigasyonu */}
            <div className="flex px-2 pb-2">
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => setCurrentPage("main")}
              >
                Mimari
              </button>
              <button
                className="flex-1 py-2 px-1 text-white border-b-2 border-white font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("painting")
                  setCurrentPage("art-list")
                }}
              >
                Resim
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("sculpture")
                  setCurrentPage("art-list")
                }}
              >
                Heykel
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("periods")
                  setCurrentPage("art-list")
                }}
              >
                Dönemler
              </button>
            </div>
          </div>

          {/* İçerik */}
          <div className="flex-1 p-4 overflow-auto">
            <p className="text-[#d1a0a0] mb-6">
              Gotik resim sanatı, dini konular ve günlük yaşamı detaylı ve sembolik anlatımlarla işleyen 12-16. yüzyıl
              Avrupa sanat akımıdır.
            </p>

            <h3 className="text-white text-lg font-medium mb-4">Önemli Eserler</h3>

            {/* Arnolfini'nin Evlenmesi */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handleArtworkSelect("arnolfini")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/jan-van-eyck-arnolfininin-evlenmesi-arnolfini-portrait-mdf-tablosu-TH027010.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Arnolfini'nin Evlenmesi</h4>
                  <p className="text-[#d1a0a0] text-sm">Jan van Eyck</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1434</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Ghent Altar Panosu */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handleArtworkSelect("ghent")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/Lamgods_open.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Ghent Altar Panosu</h4>
                  <p className="text-[#d1a0a0] text-sm">Jan ve Hubert van Eyck</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1420-1432</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Heykel Listesi Ekranı */}
      {currentPage === "art-list" && selectedArtCategory === "sculpture" && (
        <div className="h-full flex flex-col bg-gradient-to-b from-[#1e0a0d] to-[#2c1114]">
          {/* Üst kısım */}
          <div className="flex flex-col border-b border-[#4a1a1f]">
            <div className="flex items-center px-4 h-16">
              <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("welcome")}>
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">Gotik Sanat</h2>
            </div>

            {/* Kategori navigasyonu */}
            <div className="flex px-2 pb-2">
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => setCurrentPage("main")}
              >
                Mimari
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("painting")
                  setCurrentPage("art-list")
                }}
              >
                Resim
              </button>
              <button
                className="flex-1 py-2 px-1 text-white border-b-2 border-white font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("sculpture")
                  setCurrentPage("art-list")
                }}
              >
                Heykel
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("periods")
                  setCurrentPage("art-list")
                }}
              >
                Dönemler
              </button>
            </div>
          </div>

          {/* İçerik */}
          <div className="flex-1 p-4 overflow-auto">
            <p className="text-[#d1a0a0] mb-6">
              Gotik heykel sanatı, katedralleri süsleyen ve giderek daha gerçekçi figürleriyle öne çıkan 12-16. yüzyıl
              Avrupa sanat dalıdır.
            </p>

            <h3 className="text-white text-lg font-medium mb-4">Önemli Eserler</h3>

            {/* Bamberg Süvarisi */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handleSculptureSelect("bamberg")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/istockphoto-1299472870-612x612.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Bamberg Süvarisi</h4>
                  <p className="text-[#d1a0a0] text-sm">Anonim (Bamberg Ustası)</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1230-1235</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Naumburg Kurucuları */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handleSculptureSelect("naumburg")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/nietzsche-8038937_960_720.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Naumburg Kurucuları</h4>
                  <p className="text-[#d1a0a0] text-sm">Anonim (Naumburg Ustası)</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1245-1255</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dönemler Listesi Ekranı */}
      {currentPage === "art-list" && selectedArtCategory === "periods" && (
        <div className="h-full flex flex-col bg-gradient-to-b from-[#1e0a0d] to-[#2c1114]">
          {/* Üst kısım */}
          <div className="flex flex-col border-b border-[#4a1a1f]">
            <div className="flex items-center px-4 h-16">
              <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("welcome")}>
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">Gotik Sanat</h2>
            </div>

            {/* Kategori navigasyonu */}
            <div className="flex px-2 pb-2">
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => setCurrentPage("main")}
              >
                Mimari
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("painting")
                  setCurrentPage("art-list")
                }}
              >
                Resim
              </button>
              <button
                className="flex-1 py-2 px-1 text-[#d1a0a0] border-b-2 border-transparent font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("sculpture")
                  setCurrentPage("art-list")
                }}
              >
                Heykel
              </button>
              <button
                className="flex-1 py-2 px-1 text-white border-b-2 border-white font-medium text-sm"
                onClick={() => {
                  setSelectedArtCategory("periods")
                  setCurrentPage("art-list")
                }}
              >
                Dönemler
              </button>
            </div>
          </div>

          {/* İçerik */}
          <div className="flex-1 p-4 overflow-auto">
            <p className="text-[#d1a0a0] mb-6">
              Gotik sanat, yaklaşık 350 yıllık süreçte farklı dönemlerde farklı özellikler göstermiştir. Bu dönemler
              sanatın gelişimini yansıtır.
            </p>

            <h3 className="text-white text-lg font-medium mb-4">Dönemler</h3>

            {/* Erken Gotik */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handlePeriodSelect("early")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/erken-gotik.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Erken Gotik Dönem</h4>
                  <p className="text-[#d1a0a0] text-sm">Romanesk'ten Gotiğe Geçiş</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1150-1250</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Yüksek Gotik */}
            <div
              className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => handlePeriodSelect("high")}
            >
              <div className="relative h-40">
                <div className="absolute inset-0 bg-[url('/geç-gotik.webp')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-medium">Yüksek Gotik Dönem</h4>
                  <p className="text-[#d1a0a0] text-sm">Klasik Gotik Çağı</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-[#d1a0a0]">1250-1375</p>
                <div className="flex items-center text-white text-sm">
                  <span>Detaylar</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sanat Eseri Detay Ekranı */}
      {currentPage === "artwork-detail" && (
        <div className="h-full flex flex-col">
          {/* Arka plan görseli - bulanık */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=844&width=390')] bg-cover bg-center blur-sm"></div>
            <div className="absolute inset-0 bg-[#1e0a0d]/70"></div>
          </div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Üst kısım */}
            <div className="flex items-center px-4 h-16">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2"
                onClick={() => setCurrentPage("art-list")}
              >
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">
                {selectedArtwork === "arnolfini" ? "Arnolfini'nin Evlenmesi" : "Ghent Altar Panosu"}
              </h2>
            </div>

            {/* Eser görseli */}
            <div className="relative h-48 mx-4 rounded-lg overflow-hidden mb-4">
              <div
                className={`absolute inset-0 ${selectedArtwork == "arnolfini" ? "bg-[url('/evlenmesi.jpeg')]" : "bg-[url('/7087.webp')]"} bg-cover bg-center`}
              ></div>
            </div>

            {/* Bilgi kartları */}
            <div className="flex-1 px-4 pb-4 overflow-auto">
              {(selectedArtwork === "arnolfini" ? arnolfiniInfo : ghentInfo).map((info, index) => (
                <div key={index} className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                  <div className="flex items-start">
                    <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-sm text-[#d1a0a0]">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Ek bilgi */}
              <div className="mt-2 mb-6">
                <p className="text-center text-xs text-[#a05050]">
                  {selectedArtwork === "arnolfini"
                    ? "Bu tablo, aynada yansıyan sanatçının kendisi dahil birçok gizli sembol içermektedir."
                    : "Ghent Altar Panosu, II. Dünya Savaşı sırasında Naziler tarafından çalınmış, daha sonra kurtarılmıştır."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Heykel Detay Ekranı */}
      {currentPage === "sculpture-detail" && (
        <div className="h-full flex flex-col">
          {/* Arka plan görseli - bulanık */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=844&width=390')] bg-cover bg-center blur-sm"></div>
            <div className="absolute inset-0 bg-[#1e0a0d]/70"></div>
          </div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Üst kısım */}
            <div className="flex items-center px-4 h-16">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2"
                onClick={() => setCurrentPage("art-list")}
              >
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">
                {selectedSculpture === "bamberg" ? "Bamberg Süvarisi" : "Naumburg Kurucuları"}
              </h2>
            </div>

            {/* Heykel görseli */}
            <div className="relative h-48 mx-4 rounded-lg overflow-hidden mb-4">
              <div
                className={`absolute inset-0 ${selectedSculpture == "bamberg" ? "bg-[url('/suvari.jpeg')]" : "bg-[url('/nietzsche-8038937_960_720.jpg')]"} bg-cover bg-center`}
              ></div>
            </div>

            {/* Bilgi kartları */}
            <div className="flex-1 px-4 pb-4 overflow-auto">
              {(selectedSculpture === "bamberg" ? bambergInfo : naumburgInfo).map((info, index) => (
                <div key={index} className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                  <div className="flex items-start">
                    <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-sm text-[#d1a0a0]">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Ek bilgi */}
              <div className="mt-2 mb-6">
                <p className="text-center text-xs text-[#a05050]">
                  {selectedSculpture === "bamberg"
                    ? "Bamberg Süvarisi, Orta Çağ Avrupa heykel sanatında at üzerinde bir figürün en eski ve en etkileyici örneklerinden biridir."
                    : "Naumburg Kurucuları, özellikle Uta heykeli, Alman kültüründe ideal kadın güzelliğinin sembolü haline gelmiştir."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dönem Detay Ekranı */}
      {currentPage === "period-detail" && (
        <div className="h-full flex flex-col">
          {/* Arka plan görseli - bulanık */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=844&width=390')] bg-cover bg-center blur-sm"></div>
            <div className="absolute inset-0 bg-[#1e0a0d]/70"></div>
          </div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Üst kısım */}
            <div className="flex items-center px-4 h-16">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2"
                onClick={() => setCurrentPage("art-list")}
              >
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">
                {selectedPeriod === "early"
                  ? "Erken Gotik Dönem"
                  : selectedPeriod === "high"
                    ? "Yüksek Gotik Dönem"
                    : "Geç Gotik Dönem"}
              </h2>
            </div>

            {/* Dönem görseli */}
            <div className="relative h-48 mx-4 rounded-lg overflow-hidden mb-4">
              <div
                className={`absolute inset-0 ${selectedPeriod == "early" ? "bg-[url('/erken-gotik2.png')]" : "bg-[url('/geç-gotik2.webp')]"} bg-cover bg-center`}
              ></div>
            </div>

            {/* Bilgi kartları */}
            <div className="flex-1 px-4 pb-4 overflow-auto">
              {(selectedPeriod === "early"
                ? earlyGothicInfo
                : selectedPeriod === "high"
                  ? highGothicInfo
                  : lateGothicInfo
              ).map((info, index) => (
                <div key={index} className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                  <div className="flex items-start">
                    <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-sm text-[#d1a0a0]">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Ek bilgi */}
              <div className="mt-2 mb-6">
                <p className="text-center text-xs text-[#a05050]">
                  {selectedPeriod === "early"
                    ? "Erken Gotik dönem, Romanesk'ten Gotik'e geçişin izlerini taşır ve Gotik sanatın temellerini atar."
                    : selectedPeriod === "high"
                      ? "Yüksek Gotik dönem, Gotik sanatın en olgun ve görkemli dönemidir, teknik ve estetik açıdan zirveyi temsil eder."
                      : "Geç Gotik dönem, Rönesans'a geçişin izlerini taşır ve Gotik sanatın son evresini temsil eder."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sanatçılar Listesi Ekranı */}
      {currentPage === "artists" && (
        <div className="h-full mb-8 flex flex-col bg-gradient-to-b from-[#1e0a0d] to-[#2c1114]">
          {/* Üst kısım */}
          <div className="flex items-center px-4 h-16 border-b border-[#4a1a1f]">
            <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("welcome")}>
              <ArrowLeft size={20} />
            </Button>
            <h2 className="text-xl font-serif text-white">Sanatçılar</h2>
          </div>

          {/* İçerik */}
          <div className="flex-1 p-4 overflow-auto mb-16">
            <p className="text-[#d1a0a0] mb-6">
              Gotik dönem sanatçıları, Avrupa'nın farklı bölgelerinde çalışmış ve dönemin sanat anlayışını
              şekillendirmiş önemli isimlerdir.
            </p>

            <h3 className="text-white text-lg font-medium mb-4">Önemli Sanatçılar</h3>

            {/* Sanatçı Listesi */}
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
                onClick={() => handleArtistSelect(artist.id)}
              >
                <div className="relative h-40">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${artist.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white text-lg font-medium">{artist.name}</h4>
                    <p className="text-[#d1a0a0] text-sm">
                      {artist.nationality}, {artist.period}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <p className="text-sm text-[#d1a0a0]">{artist.years}</p>
                  <div className="flex items-center text-white text-sm">
                    <span>Detaylar</span>
                    <ChevronRight size={16} className="ml-1"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sanatçı Detay Ekranı */}
      {currentPage === "artist-detail" && (
        <div className="h-full flex flex-col">
          {/* Arka plan görseli - bulanık */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=844&width=390')] bg-cover bg-center blur-sm"></div>
            <div className="absolute inset-0 bg-[#1e0a0d]/70"></div>
          </div>

          {/* İçerik */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Üst kısım */}
            <div className="flex items-center px-4 h-16">
              <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("artists")}>
                <ArrowLeft size={20} />
              </Button>
              <h2 className="text-xl font-serif text-white">{artists.find((a) => a.id === selectedArtist)?.name}</h2>
            </div>

            {/* Sanatçı görseli */}
            <div className="relative h-48 mx-4 rounded-lg overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${artists.find((a) => a.id === selectedArtist)?.image}')` }}
              ></div>
            </div>

            {/* Bilgi kartları */}
            <div className="flex-1 px-4 pb-4 overflow-auto">
              {selectedArtist && (
                <>
                  <div className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <div className="flex items-start">
                      <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                        <User size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Sanatçı</h3>
                        <p className="text-sm text-[#d1a0a0]">
                          {artists.find((a) => a.id === selectedArtist)?.name} (
                          {artists.find((a) => a.id === selectedArtist)?.years})
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <div className="flex items-start">
                      <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                        <Globe size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Köken ve Dönem</h3>
                        <p className="text-sm text-[#d1a0a0]">
                          {artists.find((a) => a.id === selectedArtist)?.nationality} sanatçı,{" "}
                          {artists.find((a) => a.id === selectedArtist)?.period} döneminde aktif olmuştur.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <div className="flex items-start">
                      <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                        <Brush size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Önemli Eserleri</h3>
                        <p className="text-sm text-[#d1a0a0]">
                          {artists.find((a) => a.id === selectedArtist)?.works.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#2c1114]/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <div className="flex items-start">
                      <div className="bg-[#4a1a1f] rounded-full p-2 mr-3">
                        <Info size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Biyografi</h3>
                        <p className="text-sm text-[#d1a0a0]">{artists.find((a) => a.id === selectedArtist)?.bio}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Favoriler Ekranı */}
      {currentPage === "favorites" && (
        <div className="h-full flex flex-col bg-gradient-to-b from-[#1e0a0d] to-[#2c1114]">
          {/* Üst kısım */}
          <div className="flex items-center px-4 h-16 border-b border-[#4a1a1f]">
            <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setCurrentPage("welcome")}>
              <ArrowLeft size={20} />
            </Button>
            <h2 className="text-xl font-serif text-white">Favorilerim</h2>
          </div>

          {/* İçerik */}
          <div className="flex-1 mb-16 p-4 overflow-auto">
            <p className="text-[#d1a0a0] mb-6">
              Beğendiğiniz ve daha sonra tekrar incelemek istediğiniz eserler burada listelenir.
            </p>

            <h3 className="text-white text-lg font-medium mb-4">Favori Eserlerim</h3>

            {/* Favori Eserler Listesi */}
            {favorites.length > 0 ? (
              favorites.map((favorite) => (
                <div
                  key={favorite.id}
                  className="bg-[#2c1114] rounded-lg overflow-hidden mb-4 cursor-pointer"
                  onClick={() => {
                    if (favorite.type === "cathedral") {
                      handleCathedralSelect(favorite.id)
                    } else if (favorite.type === "artwork") {
                      handleArtworkSelect(favorite.id)
                    } else if (favorite.type === "sculpture") {
                      handleSculptureSelect(favorite.id)
                    }
                  }}
                >
                  <div className="relative h-40">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${favorite.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white text-lg font-medium">{favorite.title}</h4>
                      <p className="text-[#d1a0a0] text-sm">{favorite.subtitle}</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#4a1a1f] rounded-full p-1.5">
                      <Heart size={18} className="text-white fill-white" />
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="text-sm text-[#d1a0a0]">{favorite.year}</p>
                    <div className="flex items-center text-white text-sm">
                      <span>Detaylar</span>
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2c1114] mb-4">
                  <Heart size={32} className="text-[#4a1a1f]" />
                </div>
                <p className="text-[#d1a0a0]">Henüz favori eseriniz bulunmuyor.</p>
                <p className="text-xs text-[#a05050] mt-2">
                  Eserleri keşfederken beğendiklerinizi favorilere ekleyebilirsiniz.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Bar - Sadece login ve splash ekranlarında gösterme */}
      {currentPage !== "login" && currentPage !== "splash" && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1e0a0d] border-t border-[#4a1a1f] flex justify-around items-center px-4 z-40">
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentPage("welcome")}>
            <Home size={20} className={`${currentPage === "welcome" ? "text-white" : "text-[#d1a0a0]"} mb-1`} />
            <span className={`text-xs ${currentPage === "welcome" ? "text-white" : "text-[#d1a0a0]"}`}>Anasayfa</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentPage("favorites")}>
            <Heart size={20} className={`${currentPage === "favorites" ? "text-white" : "text-[#d1a0a0]"} mb-1`} />
            <span className={`text-xs ${currentPage === "favorites" ? "text-white" : "text-[#d1a0a0]"}`}>
              Favoriler
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentPage("artists")}>
            <Users
              size={20}
              className={`${currentPage === "artists" || currentPage === "artist-detail" ? "text-white" : "text-[#d1a0a0]"} mb-1`}
            />
            <span
              className={`text-xs ${currentPage === "artists" || currentPage === "artist-detail" ? "text-white" : "text-[#d1a0a0]"}`}
            >
              Sanatçılar
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentPage("login")}>
            <LogOut size={20} className="text-[#d1a0a0] mb-1" />
            <span className="text-xs text-[#d1a0a0]">Çıkış Yap</span>
          </div>
        </div>
      )}

      {/* Ana ekran çizgisi */}
      {currentPage !== "login" && currentPage !== "splash" && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-[#4a1a1f] rounded-full z-50"></div>
      )}
    </div>
  )
}

