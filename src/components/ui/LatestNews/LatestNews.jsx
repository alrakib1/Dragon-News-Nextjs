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

const LatestNews = () => {
// TODO: fetch data and show those card in map

  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={TopNewsImg} alt="top-news" width={800} />
          </CardMedia>
          <CardContent>
            <p className="px-2 py-1 w-[100px] rounded-sm text-center text-sm bg-red-600 text-white">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3 text-sm">
              By Rakib - Dec 30 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* bottom card */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="mt-5">
        {/* card-1 */}
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topimg2} alt="top-news" width={800} />
              </CardMedia>
              <CardContent>
                {/* <p className="px-2 py-1 w-[100px] rounded-sm text-center text-sm bg-red-600 text-white">
                  Technology
                </p> */}
                <Typography gutterBottom >
                EU’s New Sanctions Aim to Cut Russia Off From World Bank
                </Typography>
                <Typography gutterBottom className="my-3 text-sm">
                By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography className="text-sm">
                It is a long established fact that a reader will be distracted by the readable.....
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* card-2 */}
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topimg2} alt="top-news" width={800} />
              </CardMedia>
              <CardContent>
                {/* <p className="px-2 py-1 w-[100px] rounded-sm text-center text-sm bg-red-600 text-white">
                  Technology
                </p> */}
                <Typography gutterBottom >
                Battle Analysis: Russian Tank Armada vs Ukraine
                </Typography>
                <Typography gutterBottom className="my-3 text-sm">
                By Rakib - Mar 18 2023
                </Typography>
                <Typography className="text-sm">
                It is a long established fact that a reader will be distracted by the readable.....
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* card3 */}
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topimg2} alt="top-news" width={800} />
              </CardMedia>
              <CardContent>
                {/* <p className="px-2 py-1 w-[100px] rounded-sm text-center text-sm bg-red-600 text-white">
                  Technology
                </p> */}
                <Typography gutterBottom >
                EU’s New Sanctions Aim to Cut Russia Off From World Bank
                </Typography>
                <Typography gutterBottom className="my-3 text-sm">
                By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography className="text-sm">
                It is a long established fact that a reader will be distracted by the readable.....
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topimg2} alt="top-news" width={800} />
              </CardMedia>
              <CardContent>
                {/* <p className="px-2 py-1 w-[100px] rounded-sm text-center text-sm bg-red-600 text-white">
                  Technology
                </p> */}
                <Typography gutterBottom >
                EU’s New Sanctions Aim to Cut Russia Off From World Bank
                </Typography>
                <Typography gutterBottom className="my-3 text-sm">
                By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography className="text-sm">
                It is a long established fact that a reader will be distracted by the readable.....
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
