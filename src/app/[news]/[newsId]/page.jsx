import { getSingleNews } from "@/utils/getSingleNews";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const NewsDetailsPage = async ({ params }) => {
  // console.log(params)
  const { data: news } = await getSingleNews(params.newsId);
  // console.log(data)
  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              alt="news-image"
              width={800}
              height={500}
            />
            <Grid container spacing={2} className="mt-3">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="news-image"
                  width={800}
                  height={500}
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="news-image"
                  width={800}
                  height={500}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                mb: "5px",
                mt: "5px",

              }}
            >
              <Avatar alt="author" src={news.author.img} />
              <Typography>{news.author.name}</Typography>
              <Typography>Published {news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
                color: 'gray'
              }}
            >
              {news.details}
            </Typography>
            <Typography className="mt-8 text-gray-600 text-xl">``Many desktop publishing packages and web page editors now use as their default model text!</Typography>
            <Typography>-- {news.author.name}</Typography>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
