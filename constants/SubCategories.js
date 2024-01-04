import MovieIcon from '@mui/icons-material/Movie';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import EmergencyRecordingOutlinedIcon from '@mui/icons-material/EmergencyRecordingOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

export const SubCategoriesJSON = {
    teams : {
        CategoryTitle : "EKİPLER",
        SubCategories:[
            { title: "Yönetmen", icon: <MovieIcon />, urlPath:"pathExample" },
            { title: "Senarist", icon: <DrawOutlinedIcon /> },
            { title: "Görüntü yönetmeni", icon: <EmergencyRecordingOutlinedIcon /> },
            { title: "Genel koordinatör", icon: <GroupsOutlinedIcon /> },
            { title: "Uygulayıcı yapımcı", icon: <SettingsApplicationsOutlinedIcon /> },
            { title: "Sanat yönetmeni", icon: <ArtTrackOutlinedIcon /> },
            { title: "Kurgu yönetmeni", icon: <AutoFixHighOutlinedIcon /> },
            { title: "Reji ekibi", icon: <Groups2OutlinedIcon /> },
        ]
    },
    artists : {
        CategoryTitle : "SANATÇILAR",
        SubCategories:[
            { title: "Oyuncular", icon: <MovieIcon /> }
        ]
    },
    agencies : {
        CategoryTitle : "AJANSLAR",
        SubCategories:[
            { title: "Oyuncu ajanslari", icon: <MovieIcon /> }
        ]
    },
    companies : {
        CategoryTitle : "FİRMALAR",
        SubCategories:[
            { title: "Araba kiralama", icon: <MovieIcon /> }
        ]
    },
}