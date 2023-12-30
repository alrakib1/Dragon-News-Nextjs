import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Image from "next/image";


import TopNewsImg from "@/assets/news1.png";

const Sidebar = () => {
    return (
        <Box className="mt-5">
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


      
        </Box>
    );
};

export default Sidebar;