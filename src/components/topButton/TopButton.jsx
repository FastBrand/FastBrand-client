import { styled } from "@mui/material/styles";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledFab = styled(Fab)({
  position: "fixed",
  bottom: "1.5rem",
  right: "1.5rem",
  backgroundColor: "#0992E3",
  "&:hover": {
    backgroundColor: "#0992E3",
  },
});

const TopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledFab color="primary" aria-label="scroll to top" onClick={handleClick}>
      <KeyboardArrowUpIcon />
    </StyledFab>
  );
};
export default TopButton;
