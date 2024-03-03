import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = [
  {
    id: "2",
    title: "Another Project",
    image: "https://github.com/shadcn.png",
    description: "Description of another project",
    liveLink: "https://www.example.com",
    githubRepo: "https://github.com/exampleuser/another-repo",
  },
  {
    id: "2",
    title: "Another Project",
    image: "https://github.com/shadcn.png",
    description: "Description of another project",
    liveLink: "https://www.example.com",
    githubRepo: "https://github.com/exampleuser/another-repo",
  },
];

function CardGrid() {
  return (
    <div className="grid grid-cols-4 gap-8 mr-4 ml-4 mt-4">
      {data.map((item) => (
        <Card key={item.id} className="w-[350px]">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              <img src={item.image} alt="" width="100%" height="200" />
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Avatar>
              <AvatarImage src={item.image} />
              <AvatarFallback>{item.title.charAt(0)}</AvatarFallback>
            </Avatar>
            <button>Deploy</button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardGrid;
