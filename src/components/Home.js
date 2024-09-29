import { Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [dummy, setDummy] = useState([
    { title: "Romantic Comedy", img: "" },
    { title: "Action", img: "" },
    { title: "Adventure", img: "" },
  ]);

  return (
    <Grid2 container spacing={3} justifyContent="center" alignItems="center">
      {dummy.map((item, index) => (
        <Grid2 item xs={4} key={index} style={{ marginTop: "1rem" }}>
          <div
            style={{
              height: "10rem",
              width: "6rem",
              backgroundColor: "#fff",
              border: "1px solid #fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              navigate("Ott");
            }}
          >
            <Typography
              variant="h6"
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {item.title}
            </Typography>
          </div>
        </Grid2>
      ))}
    </Grid2>
  );
}
