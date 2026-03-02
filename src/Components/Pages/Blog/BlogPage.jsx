import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  Fade,
  Pagination,
  Skeleton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import BlogPreview from "../../layouts/Blog/BlogPreview";
import { getAllBlogs, getRecentBlogs } from "../../../services/blogService";
import { toast } from "react-toastify";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const blogsPerPage = 9;
  const navigate = useNavigate();

  // Debug viewport size
  useEffect(() => {
    const handleResize = () => {
      console.log("Viewport width:", window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await getAllBlogs();
        console.log("Fetched blogs:", blogsData);
        setBlogs(blogsData);

        const recentData = await getRecentBlogs(3);
        console.log("Fetched recent blogs:", recentData);
        setRecentBlogs(recentData);

        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch blogs", { position: "top-center" });
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginatedBlogs = blogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  );

  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #fff8f2 0%, #ffe0b2 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>Our Blog | LASHMA</title>
        <meta
          name="description"
          content="Read the latest news and updates from Lagos State Health Management Agency."
        />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 10% 20%, rgba(239, 108, 0, 0.2) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in={!loading} timeout={1200}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#ef6c00",
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                letterSpacing: "-1px",
                textAlign: "center",
                mb: 8,
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              LASHMA Blog
            </Typography>
            <Grid container spacing={4}>
              {/* Main Content: Blog Posts (Right on sm and above, 3 columns on md) */}
              <Grid
                item
                xs={12}
                sm={8}
                sx={{
                  order: { xs: 2, sm: 2 },
                  pl: { sm: 2 },
                }}
              >
                {loading ? (
                  <Grid container spacing={3}>
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Skeleton
                          variant="rectangular"
                          height={150}
                          sx={{ borderRadius: 2 }}
                        />
                        <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
                        <Skeleton variant="text" width="60%" />
                        <Skeleton variant="text" width="40%" />
                      </Grid>
                    ))}
                  </Grid>
                ) : blogs.length === 0 ? (
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    No blogs available
                  </Typography>
                ) : (
                  <>
                    <Grid container spacing={3}>
                      {paginatedBlogs.map((blog, index) => (
                        <Grid item xs={12} sm={6} md={4} key={blog._id}>
                          <Fade in={!loading} timeout={1200 + index * 200}>
                            <div>
                              <BlogPreview blog={blog} />
                            </div>
                          </Fade>
                        </Grid>
                      ))}
                    </Grid>
                    {blogs.length > blogsPerPage && (
                      <Box
                        sx={{
                          mt: 6,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Pagination
                          count={Math.ceil(blogs.length / blogsPerPage)}
                          page={page}
                          onChange={handlePageChange}
                          color="primary"
                          sx={{
                            "& .MuiPaginationItem-root": {
                              color: "#ef6c00",
                              fontWeight: 600,
                              "&.Mui-selected": {
                                backgroundColor: "#ef6c00",
                                color: "#fff",
                                boxShadow: "0 2px 8px rgba(239, 108, 0, 0.3)",
                              },
                              "&:hover": {
                                backgroundColor: "rgba(239, 108, 0, 0.1)",
                              },
                            },
                          }}
                        />
                      </Box>
                    )}
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default BlogPage;