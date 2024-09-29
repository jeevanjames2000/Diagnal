import { Grid2, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ showSearch, query, setQuery, handleSearchClick, title }) => {
  const navigate = useNavigate();

  return (
    <Grid2 container justifyContent="space-between" alignItems="center">
      <Grid2
        item
        size={{ xs: 6 }}
        display="flex"
        alignItems="center"
        gap={2}
        style={{ zIndex: 1 }}
      >
        <img
          src="https://test.create.diagnal.com/images/Back.png"
          onClick={() => navigate("/")}
          alt="back-btn"
          style={{ height: "1.3rem", width: "1.3rem", cursor: "pointer" }}
        />
        {showSearch ? (
          <TextField
            variant="outlined"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
              },
              "& .MuiInputBase-input": {
                color: "#fff",
                padding: "0.5rem 0",
              },
            }}
            autoFocus
          />
        ) : (
          <Typography
            variant="h7"
            style={{
              color: "#fff",
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }}
          >
            {title}
          </Typography>
        )}
      </Grid2>
      <Grid2
        item
        size={{ xs: 4 }}
        display="flex"
        justifyContent="flex-end"
        style={{ zIndex: 1 }}
      >
        <img
          src="https://test.create.diagnal.com/images/search.png"
          alt="search-btn"
          style={{ height: "1.3rem", width: "1.3rem", cursor: "pointer" }}
          onClick={handleSearchClick}
        />
      </Grid2>
    </Grid2>
  );
};

export default Navbar;
