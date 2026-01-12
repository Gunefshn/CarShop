🚗 CarShop – React Native Car Listing App
Amaç; React Native ekosisteminde modern araçlar kullanarak, gerçek bir mobil uygulama senaryosunu **bileşen bazlı, ölçeklenebilir ve platform uyumlu** şekilde geliştirmektir.

---

## 🚀 Kullanılan Teknolojiler

- **React Native**
- **TypeScript**
- **Expo (Expo Router)**
- **NativeWind (Tailwind CSS)**
- **React Query (@tanstack/react-query)**
- **Safe Area Context**

---

## 📱 Uygulama Özellikleri

- iOS & Android uyumlu mobil arayüz
- Expo Router ile sayfa yapısı
- NativeWind ile tamamen utility-first stil yaklaşımı
- React Query (`useQuery`) ile veri yönetimi
- Yatay marka listesi (BrandList)
- Popüler araçlar grid görünümü
- Bileşen bazlı mimari yapı

---

## 🧩 Proje Yapısı
app/
 ├─ (tabs)/
 │   ├─ index.tsx
 │   ├─ basket.tsx
 │   ├─ favorites.tsx
 │   └─ settings.tsx
 ├─ details.tsx
 └─ _layout.tsx

components/
 ├─ Header.tsx
 ├─ SearchInput.tsx
 ├─ BrandCard.tsx
 ├─ CarCard.tsx
 └─ Container.tsx

hooks/
 ├─ useCars.ts
 └─ useBrands.ts

data/
 ├─ cars.ts
 └─ brands.ts

assets/
 ├─ carImages
 └─ carLogos

 
🔄 Veri Yönetimi
Araç ve marka verileri React Query (useQuery) kullanılarak çekilmektedir.

Veri katmanı useCars ve useBrands custom hook’ları ile soyutlanmıştır.

UI bileşenleri, veri kaynağından bağımsız şekilde yapılandırılmıştır.


🖼️ Ekranlar
Header (Kullanıcı bilgisi)

Search input

Marka filtreleme alanı

“Popular Car” listesi (2 kolon grid)

Detay sayfası (geliştirilebilir)


⚙️ Kurulum
npx rn-new@latest carshop --expo-router --nativewind
cd carshop
npm install
npm i nativewind@4.2.1
npm start


🌐 Web Desteği
app.json dosyasında:
"platforms": ["ios", "android", "web"]


🎯 Kazanımlar
React Native’de component-driven mimari

React Query ile asenkron veri yönetimi

NativeWind ile mobilde Tailwind yaklaşımı

Gerçek proje ölçeğinde dosya organizasyonu

iOS & Android uyumlu UI geliştirme
