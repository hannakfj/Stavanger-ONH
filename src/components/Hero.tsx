import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "../features/language/useTranslation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return (
    <Box
      ref={ref}
      sx={{
        height: { xs: "200px", sm: "300px", md: "400px" },
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundSize: "cover",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
          backgroundImage: "url('/katle.jpeg')",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <motion.div style={{ y, width: "100%" }}>
        <Typography
          variant="h3"
          component="h1"
          color="#074974"
          sx={{
            fontSize: { xs: "1.5rem", md: "3.5rem" },
            fontWeight: "bold",
            px: 2,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        >
          {t("welcome")}
          {isXs && <br />}
          {t("sonh")}
        </Typography>
      </motion.div>
    </Box>
  );
}
export default Hero;
