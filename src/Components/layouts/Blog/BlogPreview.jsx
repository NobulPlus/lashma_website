/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { truncateContent } from "../../../util";

const BlogPreview = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "350px" }, // Fixed width for 3 cards, full width on mobile
        maxWidth: "350px", // Ensure cards don't grow too large
        borderRadius: 4,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        border: "1px solid #fed7aa", // Lighter orange border (harmonizes with #F97316)
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
          borderColor: "#F97316", // Primary orange on hover
        },
        margin: "0 auto", // Center cards on mobile
      }}
    >
      <CardMedia
        component="img"
        height="100" // Reduced from 150px to make cards compact
        image={blog.image}
        alt={blog.title}
        sx={{
          objectFit: "cover",
          borderBottom: "2px solid #fed7aa", // Lighter orange border
        }}
      />
      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#F97316", // Primary orange
            fontWeight: 600,
            mb: 1,
            fontSize: "1.1rem", // Slightly smaller for compactness
            lineHeight: 1.4,
          }}
        >
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          color="#1F2A44" // Text color for readability
          sx={{
            mb: 1.5,
            lineHeight: 1.6,
            fontSize: "0.9rem",
            height: "3.2rem", // Reduced height for truncated text
            overflow: "hidden",
          }}
        >
          {truncateContent(blog.content, 40)} {/* Reduced to ~40 words for smaller card */}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: "#F97316", // Primary orange
            borderColor: "#F97316",
            borderRadius: 20,
            textTransform: "none",
            fontWeight: 500,
            px: 2,
            "&:hover": {
              borderColor: "#FBBF24", // Accent amber on hover
              color: "#FBBF24",
              backgroundColor: "rgba(249, 115, 22, 0.04)", // Light orange tint
            },
          }}
          onClick={() => navigate(`/blog/${blog._id}`)}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogPreview;