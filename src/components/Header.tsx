import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../features/language/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (path: string) => {
    if (path === "#contact") {
      setTimeout(() => {
        const el = document.getElementById("contact-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }

    handleClose();
  };
  const menuItems = [
    { label: t("mainButton"), path: "/" },
    { label: t("appointment"), path: "/appointment" },
    { label: t("contactButton"), path: "#contact" },
    { label: t("staffButton"), path: "/employees" },
    { label: t("treatmentsButton"), path: "/treatments" },
    { label: t("hearingaid.title"), path: "/hearingaid" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <MenuItem onClick={() => handleNavigate("/")}>
          <img
            src="/logo.webp"
            alt="Stavanger ØNH"
            style={{ height: "70px" }}
          />
        </MenuItem>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              color="inherit"
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
