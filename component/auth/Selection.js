import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CategoriesJSON } from "@/constants/Categories";

export default function BasicSelect({ personal, setSelectedUserRole }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  // Birincil kategori değişikliği için işleyici
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSubCategories(CategoriesJSON[category]?.SubCategories || []);
  };

  // Alt kategori değişikliği için işleyici
  const handleSubCategoryChange = (event) => {
    console.log(event.target.value);
    setSelectedUserRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mt: 1 }}>
      {/* Bireysel veya Kurumsal seçeneğini kontrol eden Select */}
      {personal && (
        <FormControl fullWidth>
          <InputLabel id="sub-category-label">Rol</InputLabel>
          <Select
            labelId="sub-category-label"
            id="sub-category-select"
            value={selectedUserRole}
            onChange={handleSubCategoryChange}
            label="Rol"
          >
            {CategoriesJSON.artists.SubCategories.map((subCategory) => (
              <MenuItem key={subCategory.id} value={subCategory.id}>
                {subCategory.subCategoryTitle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Kurumsal seçildiğinde Kategorileri göster */}
      {!personal && (
        <FormControl fullWidth>
          <InputLabel id="category-label">Kategoriler</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Kategoriler"
          >
            {Object.keys(CategoriesJSON)
              .filter((c) => c !== "artists")
              .map((category) => (
                <MenuItem key={category} value={category}>
                  {CategoriesJSON[category].CategoryTitle}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}

      {/* Seçilen kategoriye göre alt kategorileri göster */}
      {!personal && selectedCategory && (
        <FormControl fullWidth>
          <InputLabel sx={{ mt: 2 }} id="sub-category-label">
            Alt Kategoriler
          </InputLabel>
          <Select
            sx={{ mt: 2 }}
            labelId="sub-category-label"
            id="sub-category-select"
            value={selectedUserRole}
            onChange={handleSubCategoryChange}
            label="Alt Kategoriler"
          >
            {subCategories.map((subCategory) => (
              <MenuItem key={subCategory.id} value={subCategory.id}>
                {subCategory.subCategoryTitle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
}
