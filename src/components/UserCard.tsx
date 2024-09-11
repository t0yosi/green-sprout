import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { MoreHoriz } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl odd:bg-lamaPurple even:bg-lamaYellow p-2 flex-1 min-w-[130px]">
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "white", // Use transparent to let the parent div handle the bg color
          color: "black",
        }}
      >
        <div className="flex justify-between items-center">
          <CardActions>
            <Typography className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
              2024/25
            </Typography>
            <Button size="small">
              <MoreHoriz fontSize="medium" sx={{ color: "black" }} />
            </Button>
          </CardActions>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            1,234
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {type}s
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
