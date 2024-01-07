import MovieIcon from '@mui/icons-material/Movie';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import EmergencyRecordingOutlinedIcon from '@mui/icons-material/EmergencyRecordingOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

export const CategoriesJSON = {
    teams : {
        CategoryTitle : "EKİPLER",
        SubCategories:[
            { subCategoryTitle: "Yönetmen", icon: <MovieIcon />, urlPath:"/cards/director" },
            { subCategoryTitle: "Senarist", icon: <DrawOutlinedIcon />, urlPath:"/cards/script-writer" },
            { subCategoryTitle: "Görüntü yönetmeni", icon: <EmergencyRecordingOutlinedIcon />, urlPath:"/cards/director-of-photography" },
            { subCategoryTitle: "Genel koordinatör", icon: <GroupsOutlinedIcon />, urlPath:"/cards/general_coordinator" },
            { subCategoryTitle: "Uygulayıcı yapımcı", icon: <SettingsApplicationsOutlinedIcon />, urlPath:"/cards/practitioner-producer" },
            { subCategoryTitle: "Sanat yönetmeni", icon: <ArtTrackOutlinedIcon />, urlPath:"/cards/art_director" },
            { subCategoryTitle: "Kurgu yönetmeni", icon: <AutoFixHighOutlinedIcon />, urlPath:"/cards/editing-director" },
            { subCategoryTitle: "Reji ekibi", icon: <Groups2OutlinedIcon />, urlPath:"/cards/directing-team" },
        ]
    },
    artists : {
        CategoryTitle : "SANATÇILAR",
        SubCategories:[
            { subCategoryTitle: "Oyuncular", icon: <MovieIcon />, urlPath:"/artists/movie-actors"  }
        ]
    },
    agencies : {
        CategoryTitle : "AJANSLAR",
        SubCategories:[
            { subCategoryTitle: "Oyuncu ajanslari", icon: <MovieIcon /> }
        ]
    },
    companies : {
        CategoryTitle : "FİRMALAR",
        SubCategories:[
            { subCategoryTitle: "Araba kiralama", icon: <MovieIcon /> }
        ]
    },
}