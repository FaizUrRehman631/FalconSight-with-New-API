import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./Navbar";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [filteredArticles, setFilteredArticles] = useState([]); // To manage searched articles

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    try {
      props.setProgress(10);
      let myurl = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}`;
      setLoading(true);
      let data = await fetch(myurl);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles || []);
      setFilteredArticles(parsedData.articles || []); // Initialize filtered articles
      setTotalResults(parsedData.totalResults || 0);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - FalconSight`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    try {
      let myurl = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}`;

      setPage(page + 1);
      let data = await fetch(myurl);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setFilteredArticles(articles.concat(parsedData.articles)); // Update filtered articles
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };
  const handleSearch = (query) => {
    if (typeof query !== "string") {
      console.error("Search query must be a string.");
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filtered = articles.filter( (article) => 
      
        (article?.title && article.title.toLowerCase().includes(lowerCaseQuery)) ||
        (article?.description && article.description.toLowerCase().includes(lowerCaseQuery)) ||
        (article?.source.name && article.source.name.toLowerCase().includes(lowerCaseQuery)) 
      
    );
    setFilteredArticles(filtered);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <h1 className="text-center" style={{ marginTop: "60px" }}>
        Top News - {capitalizeFirstLetter(props.category)} Articles and
        Headlines
      </h1>
      {loading && <Spiner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spiner />}
      >
        <div className="container">
          <div className="row my-3 mx-3">
            {filteredArticles?.map((element, index) => {
              return (
                <div className="col-md-4" key={`${element?.url}-${index}`}>
                  <NewsItem
                    title={element?.title}
                    description={element?.description}
                    imageUrl={element?.image}
                    newsUrl={element?.url}
                    author={element?.author}
                    date={element?.publishedAt}
                    source={element?.source?.name}
                    content={element?.content}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
// News.defaultProps = {
//   country: "us",
//   pageSize: 20,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

export default News;
