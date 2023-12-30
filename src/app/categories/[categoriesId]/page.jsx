import { getCategoryNews } from "@/utils/getCategoryNews";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const DynamicPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div className="my-5">
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}
      </h1>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="mt-5"
      >
        {data.map((news) => (
          <Grid key={news._id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia sx={{
                  "& img" : {
                    width: '100%',
                    height: '200px'
                  }
                }}>
                  <Image src={news.thumbnail_url} alt="top-news" width={800} height={100} />
                </CardMedia>
                <CardContent>
                  <span className="px-2 my-3 rounded  bg-red-600 text-white">
               {news.category}
              </span>
                  <Typography gutterBottom variant="h-6" className="ml-2">
                 {news.title.length >30 ? news.title.slice(0,30)+ "....": news.title}
                  </Typography>
                  <Typography gutterBottom className="my-3 text-sm">
                    By {news.author.name} - {news.author. published_date}
                  </Typography>
                  <Typography className="text-sm">
                {news.details.length > 200 ? news.details.slice(0,200)+"..." : news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicPage;
