import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Image from "next/image";

// image
import TopNewsImg from "@/assets/news1.png";
import topimg2 from "@/assets/topimg2.png";
import Grid from "@mui/material/Grid";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNews = async () => {
  // TODO: fetch data and show those card in map

  const { data } = await getAllNews();
  console.log(data);

  return (
    <Box className="my-5">
      <Link href={`/${data[0].category.toLowerCase()}/${data[0]._id}`}>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image
                src={data[0].thumbnail_url}
                alt="top-news"
                width={800}
                height={100}
              />
            </CardMedia>
            <CardContent>
              <p className="px-2 py-1 w-[100px] rounded-sm text-center text-sm bg-red-600 text-white">
                {data[0].category}
              </p>
              <Typography gutterBottom variant="h5" component="div">
                {data[0].title}
              </Typography>
              <Typography gutterBottom className="my-3 text-sm">
                By {data[0].author.name} - {data[0].author.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data[0].details.length > 200
                  ? data[0].details.slice(0, 200) + "..."
                  : data[0].details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      {/* bottom card */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="mt-5"
      >
        {data.slice(0, 4).map((news) => (
          <Grid key={news._id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "200px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      alt="top-news"
                      width={800}
                      height={100}
                    />
                  </CardMedia>
                  <CardContent>
                    <p className="px-2 py-1 w-[100px] rounded-sm text-center text-sm bg-red-600 text-white">
                      {news.category}
                    </p>
                    <Typography gutterBottom>{news.title}</Typography>
                    <Typography gutterBottom className="my-3 text-sm">
                      By {news.author.name} -{news.author.published_date}
                    </Typography>
                    <Typography className="text-sm">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
