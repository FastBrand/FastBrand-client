import { styled } from "@mui/material/styles";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledFab = styled(Fab)({
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  backgroundColor: "#CBA585",
  "&:hover": {
    backgroundColor: "#CBA585",
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
