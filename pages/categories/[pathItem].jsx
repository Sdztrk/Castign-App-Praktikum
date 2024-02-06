import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import SubCategory from "@/component/cards/SubCategoryCard";
import ProductCard from "@/component/cards/ProductCard";
import { CategoriesJSON } from "@/constants/Categories";
import API from "@/helpers/ApiBuilder";
import AppContext from "@/AppContext";
import Cookies from "js-cookie";

const Teams = () => {
  const { query } = useRouter();
  const subCategoryPathItem = query.pathItem;
  const category = CategoriesJSON[subCategoryPathItem];
  const [activeSubCategory, setActiveSubCategory] = useState("");
  const [profiles, setProfiles] = useState(null);
  const { userInfo } = useContext(AppContext);

  useEffect(() => {
    console.log(userInfo);
    if (userInfo.user === null) {
      return;
    }
    if (!userInfo.loggedIn) {
      router.push("/login");
      return;
    }
    if (category && category.SubCategories.length > 0) {
      setActiveSubCategory(category.SubCategories[0].subCategoryTitle);
    }
  }, [category]);

  const handleSubCategoryClick = async (id) => {
    setActiveSubCategory((prevTitle) => (prevTitle === id ? "" : id));

    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      try {
        const response = await API.get(
          `get_artist_profiles_by_user_role/${id}/`,
          accessToken
        );
        console.log(response);
        if (response && response.data) {
          console.log(response.data);
          setProfiles(response.data);
        }
      } catch (error) {
        console.error("Profil bilgisi yüklenirken bir hata oluştu:", error);
      }
    }
  };
  if (!category?.CategoryTitle) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <Typography
        style={{
          marginTop: "95px",
          textAlign: "center",
          fontSize: "4.5rem",
          fontFamily: "Varela Round",
        }}
        sx={{ marginTop: "85px" }}
      >
        {category.CategoryTitle}
      </Typography>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          m: "10px",
          justifyContent: "center",
          alignItems: "center",
          mt: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            m: "20px",
            justifyContent: "center",
          }}
        >
          {category.SubCategories.map((subCategory, index) => (
            <SubCategory
              key={index}
              {...subCategory}
              onClick={handleSubCategoryClick}
              isActive={activeSubCategory === subCategory.id}
            />
          ))}
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {profiles && (
            <>
              {profiles.map((profile, index) => (
                <Box key={index} sx={{ mr: "30px" }}>
                  <ProductCard
                    cardTitle={`${profile.first_name} ${profile.last_name}`}
                    cardDescription={profile.introduction}
                  />
                </Box>
              ))}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Teams;
