/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Typography, Grid, Box, Button, Card, CardContent } from "@mui/material";
import { Fade } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FeedbackIcon from "@mui/icons-material/Feedback";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GavelIcon from "@mui/icons-material/Gavel";

const Quality = () => {
    const responsibilities = [
        {
          title: "Pre-empanelment Assessment",
          description: "Ensuring ILERA EKO providers meet LASHMA’s quality standards.",
          icon: <HealthAndSafetyIcon sx={{ fontSize: 40, color: "#ef6c00" }} />,
        },
        {
          title: "Clinical Audits",
          description: "Regular reviews of service delivery, infrastructure, and outcomes.",
          icon: <AssessmentIcon sx={{ fontSize: 40, color: "#ef6c00" }} />,
        },
        {
          title: "Customer Experience & Feedback",
          description: "Analyzing enrollee feedback to enhance services and trust.",
          icon: <FeedbackIcon sx={{ fontSize: 40, color: "#ef6c00" }} />,
        },
        {
          title: "Quality Improvement Plan (QIP)",
          description: "Targeted interventions for excellence and responsiveness.",
          icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#ef6c00" }} />,
        },
        {
          title: "Service Charter Implementation",
          description: "Ensuring transparency and patient-centered care.",
          icon: <GavelIcon sx={{ fontSize: 40, color: "#ef6c00" }} />,
        },
      ];
  return (
    <Box
      sx={{
        py: 8,
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1200}>
          <Box>
            {/* Header */}
            {/* <Typography
              variant="h3"
              sx={{
                color: "#ef6c00",
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                letterSpacing: "-1px",
                textAlign: "center",
                mb: 2,
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Quality Unit
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                textAlign: "center",
                mb: 6,
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Our Quality Team ensures high standards of healthcare delivery across accredited facilities through monitoring, data analysis, and stakeholder engagement.
            </Typography> */}

            {/* Mission */}
            {/* <Grid container spacing={4} sx={{ mb: 6 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#ef6c00",
                      fontWeight: 700,
                      fontSize: { xs: "1.8rem", md: "2rem" },
                      mb: 2,
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#333", lineHeight: 1.8, fontSize: "1.1rem" }}
                  >
                    To deliver safe, effective, and patient-centered care by fostering continuous quality improvement. Through rigorous monitoring, evidence-based practices, and collaboration, we enhance healthcare outcomes, promote patient safety, and uphold the highest standards.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/images/quality-unit.jpg"
                  alt="Quality Unit Team"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Grid>
            </Grid> */}

            {/* Core Responsibilities */}
            <Typography
              variant="h4"
              sx={{
                color: "#ef6c00",
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2rem" },
                textAlign: "center",
                mb: 4,
              }}
            >
              Core Responsibilities
            </Typography>
            <Grid container spacing={3}>
              {responsibilities.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Fade in timeout={1200 + index * 200}>
                    <Card
                      sx={{
                        borderRadius: 2,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e0e0e0",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                          borderColor: "#ef6c00",
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Box sx={{ mb: 2 }}>{item.icon}</Box>
                        <Typography
                          variant="h6"
                          sx={{ color: "#333", fontWeight: 600, mb: 1 }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#666", lineHeight: 1.6 }}
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>

            {/* Commitment */}
            {/* <Box
              sx={{
                mt: 8,
                p: 4,
                background: "rgba(239, 108, 0, 0.05)",
                borderRadius: 2,
                textAlign: "center",
                border: "1px solid #ef6c00",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#ef6c00",
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  mb: 2,
                }}
              >
                Our Commitment
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  mb: 3,
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                We are committed to an accessible, equitable, and high-quality health system in Lagos State. The Quality Unit ensures enrollees experience the best care under the Lagos State Health Scheme (LSHS).
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#ef6c00",
                  fontWeight: 600,
                  mb: 3,
                  fontStyle: "italic",
                }}
              >
                Your health, our priority — driven by quality, backed by trust.
              </Typography>
              <Button
                variant="contained"
                href="/ilera-eko"
                sx={{
                  backgroundColor: "#ef6c00",
                  color: "#fff",
                  borderRadius: 20,
                  px: 4,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#e65100",
                    boxShadow: "0 4px 12px rgba(230, 81, 0, 0.3)",
                  },
                }}
              >
                Learn More About ILERA EKO
              </Button>
            </Box> */}
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Quality
