import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Fade,
  CircularProgress,
} from "@mui/material";
import BlogPreview from "./BlogPreview";
import { getRecentBlogs } from "../../../services/blogService";
import { toast } from "react-toastify";

const HomeBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await getRecentBlogs(3);
        setBlogs(data);
      } catch (error) {
        toast.error("Failed to fetch recent blogs", { position: "top-center" });
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#fff8f2",
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#ef6c00", fontWeight: 700 }}
              >
                Latest News
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("/blog")}
                sx={{
                  color: "#ef6c00",
                  borderColor: "#ef6c00",
                  "&:hover": { borderColor: "#e65100", color: "#e65100" },
                }}
              >
                View All Blogs
              </Button>
            </Box>
            
            {loading ? (
              <Box display="flex" justifyContent="center" py={4}>
                <CircularProgress color="secondary" />
              </Box>
            ) : blogs.length === 0 ? (
              <Typography textAlign="center" py={4}>
                No recent blogs found.
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {blogs.map((blog) => (
                  <Grid item xs={12} sm={6} md={4} key={blog._id}>
                    <BlogPreview blog={blog} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default HomeBlogSection;