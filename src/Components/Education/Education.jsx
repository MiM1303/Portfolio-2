import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const Education = () => {
    return (
        <div id="education">
            <SectionTitle heading={"My Education"}></SectionTitle>
            <div className="flex gap-4">
            <Card className="w-full max-w-[26rem] shadow-lg">
                <CardHeader floated={false} color="blue-gray">
                {/* <img src={image} alt="ui/ux review check" /> */}
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody>
                        <div className="mb-3 flex flex-col justify-between gap-2">

                        <Typography variant="h6" color="blue-gray" className="font-medium">
                            2024-Present
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            Masters in Information and Communication Engineering
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="font-medium">
                            Bangladesh University of Professionals
                        </Typography>
                        </div>
                </CardBody>
            
            </Card>
            <Card className="w-full max-w-[26rem] shadow-lg">
                <CardBody>
                        <div className="mb-3 flex flex-col justify-between gap-2">

                        <Typography variant="h6" color="blue-gray" className="font-medium">
                            2020-2024
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            Bachelors in Information and Communication Engineering
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="font-medium">
                            Bangladesh University of Professionals
                        </Typography>
                        </div>
                </CardBody>
            
            </Card>
            </div>
            
        </div>
    );
};

export default Education;