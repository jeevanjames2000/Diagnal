import { Grid2, Typography } from "@mui/material";
const ContentList = ({ filteredData }) => {
  return (
    <Grid2 container spacing={2}>
      {filteredData.map((item, index) => {
        const posterImage = item["poster-image"];
        const hasImage = posterImage && posterImage.trim() !== "";
        return (
          <Grid2 item size={{ xs: 4 }} key={index}>
            {hasImage ? (
              <img
                src={`https://test.create.diagnal.com/images/${posterImage}`}
                alt={item.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.parentNode.style.backgroundColor = "#333";
                  e.target.parentNode.style.height = "100%";
                  e.target.parentNode.innerHTML = `<div style='color:#fff; text-align:center; padding: 20px;'>${item.name}</div>`;
                }}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "#333",
                  width: "100%",
                  height: "10rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {item.name}
                </Typography>
              </div>
            )}
            <Typography
              variant="subtitle2"
              sx={{
                color: "#fff",
                textAlign: "center",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                maxWidth: "100%",
                marginTop: "8px",
              }}
            >
              {item.name}
            </Typography>
          </Grid2>
        );
      })}
    </Grid2>
  );
};
export default ContentList;
