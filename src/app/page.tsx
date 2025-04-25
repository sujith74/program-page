// pages/improving-health.js
'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Divider,
  Paper,
  IconButton
} from '@mui/material';
import { 
  LocalHospital, 
  Fastfood, 
  School, 
  MedicalServices, 
  Psychology, 
  DirectionsBus, 
  WaterDrop,
  ChevronRight,
  ArrowForward,
  Campaign
} from '@mui/icons-material';
// import Grid from '@mui/material/Grid';


// Featured In logos
// const featuredIn = [
//   { name: 'Channel NewsAsia', logo: 'https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_1280.jpg' },
//   { name: 'ST', logo: 'https://cdn.pixabay.com/photo/2018/01/29/22/58/cube-3117511_1280.jpg' },
//   { name: 'Asia One', logo: 'https://cdn.pixabay.com/photo/2018/01/25/16/18/pinterest-3d-3106488_1280.jpg' },
//   { name: 'Today', logo: 'https://cdn.pixabay.com/photo/2018/01/29/15/20/real-estate-3116341_1280.jpg' },
// ];

// Partners data
const partners = [
  { name: 'Stonehill', logo: 'https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_1280.jpg' },
  { name: 'Partner 2', logo: 'https://cdn.pixabay.com/photo/2018/01/29/22/58/cube-3117511_1280.jpg' },
  { name: 'Shiram', logo: 'https://cdn.pixabay.com/photo/2018/01/25/16/18/pinterest-3d-3106488_1280.jpg' },
  { name: 'Partner 4', logo: 'https://cdn.pixabay.com/photo/2018/01/29/15/20/real-estate-3116341_1280.jpg' },
];

// Health initiatives with icons
const healthInitiatives = [
  { 
    title: 'Vaccination Drives', 
    description: 'We conduct regular vaccination drives to shield children from life-threatening illnesses, protecting their health and well-being. Over the past years, we have provided lifesaving vaccines to over 44,000 underprivileged children across various regions in India.',
    icon: <LocalHospital className="text-blue-600" fontSize="large" />
  },
  { 
    title: 'Food Distribution', 
    description: 'We provide balanced and nutritious meals to over 30,000 families and collaborate with schools, orphanages and other NGOs to deliver the meals to the children.',
    icon: <Fastfood className="text-orange-500" fontSize="large" />
  },
  { 
    title: 'Health Education', 
    description: 'We regularly organize workshops to raise awareness about existing and emerging diseases, preventive measures and promote hygienic practices. This empowers parents, teachers, caregivers, and children with the essential knowledge to keep themselves healthy.',
    icon: <School className="text-green-600" fontSize="large" />
  },
  { 
    title: 'Specialized Care', 
    description: 'We work closely with specialized doctors and caregivers to provide tailored care and treatment to children with specific health conditions.',
    icon: <MedicalServices className="text-red-600" fontSize="large" />
  },
  { 
    title: 'Mental Health Initiatives', 
    description: 'We offer free counseling services, and conduct regular mental health camps to spread awareness about mental health among the community.',
    icon: <Psychology className="text-purple-600" fontSize="large" />
  },
  { 
    title: 'Mobile Health Clinics', 
    description: 'Our mobile health clinics reach even the most remote and underserved areas, providing regular health check-ups and treatments to children in need. We have provided essential health check-ups to children in need across more than 200 remote and underserved areas in India.',
    icon: <DirectionsBus className="text-indigo-600" fontSize="large" />
  },
  { 
    title: 'Clean Water and Sanitation', 
    description: 'Clean drinking water and sanitation facilities are fundamental rights. Therefore, we provide access to clean drinking water and sanitation facilities to remote areas and families in need, safeguarding their health and hygiene.',
    icon: <WaterDrop className="text-cyan-600" fontSize="large" />
  }
];

// Testimonial
const testimonial = {
  quote: "Joyful Minds is doing a fantastic job in the field of education, our school children get to know so many things during this program",
  author: "Aditya Birla",
  designation: "Principal, Sun Elementary School",
  avatar: "/images/testimonials/aditya.jpg"
};

export default function ImprovingHealth() {
  return (
    <>
      <Head>
        <title>Improving Health - Joyful Minds</title>
        <meta name="description" content="Learn about our health initiatives for children" />
      </Head>

      {/* Hero Banner Section */}
      <Box
  sx={{
    position: "relative",
    backgroundImage: `url("https://cdn.pixabay.com/photo/2018/10/02/12/50/do-not-use-this-image-3718788_1280.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  }}
>
  {/* Optional dark overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  />

  <Container
    maxWidth="xl"
    className="py-24 relative z-10"
  >
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={4}
      gap={4}
    >
      {/* LEFT CONTENT */}
      <Box flex={1} display="flex" justifyContent="center">
        <Paper
          elevation={0}
          className="bg-gray-900 bg-opacity-70 p-8 rounded-lg max-w-md"
        >
          <Typography
            variant="h3"
            component="h1"
            className="text-gray-800 font-bold !mb-3"
          >
            Improving Health
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-gray-600 !mb-6"
          >
            Creating a healthier future for the young members of our society
          </Typography>
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
            startIcon={<Campaign />}
          >
            CREATE CAMPAIGN
          </Button>
        </Paper>
      </Box>
      </Box>
  </Container>
</Box>


      {/* Main Content Section */}
      <Container maxWidth="lg" className="py-16">
        <Box className="mb-12">
          <Typography variant="h4" component="h2" className="text-gray-800 font-bold mb-6 text-center">
            Improving Health
          </Typography>
          
          <Paper elevation={0} className="p-6 bg-blue-50 rounded-lg mb-8">
            <Typography className="text-gray-700 mb-4">
              At Joyful Minds, we are highly dedicated to improving the health and well-being of children. We firmly believe that every child deserves a healthy and happy life. Healthy children increase their chances to learn, grow and contribute meaningfully to society. Unfortunately, there are many children who lack basic housing, sanitation facilities, clean and safe drinking water and even regular meals because of poverty.
            </Typography>
            <Typography className="text-gray-700">
              Hence, we have taken several initiatives and measures to create a healthier future for the young members of our society.
            </Typography>
          </Paper>
          
          <Typography variant="h5" component="h3" className="text-gray-800 font-semibold mb-6">
            Our initiatives are:
          </Typography>
          
          <Box display="flex" flexDirection="column" gap={4}>
      {healthInitiatives.map((initiative, index) => (
        <Card
          key={index}
          elevation={2}
          className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              gap={3}
            >
              {/* Icon Box */}
              <Box className="p-3 bg-blue-50 rounded-full flex justify-center items-center">
                {initiative.icon}
              </Box>

              {/* Text Content */}
              <Box>
                <Typography
                  variant="h6"
                  component="h4"
                  className="font-bold text-gray-800 mb-2"
                >
                  {initiative.title}
                </Typography>
                <Typography className="text-gray-600">
                  {initiative.description}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
        </Box>
        
        <Box className="mb-16">
          <Paper elevation={0} className="p-6 bg-blue-50 rounded-lg border border-blue-100">
            <Typography className="text-gray-700 mb-4">
              We invite you to join us in this noble cause and contribute to the betterment of children&apos;s health. You can support us by donating, volunteering, and spreading awareness about our various initiatives. If you represent an organization that shares our concern for children&apos;s health, then let&apos;s collaborate and multiply our impact.
            </Typography>
            <Typography variant="h6" className="text-blue-800 font-medium">
              Together, we can create a world where every child is happy and healthy!
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Campaign Section */}
      <Box className="bg-gray-50 py-16">
        <Container maxWidth="lg">
          <Box className="text-center mb-12">
            <Typography variant="h4" component="h2" className="text-gray-800 font-bold mb-2">
              Campaigns in Focus
            </Typography>
            <Divider className="w-24 mx-auto border-2 border-blue-500 mb-4" />
          </Box>
          
          <Box className="text-center py-10">
            <Box className="mb-6 flex justify-center">
              <Image
                src="https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg"
                alt="Campaign"
                width={120}
                height={120}
              />
            </Box>
            <Typography variant="h6" className="text-gray-700 mb-4">
              No campaigns under this organization
            </Typography>
            <Typography className="text-gray-500 mb-6">
              Create a campaign in just 3 steps
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              className="bg-green-600 hover:bg-green-700 rounded-full px-6 py-2 text-white"
            >
              CREATE A CAMPAIGN
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured In Section */}
      <Container maxWidth="lg" className="py-16">
        <Box className="text-center mb-10">
          <Typography variant="h5" component="h3" className="text-gray-800 font-bold mb-2">
            As Featured In
          </Typography>
          <Divider className="w-16 mx-auto border-2 border-blue-500 mb-10" />
        </Box>
        
        
      </Container>

      {/* Testimonials Section */}
      <Box className="bg-gray-50 py-16">
        <Container maxWidth="lg">
          <Box className="text-center mb-10">
            <Typography variant="h5" component="h3" className="text-gray-800 font-bold mb-2">
              What the world thinks about us
            </Typography>
            <Divider className="w-16 mx-auto border-2 border-blue-500 mb-10" />
          </Box>
          
          <Box className="relative max-w-3xl mx-auto">
            <Card elevation={2} className="p-6 rounded-lg relative">
              <Box className="absolute -top-5 left-10">
                <Typography className="text-6xl text-blue-500">&quot;</Typography>
              </Box>
              <CardContent className="pt-6">
                <Typography variant="body1" className="text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </Typography>
                <Box className="flex items-center">
                  <Box className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" className="font-medium text-gray-800">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" className="text-gray-500">
                      {testimonial.designation}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <IconButton 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md"
              size="small"
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Partners Section */}
      <Container maxWidth="lg" className="py-16">
        <Box className="text-center mb-10">
          <Typography variant="h5" component="h3" className="text-gray-800 font-bold mb-2">
            Our Partners
          </Typography>
          <Divider className="w-16 mx-auto border-2 border-blue-500 mb-10" />
        </Box>
        
        <Box className="flex flex-wrap justify-center items-center gap-6">
      {partners.map((partner, index) => (
        <Box
          key={index}
          className="w-1/2 sm:w-1/4 text-center"
        >
          <Box className="relative h-24 mx-auto hover:shadow-lg transition-shadow duration-300 p-3 rounded-lg">
            <Image
              src={partner.logo}
              alt={partner.name}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      ))}
    </Box>
      </Container>

      {/* Call to Action Section */}
      <Box className="bg-blue-600 py-12">
      <Container maxWidth="lg">
        <Box className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text Content */}
          <Box className="text-center md:text-left md:w-2/3">
            <Typography
              variant="h4"
              component="h4"
              className="text-white font-bold mb-2"
            >
              Join our mission to improve children&apos;s health
            </Typography>
            <Typography className="text-white opacity-90">
              Your support can make a significant difference in the lives of many children.
            </Typography>
          </Box>

          {/* Right Button */}
          <Box className="text-center md:text-right md:w-1/3">
            <Button
              variant="contained"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium"
              endIcon={<ArrowForward />}
            >
              Create a Campaign
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
    </>
  );
}