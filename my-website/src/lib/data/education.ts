import { Education } from "@/types/types";

export default function getEducation(): Education {

  const education: Education = {
    school: "Texas State University",
    degree: "Bachelor of Science in Computer Science; Minor in Applied Mathematics",
    location: "San Marcos, TX",
    date: "Dec 2023",
    details: [
      "Relevant coursework: Data Structures and Algorithms, Object-Oriented Design, Software Engineering, Internet Software Development, Computer System Security, Machine Learning, Data Mining.",
    ],
  };
  return education;
}
