import MovieIcon from '@mui/icons-material/Movie';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import EmergencyRecordingOutlinedIcon from '@mui/icons-material/EmergencyRecordingOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import CameraEnhanceTwoToneIcon from '@mui/icons-material/CameraEnhanceTwoTone';
import GroupsIcon from '@mui/icons-material/Groups';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import RecordVoiceOverTwoToneIcon from '@mui/icons-material/RecordVoiceOverTwoTone';
import AccessibilityTwoToneIcon from '@mui/icons-material/AccessibilityTwoTone';
import WcTwoToneIcon from '@mui/icons-material/WcTwoTone';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import CameraIndoorTwoToneIcon from '@mui/icons-material/CameraIndoorTwoTone';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import DirectionsCarTwoToneIcon from '@mui/icons-material/DirectionsCarTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import LocalMoviesTwoToneIcon from '@mui/icons-material/LocalMoviesTwoTone';
import CameraOutdoorTwoToneIcon from '@mui/icons-material/CameraOutdoorTwoTone';
import HomeRepairServiceTwoToneIcon from '@mui/icons-material/HomeRepairServiceTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import FoodBankTwoToneIcon from '@mui/icons-material/FoodBankTwoTone';
import ConstructionTwoToneIcon from '@mui/icons-material/ConstructionTwoTone';
import HeadphonesBatteryTwoToneIcon from '@mui/icons-material/HeadphonesBatteryTwoTone';
import MosqueTwoToneIcon from '@mui/icons-material/MosqueTwoTone';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import MuseumTwoToneIcon from '@mui/icons-material/MuseumTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import GavelTwoToneIcon from '@mui/icons-material/GavelTwoTone';
import DryCleaningTwoToneIcon from '@mui/icons-material/DryCleaningTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import TwoWheelerTwoToneIcon from '@mui/icons-material/TwoWheelerTwoTone';
import SportsMmaTwoToneIcon from '@mui/icons-material/SportsMmaTwoTone';
import AirportShuttleTwoToneIcon from '@mui/icons-material/AirportShuttleTwoTone';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';
import SanitizerTwoToneIcon from '@mui/icons-material/SanitizerTwoTone';
import CleaningServicesTwoToneIcon from '@mui/icons-material/CleaningServicesTwoTone';

export const CategoriesJSON = {
    teams : {
        CategoryTitle : "EKİPLER",
        SubCategories:[
            { subCategoryTitle: "Yönetmen", icon: <MovieIcon />, urlPath:"/cards/director" },
            { subCategoryTitle: "Senarist", icon: <DrawOutlinedIcon />, urlPath:"/cards/script-writer" },
            { subCategoryTitle: "Görüntü yönetmeni", icon: <EmergencyRecordingOutlinedIcon />, urlPath:"/cards/director-of-photography" },
            { subCategoryTitle: "Genel koordinatör", icon: <GroupsOutlinedIcon />, urlPath:"/cards/general_coordinator" },
            { subCategoryTitle: "Uygulayıcı yapımcı", icon: <SettingsApplicationsOutlinedIcon />, urlPath:"/cards/practitioner-producer" },
            { subCategoryTitle: "Sanat yönetmeni", icon: <ArtTrackOutlinedIcon />, urlPath:"/cards/art-director" },
            { subCategoryTitle: "Kurgu yönetmeni", icon: <AutoFixHighOutlinedIcon />, urlPath:"/cards/editing-director" },
            { subCategoryTitle: "Reji ekibi", icon: <Groups2OutlinedIcon />, urlPath:"/cards/directing-team" },
            { subCategoryTitle: "Yapım ekibi", icon: <Groups2OutlinedIcon />, urlPath:"/cards/production-team" },
            { subCategoryTitle: "Sanat ekibi", icon: <Groups2OutlinedIcon />, urlPath:"/cards/art-team" },
            { subCategoryTitle: "Kostüm ekibi", icon: <Groups2OutlinedIcon />, urlPath:"/cards/costume-team" },
            { subCategoryTitle: "Kamera ekibi", icon: <CameraEnhanceTwoToneIcon />, urlPath:"/cards/camera-team" },
            { subCategoryTitle: "Işık ekibi", icon: <LightModeTwoToneIcon />, urlPath:"/cards/light-team" },
            { subCategoryTitle: "Set ekibi", icon: <GroupsIcon />, urlPath:"/cards/set-team" },
            { subCategoryTitle: "Ses ekibi", icon: <VolumeUpIcon />, urlPath:"/cards/sound-team" },
            { subCategoryTitle: "Makyöz", icon: <Groups2OutlinedIcon />, urlPath:"/cards/make-up-artist" },
            { subCategoryTitle: "Kuaför", icon: <Groups2OutlinedIcon />, urlPath:"/cards/hairdresser" },
        ]
    },
    artists : {
        CategoryTitle : "SANATÇILAR",
        SubCategories:[
            { subCategoryTitle: "Oyuncular", icon: <MovieIcon />, urlPath:"/artists/movie-actors"  },
            { subCategoryTitle: "Seslendirme Sanatçıları", icon: <RecordVoiceOverTwoToneIcon />, urlPath:"/artists/voice-actors"  },
            { subCategoryTitle: "Dansçılar", icon: <AccessibilityTwoToneIcon />, urlPath:"/artists/dancers"  },
            { subCategoryTitle: "Modeller", icon: <WcTwoToneIcon />, urlPath:"/artists/models"  },
            { subCategoryTitle: "Müzisyenler", icon: <MusicNoteTwoToneIcon />, urlPath:"/artists/musicians"  },
        ]
    },
    agencies : {
        CategoryTitle : "AJANSLAR",
        SubCategories:[
            { subCategoryTitle: "Oyuncu Ajansları", icon: <MovieIcon />, urlPath:"/agencies/actor-agencies" },
            { subCategoryTitle: "Cast Ajansları", icon: <WcTwoToneIcon />, urlPath:"/agencies/casting-agencies"  },
            { subCategoryTitle: "Eğitim Kurumları", icon: <CameraIndoorTwoToneIcon />, urlPath:"/agencies/educational-institutions"  },
            { subCategoryTitle: "Menajerler", icon: <WcTwoToneIcon />,urlPath:"/agencies/managers" },
        ]
    },
    companies : {
        CategoryTitle : "FİRMALAR",
        SubCategories:[
            { subCategoryTitle: "Yapımcı", icon: <MovieIcon />, urlPath:"/companies/movie-actors"  },
            { subCategoryTitle: "Tv Kanalı", icon: <LiveTvTwoToneIcon />, urlPath:"/companies/movie-tv-channel"  },
            { subCategoryTitle: "Post Prodüksiyon", icon: <ComputerTwoToneIcon />, urlPath:"/companies/post-production"  },
            { subCategoryTitle: "Dijital Platform", icon: <ComputerTwoToneIcon />, urlPath:"/companies/digital-platform"  },
            { subCategoryTitle: "Reklam Ajansı", icon: <ComputerTwoToneIcon />, urlPath:"/companies/advertising-agency"  },
            { subCategoryTitle: "Film Dağıtım", icon: <LocalMoviesTwoToneIcon />, urlPath:"/companies/movie-distribution"  },
            { subCategoryTitle: "Film-Müzik Yapım", icon: <LocalMoviesTwoToneIcon />, urlPath:"/companies/film-music-production"  },
            { subCategoryTitle: "Film Platosu & Stüdyo", icon: <CameraOutdoorTwoToneIcon />, urlPath:"/companies/film-set-studio"  },
            { subCategoryTitle: "Teknik Ekipman Kiralama", icon: <HomeRepairServiceTwoToneIcon />, urlPath:"/companies/technical-Equipment-Rental"  },
            { subCategoryTitle: "Medya Planlama", icon: <AppRegistrationTwoToneIcon />, urlPath:"/companies/media-planning"  },
            { subCategoryTitle: "Görüntü Stili", icon: <PhotoSizeSelectActualTwoToneIcon />, urlPath:"/companies/image-style"  },
            { subCategoryTitle: "Mekanlar & Emlak", icon: <LocationCityTwoToneIcon />, urlPath:"/companies/venues-real-estate"  },
            { subCategoryTitle: "Araç Kiralama", icon: <DirectionsCarTwoToneIcon />, urlPath:"/companies/rent-a-car"  },
            { subCategoryTitle: "Karavan Kiralama", icon: <LocalShippingTwoToneIcon />, urlPath:"/companies/caravan-rental"  },
            { subCategoryTitle: "Yemek Servisi", icon: <FoodBankTwoToneIcon />, urlPath:"/companies/catering"  },
            { subCategoryTitle: "Ahşap Ürünler & Marangoz", icon: <ConstructionTwoToneIcon />, urlPath:"/companies/wood-products-carpenter"  },
            { subCategoryTitle: "Aksesuar Firması", icon: <HeadphonesBatteryTwoToneIcon/>, urlPath:"/companies/accessory-company"  },
            { subCategoryTitle: "Antika & Tarihi Eser", icon: <MosqueTwoToneIcon/>, urlPath:"/companies/antique-historical-artifact"  },
            { subCategoryTitle: "Kırtasiye", icon: <EditNoteTwoToneIcon/>, urlPath:"/companies/stationery"  },
            { subCategoryTitle: "Çeviri Bürosu", icon: <MuseumTwoToneIcon/>, urlPath:"/companies/translation-office"  },
            { subCategoryTitle: "El Sanatları", icon: <BrushTwoToneIcon/>, urlPath:"/companies/handicrafts"  },
            { subCategoryTitle: "Güvenlik Firması", icon: <SecurityTwoToneIcon/>, urlPath:"/companies/security-firm"  },
            { subCategoryTitle: "Hukuk Bürosu", icon: <GavelTwoToneIcon/>, urlPath:"/companies/law-office"  },
            { subCategoryTitle: "Kargo", icon: <LocalShippingTwoToneIcon/>, urlPath:"/companies/cargo"  },
            { subCategoryTitle: "Klasik Araçlar", icon: <DirectionsCarTwoToneIcon/>, urlPath:"/companies/classic-vehicles"  },
            { subCategoryTitle: "Kuru Temizleme", icon: <DryCleaningTwoToneIcon/>, urlPath:"/companies/dry-cleaner"  },
            { subCategoryTitle: "Mali Müşavir & Muhasebe Bürosu", icon: <CardTravelTwoToneIcon/>, urlPath:"/companies/financial-advisor-accounting-office"  },
            { subCategoryTitle: "Özel Güvenlik", icon: <SecurityTwoToneIcon/>, urlPath:"/companies/private-security"  },
            { subCategoryTitle: "Modifiye Araçlar", icon: <DirectionsCarTwoToneIcon/>, urlPath:"/companies/modified-vehicles"  },
            { subCategoryTitle: "Modifiye Motorlar", icon: <TwoWheelerTwoToneIcon/>, urlPath:"/companies/modified-motorcycles"  },
            { subCategoryTitle: "Sarf Malzeme", icon: <SportsMmaTwoToneIcon/>, urlPath:"/companies/supplies"  },
            { subCategoryTitle: "Servis Taşımacılık", icon: <AirportShuttleTwoToneIcon/>, urlPath:"/companies/service-transportation"  },
            { subCategoryTitle: "Sigorta Firması", icon: <ApartmentTwoToneIcon/>, urlPath:"/companies/insurance-company"  },
            { subCategoryTitle: "Teknik Malzeme", icon: <HomeRepairServiceTwoToneIcon/>, urlPath:"/companies/technical-equipment"  },
            { subCategoryTitle: "Temizlik Firması", icon: <SanitizerTwoToneIcon/>, urlPath:"/companies/cleaning-company"  },
            { subCategoryTitle: "Temizlik Malzemesi", icon: <CleaningServicesTwoToneIcon/>, urlPath:"/companies/cleaning-materials"  },
           

        ]
    },
    jobPostings : {
        CategoryTitle : "İŞ İLANLARI",
        SubCategories:[
            { subCategoryTitle: "Personel Ara", icon: <WcTwoToneIcon />, urlPath:"/jobPostings/search-for-staff" },
            { subCategoryTitle: "İş Ara", icon: <MovieIcon />, urlPath:"/jobPostings/look-for-a-job" },
            { subCategoryTitle: "Mekan Kiralama", icon: <LocationCityTwoToneIcon />, urlPath:"/jobPostings/venue-rental" },
            { subCategoryTitle: "Mekan Kiraya Ver", icon: <LocationCityTwoToneIcon />, urlPath:"/jobPostings/rent-a-venue" },
            { subCategoryTitle: "Araç Kiralama", icon: <DirectionsCarTwoToneIcon />, urlPath:"/jobPostings/rent-a-car" },
            { subCategoryTitle: "Araç Kiraya Ver", icon: <DirectionsCarTwoToneIcon />, urlPath:"/jobPostings/rent-a-car" },
        ]
    },

}