import React from "react";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const SearchBar = () => {
  const [category, setCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "5px",
        padding: "30px",
      }}
      className="margin-x-auto w-[50%]"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            id="search-field"
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="search"
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            maxwidth="true"
            endAdornment={
              <InputAdornment position="end">
                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  IconComponent={ArrowDropDownIcon}
                  sx={{
                    width: "170px",
                    paddingRight: "8px",
                    border: "none",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                  native
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {/* Add more categories as needed */}
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                </Select>
              </InputAdornment>
            }
            sx={{
              height: "48px",
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{
            marginLeft: "8px",
            height: "48px",
          }}
          className="px-8 bg-[#553c9a]"
        >
          Search
        </Button>
      </Box>
    </Paper>
  );
};

export default SearchBar;
