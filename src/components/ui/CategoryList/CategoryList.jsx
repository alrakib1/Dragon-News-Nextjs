import { getAllCategories } from "@/utils/getAllCategories";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();

  return (
    <Box className="mt-5  bg-gray-100 px-5 py-2">
      <Typography variant="h6">Category list</Typography>
      <Divider />
      <Stack rowGap={1} sx={{ mt: 2.5 }}>
        {allCategories.map((category) => (
          <Button variant="outlined" key={category.id}>
            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>
              {category.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
