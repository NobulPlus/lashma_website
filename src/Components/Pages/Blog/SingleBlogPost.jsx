/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Paper,
  Box,
  Fade,
  Button,
} from "@mui/material";
import { getBlogById } from "../../../services/blogService";
import { toast } from "react-toastify";
import { truncateContent } from "../../../util";

const SingleBlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch blog", { position: "top-center" });
        navigate("/blog");
      }
    };
    fetchBlog();
  }, [id, navigate]);

  if (loading) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          Loading blog...
        </Typography>
      </Box>
    );
  }

  if (!blog) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          Blog not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #fff8f2 0%, #ffe0b2 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>{blog.title} | LASHMA</title>
        <meta
          name="description"
          content={truncateContent(blog.content, 25)}
        />
        <link rel="canonical" href={`/blog/${blog._id}`} />
      </Helmet>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 10% 20%, rgba(239, 108, 0, 0.1) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Paper
            elevation={8}
            sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: 4,
              backgroundColor: "#ffffff",
              border: "1px solid #ffe0b2",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              component="img"
              src={blog.image}
              alt={blog.title}
              sx={{
                width: "100%",
                height: { xs: 200, sm: 300 },
                objectFit: "cover",
                borderRadius: 3,
                mb: 4,
                border: "1px solid #ffe0b2",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#ef6c00",
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 3,
                lineHeight: 1.3,
              }}
            >
              {blog.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#424242",
                lineHeight: 1.8,
                mb: 4,
                fontSize: "1rem",
              }}
            >
              {blog.content}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => navigate("/blog")}
              sx={{
                color: "#ef6c00",
                borderColor: "#ef6c00",
                borderRadius: 20,
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#e65100",
                  color: "#e65100",
                  backgroundColor: "rgba(239, 108, 0, 0.04)",
                },
              }}
            >
              Back to Blog
            </Button>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default SingleBlogPost;