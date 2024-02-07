import {
  Movie,
  DrawOutlined,
  EmergencyRecordingOutlined,
  GroupsOutlined,
  SettingsApplicationsOutlined,
  ArtTrackOutlined,
  AutoFixHighOutlined,
  Groups2Outlined,
  CameraEnhanceTwoTone,
  Groups,
  VolumeUp,
  LightModeTwoTone,
  RecordVoiceOverTwoTone,
  AccessibilityTwoTone,
  WcTwoTone,
  MusicNoteTwoTone,
  CameraIndoorTwoTone,
  LocationCityTwoTone,
  DirectionsCarTwoTone,
  LiveTvTwoTone,
  ComputerTwoTone,
  LocalMoviesTwoTone,
  CameraOutdoorTwoTone,
  HomeRepairServiceTwoTone,
  AppRegistrationTwoTone,
  PhotoSizeSelectActualTwoTone,
  LocalShippingTwoTone,
  FoodBankTwoTone,
  ConstructionTwoTone,
  HeadphonesBatteryTwoTone,
  MosqueTwoTone,
  EditNoteTwoTone,
  MuseumTwoTone,
  BrushTwoTone,
  SecurityTwoTone,
  GavelTwoTone,
  DryCleaningTwoTone,
  CardTravelTwoTone,
  TwoWheelerTwoTone,
  SportsMmaTwoTone,
  AirportShuttleTwoTone,
  ApartmentTwoTone,
  SanitizerTwoTone,
  CleaningServicesTwoTone,
} from "@mui/icons-material";

export const CategoriesJSON = {
  teams: {
    CategoryTitle: "EKİPLER",
    SubCategories: [
      {
        subCategoryTitle: "Yönetmen",
        icon: <Movie />,
        urlPath: "/teams/director",
        id: "teams-director",
      },
      {
        subCategoryTitle: "Senarist",
        icon: <DrawOutlined />,
        urlPath: "/teams/script-writer",
        id: "teams-script-writer",
      },
      {
        subCategoryTitle: "Görüntü yönetmeni",
        icon: <EmergencyRecordingOutlined />,
        urlPath: "/teams/director-of-photography",
        id: "teams-director-of-photography",
      },
      {
        subCategoryTitle: "Genel koordinatör",
        icon: <GroupsOutlined />,
        urlPath: "/teams/general_coordinator",
        id: "teams-general_coordinator",
      },
      {
        subCategoryTitle: "Uygulayıcı yapımcı",
        icon: <SettingsApplicationsOutlined />,
        urlPath: "/teams/practitioner-producer",
        id: "teams-practitioner-producer",
      },
      {
        subCategoryTitle: "Sanat yönetmeni",
        icon: <ArtTrackOutlined />,
        urlPath: "/teams/art-director",
        id: "teams-art-director",
      },
      {
        subCategoryTitle: "Kurgu yönetmeni",
        icon: <AutoFixHighOutlined />,
        urlPath: "/teams/editing-director",
        id: "teams-editing-director",
      },
      {
        subCategoryTitle: "Reji ekibi",
        icon: <Groups2Outlined />,
        urlPath: "/teams/directing-team",
        id: "teams-directing-team",
      },
      {
        subCategoryTitle: "Yapım ekibi",
        icon: <Groups2Outlined />,
        urlPath: "/teams/production-team",
        id: "teams-production-team",
      },
      {
        subCategoryTitle: "Sanat ekibi",
        icon: <Groups2Outlined />,
        urlPath: "/teams/art-team",
        id: "teams-art-team",
      },
      {
        subCategoryTitle: "Kostüm ekibi",
        icon: <Groups2Outlined />,
        urlPath: "/teams/costume-team",
        id: "teams-costume-team",
      },
      {
        subCategoryTitle: "Kamera ekibi",
        icon: <CameraEnhanceTwoTone />,
        urlPath: "/teams/camera-team",
        id: "teams-camera-team",
      },
      {
        subCategoryTitle: "Işık ekibi",
        icon: <LightModeTwoTone />,
        urlPath: "/teams/light-team",
        id: "teams-light-team",
      },
      {
        subCategoryTitle: "Set ekibi",
        icon: <Groups />,
        urlPath: "/teams/set-team",
        id: "teams-set-team",
      },
      {
        subCategoryTitle: "Ses ekibi",
        icon: <VolumeUp />,
        urlPath: "/teams/sound-team",
        id: "teams-sound-team",
      },
      {
        subCategoryTitle: "Makyöz",
        icon: <Groups2Outlined />,
        urlPath: "/teams/make-up-artist",
        id: "teams-make-up-artist",
      },
      {
        subCategoryTitle: "Kuaför",
        icon: <Groups2Outlined />,
        urlPath: "/teams/hairdresser",
        id: "teams-hairdresser",
      },
    ],
  },
  artists: {
    CategoryTitle: "SANATÇILAR",
    SubCategories: [
      {
        subCategoryTitle: "Oyuncular",
        icon: <Movie />,
        urlPath: "/artists/artists-movie-actors",
        id: "artists-movie-actors",
      },
      {
        subCategoryTitle: "Seslendirme Sanatçıları",
        icon: <RecordVoiceOverTwoTone />,
        urlPath: "/artists/artists-voice-actors",
        id: "artists-voice-actors",
      },
      {
        subCategoryTitle: "Dansçılar",
        icon: <AccessibilityTwoTone />,
        urlPath: "/artists/artists-dancers",
        id: "artists-dancers",
      },
      {
        subCategoryTitle: "Modeller",
        icon: <WcTwoTone />,
        urlPath: "/artists/artists-models",
        id: "artists-models",
      },
      {
        subCategoryTitle: "Müzisyenler",
        icon: <MusicNoteTwoTone />,
        urlPath: "/artists/artists-musicians",
        id: "artists-musicians",
      },
    ],
  },
  agencies: {
    CategoryTitle: "AJANSLAR",
    SubCategories: [
      {
        subCategoryTitle: "Oyuncu Ajansları",
        icon: <Movie />,
        urlPath: "/agencies/actor-agencies",
        id: "agencies-actor-agencies",
      },
      {
        subCategoryTitle: "Cast Ajansları",
        icon: <WcTwoTone />,
        urlPath: "/agencies/casting-agencies",
        id: "/agencies/casting-agencies",
      },
      {
        subCategoryTitle: "Eğitim Kurumları",
        icon: <CameraIndoorTwoTone />,
        urlPath: "/agencies/educational-institutions",
        id: "agencies-educational-institutions",
      },
      {
        subCategoryTitle: "Menajerler",
        icon: <WcTwoTone />,
        urlPath: "/agencies/managers",
        id: "agencies-managers",
      },
    ],
  },
  companies: {
    CategoryTitle: "FİRMALAR",
    SubCategories: [
      {
        subCategoryTitle: "Yapımcı",
        icon: <Movie />,
        urlPath: "/companies/movie-actors",
        id: "companies-movie-actors",
      },
      {
        subCategoryTitle: "Tv Kanalı",
        icon: <LiveTvTwoTone />,
        urlPath: "/companies/movie-tv-channel",
        id: "companies-movie-tv-channel",
      },
      {
        subCategoryTitle: "Post Prodüksiyon",
        icon: <ComputerTwoTone />,
        urlPath: "/companies/post-production",
        id: "companies-post-production",
      },
      {
        subCategoryTitle: "Dijital Platform",
        icon: <ComputerTwoTone />,
        urlPath: "/companies/digital-platform",
        id: "companies-digital-platform",
      },
      {
        subCategoryTitle: "Reklam Ajansı",
        icon: <ComputerTwoTone />,
        urlPath: "/companies/advertising-agency",
        id: "companies-advertising-agency",
      },
      {
        subCategoryTitle: "Film Dağıtım",
        icon: <LocalMoviesTwoTone />,
        urlPath: "/companies/movie-distribution",
        id: "companies-movie-distribution",
      },
      {
        subCategoryTitle: "Film-Müzik Yapım",
        icon: <LocalMoviesTwoTone />,
        urlPath: "/companies/film-music-production",
        id: "companies-film-music-production",
      },
      {
        subCategoryTitle: "Film Platosu & Stüdyo",
        icon: <CameraOutdoorTwoTone />,
        urlPath: "/companies/film-set-studio",
        id: "companies-film-set-studio",
      },
      {
        subCategoryTitle: "Teknik Ekipman Kiralama",
        icon: <HomeRepairServiceTwoTone />,
        urlPath: "/companies/technical-Equipment-Rental",
        id: "companies-technical-equipment-rental",
      },
      {
        subCategoryTitle: "Medya Planlama",
        icon: <AppRegistrationTwoTone />,
        urlPath: "/companies/media-planning",
        id: "companies-media-planning",
      },
      {
        subCategoryTitle: "Görüntü Stili",
        icon: <PhotoSizeSelectActualTwoTone />,
        urlPath: "/companies/image-style",
        id: "companies-image-style",
      },
      {
        subCategoryTitle: "Mekanlar & Emlak",
        icon: <LocationCityTwoTone />,
        urlPath: "/companies/venues-real-estate",
        id: "companies-venues-real-estate",
      },
      {
        subCategoryTitle: "Araç Kiralama",
        icon: <DirectionsCarTwoTone />,
        urlPath: "/companies/rent-a-car",
        id: "companies-rent-a-car",
      },
      {
        subCategoryTitle: "Karavan Kiralama",
        icon: <LocalShippingTwoTone />,
        urlPath: "/companies/caravan-rental",
        id: "companies-caravan-rental",
      },
      {
        subCategoryTitle: "Yemek Servisi",
        icon: <FoodBankTwoTone />,
        urlPath: "/companies/catering",
        id: "companies-catering",
      },
      {
        subCategoryTitle: "Ahşap Ürünler & Marangoz",
        icon: <ConstructionTwoTone />,
        urlPath: "/companies/wood-products-carpenter",
        id: "companies-wood-products-carpenter",
      },
      {
        subCategoryTitle: "Aksesuar Firması",
        icon: <HeadphonesBatteryTwoTone />,
        urlPath: "/companies/accessory-company",
        id: "companies-accessory-company",
      },
      {
        subCategoryTitle: "Antika & Tarihi Eser",
        icon: <MosqueTwoTone />,
        urlPath: "/companies/antique-historical-artifact",
        id: "companies-antique-historical-artifact",
      },
      {
        subCategoryTitle: "Kırtasiye",
        icon: <EditNoteTwoTone />,
        urlPath: "/companies/stationery",
        id: "companies-stationery",
      },
      {
        subCategoryTitle: "Çeviri Bürosu",
        icon: <MuseumTwoTone />,
        urlPath: "/companies/translation-office",
        id: "companies-translation-office",
      },
      {
        subCategoryTitle: "El Sanatları",
        icon: <BrushTwoTone />,
        urlPath: "/companies/handicrafts",
        id: "companies-handicrafts",
      },
      {
        subCategoryTitle: "Güvenlik Firması",
        icon: <SecurityTwoTone />,
        urlPath: "/companies/security-firm",
        id: "companies-security-firm",
      },
      {
        subCategoryTitle: "Hukuk Bürosu",
        icon: <GavelTwoTone />,
        urlPath: "/companies/law-office",
        id: "companies-law-office",
      },
      {
        subCategoryTitle: "Kargo",
        icon: <LocalShippingTwoTone />,
        urlPath: "/companies/cargo",
        id: "companies-cargo",
      },
      {
        subCategoryTitle: "Klasik Araçlar",
        icon: <DirectionsCarTwoTone />,
        urlPath: "/companies/classic-vehicles",
        id: "companies-classic-vehicles",
      },
      {
        subCategoryTitle: "Kuru Temizleme",
        icon: <DryCleaningTwoTone />,
        urlPath: "/companies/dry-cleaner",
        id: "companies-dry-cleaner",
      },
      {
        subCategoryTitle: "Mali Müşavir & Muhasebe Bürosu",
        icon: <CardTravelTwoTone />,
        urlPath: "/companies/financial-advisor-accounting-office",
        id: "companies-financial-advisor-accounting-office",
      },
      {
        subCategoryTitle: "Özel Güvenlik",
        icon: <SecurityTwoTone />,
        urlPath: "/companies/private-security",
        id: "companies-private-security",
      },
      {
        subCategoryTitle: "Modifiye Araçlar",
        icon: <DirectionsCarTwoTone />,
        urlPath: "/companies/modified-vehicles",
        id: "companies-modified-vehicles",
      },
      {
        subCategoryTitle: "Modifiye Motorlar",
        icon: <TwoWheelerTwoTone />,
        urlPath: "/companies/modified-motorcycles",
        id: "companies-modified-motorcycles",
      },
      {
        subCategoryTitle: "Sarf Malzeme",
        icon: <SportsMmaTwoTone />,
        urlPath: "/companies/supplies",
        id: "companies-supplies",
      },
      {
        subCategoryTitle: "Servis Taşımacılık",
        icon: <AirportShuttleTwoTone />,
        urlPath: "/companies/service-transportation",
        id: "companies-service-transportation",
      },
      {
        subCategoryTitle: "Sigorta Firması",
        icon: <ApartmentTwoTone />,
        urlPath: "/companies/insurance-company",
        id: "companies-insurance-company",
      },
      {
        subCategoryTitle: "Teknik Malzeme",
        icon: <HomeRepairServiceTwoTone />,
        urlPath: "/companies/technical-equipment",
        id: "companies-technical-equipment",
      },
      {
        subCategoryTitle: "Temizlik Firması",
        icon: <SanitizerTwoTone />,
        urlPath: "/companies/cleaning-company",
        id: "companies-cleaning-company",
      },
      {
        subCategoryTitle: "Temizlik Malzemesi",
        icon: <CleaningServicesTwoTone />,
        urlPath: "/companies/cleaning-materials",
        id: "companies-cleaning-materials",
      },
    ],
  },
  jobs: {
    CategoryTitle: "İŞ İLANLARI",
    SubCategories: [
      {
        subCategoryTitle: "Personel Ara",
        icon: <WcTwoTone />,
        urlPath: "/jobs/search-for-staff",
        id: "jobs-search-for-staff",
      },
      {
        subCategoryTitle: "İş Ara",
        icon: <Movie />,
        urlPath: "/jobs/look-for-a-job",
        id: "jobs-look-for-a-job",
      },
      {
        subCategoryTitle: "Mekan Kiralama",
        icon: <LocationCityTwoTone />,
        urlPath: "/jobs/venue-rental",
        id: "jobs-venue-rental",
      },
      {
        subCategoryTitle: "Mekan Kiraya Ver",
        icon: <LocationCityTwoTone />,
        urlPath: "/jobs/rent-a-venue",
        id: "jobs-rent-a-venue",
      },
      {
        subCategoryTitle: "Araç Kiralama",
        icon: <DirectionsCarTwoTone />,
        urlPath: "/jobs/rent-a-car",
        id: "jobs-rent-a-car",
      },
      {
        subCategoryTitle: "Araç Kiraya Ver",
        icon: <DirectionsCarTwoTone />,
        urlPath: "/jobs/rent-a-car",
        id: "jobs-rent-a-car",
      },
    ],
  },
};
