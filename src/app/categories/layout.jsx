import CategoryList from "@/components/ui/CategoryList/CategoryList";
import Box from "@mui/material/Box";
import  Container from "@mui/material/Container";
import Grid  from "@mui/material/Grid";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CategoryList />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
